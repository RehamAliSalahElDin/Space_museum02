/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Reusable Interactive 360° 3D Artifact Viewer Controller (Three.js + GLTFLoader + OrbitControls)
 *
 * Implements Master Prompt Section 6 & Artifact 3D Specification Addenda:
 * - Lazy-loads official NASA .glb models only when the exhibit is opened
 * - Full 360° orbit, zoom, pan, Reset View, and 6 camera presets (Front, Rear, Left, Right, Top, Underside)
 * - 3D-anchored component hotspot pins projected to screen space + numbered component legend below the viewer
 * - Mandatory Layout Rule: Single persistent component explanation panel positioned DIRECTLY BELOW the 3D viewer
 *   (never beside it in a narrow split column, and never in a pop-up modal)
 * - Artifact-specific interactions:
 *   * Ingenuity: Real counter-rotating coaxial blade animation on `rotors_01` and `rotors_02` GLB nodes
 *   * InSight: 5-configuration GLB switcher (Arm Deployed, Panels Deployed, Panels Stowed, Cruise Stowed, Surface Deployed)
 *   * Falcon / MER / Viking: Stage & identity focus switchers
 */

(function () {
  "use strict";

  const instances = new Map();

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function destroyViewer(containerId) {
    const inst = instances.get(containerId);
    if (!inst) return;
    inst.disposed = true;
    if (inst.animId) cancelAnimationFrame(inst.animId);
    if (inst.resizeObserver) inst.resizeObserver.disconnect();
    if (inst.renderer) {
      inst.renderer.dispose();
    }
    instances.delete(containerId);
  }

  function mountViewer(containerId, spec) {
    destroyViewer(containerId);
    const root = document.getElementById(containerId);
    if (!root || !spec || !spec.available) return;

    const hotspots = spec.hotspots || [];
    let selectedHotspot = hotspots[0] || null;
    let activeStageMode = (spec.stageModes && spec.stageModes[0]?.id) || "full";
    let activeConfigPath = spec.glbPath;
    let rotorSpinActive = Boolean(spec.enableRotorSpin);
    let autoTurntable = false;

    // Build vertical below-viewer layout:
    // 1. Provenance Banner & Toolbar (Model/Stage Switchers + Camera Presets + Rotor Spin)
    // 2. Full-Width 3D Canvas Stage + 3D Hotspot Overlay Pins
    // 3. Numbered Component Selector Legend Bar
    // 4. Single Persistent Explanation Panel Directly BELOW the Viewer
    const configSwitcherHtml =
      spec.configVariants && spec.configVariants.length > 0
        ? `
        <div class="viewer3d-control-group">
          <span class="viewer3d-control-label">Configuration State:</span>
          <div class="viewer3d-btn-row" data-role="config-switcher">
            ${spec.configVariants
              .map(
                (cfg, idx) => `
              <button type="button" class="diagram-tab-btn ${idx === 0 ? "is-active" : ""}" data-glb-config="${esc(cfg.glbPath)}">
                ${esc(cfg.label)}
              </button>`
              )
              .join("")}
          </div>
        </div>`
        : "";

    const stageModesHtml =
      spec.stageModes && spec.stageModes.length > 1
        ? `
        <div class="viewer3d-control-group">
          <span class="viewer3d-control-label">Focus Filter:</span>
          <div class="viewer3d-btn-row" data-role="stage-switcher">
            ${spec.stageModes
              .map(
                (sm, idx) => `
              <button type="button" class="diagram-tab-btn ${idx === 0 ? "is-active" : ""}" data-stage-mode="${esc(sm.id)}">
                ${esc(sm.label)}
              </button>`
              )
              .join("")}
          </div>
        </div>`
        : "";

    const rotorSpinBtnHtml = spec.enableRotorSpin
      ? `
        <button type="button" class="diagram-tab-btn is-active" data-action="toggle-rotor-spin">
          ⟳ Coaxial Rotors: Spinning (Counter-Rotating)
        </button>`
      : "";

    root.innerHTML = `
      <div class="viewer3d-wrapper">
        <!-- Provenance Header -->
        <div class="model-policy-banner" style="margin-bottom: 1rem;">
          <div style="max-width: 900px;">
            <span class="media-type-badge type-orbital" style="margin-bottom: 0.4rem;">${esc(spec.provenanceBadge)}</span>
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.3rem;">${esc(spec.modelTitle)}</h3>
            <p style="font-size: 0.86rem; color: var(--text-secondary);">${esc(spec.provenanceNote)}</p>
          </div>
          <a href="${esc(spec.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="btn-museum-secondary">
            <span>Official NASA 3D Source ↗</span>
          </a>
        </div>

        <!-- Top Controls Toolbar -->
        <div class="viewer3d-toolbar">
          ${configSwitcherHtml}
          ${stageModesHtml}
          <div class="viewer3d-control-group">
            <span class="viewer3d-control-label">Camera Presets (360°):</span>
            <div class="viewer3d-btn-row">
              <button type="button" class="diagram-tab-btn is-active" data-cam-preset="iso">Reset 3/4 View</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="front">Front</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="rear">Rear</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="left">Left</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="right">Right</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="top">Top</button>
              <button type="button" class="diagram-tab-btn" data-cam-preset="bottom">Underside</button>
              <button type="button" class="diagram-tab-btn" data-action="toggle-turntable">Auto-Orbit: Off</button>
              ${rotorSpinBtnHtml}
            </div>
          </div>
        </div>

        <!-- 1. Full-Width 3D Canvas Stage -->
        <div class="viewer3d-canvas-stage" data-role="canvas-stage">
          <div class="viewer3d-loading-overlay" data-role="loading-overlay">
            <div class="viewer3d-spinner"></div>
            <p data-role="loading-text">Loading Official NASA 3D Model (.glb)…</p>
          </div>
          <div class="viewer3d-hotspots-layer" data-role="hotspots-layer"></div>
          <div class="viewer3d-Interaction-hint">
            <span>Drag to Orbit 360° • Scroll/Pinch to Zoom • Right-Drag to Pan • Click Any Numbered Callout</span>
          </div>
        </div>

        <!-- 2. Numbered Component Selector Bar Directly Below Viewer -->
        <div class="viewer3d-legend-bar" data-role="legend-bar" role="tablist" aria-label="3D Component Callouts"></div>

        <!-- 3. Single Persistent Component Explanation Panel Directly BELOW Viewer -->
        <div class="viewer3d-explanation-below" data-role="explanation-panel" aria-live="polite"></div>
      </div>
    `;

    const canvasStage = root.querySelector('[data-role="canvas-stage"]');
    const loadingOverlay = root.querySelector('[data-role="loading-overlay"]');
    const loadingText = root.querySelector('[data-role="loading-text"]');
    const hotspotsLayer = root.querySelector('[data-role="hotspots-layer"]');
    const legendBar = root.querySelector('[data-role="legend-bar"]');
    const explanationPanel = root.querySelector('[data-role="explanation-panel"]');

    function renderHotspotControlsAndExplanation() {
      const visibleHotspots = hotspots.filter(
        (h) => activeStageMode === "full" || !h.stage || h.stage === "full" || h.stage === activeStageMode
      );
      if (
        visibleHotspots.length > 0 &&
        (!selectedHotspot || !visibleHotspots.some((h) => h.id === selectedHotspot.id))
      ) {
        selectedHotspot = visibleHotspots[0];
      }

      // Render 2D projected pins on canvas
      hotspotsLayer.innerHTML = visibleHotspots
        .map(
          (h) => `
          <button type="button" class="viewer3d-pin ${selectedHotspot && h.id === selectedHotspot.id ? "is-selected" : ""}" data-hs-id="${esc(h.id)}" title="${esc(h.name)}">
            <span>${esc(h.code)}</span>
          </button>`
        )
        .join("");

      // Render numbered legend bar below viewer
      legendBar.innerHTML = visibleHotspots
        .map(
          (h) => `
          <button type="button" class="viewer3d-legend-pill ${selectedHotspot && h.id === selectedHotspot.id ? "is-active" : ""}" data-hs-id="${esc(h.id)}" role="tab" aria-selected="${Boolean(selectedHotspot && h.id === selectedHotspot.id)}">
            <span class="legend-pill-num">${esc(h.code)}</span>
            <span class="legend-pill-text">${esc(h.name)}</span>
          </button>`
        )
        .join("");

      // Render single persistent explanation panel directly below the legend bar
      if (selectedHotspot) {
        explanationPanel.innerHTML = `
          <div class="below-explanation-card">
            <div class="below-explanation-header">
              <div>
                <span class="below-callout-badge">COMPONENT CALLOUT ${esc(selectedHotspot.code)}</span>
                <span class="below-category-label">${esc(selectedHotspot.category)}</span>
              </div>
              <span class="below-source-tag">Source: ${esc(selectedHotspot.sourceNote)}</span>
            </div>
            <h4 class="below-component-title">${esc(selectedHotspot.name)}</h4>
            <div class="below-explanation-grid">
              <div class="below-detail-block">
                <span class="below-detail-label">What It Is</span>
                <p>${esc(selectedHotspot.whatItIs)}</p>
              </div>
              <div class="below-detail-block">
                <span class="below-detail-label">How It Worked</span>
                <p>${esc(selectedHotspot.howItWorked)}</p>
              </div>
              <div class="below-detail-block">
                <span class="below-detail-label">Mission Role &amp; Significance</span>
                <p>${esc(selectedHotspot.missionRole)}</p>
              </div>
            </div>
          </div>
        `;
      }
    }

    renderHotspotControlsAndExplanation();

    // Check if Three.js is available
    if (!window.THREE || !window.THREE.GLTFLoader || !window.THREE.OrbitControls) {
      if (loadingText) {
        loadingText.textContent = "3D Engine Unavailable — Inspecting Component Callouts Below.";
      }
      return;
    }

    const THREE = window.THREE;
    const width = canvasStage.clientWidth || 900;
    const height = canvasStage.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.05, 200);
    camera.position.set(2.8, 1.9, 3.2);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (err) {
      if (loadingText) {
        loadingText.textContent = "WebGL Context Unavailable — Component Callouts Active Below.";
      }
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    canvasStage.insertBefore(renderer.domElement, canvasStage.firstChild);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 0.8;
    controls.maxDistance = 14;
    controls.target.set(0, 0.35, 0);

    // Balanced Museum Studio Lighting (Hemisphere + Key + Rim + Fill)
    const hemiLight = new THREE.HemisphereLight(0xf8fafc, 0x334155, 1.35);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.85);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.95);
    fillLight.position.set(-6, 4, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xfdba74, 0.75);
    rimLight.position.set(0, -5, -6);
    scene.add(rimLight);

    // Subtle circular museum pedestal grid under the spacecraft
    const gridHelper = new THREE.PolarGridHelper(2.2, 16, 6, 64, 0x38bdf8, 0x1e293b);
    gridHelper.position.y = -0.95;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    const modelRoot = new THREE.Group();
    scene.add(modelRoot);

    let rotorNodeUpper = null;
    let rotorNodeLower = null;
    let modelScale = 1;
    let modelOffset = new THREE.Vector3();

    const inst = {
      disposed: false,
      renderer,
      scene,
      camera,
      controls,
      animId: null,
      resizeObserver: null
    };
    instances.set(containerId, inst);

    function loadGlbModel(glbUrl) {
      if (loadingOverlay) {
        loadingOverlay.classList.remove("is-hidden");
        if (loadingText) loadingText.textContent = "Loading Official NASA 3D Model…";
      }

      // Clear previous model children
      while (modelRoot.children.length > 0) {
        modelRoot.remove(modelRoot.children[0]);
      }
      rotorNodeUpper = null;
      rotorNodeLower = null;

      const loader = new THREE.GLTFLoader();
      const encodedUrl = encodeURI(glbUrl);

      loader.load(
        encodedUrl,
        (gltf) => {
          if (inst.disposed) return;
          const obj = gltf.scene;

          // Compute bounding box and normalize to fit nicely in a 2.8-unit sphere
          const box = new THREE.Box3().setFromObject(obj);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          box.getSize(size);
          box.getCenter(center);

          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          modelScale = 2.6 / maxDim;
          obj.scale.setScalar(modelScale);

          // Recompute centered position
          const scaledBox = new THREE.Box3().setFromObject(obj);
          scaledBox.getCenter(modelOffset);
          obj.position.sub(modelOffset);
          obj.position.y += 0.25;

          // Position pedestal grid right at the bottom of the landing legs/wheels
          const finalBox = new THREE.Box3().setFromObject(obj);
          gridHelper.position.y = finalBox.min.y - 0.02;

          // Detect Ingenuity's named coaxial rotor nodes (`rotors_01` and `rotors_02`)
          obj.traverse((child) => {
            if (child.name === "rotors_01") rotorNodeUpper = child;
            if (child.name === "rotors_02") rotorNodeLower = child;
            if (child.isMesh && child.material) {
              child.material.side = THREE.DoubleSide;
            }
          });

          modelRoot.add(obj);
          controls.target.set(0, 0.25, 0);
          controls.update();

          if (loadingOverlay) {
            loadingOverlay.classList.add("is-hidden");
          }
        },
        (xhr) => {
          if (xhr.total && loadingText) {
            const pct = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
            loadingText.textContent = `Loading Official NASA 3D Model (${pct}%)…`;
          }
        },
        (err) => {
          console.warn("GLB Load Error:", err);
          if (loadingText) {
            loadingText.textContent = "Unable to load 3D mesh file — use component legend below.";
          }
        }
      );
    }

    loadGlbModel(activeConfigPath);

    // Camera preset transitions
    function setCameraPreset(preset) {
      const dist = 3.6;
      const targetY = 0.25;
      controls.target.set(0, targetY, 0);
      switch (preset) {
        case "front":
          camera.position.set(0, targetY + 0.3, dist);
          break;
        case "rear":
          camera.position.set(0, targetY + 0.3, -dist);
          break;
        case "left":
          camera.position.set(-dist, targetY + 0.3, 0);
          break;
        case "right":
          camera.position.set(dist, targetY + 0.3, 0);
          break;
        case "top":
          camera.position.set(0, dist + 0.6, 0.01);
          break;
        case "bottom":
          camera.position.set(0, -dist + 0.2, 0.4);
          break;
        case "iso":
        default:
          camera.position.set(2.6, 1.75, 2.9);
          break;
      }
      controls.update();
    }

    // Project 3D hotspot coordinates onto the 2D overlay layer every frame
    const tempVec = new THREE.Vector3();
    function updateHotspotScreenPositions() {
      const w = canvasStage.clientWidth || width;
      const h = canvasStage.clientHeight || height;
      const pinEls = hotspotsLayer.querySelectorAll(".viewer3d-pin");
      pinEls.forEach((btn) => {
        const hsId = btn.getAttribute("data-hs-id");
        const hs = hotspots.find((item) => item.id === hsId);
        if (!hs || !hs.position) return;

        tempVec.set(hs.position[0], hs.position[1], hs.position[2]);
        tempVec.project(camera);

        // Hide pin if behind camera
        if (tempVec.z > 1) {
          btn.style.display = "none";
          return;
        }
        const x = (tempVec.x * 0.5 + 0.5) * w;
        const y = (-tempVec.y * 0.5 + 0.5) * h;
        btn.style.display = "inline-flex";
        btn.style.left = `${Math.max(24, Math.min(w - 24, x))}px`;
        btn.style.top = `${Math.max(24, Math.min(h - 24, y))}px`;
      });
    }

    // Animation loop
    function animate() {
      if (inst.disposed) return;
      inst.animId = requestAnimationFrame(animate);

      if (autoTurntable) {
        modelRoot.rotation.y += 0.0035;
      }

      // Counter-rotating coaxial rotors on Ingenuity (`rotors_01` and `rotors_02`)
      if (rotorSpinActive) {
        if (rotorNodeUpper) rotorNodeUpper.rotation.y += 0.22;
        if (rotorNodeLower) rotorNodeLower.rotation.y -= 0.22;
      }

      controls.update();
      renderer.render(scene, camera);
      updateHotspotScreenPositions();
    }
    animate();

    // Responsive resize observer
    if (window.ResizeObserver) {
      inst.resizeObserver = new ResizeObserver(() => {
        if (inst.disposed) return;
        const nw = canvasStage.clientWidth;
        const nh = canvasStage.clientHeight;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      });
      inst.resizeObserver.observe(canvasStage);
    }

    // Event delegation inside this 3D viewer root
    root.addEventListener("click", (e) => {
      // 1. Hotspot pin or legend pill click
      const hsTrigger = e.target.closest("[data-hs-id]");
      if (hsTrigger) {
        const hsId = hsTrigger.getAttribute("data-hs-id");
        const found = hotspots.find((h) => h.id === hsId);
        if (found) {
          selectedHotspot = found;
          renderHotspotControlsAndExplanation();
          // Smoothly orient camera toward the selected hotspot side
          if (found.position) {
            const px = found.position[0];
            const py = found.position[1];
            const pz = found.position[2];
            const len = Math.hypot(px, pz) || 1;
            camera.position.set((px / len) * 2.5 + 0.6, Math.max(0.6, py + 0.8), (pz / len) * 2.5 + 0.6);
            controls.target.set(px * 0.25, py * 0.4, pz * 0.25);
            controls.update();
          }
        }
        return;
      }

      // 2. Camera preset button
      const camBtn = e.target.closest("[data-cam-preset]");
      if (camBtn) {
        const preset = camBtn.getAttribute("data-cam-preset");
        root.querySelectorAll("[data-cam-preset]").forEach((b) => b.classList.remove("is-active"));
        camBtn.classList.add("is-active");
        setCameraPreset(preset);
        return;
      }

      // 3. Stage mode filter
      const stageBtn = e.target.closest("[data-stage-mode]");
      if (stageBtn) {
        activeStageMode = stageBtn.getAttribute("data-stage-mode");
        root.querySelectorAll("[data-stage-mode]").forEach((b) => b.classList.remove("is-active"));
        stageBtn.classList.add("is-active");
        renderHotspotControlsAndExplanation();
        if (activeStageMode === "ascent") {
          controls.target.set(0, 0.85, 0);
        } else if (activeStageMode === "descent") {
          controls.target.set(0, -0.35, 0);
        } else {
          controls.target.set(0, 0.25, 0);
        }
        controls.update();
        return;
      }

      // 4. Configuration GLB switcher (InSight 5 states)
      const cfgBtn = e.target.closest("[data-glb-config]");
      if (cfgBtn) {
        const newPath = cfgBtn.getAttribute("data-glb-config");
        if (newPath && newPath !== activeConfigPath) {
          activeConfigPath = newPath;
          root.querySelectorAll("[data-glb-config]").forEach((b) => b.classList.remove("is-active"));
          cfgBtn.classList.add("is-active");
          loadGlbModel(activeConfigPath);
        }
        return;
      }

      // 5. Toggle Coaxial Rotor Spin (Ingenuity)
      const spinBtn = e.target.closest('[data-action="toggle-rotor-spin"]');
      if (spinBtn) {
        rotorSpinActive = !rotorSpinActive;
        spinBtn.classList.toggle("is-active", rotorSpinActive);
        spinBtn.textContent = rotorSpinActive
          ? "⟳ Coaxial Rotors: Spinning (Counter-Rotating)"
          : "⏸ Coaxial Rotors: Paused";
        return;
      }

      // 6. Toggle Auto-Turntable
      const turnBtn = e.target.closest('[data-action="toggle-turntable"]');
      if (turnBtn) {
        autoTurntable = !autoTurntable;
        turnBtn.classList.toggle("is-active", autoTurntable);
        turnBtn.textContent = autoTurntable ? "Auto-Orbit: On" : "Auto-Orbit: Off";
      }
    });
  }

  window.Museum3DViewer = {
    mountViewer,
    destroyViewer
  };
})();
