/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Interactive Planetary Atlas Controller (Moon Atlas & Mars Atlas)
 *
 * Implements the 15-Page Planetary Atlas Research and Implementation Specification:
 * - World-First Navigation Rule: Opened intentionally via "Explore Moon Atlas" / "Explore Mars Atlas"
 *   or via "Locate on the Atlas" from any artifact exhibit page (never replaces the default world collection view).
 * - Dual Visualization Modes:
 *   1. Interactive 3D Planetary Globe (Three.js sphere with NASA Moon Trek / Mars Trek WMTS textures,
 *      3D surface markers, and 3D traverse polylines)
 *   2. 2D Cartographic Equirectangular Map (with pan/zoom, coordinate graticule, traverse polylines,
 *      and live NASA Trek WMTS tile detail)
 * - Layer Toggles: Museum Artifacts, Mission Landing Sites, Geographic Features (IAU/USGS), Mission Routes
 * -PDS Traverse Integration: Renders the full 487-point Spirit (MER-A) and 674-point Opportunity (MER-B)
 *   bundle-adjusted traverses from `window.MER_TRAVERSES`
 * - Great-Circle Surface Distance Calculator tool
 */

(function () {
  "use strict";

  const state = {
    activeBody: "moon", // 'moon' | 'mars'
    viewMode: "globe3d", // 'globe3d' | 'map2d'
    activeBasemapIdx: 0,
    selectedLocationId: "loc_lrv_apollo15",
    returnExhibitId: null,
    searchQuery: "",
    distanceMode: false,
    distanceStartId: null,
    distanceEndId: null,
    layers: {
      museumArtifacts: true,
      landingSites: true,
      geographicFeatures: true,
      missionRoutes: true
    }
  };

  let globeInstance = null;

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Normalize longitude to [-180, 180]
  function normLon(lon) {
    let l = Number(lon) || 0;
    while (l > 180) l -= 360;
    while (l < -180) l += 360;
    return l;
  }

  // Convert (lat, lon) in degrees to 3D Cartesian vector on sphere of radius R
  function latLonToVec3(lat, lon, radius) {
    const phi = ((90 - lat) * Math.PI) / 180;
    const theta = ((normLon(lon) + 180) * Math.PI) / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return { x, y, z };
  }

  // Great-circle haversine distance in km on a sphere of radius R
  function calcGreatCircleKm(lat1, lon1, lat2, lon2, radiusKm) {
    const toRad = Math.PI / 180;
    const dLat = (lat2 - lat1) * toRad;
    const dLon = (normLon(lon2) - normLon(lon1)) * toRad;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radiusKm * c;
  }

  function getBodyData(bodyId) {
    if (!window.ATLAS_DATA) return null;
    return window.ATLAS_DATA[bodyId] || window.ATLAS_DATA.moon;
  }

  function isLocationVisible(loc) {
    if (loc.category === "artifact" && !state.layers.museumArtifacts) return false;
    if (loc.category === "landing_site" && !state.layers.landingSites) return false;
    if (loc.category === "feature" && !state.layers.geographicFeatures) return false;
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.trim().toLowerCase();
      const hay = `${loc.officialName} ${loc.featureType} ${loc.displayCoords} ${loc.missionName || ""} ${loc.summary || ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function destroyGlobe() {
    if (!globeInstance) return;
    globeInstance.disposed = true;
    if (globeInstance.animId) cancelAnimationFrame(globeInstance.animId);
    if (globeInstance.resizeObserver) globeInstance.resizeObserver.disconnect();
    if (globeInstance.renderer) globeInstance.renderer.dispose();
    globeInstance = null;
  }

  function openAtlas(bodyId, focusLocationId, returnExhibitId) {
    const body = bodyId === "mars" ? "mars" : "moon";
    state.activeBody = body;
    state.activeBasemapIdx = 0;
    state.returnExhibitId = returnExhibitId || null;

    const bodyData = getBodyData(body);
    if (bodyData) {
      if (focusLocationId && bodyData.locations.some((l) => l.id === focusLocationId)) {
        state.selectedLocationId = focusLocationId;
      } else {
        const firstArtifact = bodyData.locations.find((l) => l.category === "artifact") || bodyData.locations[0];
        state.selectedLocationId = firstArtifact ? firstArtifact.id : null;
      }
    }

    renderAtlasView();
  }

  function renderAtlasView() {
    const mount = document.getElementById("atlas-view-mount");
    if (!mount || !window.ATLAS_DATA) return;

    destroyGlobe();
    const bodyData = getBodyData(state.activeBody);
    const basemap = bodyData.basemaps[state.activeBasemapIdx] || bodyData.basemaps[0];
    const visibleLocations = bodyData.locations.filter(isLocationVisible);
    const selectedLoc =
      bodyData.locations.find((l) => l.id === state.selectedLocationId) ||
      visibleLocations[0] ||
      bodyData.locations[0];

    if (selectedLoc) {
      state.selectedLocationId = selectedLoc.id;
    }

    const artifactLocations = bodyData.locations.filter((l) => l.category === "artifact");

    // Distance calculator result if active
    let distanceReadoutHtml = "";
    if (state.distanceMode) {
      const startLoc = bodyData.locations.find((l) => l.id === state.distanceStartId) || artifactLocations[0];
      const endLoc = bodyData.locations.find((l) => l.id === state.distanceEndId) || artifactLocations[1] || bodyData.locations[1];
      if (startLoc && endLoc) {
        state.distanceStartId = startLoc.id;
        state.distanceEndId = endLoc.id;
        const km = calcGreatCircleKm(
          startLoc.latitude,
          startLoc.longitude,
          endLoc.latitude,
          endLoc.longitude,
          bodyData.radiusKm
        );
        distanceReadoutHtml = `
          <div class="atlas-distance-bar">
            <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
              <span class="media-type-badge type-orbital">SURFACE GEODESIC CALCULATOR</span>
              <label style="font-size:0.82rem; color:var(--text-secondary);">From:
                <select class="atlas-select" data-role="dist-start">
                  ${bodyData.locations
                    .map(
                      (l) => `<option value="${esc(l.id)}" ${l.id === startLoc.id ? "selected" : ""}>${esc(l.officialName)}</option>`
                    )
                    .join("")}
                </select>
              </label>
              <label style="font-size:0.82rem; color:var(--text-secondary);">To:
                <select class="atlas-select" data-role="dist-end">
                  ${bodyData.locations
                    .map(
                      (l) => `<option value="${esc(l.id)}" ${l.id === endLoc.id ? "selected" : ""}>${esc(l.officialName)}</option>`
                    )
                    .join("")}
                </select>
              </label>
            </div>
            <div class="atlas-distance-result">
              Great-Circle Surface Distance: <strong>${km.toFixed(1)} km</strong> (${(km * 0.621371).toFixed(1)} mi • R = ${bodyData.radiusKm} km)
            </div>
          </div>
        `;
      }
    }

    mount.innerHTML = `
      <!-- Atlas Top Header Bar -->
      <div class="wing-hero-banner" style="margin-bottom: 1.5rem;">
        <div class="wing-hero-top">
          <div>
            <div class="eyebrow-badge">
              <span class="eyebrow-badge-pulse"></span>
              <span>PLANETARY CARTOGRAPHY &amp; HARDWARE REGISTRY • ${esc(bodyData.referenceSystem)}</span>
            </div>
            <h2 class="wing-title">${esc(bodyData.title)}</h2>
            <p class="wing-summary" style="margin-top:0.35rem;">${esc(bodyData.subtitle)}</p>
          </div>

          <div style="display:flex; gap:0.65rem; flex-wrap:wrap; align-items:center;">
            ${
              state.returnExhibitId
                ? `<button type="button" class="btn-museum-primary" data-nav-view="exhibit-${esc(state.returnExhibitId)}">← Return to Exhibit</button>`
                : ""
            }
            <button type="button" class="btn-museum-secondary" data-nav-view="collection-${esc(state.activeBody)}">
              ← Back to ${state.activeBody === "moon" ? "Moon" : "Mars"} Collection
            </button>
            <button type="button" class="diagram-tab-btn ${state.activeBody === "moon" ? "is-active" : ""}" data-atlas-body="moon">
              Moon Atlas
            </button>
            <button type="button" class="diagram-tab-btn ${state.activeBody === "mars" ? "is-active" : ""}" data-atlas-body="mars">
              Mars Atlas
            </button>
          </div>
        </div>

        <!-- Atlas Controls Toolbar: View Mode, Basemap, Layer Toggles, Search & Distance Tool -->
        <div class="atlas-toolbar-grid">
          <div class="viewer3d-control-group">
            <span class="viewer3d-control-label">Projection Mode:</span>
            <div class="viewer3d-btn-row">
              <button type="button" class="diagram-tab-btn ${state.viewMode === "globe3d" ? "is-active" : ""}" data-atlas-mode="globe3d">
                🌐 3D Planetary Globe
              </button>
              <button type="button" class="diagram-tab-btn ${state.viewMode === "map2d" ? "is-active" : ""}" data-atlas-mode="map2d">
                🗺️ 2D Equirectangular Map
              </button>
              <button type="button" class="diagram-tab-btn" data-atlas-action="reset-camera">
                Reset View
              </button>
              <button type="button" class="diagram-tab-btn ${state.distanceMode ? "is-active" : ""}" data-atlas-action="toggle-distance">
                📏 Measure Distance
              </button>
            </div>
          </div>

          ${
            bodyData.basemaps.length > 1
              ? `
            <div class="viewer3d-control-group">
              <span class="viewer3d-control-label">NASA Trek Basemap:</span>
              <div class="viewer3d-btn-row">
                ${bodyData.basemaps
                  .map(
                    (bm, idx) => `
                  <button type="button" class="diagram-tab-btn ${idx === state.activeBasemapIdx ? "is-active" : ""}" data-atlas-basemap="${idx}">
                    ${esc(bm.label)}
                  </button>`
                  )
                  .join("")}
              </div>
            </div>`
              : ""
          }

          <div class="viewer3d-control-group">
            <span class="viewer3d-control-label">Cartographic Layers:</span>
            <div class="viewer3d-btn-row">
              <button type="button" class="diagram-tab-btn ${state.layers.museumArtifacts ? "is-active" : ""}" data-atlas-layer="museumArtifacts">
                ● Museum Artifacts (${bodyData.locations.filter((l) => l.category === "artifact").length})
              </button>
              <button type="button" class="diagram-tab-btn ${state.layers.landingSites ? "is-active" : ""}" data-atlas-layer="landingSites">
                ◆ Landing Sites
              </button>
              <button type="button" class="diagram-tab-btn ${state.layers.geographicFeatures ? "is-active" : ""}" data-atlas-layer="geographicFeatures">
                ▲ IAU Geographic Features
              </button>
              <button type="button" class="diagram-tab-btn ${state.layers.missionRoutes ? "is-active" : ""}" data-atlas-layer="missionRoutes">
                ━ Traverse Routes
              </button>
            </div>
          </div>

          <div class="viewer3d-control-group" style="flex:1; min-width:220px;">
            <span class="viewer3d-control-label">Search Landmarks, Missions or Coordinates:</span>
            <input type="search" class="atlas-search-input" data-role="atlas-search" placeholder="Search Hadley, Surveyor 3, Jezero, Opportunity…" value="${esc(state.searchQuery)}" />
          </div>
        </div>

        ${distanceReadoutHtml}

        <!-- Quick-Jump Museum Artifact Pills -->
        <div class="atlas-quick-pills">
          <span class="viewer3d-control-label" style="margin-right:0.4rem;">Locate Museum Exhibits:</span>
          ${artifactLocations
            .map(
              (loc) => `
            <button type="button" class="viewer3d-legend-pill ${selectedLoc && loc.id === selectedLoc.id ? "is-active" : ""}" data-atlas-loc="${esc(loc.id)}">
              <span class="legend-pill-num">★</span>
              <span class="legend-pill-text">${esc(loc.officialName)}</span>
            </button>`
            )
            .join("")}
        </div>
      </div>

      <!-- Main Interactive Stage (3D Globe or 2D Equirectangular Map) -->
      <div class="atlas-stage-container" id="atlas-canvas-stage">
        <div class="atlas-overlay-pins" id="atlas-overlay-pins"></div>
        <div class="atlas-credit-bar">
          <span>Basemap: ${esc(basemap.label)} • Credit: ${esc(basemap.credit)}</span>
          <a href="${esc(basemap.sourceUrl)}" target="_blank" rel="noopener noreferrer">Official NASA Solar System Treks ↗</a>
        </div>
      </div>

      <!-- All Visible Locations Selector Strip Directly Below Map -->
      <div class="viewer3d-legend-bar" id="atlas-locations-strip" role="tablist" aria-label="Planetary Locations">
        ${visibleLocations
          .map((loc) => {
            const sym = loc.category === "artifact" ? "★" : loc.category === "landing_site" ? "◆" : "▲";
            return `
            <button type="button" class="viewer3d-legend-pill ${selectedLoc && loc.id === selectedLoc.id ? "is-active" : ""}" data-atlas-loc="${esc(loc.id)}">
              <span class="legend-pill-num">${sym}</span>
              <span class="legend-pill-text">${esc(loc.officialName)}</span>
            </button>`;
          })
          .join("")}
      </div>

      <!-- Contextual Location Detail Panel Directly Below Selector Strip -->
      <div id="atlas-detail-panel-mount" aria-live="polite">
        ${selectedLoc ? renderLocationDetailCard(selectedLoc, bodyData) : ""}
      </div>
    `;

    // Initialize 3D Globe or 2D Map inside #atlas-canvas-stage
    if (state.viewMode === "globe3d") {
      initGlobe3D(bodyData, basemap, visibleLocations, selectedLoc);
    } else {
      initMap2D(bodyData, basemap, visibleLocations, selectedLoc);
    }

    // Bind search input live filtering
    const searchInput = mount.querySelector('[data-role="atlas-search"]');
    if (searchInput) {
      searchInput.addEventListener("input", (ev) => {
        state.searchQuery = ev.target.value;
        renderAtlasView();
        const newInput = document.querySelector('[data-role="atlas-search"]');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(newInput.value.length, newInput.value.length);
        }
      });
    }

    // Bind distance selects
    const distStart = mount.querySelector('[data-role="dist-start"]');
    const distEnd = mount.querySelector('[data-role="dist-end"]');
    if (distStart) {
      distStart.addEventListener("change", (ev) => {
        state.distanceStartId = ev.target.value;
        renderAtlasView();
      });
    }
    if (distEnd) {
      distEnd.addEventListener("change", (ev) => {
        state.distanceEndId = ev.target.value;
        renderAtlasView();
      });
    }
  }

  function renderLocationDetailCard(loc, bodyData) {
    const catBadge =
      loc.category === "artifact"
        ? "MUSEUM ARTIFACT EXHIBIT"
        : loc.category === "landing_site"
          ? "MISSION LANDING SITE"
          : "OFFICIAL IAU / USGS GEOGRAPHIC FEATURE";

    // Check if there is an associated PDS traverse or mission route
    const matchingRoutes = (bodyData.routes || []).filter((r) => r.artifactId === loc.artifactId && loc.artifactId);
    let routeNoteHtml = "";
    if (matchingRoutes.length > 0) {
      routeNoteHtml = `
        <div class="below-detail-block" style="grid-column: 1 / -1;">
          <span class="below-detail-label">Surface Traverse &amp; Route Data on Atlas</span>
          ${matchingRoutes
            .map(
              (r) =>
                `<p style="margin-bottom:0.35rem;"><strong style="color:var(--accent-secondary);">${esc(r.name)}:</strong> ${esc(r.summary)}</p>`
            )
            .join("")}
        </div>
      `;
    }

    return `
      <div class="below-explanation-card">
        <div class="below-explanation-header">
          <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
            <span class="below-callout-badge">${esc(catBadge)}</span>
            <span class="below-category-label">${esc(loc.featureType)}</span>
            <span class="media-type-badge type-orbital">${esc(loc.confidenceLabel || "Verified Coordinate")}</span>
          </div>
          <span class="below-source-tag">Source: ${esc(loc.sourceName)}</span>
        </div>

        <div class="atlas-detail-body-grid">
          <div>
            <h3 class="below-component-title" style="margin-bottom:0.35rem;">${esc(loc.officialName)}</h3>
            <p style="font-family:var(--font-mono); font-size:0.84rem; color:var(--accent-secondary); margin-bottom:0.85rem;">
              Coordinates: ${esc(loc.displayCoords)} • System: ${esc(loc.coordinateSystem)}
            </p>
            <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:1rem;">${esc(loc.summary)}</p>

            ${
              loc.coordinateNote
                ? `<div class="editorial-disclaimer-bar" style="margin-bottom:1rem;">
                     <strong>Coordinate Provenance &amp; Source Note:</strong> ${esc(loc.coordinateNote)}
                   </div>`
                : ""
            }

            <div style="display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center;">
              ${
                loc.artifactId
                  ? `<button type="button" class="btn-museum-primary" data-nav-view="exhibit-${esc(loc.artifactId)}">
                       <span>Explore Artifact Exhibit</span>
                       <span aria-hidden="true">→</span>
                     </button>`
                  : ""
              }
              <a href="${esc(loc.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="btn-museum-secondary">
                <span>Official NASA / USGS Source ↗</span>
              </a>
            </div>
          </div>

          ${
            loc.thumbnail
              ? `<div class="atlas-detail-thumb-wrap">
                   <img src="${esc(loc.thumbnail)}" alt="${esc(loc.officialName)}" />
                   ${
                     loc.missionName
                       ? `<div style="padding:0.55rem 0.75rem; font-family:var(--font-mono); font-size:0.72rem; color:var(--text-muted);">
                            <strong>${esc(loc.missionName)}</strong> • ${esc(loc.missionDates || "")}
                          </div>`
                       : ""
                   }
                 </div>`
              : ""
          }
        </div>

        ${routeNoteHtml ? `<div class="below-explanation-grid" style="margin-top:1rem;">${routeNoteHtml}</div>` : ""}
      </div>
    `;
  }

  // ==========================================================================
  // MODE 1: INTERACTIVE 3D PLANETARY GLOBE (Three.js Sphere + NASA Trek Mosaic)
  // ==========================================================================
  function initGlobe3D(bodyData, basemap, visibleLocations, selectedLoc) {
    const stage = document.getElementById("atlas-canvas-stage");
    const pinsLayer = document.getElementById("atlas-overlay-pins");
    if (!stage || !pinsLayer) return;

    if (!window.THREE || !window.THREE.OrbitControls) {
      initMap2D(bodyData, basemap, visibleLocations, selectedLoc);
      return;
    }

    const THREE = window.THREE;
    const width = stage.clientWidth || 960;
    const height = stage.clientHeight || 540;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    stage.insertBefore(renderer.domElement, stage.firstChild);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enablePan = false;
    controls.minDistance = 2.65;
    controls.maxDistance = 9.0;

    const globeRadius = 2.0;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const texLoader = new THREE.TextureLoader();
    const planetTex = texLoader.load(basemap.localTexture);
    planetTex.anisotropy = 8;

    const sphereMat = new THREE.MeshStandardMaterial({
      map: planetTex,
      roughness: 0.88,
      metalness: 0.04
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(globeMesh);

    // Subtle latitude/longitude wireframe graticule sphere
    const gratGeo = new THREE.SphereGeometry(globeRadius * 1.003, 24, 12);
    const gratMat = new THREE.MeshBasicMaterial({
      color: state.activeBody === "mars" ? 0xfb923c : 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.09
    });
    scene.add(new THREE.Mesh(gratGeo, gratMat));

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.95));
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.85);
    sunLight.position.set(6, 4, 6);
    scene.add(sunLight);

    // Render 3D Mission Route Polylines on the Globe surface
    if (state.layers.missionRoutes && bodyData.routes) {
      bodyData.routes.forEach((route) => {
        let pts = [];
        if (route.pdsSourceKey && window.MER_TRAVERSES && window.MER_TRAVERSES[route.pdsSourceKey]) {
          const segs = window.MER_TRAVERSES[route.pdsSourceKey].segments || [];
          pts = segs.map((w) => latLonToVec3(w.lat, w.lon, globeRadius * 1.008));
        } else if (route.waypoints) {
          pts = route.waypoints.map((w) => latLonToVec3(w.lat, w.lon, globeRadius * 1.008));
        }
        if (pts.length > 1) {
          const vecs = pts.map((p) => new THREE.Vector3(p.x, p.y, p.z));
          const lineGeo = new THREE.BufferGeometry().setFromPoints(vecs);
          const lineMat = new THREE.LineBasicMaterial({ color: route.color || "#38bdf8", linewidth: 2 });
          scene.add(new THREE.Line(lineGeo, lineMat));
        }
      });
    }

    // Build 2D projected overlay pins for visible locations
    pinsLayer.innerHTML = visibleLocations
      .map((loc) => {
        const isSel = selectedLoc && loc.id === selectedLoc.id;
        const catClass = `pin-${loc.category}`;
        const sym = loc.category === "artifact" ? "★" : loc.category === "landing_site" ? "◆" : "▲";
        return `
          <button type="button" class="atlas-pin ${catClass} ${isSel ? "is-selected" : ""}" data-atlas-loc="${esc(loc.id)}" title="${esc(loc.officialName)} (${esc(loc.displayCoords)})">
            <span class="atlas-pin-sym">${sym}</span>
            <span class="atlas-pin-label">${esc(loc.officialName.split("(")[0].trim())}</span>
          </button>`;
      })
      .join("");

    // Orient camera toward selected location
    function orientCameraToLocation(loc, dist = 4.6) {
      if (!loc) return;
      const v = latLonToVec3(loc.latitude, loc.longitude, dist);
      camera.position.set(v.x, v.y, v.z);
      controls.target.set(0, 0, 0);
      controls.update();
    }

    orientCameraToLocation(selectedLoc || { latitude: bodyData.defaultCenter.lat, longitude: bodyData.defaultCenter.lon }, 4.6);

    const tempVec = new THREE.Vector3();
    const camDir = new THREE.Vector3();
    const pinWorld = new THREE.Vector3();

    function updatePins() {
      const w = stage.clientWidth || width;
      const h = stage.clientHeight || height;
      camera.getWorldPosition(camDir);
      camDir.normalize();

      pinsLayer.querySelectorAll(".atlas-pin").forEach((btn) => {
        const id = btn.getAttribute("data-atlas-loc");
        const loc = visibleLocations.find((l) => l.id === id);
        if (!loc) return;
        const pos = latLonToVec3(loc.latitude, loc.longitude, globeRadius * 1.01);
        pinWorld.set(pos.x, pos.y, pos.z).normalize();

        // Check horizon occlusion (dot product with camera direction)
        const dot = pinWorld.dot(camDir);
        if (dot < 0.12) {
          btn.style.display = "none";
          return;
        }
        tempVec.set(pos.x, pos.y, pos.z).project(camera);
        const sx = (tempVec.x * 0.5 + 0.5) * w;
        const sy = (-tempVec.y * 0.5 + 0.5) * h;
        btn.style.display = "inline-flex";
        btn.style.left = `${sx}px`;
        btn.style.top = `${sy}px`;
      });
    }

    globeInstance = {
      disposed: false,
      renderer,
      camera,
      controls,
      orientCameraToLocation,
      animId: null,
      resizeObserver: null
    };

    function animate() {
      if (!globeInstance || globeInstance.disposed) return;
      globeInstance.animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      updatePins();
    }
    animate();

    if (window.ResizeObserver) {
      globeInstance.resizeObserver = new ResizeObserver(() => {
        if (!globeInstance || globeInstance.disposed) return;
        const nw = stage.clientWidth;
        const nh = stage.clientHeight;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      });
      globeInstance.resizeObserver.observe(stage);
    }
  }

  // ==========================================================================
  // MODE 2: 2D EQUIRECTANGULAR CARTOGRAPHIC MAP (WITH PDS TRAVERSE INSET)
  // ==========================================================================
  function initMap2D(bodyData, basemap, visibleLocations, selectedLoc) {
    const stage = document.getElementById("atlas-canvas-stage");
    const pinsLayer = document.getElementById("atlas-overlay-pins");
    if (!stage || !pinsLayer) return;

    // Build SVG polylines for routes in equirectangular projection (lon -180..180 -> 0..100%, lat 90..-90 -> 0..100%)
    let routesSvgHtml = "";
    if (state.layers.missionRoutes && bodyData.routes) {
      const polyStrings = bodyData.routes
        .map((route) => {
          const wps =
            route.pdsSourceKey && window.MER_TRAVERSES && window.MER_TRAVERSES[route.pdsSourceKey]
              ? window.MER_TRAVERSES[route.pdsSourceKey].segments || []
              : route.waypoints || [];
          if (wps.length < 2) return "";
          const ptsAttr = wps
            .map((w) => {
              const x = ((normLon(w.lon) + 180) / 360) * 1000;
              const y = ((90 - w.lat) / 180) * 500;
              return `${x.toFixed(1)},${y.toFixed(1)}`;
            })
            .join(" ");
          return `<polyline points="${ptsAttr}" fill="none" stroke="${esc(route.color || "#38bdf8")}" stroke-width="3" stroke-dasharray="6,3" />`;
        })
        .join("");

      routesSvgHtml = `
        <svg class="atlas-2d-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <!-- Equirectangular Graticule Lines -->
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(148,163,184,0.28)" stroke-width="1" />
          <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(148,163,184,0.28)" stroke-width="1" />
          ${polyStrings}
        </svg>
      `;
    }

    const mapWrap = document.createElement("div");
    mapWrap.className = "atlas-2d-map-wrap";
    mapWrap.innerHTML = `
      <img src="${esc(basemap.localTexture)}" alt="${esc(basemap.label)}" class="atlas-2d-img" />
      ${routesSvgHtml}
    `;
    stage.insertBefore(mapWrap, stage.firstChild);

    pinsLayer.innerHTML = visibleLocations
      .map((loc) => {
        const isSel = selectedLoc && loc.id === selectedLoc.id;
        const catClass = `pin-${loc.category}`;
        const sym = loc.category === "artifact" ? "★" : loc.category === "landing_site" ? "◆" : "▲";
        const xPct = ((normLon(loc.longitude) + 180) / 360) * 100;
        const yPct = ((90 - loc.latitude) / 180) * 100;
        return `
          <button type="button" class="atlas-pin ${catClass} ${isSel ? "is-selected" : ""}" style="left:${xPct.toFixed(2)}%; top:${yPct.toFixed(2)}%;" data-atlas-loc="${esc(loc.id)}" title="${esc(loc.officialName)} (${esc(loc.displayCoords)})">
            <span class="atlas-pin-sym">${sym}</span>
            <span class="atlas-pin-label">${esc(loc.officialName.split("(")[0].trim())}</span>
          </button>`;
      })
      .join("");
  }

  // Global click handler for Atlas interactions
  document.addEventListener("click", (e) => {
    // 1. Open Atlas trigger from anywhere in the app (`data-open-atlas="moon"` + optional `data-atlas-focus="loc_..."`)
    const openTrigger = e.target.closest("[data-open-atlas]");
    if (openTrigger) {
      e.preventDefault();
      const body = openTrigger.getAttribute("data-open-atlas");
      const focusLoc = openTrigger.getAttribute("data-atlas-focus") || null;
      const returnEx = openTrigger.getAttribute("data-return-exhibit") || null;
      if (window.navigateToMuseumView) {
        window.navigateToMuseumView("atlas", false, { body, focusLoc, returnEx });
      }
      return;
    }

    // 2. Switch Moon / Mars inside Atlas
    const bodyBtn = e.target.closest("[data-atlas-body]");
    if (bodyBtn) {
      openAtlas(bodyBtn.getAttribute("data-atlas-body"), null, state.returnExhibitId);
      if (window.syncAtlasTheme) window.syncAtlasTheme(state.activeBody);
      return;
    }

    // 3. Switch 3D Globe / 2D Map mode
    const modeBtn = e.target.closest("[data-atlas-mode]");
    if (modeBtn) {
      state.viewMode = modeBtn.getAttribute("data-atlas-mode");
      renderAtlasView();
      return;
    }

    // 4. Switch Basemap
    const bmBtn = e.target.closest("[data-atlas-basemap]");
    if (bmBtn) {
      state.activeBasemapIdx = Number(bmBtn.getAttribute("data-atlas-basemap")) || 0;
      renderAtlasView();
      return;
    }

    // 5. Toggle Layer visibility
    const layerBtn = e.target.closest("[data-atlas-layer]");
    if (layerBtn) {
      const key = layerBtn.getAttribute("data-atlas-layer");
      if (key in state.layers) {
        state.layers[key] = !state.layers[key];
        renderAtlasView();
      }
      return;
    }

    // 6. Select Location Pin or Pill
    const locBtn = e.target.closest("[data-atlas-loc]");
    if (locBtn) {
      const locId = locBtn.getAttribute("data-atlas-loc");
      state.selectedLocationId = locId;
      const bodyData = getBodyData(state.activeBody);
      const loc = bodyData.locations.find((l) => l.id === locId);

      // Update active states without full WebGL rebuild if in 3D globe mode
      document.querySelectorAll("[data-atlas-loc]").forEach((el) => {
        el.classList.toggle("is-selected", el.getAttribute("data-atlas-loc") === locId);
        el.classList.toggle("is-active", el.getAttribute("data-atlas-loc") === locId);
      });
      const detailMount = document.getElementById("atlas-detail-panel-mount");
      if (detailMount && loc) {
        detailMount.innerHTML = renderLocationDetailCard(loc, bodyData);
      }
      if (globeInstance && globeInstance.orientCameraToLocation && loc) {
        globeInstance.orientCameraToLocation(loc, 3.8);
      }
      return;
    }

    // 7. Atlas Action Buttons (Reset Camera / Toggle Distance Calculator)
    const actBtn = e.target.closest("[data-atlas-action]");
    if (actBtn) {
      const act = actBtn.getAttribute("data-atlas-action");
      if (act === "reset-camera") {
        const bodyData = getBodyData(state.activeBody);
        if (globeInstance && globeInstance.orientCameraToLocation) {
          globeInstance.orientCameraToLocation(
            { latitude: bodyData.defaultCenter.lat, longitude: bodyData.defaultCenter.lon },
            4.8
          );
        }
      } else if (act === "toggle-distance") {
        state.distanceMode = !state.distanceMode;
        renderAtlasView();
      }
    }
  });

  window.MuseumAtlas = {
    openAtlas,
    destroyGlobe,
    getState: () => state
  };
})();
