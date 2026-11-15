/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Interactive Pilot Application Controller (Apollo 15 LRV)
 */

(function () {
  "use strict";

  const DATA = window.MUSEUM_DATA;
  if (!DATA) {
    console.error("MUSEUM_DATA not loaded.");
    return;
  }

  // Application State
  const state = {
    currentView: "entrance",
    currentTheme: "space",
    selectedTimelineIndex: 2, // Default to 31 July 1971 (First Lunar EVA & LRV Deployment) so visitors immediately see the rover in action, with all 6 dates selectable
    selectedDiagramId: "diag_isometric",
    selectedHotspotId: "hs_power_thermal",
    blueprintScanMode: "blueprint", // 'blueprint' | 'original'
    visualRegisterFilter: "ALL"
  };

  // Helper: map media type to badge class
  function getBadgeClass(visualType) {
    const t = (visualType || "").toLowerCase();
    if (t.includes("drawing") || t.includes("diagram") || t.includes("blueprint")) return "type-drawing";
    if (t.includes("orbital")) return "type-orbital";
    if (t.includes("lab")) return "type-lab";
    return "type-photo";
  }

  // Helper: escape HTML attributes safely
  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ============================================================================
  // 1. COSMIC STARFIELD & PLANETARY PARTICLE CANVAS
  // ============================================================================
  function initStarfield() {
    const canvas = document.getElementById("starfield-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const starCount = Math.min(180, Math.floor((width * height) / 9000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.45 + 0.3,
      alpha: Math.random() * 0.75 + 0.2,
      driftY: (Math.random() - 0.5) * 0.08,
      driftX: (Math.random() - 0.5) * 0.08,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2
    }));

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function renderFrame(time) {
      ctx.clearRect(0, 0, width, height);
      const theme = document.documentElement.getAttribute("data-theme") || "space";

      for (const s of stars) {
        if (!prefersReducedMotion) {
          s.x = (s.x + s.driftX + width) % width;
          s.y = (s.y + s.driftY + height) % height;
        }
        const twinkle = prefersReducedMotion
          ? s.alpha
          : s.alpha * (0.68 + 0.32 * Math.sin(time * 0.0015 + s.phase));

        if (theme === "mars") {
          ctx.fillStyle = `rgba(253, 186, 116, ${twinkle * 0.85})`;
        } else if (theme === "moon") {
          ctx.fillStyle = `rgba(241, 245, 249, ${twinkle})`;
        } else {
          ctx.fillStyle = `rgba(226, 232, 240, ${twinkle})`;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        requestAnimationFrame(renderFrame);
      }
    }

    requestAnimationFrame(renderFrame);
  }

  // ============================================================================
  // 2. VIEW ROUTER & DESTINATION-ADAPTIVE THEME SWITCHER
  // ============================================================================
  function setDestinationTheme(themeName, readoutText) {
    state.currentTheme = themeName;
    document.documentElement.setAttribute("data-theme", themeName);
    const readout = document.getElementById("environment-readout");
    if (readout && readoutText) {
      readout.innerHTML = `<span>${esc(readoutText)}</span>`;
    }
  }

  function navigateToView(viewId, skipHashUpdate, atlasOpts) {
    let targetView = viewId || "entrance";
    let dynamicArtifactId = null;

    if (targetView.startsWith("exhibit-") && targetView !== "exhibit-lrv_apollo15") {
      const candidateId = targetView.replace(/^exhibit-/, "");
      if (window.EXHIBITS_DATA && window.EXHIBITS_DATA[candidateId]) {
        dynamicArtifactId = candidateId;
      } else {
        targetView = "entrance";
      }
    } else if (
      !["entrance", "destinations", "collection-moon", "collection-mars", "exhibit-lrv_apollo15", "atlas"].includes(
        targetView
      )
    ) {
      targetView = "entrance";
    }

    const previousView = state.currentView;
    state.currentView = targetView;

    // Destroy any active 3D exhibit viewer or Atlas globe when leaving its view
    if (window.Museum3DViewer && previousView !== targetView) {
      window.Museum3DViewer.destroyViewer("dyn-3d-viewer-mount");
    }
    if (window.MuseumAtlas && targetView !== "atlas") {
      window.MuseumAtlas.destroyGlobe();
    }

    // Trigger subtle atmospheric transition flash when changing planetary environments
    const warpOverlay = document.getElementById("warp-transition-overlay");
    if (warpOverlay && previousView !== targetView) {
      warpOverlay.classList.add("is-active");
      setTimeout(() => warpOverlay.classList.remove("is-active"), 260);
    }

    // Adapt visual theme based on selected view/destination
    if (targetView === "entrance" || targetView === "destinations") {
      setDestinationTheme("space", "SECTOR: DEEP SPACE ATRIUM");
    } else if (targetView === "collection-moon") {
      setDestinationTheme("moon", "DESTINATION: MOON • WING 01 (4 EXHIBITS)");
    } else if (targetView === "collection-mars") {
      setDestinationTheme("mars", "DESTINATION: MARS • WING 02 (5 EXHIBITS)");
    } else if (targetView === "exhibit-lrv_apollo15") {
      setDestinationTheme("moon", "EXHIBIT: APOLLO 15 LRV • HADLEY–APENNINE");
    } else if (dynamicArtifactId) {
      const exObj = window.EXHIBITS_DATA[dynamicArtifactId];
      const theme = exObj.destination === "mars" ? "mars" : "moon";
      setDestinationTheme(theme, `EXHIBIT: ${exObj.artifact_name.toUpperCase()}`);
      if (window.DynamicExhibitRenderer) {
        window.DynamicExhibitRenderer.renderExhibit(dynamicArtifactId);
      }
    } else if (targetView === "atlas") {
      const body =
        (atlasOpts && atlasOpts.body) ||
        (state.currentTheme === "mars" ? "mars" : "moon");
      setDestinationTheme(body, `PLANETARY ATLAS • ${body.toUpperCase()} CARTOGRAPHY`);
      if (window.MuseumAtlas) {
        window.MuseumAtlas.openAtlas(
          body,
          atlasOpts && atlasOpts.focusLoc,
          atlasOpts && atlasOpts.returnEx
        );
      }
    }

    // Toggle visible view section
    const domSectionId = dynamicArtifactId ? "view-exhibit-dynamic" : `view-${targetView}`;
    document.querySelectorAll(".museum-view").forEach((sec) => {
      sec.classList.toggle("is-visible", sec.id === domSectionId);
    });

    // Update top nav active pills
    document.querySelectorAll(".museum-nav-controls .nav-pill").forEach((btn) => {
      const pillView = btn.getAttribute("data-nav-view");
      const isMatch =
        pillView === targetView ||
        (dynamicArtifactId &&
          window.EXHIBITS_DATA[dynamicArtifactId]?.destination === "moon" &&
          pillView === "collection-moon") ||
        (dynamicArtifactId &&
          window.EXHIBITS_DATA[dynamicArtifactId]?.destination === "mars" &&
          pillView === "collection-mars");
      btn.classList.toggle("is-active", Boolean(isMatch));
    });

    if (!skipHashUpdate) {
      history.replaceState(null, "", `#${targetView}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.navigateToMuseumView = navigateToView;
  window.syncAtlasTheme = function (body) {
    setDestinationTheme(body, `PLANETARY ATLAS • ${body.toUpperCase()} CARTOGRAPHY`);
  };

  // ============================================================================
  // 3. RENDER PAGE 2 — DESTINATION SELECTION PORTALS
  // ============================================================================
  function renderDestinations() {
    const mount = document.getElementById("destinations-grid-mount");
    if (!mount) return;

    mount.innerHTML = DATA.destinations.items
      .map((dest) => {
        const targetView = dest.id === "moon" ? "collection-moon" : "collection-mars";
        const portalClass = dest.id === "moon" ? "portal-moon" : "portal-mars";
        const statsHtml = dest.stats
          .map(
            (st) => `
            <div>
              <span class="portal-stat-label">${esc(st.label)}</span>
              <span class="portal-stat-val">${esc(st.value)}</span>
            </div>`
          )
          .join("");

        return `
        <article class="destination-portal ${portalClass}" data-nav-view="${targetView}" data-preview-theme="${esc(dest.id)}" tabindex="0" role="button" aria-label="${esc(dest.cta)}">
          <div class="portal-visual-banner">
            <img src="${esc(dest.planetImage)}" alt="${esc(dest.name)} orbital view" loading="lazy" />
            <div class="portal-visual-overlay">
              <div class="portal-top-badges">
                <span class="media-type-badge ${getBadgeClass(dest.planetImageType)}">${esc(dest.planetImageType)}</span>
                <span class="portal-status-pill">${esc(dest.status)}</span>
              </div>
              <div class="portal-kicker">${esc(dest.atmosphereLabel)}</div>
            </div>
          </div>

          <div class="portal-body">
            <div>
              <p class="portal-kicker">${esc(dest.subtitle)} • ${esc(dest.coordinates)}</p>
              <h3 class="portal-title">${esc(dest.name)}</h3>
              <p class="portal-description">${esc(dest.description)}</p>
            </div>

            <div>
              <div class="portal-stats-row">
                ${statsHtml}
              </div>
              <div class="portal-footer">
                <span class="portal-credit">Image Credit: ${esc(dest.planetImageCredit)}</span>
                <span class="btn-portal-explore">
                  <span>${esc(dest.cta)}</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </div>
        </article>`;
      })
      .join("");

    // Hover atmosphere preview on destination portals
    mount.querySelectorAll(".destination-portal").forEach((portal) => {
      const previewTheme = portal.getAttribute("data-preview-theme");
      portal.addEventListener("mouseenter", () => {
        if (state.currentView === "destinations" && previewTheme) {
          document.documentElement.setAttribute("data-theme", previewTheme);
        }
      });
      portal.addEventListener("mouseleave", () => {
        if (state.currentView === "destinations") {
          document.documentElement.setAttribute("data-theme", "space");
        }
      });
    });
  }

  // ============================================================================
  // 4. RENDER PAGE 3 — MOON & MARS COLLECTION WINGS (WORLD-FIRST FLOW + ATLAS ENTRY)
  // ============================================================================
  function renderWingGroupCard(grp, bodyId) {
    const feat = grp.featuredArtifact;
    if (!feat) return "";
    const atlasBtnText = bodyId === "mars" ? "Locate on Mars Atlas" : "Locate on Moon Atlas";

    return `
      <article class="featured-exhibit-showcase" style="margin-bottom: 2.25rem;">
        <div class="featured-exhibit-media">
          <img src="${esc(feat.heroImage)}" alt="${esc(feat.artifact_name)} — ${esc(feat.mission)}" loading="lazy" />
          <div class="featured-exhibit-media-badges">
            <span class="media-type-badge ${getBadgeClass(feat.heroImageType)}">${esc(feat.heroImageType)}</span>
            <span class="media-type-badge">${esc(grp.groupCategory)}</span>
          </div>
          <div class="featured-exhibit-caption-bar">
            Credit: ${esc(feat.heroImageCredit)} • ${esc(feat.site)}
          </div>
        </div>

        <div class="featured-exhibit-content">
          <div>
            <div class="exhibit-active-pill">
              <span class="eyebrow-badge-pulse"></span>
              <span>${esc(grp.statusLabel)}</span>
            </div>
            <p class="featured-exhibit-group-label">${esc(grp.groupTitle)}</p>
            <h3 class="featured-exhibit-title">${esc(feat.artifact_name)}</h3>
            <p class="featured-exhibit-mission">Mission: ${esc(feat.mission)} • ${esc(feat.designation)}</p>
            <p class="featured-exhibit-summary">${esc(feat.summary)}</p>

            <div class="featured-exhibit-meta-grid">
              <div>
                <span class="portal-stat-label">Landing / Operating Site</span>
                <span class="portal-stat-val">${esc(feat.site)}</span>
              </div>
              <div>
                <span class="portal-stat-label">Operational Timeline</span>
                <span class="portal-stat-val">${esc(feat.dates)}</span>
              </div>
            </div>

            <p class="sibling-units-note">${esc(feat.siblingUnitsNote)}</p>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn-museum-primary" data-nav-view="exhibit-${esc(feat.artifact_id)}">
              <span>${esc(feat.ctaLabel)}</span>
              <span aria-hidden="true">→</span>
            </button>
            <button type="button" class="btn-museum-secondary" data-open-atlas="${bodyId}" data-atlas-focus="${esc(feat.atlasLocationId)}">
              <span>🌐 ${atlasBtnText}</span>
            </button>
            <button type="button" class="btn-museum-secondary" data-lightbox-src="${esc(feat.heroImage)}" data-lightbox-title="${esc(feat.artifact_name)} — ${esc(feat.mission)}" data-lightbox-type="${esc(feat.heroImageType)}" data-lightbox-caption="${esc(feat.summary)}" data-lightbox-credit="${esc(feat.heroImageCredit)}" data-lightbox-url="${esc(feat.heroImageSource)}">
              <span>Inspect Photo</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderCollections() {
    // 4A. Moon Collection Wing (All 4 Exhibits Active + Secondary Moon Atlas Entry)
    const moonMount = document.getElementById("moon-collection-mount");
    if (moonMount) {
      const moon = DATA.collections.moon;
      moonMount.innerHTML = `
        <div class="wing-hero-banner">
          <div class="wing-hero-top">
            <div>
              <div class="eyebrow-badge">
                <span class="eyebrow-badge-pulse"></span>
                <span>${esc(moon.wingCode)}</span>
              </div>
              <h2 id="moon-wing-heading" class="wing-title">${esc(moon.title)}</h2>
            </div>
            <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
              <button type="button" class="btn-museum-secondary" data-nav-view="destinations">← Change Destination</button>
              <button type="button" class="btn-museum-secondary" data-open-atlas="moon">🌐 Explore Moon Atlas</button>
              <button type="button" class="btn-museum-secondary" data-nav-view="collection-mars">Switch to Mars Wing (5) →</button>
            </div>
          </div>
          <p class="wing-summary">${esc(moon.environmentSummary)}</p>
        </div>

        <div class="collection-section-heading">
          <span>Verified Lunar Surface Exhibits (4 Archival Dossiers)</span>
        </div>

        ${moon.groups.map((grp) => renderWingGroupCard(grp, "moon")).join("")}

        <!-- Secondary Planetary Atlas Entry Section (Preserves World-First Collection Flow) -->
        <div class="world-atlas-entry-banner">
          <div style="max-width: 720px;">
            <span class="media-type-badge type-orbital" style="margin-bottom: 0.5rem;">SECONDARY CARTOGRAPHIC EXPLORATION • NASA MOON TREK WMTS</span>
            <h3 style="font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 0.45rem;">Explore the Moon Atlas</h3>
            <p style="font-size: 0.94rem; color: var(--text-secondary);">
              Inspect the spatial relationship between Hadley–Apennine (Apollo 15 LRV, Falcon LM-10, and ALSEP Array A-2), Oceanus Procellarum (Surveyor 3 &amp; Apollo 12), and official IAU lunar mountain ranges, maria, and rilles on an interactive 3D globe and 2D LRO Wide Angle Camera mosaic.
            </p>
          </div>
          <button type="button" class="btn-museum-primary" data-open-atlas="moon">
            <span>🌐 Explore Moon Atlas</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      `;
    }

    // 4B. Mars Collection Wing (All 5 Exhibits Active + Secondary Mars Atlas Entry)
    const marsMount = document.getElementById("mars-collection-mount");
    if (marsMount) {
      const mars = DATA.collections.mars;
      marsMount.innerHTML = `
        <div class="wing-hero-banner">
          <div class="wing-hero-top">
            <div>
              <div class="eyebrow-badge">
                <span class="eyebrow-badge-pulse"></span>
                <span>${esc(mars.wingCode)}</span>
              </div>
              <h2 id="mars-wing-heading" class="wing-title">${esc(mars.title)}</h2>
            </div>
            <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
              <button type="button" class="btn-museum-secondary" data-nav-view="destinations">← Change Destination</button>
              <button type="button" class="btn-museum-secondary" data-open-atlas="mars">🌐 Explore Mars Atlas</button>
              <button type="button" class="btn-museum-secondary" data-nav-view="collection-moon">Switch to Moon Wing (4) →</button>
            </div>
          </div>
          <p class="wing-summary">${esc(mars.environmentSummary)}</p>
        </div>

        <div class="collection-section-heading">
          <span>Verified Martian Surface Exhibits (5 Archival Dossiers • 7 Surface Spacecraft)</span>
        </div>

        ${mars.groups.map((grp) => renderWingGroupCard(grp, "mars")).join("")}

        <!-- Secondary Planetary Atlas Entry Section (Preserves World-First Collection Flow) -->
        <div class="world-atlas-entry-banner">
          <div style="max-width: 720px;">
            <span class="media-type-badge type-orbital" style="margin-bottom: 0.5rem;">SECONDARY CARTOGRAPHIC EXPLORATION • NASA MARS TREK &amp; PDS TRAVERSES</span>
            <h3 style="font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 0.45rem;">Explore the Mars Atlas</h3>
            <p style="font-size: 0.94rem; color: var(--text-secondary);">
              Locate all seven Martian explorers across Chryse Planitia, Utopia Planitia, Gusev Crater, Meridiani Planum, Green Valley (68.2° N), Elysium Planitia, and Jezero Crater—complete with MGS MOLA elevation shading and the full 487-point Spirit and 674-point Opportunity PDS rover traverses.
            </p>
          </div>
          <button type="button" class="btn-museum-primary" data-open-atlas="mars">
            <span>🌐 Explore Mars Atlas</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      `;
    }
  }

  // ============================================================================
  // 5. RENDER PAGE 4 — APOLLO 15 LRV MUSEUM EXHIBIT (lrv_apollo15)
  // ============================================================================
  function renderLRVExhibit() {
    const mount = document.getElementById("lrv-exhibit-mount");
    if (!mount) return;

    const ex = DATA.pilotExhibit;
    const idCard = ex.identityCard;
    const script = ex.narrative_script;
    const sci = ex.scienceDiscoveries;
    const eng = ex.engineering_systems;
    const finalCh = ex.finalChapterAndLegacy;
    const heroAsset = ex.visual_assets.find((a) => a.id === "V1");

    mount.innerHTML = `
      <!-- ==================================================================
           HERO & SECTION 5.1: MEET THE EXPLORER — IDENTITY & FIRST-PERSON VOICE
           ================================================================== -->
      <div class="exhibit-hero" id="sec-identity">
        <div class="exhibit-hero-grid">
          <div class="exhibit-hero-title-block">
            <div class="eyebrow-badge">
              <span class="eyebrow-badge-pulse"></span>
              <span>PILOT EXHIBIT • ARTIFACT ID: ${esc(ex.artifact_id)} • MISSION: ${esc(ex.mission)}</span>
            </div>
            <h1 id="lrv-exhibit-title" class="exhibit-hero-title">${esc(ex.artifact_name)}</h1>
            <p class="exhibit-hero-subtitle">${esc(ex.official_full_name)} • Hadley–Apennine Landing Site, Moon</p>

            <!-- First-Person Artifact Introduction -->
            <div class="first-person-voice-box">
              <div class="voice-kicker">
                <span>ARTIFACT NARRATIVE • FIRST-PERSON INTRODUCTION</span>
                <span>INTERPRETIVE VOICE</span>
              </div>
              <blockquote class="voice-quote">
                “${esc(script.shortIntroduction)}”
              </blockquote>
            </div>

            <div class="editorial-disclaimer-bar">
              <strong>Editorial Principle:</strong> ${esc(script.editorialDisclaimer)}
            </div>
          </div>

          <!-- Hero Historical Photograph V1 -->
          <figure class="exhibit-hero-figure">
            <div class="exhibit-hero-img-wrap" data-lightbox-src="${esc(heroAsset.imagePath)}" data-lightbox-title="${esc(heroAsset.title)} (Asset V1)" data-lightbox-type="${esc(heroAsset.visualType)}" data-lightbox-caption="${esc(heroAsset.caption)}" data-lightbox-credit="${esc(heroAsset.credit)}" data-lightbox-url="${esc(heroAsset.nasaPageUrl)}">
              <img src="${esc(heroAsset.imagePath)}" alt="${esc(heroAsset.caption)}" />
              <div class="figure-overlay-top">
                <span class="media-type-badge type-photo">${esc(heroAsset.visualType)} • Asset V1</span>
                <span class="zoom-hint-pill">🔍 Click to Inspect Full Resolution</span>
              </div>
            </div>
            <figcaption class="exhibit-hero-figcaption">
              <p>${esc(heroAsset.caption)}</p>
              <div class="figcaption-meta">
                <span>Date: ${esc(heroAsset.historicalDate)} • Credit: ${esc(heroAsset.credit)}</span>
                <a href="${esc(heroAsset.nasaPageUrl)}" target="_blank" rel="noopener noreferrer">Official NASA Image Page (S7) ↗</a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Identity Dossier & Complete 5-Chapter First-Person Narrative -->
      <section class="exhibit-section" aria-labelledby="heading-identity-dossier">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 01 • ARCHIVAL IDENTITY &amp; STORYTELLING</p>
            <h2 id="heading-identity-dossier" class="section-main-title">Meet the Explorer — Verified Identity Dossier</h2>
            <p class="section-lead-text">
              Verified operational parameters, crew assignments, and primary-source narrative chapters for the Apollo 15 Lunar Roving Vehicle.
            </p>
          </div>
        </div>

        <div class="identity-layout-grid">
          <div class="dossier-table-card">
            <div class="dossier-card-header">
              <span>Verified Artifact Identity Card</span>
              <span>Sources: S1, S2, S3</span>
            </div>
            <dl class="identity-dl">
              <dt>Official Artifact</dt>
              <dd>${esc(idCard.artifact)}</dd>
              <dt>Destination &amp; Site</dt>
              <dd>${esc(idCard.destinationSite)}</dd>
              <dt>Lunar Surface Crew</dt>
              <dd>${esc(idCard.surfaceCrew)}</dd>
              <dt>Orbital Crew Note</dt>
              <dd>${esc(idCard.orbitalCrewNote)}</dd>
              <dt>Launch Date</dt>
              <dd>${esc(idCard.launchDate)} — ${esc(idCard.launchSite)}</dd>
              <dt>Lunar Landing</dt>
              <dd>${esc(idCard.lunarLandingDate)} — Lunar Module <em>${esc(idCard.lunarModuleName)}</em></dd>
              <dt>First Deployment</dt>
              <dd>${esc(idCard.firstDeploymentDate)}</dd>
              <dt>Return to Earth</dt>
              <dd>${esc(idCard.splashdownDate)} (LRV remained on the Moon)</dd>
              <dt>Primary Purpose</dt>
              <dd>${esc(idCard.primaryPurpose)}</dd>
              <dt>Prime Contractor</dt>
              <dd>${esc(idCard.builder)}</dd>
            </dl>
          </div>

          <div class="narrative-chapters-card">
            <div class="dossier-card-header" style="margin: -1.5rem -1.5rem 1rem; border-radius: 18px 18px 0 0;">
              <span>First-Person Exhibit Narrative (Full 5-Part Script)</span>
              <span>Storytelling Device</span>
            </div>
            ${script.fullStoryParagraphs
              .map(
                (ch, idx) => `
                <div class="narrative-chapter-item">
                  <h3 class="narrative-chapter-heading">0${idx + 1}. ${esc(ch.heading)}</h3>
                  <p class="narrative-chapter-text">“${esc(ch.text)}”</p>
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.2: MISSION JOURNEY — INTERACTIVE TIMELINE & TRAVERSE MAPS
           ================================================================== -->
      <section class="exhibit-section" id="sec-timeline" aria-labelledby="heading-timeline">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 02 • CHRONOLOGICAL MISSION JOURNEY</p>
            <h2 id="heading-timeline" class="section-main-title">Interactive Mission Timeline (26 July – 7 August 1971)</h2>
            <p class="section-lead-text">
              Select each chronological milestone below to inspect what happened, what the Lunar Roving Vehicle enabled, and how each excursion connected to Apollo 15's geological discoveries.
            </p>
          </div>
        </div>

        <!-- 6 Interactive Timeline Nodes -->
        <div id="timeline-nodes-mount" class="timeline-track-bar" role="tablist" aria-label="Apollo 15 Mission Timeline Dates"></div>

        <!-- Active Timeline Stage -->
        <div id="timeline-stage-mount" class="timeline-stage-panel" aria-live="polite"></div>

        <div class="editorial-disclaimer-bar" style="margin-bottom: 2rem;">
          <strong>Archival Chronology Note:</strong> ${esc(ex.timeline.chronologyNote)}
        </div>

        <!-- EVA Traverse Maps (Apollo 15 Press Kit Map & LROC Orbital Traverse Map) -->
        <div class="traverse-maps-panel">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="section-number-kicker">HADLEY–APENNINE FIELD CARTOGRAPHY</span>
              <h3 style="font-family: var(--font-display); font-size: 1.45rem;">Planned vs. Reconstructed Lunar Surface Traverses</h3>
            </div>
            <span class="media-type-badge type-drawing">Primary Cartographic Evidence</span>
          </div>

          <div class="traverse-maps-grid">
            <figure class="map-card">
              <div class="map-card-img-wrap" data-lightbox-src="assets/diagrams/eva_traverse_map.png" data-lightbox-title="Apollo 15 Planned EVA Traverse Map (Press Kit p. 22)" data-lightbox-type="Technical Drawing" data-lightbox-caption="Official pre-mission EVA Traverse Map from the NASA Apollo 15 Press Kit (p. 22) showing the Lunar Module landing site, Hadley Rille, and planned geological traverses I, II, and III." data-lightbox-credit="NASA (Apollo 15 Press Kit, 1971)" data-lightbox-url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf">
                <img src="assets/diagrams/eva_traverse_map.png" alt="Apollo 15 Planned EVA Traverse Map from Press Kit" class="invert-blueprint" />
                <div class="figure-overlay-top">
                  <span class="media-type-badge type-drawing">Technical Drawing (1971 Press Kit p. 22)</span>
                  <span class="zoom-hint-pill">🔍 Zoom Map</span>
                </div>
              </div>
              <figcaption class="exhibit-hero-figcaption">
                <strong>Pre-Mission EVA Traverse Plan (S1):</strong> Official NASA Apollo 15 Press Kit map illustrating the landing site between Hadley Rille and the Apennine Front.
              </figcaption>
            </figure>

            <figure class="map-card">
              <div class="map-card-img-wrap" data-lightbox-src="assets/photos/s2_lroc_traverses_map.png" data-lightbox-title="Apollo 15 Surface Traverses &amp; Geological Stations Map" data-lightbox-type="Orbital Image" data-lightbox-caption="NASA map of the three Apollo 15 lunar surface traverses (EVA 1 in red, EVA 2 in green to Spur Crater/Station 7, EVA 3 in blue to Hadley Rille) overlaid on orbital imagery." data-lightbox-credit="NASA / LROC" data-lightbox-url="https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/">
                <img src="assets/photos/s2_lroc_traverses_map.png" alt="Apollo 15 EVA 1, 2, and 3 Traverse Routes Map" />
                <div class="figure-overlay-top">
                  <span class="media-type-badge type-orbital">Orbital Traverse Map (S2)</span>
                  <span class="zoom-hint-pill">🔍 Zoom Map</span>
                </div>
              </div>
              <figcaption class="exhibit-hero-figcaption">
                <strong>Completed EVA 1, 2 &amp; 3 Traverse Routes (S2):</strong> Shows the routes driven by Scott and Irwin south to St. George and Spur Craters (Stations 2, 6, 7) and west to Hadley Rille (Stations 9, 9A, 10).
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.3: SCIENTIFIC DISCOVERIES — WHAT DID THE ROVER HELP US INVESTIGATE?
           ================================================================== -->
      <section class="exhibit-section" id="sec-science" aria-labelledby="heading-science">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 03 • SCIENTIFIC CONTRIBUTIONS &amp; FIELD GEOLOGY</p>
            <h2 id="heading-science" class="section-main-title">Scientific Discoveries — What Did the Rover Help Us Investigate?</h2>
            <p class="section-lead-text">
              How surface mobility transformed Apollo 15 into a wide-ranging geological expedition across the Apennine Front, Spur Crater, and Hadley Rille.
            </p>
          </div>
        </div>

        <div class="attribution-rule-banner">
          <div>
            <span class="media-type-badge type-orbital" style="margin-bottom: 0.45rem;">SCIENTIFIC ATTRIBUTION STANDARD</span>
            <p style="font-size: 0.94rem; color: var(--text-primary);">${esc(sci.attributionRule)}</p>
          </div>
        </div>

        <!-- Genesis Rock (Sample 15415) Showcase -->
        <div class="genesis-showcase-card">
          <div class="genesis-header-grid">
            <div>
              <span class="section-number-kicker">${esc(sci.genesisRock.station)}</span>
              <h3 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 0.75rem;">${esc(sci.genesisRock.title)}</h3>
              ${sci.genesisRock.narrative.map((p) => `<p style="color: var(--text-secondary); margin-bottom: 0.9rem; font-size: 0.96rem;">${esc(p)}</p>`).join("")}
            </div>

            <div>
              <div class="dossier-table-card">
                <div class="dossier-card-header">
                  <span>Sample 15415 Archival Summary</span>
                  <span>Sources: S2, S5, S6</span>
                </div>
                <dl class="identity-dl">
                  <dt>Sample ID</dt>
                  <dd>Lunar Sample 15415 ("Genesis Rock")</dd>
                  <dt>Collection Site</dt>
                  <dd>Station 7, Rim of Spur Crater (EVA 2, 1 August 1971)</dd>
                  <dt>Mineralogy</dt>
                  <dd>${esc(sci.genesisRock.classification)}</dd>
                  <dt>Analyzed Age</dt>
                  <dd>${esc(sci.genesisRock.approximateAge)}</dd>
                </dl>
              </div>

              <div class="clarification-callout">
                <strong>⚠️ ${esc(sci.genesisRock.notOldestClarification)}</strong>
              </div>
            </div>
          </div>

          <!-- Role Distinction Cards: Rover vs Astronauts vs Earth Labs -->
          <div class="roles-breakdown-grid">
            ${sci.genesisRock.roleBreakdown
              .map(
                (r) => `
                <div class="role-card">
                  <span class="role-actor">${esc(r.actor)}</span>
                  <p style="font-size: 0.9rem; color: var(--text-secondary);">${esc(r.contribution)}</p>
                </div>`
              )
              .join("")}
          </div>

          <!-- Surface Photo (V4) vs Earth Laboratory Photo (V5) Side-by-Side Comparison -->
          <div class="genesis-visual-comparison-grid">
            ${sci.genesisRock.visualComparison
              .map(
                (vc) => `
                <figure class="comparison-figure-card">
                  <div class="comparison-img-wrap" data-lightbox-src="${esc(vc.imagePath)}" data-lightbox-title="${esc(vc.title)} (Asset ${esc(vc.assetId)})" data-lightbox-type="${esc(vc.badge)}" data-lightbox-caption="${esc(vc.caption)}" data-lightbox-credit="${esc(vc.credit)}" data-lightbox-url="${esc(vc.sourceUrl)}">
                    <img src="${esc(vc.imagePath)}" alt="${esc(vc.title)}" />
                    <div class="figure-overlay-top">
                      <span class="media-type-badge ${getBadgeClass(vc.badge)}">Asset ${esc(vc.assetId)} • ${esc(vc.badge)}</span>
                      <span class="zoom-hint-pill">🔍 Inspect</span>
                    </div>
                  </div>
                  <figcaption class="exhibit-hero-figcaption">
                    <strong style="color: var(--text-primary); display: block; margin-bottom: 0.3rem;">${esc(vc.title)}</strong>
                    <p>${esc(vc.caption)}</p>
                    <div class="figcaption-meta">
                      <span>Date: ${esc(vc.date)} • Credit: ${esc(vc.credit)}</span>
                      <a href="${esc(vc.sourceUrl)}" target="_blank" rel="noopener noreferrer">Official NASA Source ↗</a>
                    </div>
                  </figcaption>
                </figure>`
              )
              .join("")}
          </div>
        </div>

        <!-- Hadley Rille & Apennine Front Geological Exploration -->
        <div class="genesis-showcase-card" style="margin-bottom: 2.25rem;">
          <span class="section-number-kicker">MULTI-TERRAIN LUNAR GEOLOGY</span>
          <h3 style="font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 0.75rem;">${esc(sci.hadleyRilleAndApennine.title)}</h3>
          ${sci.hadleyRilleAndApennine.narrative.map((p) => `<p style="color: var(--text-secondary); margin-bottom: 0.85rem; font-size: 0.96rem;">${esc(p)}</p>`).join("")}

          <div class="roles-breakdown-grid" style="margin-top: 1.5rem; margin-bottom: 0;">
            ${sci.hadleyRilleAndApennine.geologicalTargets
              .map(
                (gt) => `
                <div class="role-card">
                  <span class="role-actor">${esc(gt.feature)}</span>
                  <p style="font-size: 0.9rem; color: var(--text-secondary);">${esc(gt.significance)}</p>
                </div>`
              )
              .join("")}
          </div>
        </div>

        <!-- Quantitative Mission Performance Metrics -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.55rem;">${esc(sci.quantitativePerformance.title)}</h3>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-secondary);">Source: ${esc(sci.quantitativePerformance.metricSource)}</span>
          </div>

          <div class="metrics-grid">
            ${sci.quantitativePerformance.metrics
              .map(
                (m) => `
                <div class="metric-card">
                  <div class="metric-val">${esc(m.value)}</div>
                  <div class="metric-label">${esc(m.label)}</div>
                  <p class="metric-note">${esc(m.note)}</p>
                </div>`
              )
              .join("")}
          </div>

          <div class="editorial-disclaimer-bar">
            <strong>${esc(sci.quantitativePerformance.openVerificationWarning)}</strong>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.4: CHALLENGES, FAILURES, AND ADAPTATION
           ================================================================== -->
      <section class="exhibit-section" id="sec-challenges" aria-labelledby="heading-challenges">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 04 • ENGINEERING RESILIENCE IN AN ALIEN ENVIRONMENT</p>
            <h2 id="heading-challenges" class="section-main-title">Challenges, Hardware Anomalies &amp; Operational Adaptation</h2>
            <p class="section-lead-text">
              Operating the first crewed vehicle on another world meant confronting hard vacuum, +250°F surface temperatures, 1/6th gravity, a first-traverse front-steering failure, and strict life-support safety limits.
            </p>
          </div>
        </div>

        <div class="challenges-grid">
          ${ex.challengesAndAdaptation
            .map(
              (ch) => `
              <article class="challenge-card">
                <div>
                  <div class="challenge-badge">${esc(ch.badge)}</div>
                  <h3 class="challenge-title">${esc(ch.title)}</h3>
                  <p class="challenge-summary">${esc(ch.summary)}</p>
                  <ul class="challenge-detail-list">
                    ${ch.details.map((d) => `<li>${esc(d)}</li>`).join("")}
                  </ul>
                </div>
                <div class="challenge-verification-foot">
                  ${esc(ch.verificationStatusNote)}
                </div>
              </article>`
            )
            .join("")}
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.5: ENGINEERING BEHIND IT — HOW DID IT WORK?
           ================================================================== -->
      <section class="exhibit-section" id="sec-engineering" aria-labelledby="heading-engineering">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 05 • PRIMARY-SOURCE TECHNICAL ARCHITECTURE (NASA APOLLO 15 PRESS KIT)</p>
            <h2 id="heading-engineering" class="section-main-title">Engineering Behind It — How Did the Lunar Roving Vehicle Work?</h2>
            <p class="section-lead-text">
              Explore the official 1971 NASA Apollo 15 Press Kit technical schematics, interactive component callouts, all nine engineering subsystems, pre-mission design specifications, and hardware category distinctions.
            </p>
          </div>
        </div>

        <!-- Strict 3D Model Policy Banner -->
        <div class="model-policy-banner">
          <div style="max-width: 920px;">
            <span class="media-type-badge type-drawing" style="margin-bottom: 0.45rem;">${esc(eng.modelPolicyNotice.badgeText)} • ${esc(eng.modelPolicyNotice.status)}</span>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${esc(eng.modelPolicyNotice.explanation)}</p>
          </div>
          <a href="https://science.nasa.gov/3d-resources/" target="_blank" rel="noopener noreferrer" class="btn-museum-secondary">
            <span>NASA 3D Catalog (S11) ↗</span>
          </a>
        </div>

        <!-- Interactive NASA Press Kit Blueprint Inspector -->
        <div class="blueprint-inspector">
          <div class="blueprint-toolbar">
            <div id="diagram-tabs-mount" class="diagram-tabs-row" role="tablist" aria-label="NASA Apollo 15 Press Kit Engineering Diagrams"></div>
            <div class="blueprint-view-controls">
              <button type="button" id="toggle-scan-mode-btn" class="diagram-tab-btn">
                <span>Switch to 1971 Original Scan</span>
              </button>
              <button type="button" id="zoom-current-diagram-btn" class="diagram-tab-btn">
                <span>🔍 Full-Res Lightbox</span>
              </button>
            </div>
          </div>

          <div class="blueprint-stage-grid">
            <div id="blueprint-canvas-wrap" class="blueprint-canvas-wrap scan-mode-blueprint">
              <div id="blueprint-image-inner" class="blueprint-image-inner">
                <!-- Populated dynamically by renderBlueprintInspector() -->
              </div>
            </div>
            <aside id="blueprint-sidebar-mount" class="blueprint-inspector-sidebar" aria-live="polite">
              <!-- Populated dynamically by renderBlueprintInspector() -->
            </aside>
          </div>
        </div>

        <!-- All 9 Engineering Subsystems Grid -->
        <div style="margin-bottom: 1.25rem;">
          <span class="section-number-kicker">COMPLETE SUBSYSTEM BREAKDOWN (PROMPT SECTION 5.5)</span>
          <h3 style="font-family: var(--font-display); font-size: 1.65rem;">Nine Core &amp; Deployment Systems of the Apollo 15 LRV</h3>
        </div>

        <div id="subsystems-grid-mount" class="subsystems-grid">
          ${eng.subsystems
            .map(
              (sys) => `
              <article class="subsystem-card" id="card-${esc(sys.id)}" data-subsystem-card="${esc(sys.id)}">
                <div>
                  <div class="subsystem-top-row">
                    <span class="subsystem-num">SYSTEM ${esc(sys.number)}</span>
                    <span class="subsystem-callout-tag">${esc(sys.calloutCode)}</span>
                  </div>
                  <h4 class="subsystem-title">${esc(sys.name)}</h4>
                  <p class="subsystem-short">${esc(sys.shortSummary)}</p>
                  <ul class="subsystem-details-list">
                    ${sys.technicalDetails.map((td) => `<li>${esc(td)}</li>`).join("")}
                  </ul>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle);">
                  <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">${esc(sys.pressKitRef)}</span>
                  <button type="button" class="diagram-tab-btn" data-select-diagram="${esc(sys.diagramId)}">View Schematic ↑</button>
                </div>
              </article>`
            )
            .join("")}
        </div>

        <!-- Pre-Mission Design Specifications Table -->
        <div class="specs-table-wrapper">
          <div class="dossier-card-header">
            <span>Pre-Mission Design Specifications Table (NASA Apollo 15 Press Kit, S1)</span>
            <span>Pre-Mission Design Data — Distinct from Post-Mission Surface Metrics</span>
          </div>
          <div style="padding: 0.85rem 1.25rem; background: rgba(56, 189, 248, 0.08); border-bottom: 1px solid var(--border-subtle); font-size: 0.85rem; color: #bae6fd;">
            ${esc(eng.specificationsNote)}
          </div>
          <table class="specs-table">
            <thead>
              <tr>
                <th>Engineering Parameter</th>
                <th>Apollo 15 Press Kit Design Specification</th>
                <th>Primary Source Reference</th>
              </tr>
            </thead>
            <tbody>
              ${eng.designSpecifications
                .map(
                  (row) => `
                  <tr>
                    <td style="font-weight: 600; color: var(--text-primary);">${esc(row.spec)}</td>
                    <td style="color: #93c5fd; font-family: var(--font-mono); font-size: 0.84rem;">${esc(row.value)}</td>
                    <td style="color: var(--text-muted); font-size: 0.82rem;">${esc(row.sourceNote)}</td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <!-- Hardware Category Distinctions: Core vs Auxiliary + The ALSEP Distinction -->
        <div class="distinctions-grid">
          <!-- Auxiliary / Stowed Equipment Card -->
          <div class="distinction-panel">
            <div>
              <span class="media-type-badge type-drawing" style="margin-bottom: 0.65rem;">CATEGORY DISTINCTION 01</span>
              <h3 style="font-family: var(--font-display); font-size: 1.45rem; margin-bottom: 0.35rem;">${esc(eng.categoryDistinctions.auxiliaryEquipment.title)}</h3>
              <p style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-secondary); margin-bottom: 0.9rem;">${esc(eng.categoryDistinctions.auxiliaryEquipment.subtitle)}</p>
              <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.15rem;">${esc(eng.categoryDistinctions.auxiliaryEquipment.explanation)}</p>

              <ul class="challenge-detail-list">
                ${eng.categoryDistinctions.auxiliaryEquipment.items
                  .map((it) => `<li><strong style="color: var(--text-primary);">${esc(it.name)}:</strong> ${esc(it.role)}</li>`)
                  .join("")}
              </ul>
            </div>

            <figure class="map-card" style="margin-top: 1rem;">
              <div class="map-card-img-wrap" style="height: 220px;" data-lightbox-src="${esc(eng.categoryDistinctions.auxiliaryEquipment.diagramImage)}" data-lightbox-title="GCTA &amp; LCRU Auxiliary Communications System (Press Kit p. 100)" data-lightbox-type="Technical Drawing" data-lightbox-caption="${esc(eng.categoryDistinctions.auxiliaryEquipment.diagramCaption)}" data-lightbox-credit="NASA (Apollo 15 Press Kit, p. 100)" data-lightbox-url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf">
                <img src="${esc(eng.categoryDistinctions.auxiliaryEquipment.diagramImage)}" alt="GCTA and LCRU Auxiliary Communications System Diagram" class="invert-blueprint" />
                <div class="figure-overlay-top">
                  <span class="media-type-badge type-drawing">Technical Drawing (p. 100)</span>
                  <span class="zoom-hint-pill">🔍 Inspect</span>
                </div>
              </div>
              <figcaption class="exhibit-hero-figcaption">${esc(eng.categoryDistinctions.auxiliaryEquipment.diagramCaption)}</figcaption>
            </figure>
          </div>

          <!-- The ALSEP Distinction Card -->
          <div class="distinction-panel panel-alsep-warning">
            <div>
              <span class="media-type-badge type-lab" style="margin-bottom: 0.65rem;">CRITICAL ACCURACY RULE • ALSEP DISTINCTION</span>
              <h3 style="font-family: var(--font-display); font-size: 1.45rem; margin-bottom: 0.35rem;">${esc(eng.categoryDistinctions.alsepDistinction.title)}</h3>
              <div class="clarification-callout" style="margin-top: 0.65rem;">
                <strong>${esc(eng.categoryDistinctions.alsepDistinction.warningText)}</strong>
              </div>
              <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.15rem;">${esc(eng.categoryDistinctions.alsepDistinction.explanation)}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem;">
              <figure class="map-card">
                <div class="map-card-img-wrap" style="height: 195px; padding: 0;" data-lightbox-src="${esc(eng.categoryDistinctions.alsepDistinction.photoPath)}" data-lightbox-title="Asset V7 — LRV and Separate ALSEP Station on the Lunar Surface" data-lightbox-type="Historical Photograph" data-lightbox-caption="${esc(eng.categoryDistinctions.alsepDistinction.photoCaption)}" data-lightbox-credit="NASA (AS15-85-11471)" data-lightbox-url="https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/">
                  <img src="${esc(eng.categoryDistinctions.alsepDistinction.photoPath)}" alt="Scott on LRV with separate ALSEP visible in background" style="width:100%; height:100%; object-fit:cover; max-height:none;" />
                  <div class="figure-overlay-top">
                    <span class="media-type-badge type-photo">Asset V7</span>
                  </div>
                </div>
                <figcaption class="exhibit-hero-figcaption" style="font-size: 0.75rem;">
                  <strong>Asset V7 (1 Aug 1971):</strong> Scott on the LRV with the separate ALSEP station visible in the background.
                </figcaption>
              </figure>

              <figure class="map-card">
                <div class="map-card-img-wrap" style="height: 195px;" data-lightbox-src="${esc(eng.categoryDistinctions.alsepDistinction.diagramPath)}" data-lightbox-title="ALSEP Array Layout (Apollo 15 Press Kit p. 42)" data-lightbox-type="Technical Drawing" data-lightbox-caption="${esc(eng.categoryDistinctions.alsepDistinction.diagramCaption)}" data-lightbox-credit="NASA (Apollo 15 Press Kit, p. 42)" data-lightbox-url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf">
                  <img src="${esc(eng.categoryDistinctions.alsepDistinction.diagramPath)}" alt="ALSEP Array Layout Diagram" class="invert-blueprint" />
                  <div class="figure-overlay-top">
                    <span class="media-type-badge type-drawing">Press Kit p. 42</span>
                  </div>
                </div>
                <figcaption class="exhibit-hero-figcaption" style="font-size: 0.75rem;">
                  <strong>Independent ALSEP Array:</strong> Deployed ~300 ft west of Falcon; powered by its own SNAP-27 RTG.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.6 & 5.7: FINAL CHAPTER & LEGACY
           ================================================================== -->
      <section class="exhibit-section" id="sec-final-chapter" aria-labelledby="heading-final-chapter">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 06 &amp; 07 • FINAL RESTING PLACE, ORBITAL REDISCOVERY &amp; LEGACY</p>
            <h2 id="heading-final-chapter" class="section-main-title">Final Chapter — Where Did It Go, and What Legacy Did It Leave?</h2>
          </div>
        </div>

        <div class="first-person-voice-box" style="margin-bottom: 2rem;">
          <div class="voice-kicker">
            <span>ARTIFACT CLOSING NARRATION • HADLEY–APENNINE VALLEY</span>
            <span>INTERPRETIVE STORYTELLING VOICE</span>
          </div>
          <blockquote class="voice-quote">
            “${esc(finalCh.closingQuote)}”
          </blockquote>
        </div>

        <div class="genesis-header-grid" style="margin-bottom: 2.25rem;">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.55rem; margin-bottom: 0.85rem;">Left Behind in the Lunar Silence (2 August 1971 – Present)</h3>
            ${finalCh.whereDidItGo.map((p) => `<p style="color: var(--text-secondary); margin-bottom: 0.9rem; font-size: 0.96rem;">${esc(p)}</p>`).join("")}
          </div>

          <div class="genesis-visual-comparison-grid" style="grid-template-columns: 1fr; gap: 1.25rem;">
            <!-- Surface Final Parking Photo -->
            <figure class="comparison-figure-card">
              <div class="comparison-img-wrap" style="height: 230px;" data-lightbox-src="${esc(finalCh.surfaceFinalAsset.imagePath)}" data-lightbox-title="${esc(finalCh.surfaceFinalAsset.title)}" data-lightbox-type="${esc(finalCh.surfaceFinalAsset.visualType)}" data-lightbox-caption="${esc(finalCh.surfaceFinalAsset.caption)}" data-lightbox-credit="${esc(finalCh.surfaceFinalAsset.credit)}" data-lightbox-url="${esc(finalCh.surfaceFinalAsset.sourceUrl)}">
                <img src="${esc(finalCh.surfaceFinalAsset.imagePath)}" alt="${esc(finalCh.surfaceFinalAsset.title)}" />
                <div class="figure-overlay-top">
                  <span class="media-type-badge type-photo">${esc(finalCh.surfaceFinalAsset.visualType)} • 2 Aug 1971</span>
                  <span class="zoom-hint-pill">🔍 Inspect</span>
                </div>
              </div>
              <figcaption class="exhibit-hero-figcaption">
                <strong>${esc(finalCh.surfaceFinalAsset.title)}:</strong> ${esc(finalCh.surfaceFinalAsset.caption)} (Credit: ${esc(finalCh.surfaceFinalAsset.credit)})
              </figcaption>
            </figure>

            <!-- LRO Orbital Image V6 (PIA13058) -->
            <figure class="comparison-figure-card">
              <div class="comparison-img-wrap" style="height: 250px;" data-lightbox-src="${esc(finalCh.orbitalEvidenceAsset.imagePath)}" data-lightbox-title="${esc(finalCh.orbitalEvidenceAsset.title)} (Asset V6)" data-lightbox-type="${esc(finalCh.orbitalEvidenceAsset.visualType)}" data-lightbox-caption="${esc(finalCh.orbitalEvidenceAsset.caption)}" data-lightbox-credit="${esc(finalCh.orbitalEvidenceAsset.credit)}" data-lightbox-url="${esc(finalCh.orbitalEvidenceAsset.sourceUrl)}">
                <img src="${esc(finalCh.orbitalEvidenceAsset.imagePath)}" alt="${esc(finalCh.orbitalEvidenceAsset.title)}" />
                <div class="figure-overlay-top">
                  <span class="media-type-badge type-orbital">Asset V6 • ${esc(finalCh.orbitalEvidenceAsset.visualType)} (PIA13058)</span>
                  <span class="zoom-hint-pill">🔍 Inspect Orbital Tracks</span>
                </div>
              </div>
              <figcaption class="exhibit-hero-figcaption">
                <strong>${esc(finalCh.orbitalEvidenceAsset.title)}:</strong> ${esc(finalCh.orbitalEvidenceAsset.caption)}
                <div class="figcaption-meta">
                  <span>${esc(finalCh.orbitalEvidenceAsset.date)} • Credit: ${esc(finalCh.orbitalEvidenceAsset.credit)}</span>
                  <a href="${esc(finalCh.orbitalEvidenceAsset.sourceUrl)}" target="_blank" rel="noopener noreferrer">NASA Photojournal (S9) ↗</a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Section 5.7: Legacy (Confirmed Historical Facts vs Broader Interpretations) -->
        <div class="distinctions-grid">
          <div class="distinction-panel">
            <div>
              <span class="media-type-badge type-orbital" style="margin-bottom: 0.65rem;">CONFIRMED HISTORICAL FACTS</span>
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 1rem;">Documented Mission &amp; Engineering Achievements</h3>
              <div style="display: flex; flex-direction: column; gap: 0.9rem;">
                ${finalCh.legacyPoints.historicalFacts
                  .map(
                    (f) => `
                    <div class="tl-detail-box box-rover-enabled">
                      <span class="tl-detail-box-label" style="color: var(--text-primary);">${esc(f.title)}</span>
                      <p>${esc(f.text)}</p>
                    </div>`
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div class="distinction-panel">
            <div>
              <span class="media-type-badge type-photo" style="margin-bottom: 0.65rem;">BROADER HISTORICAL INTERPRETATION</span>
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 1rem;">Place in the Story of Planetary Exploration</h3>
              <div style="display: flex; flex-direction: column; gap: 0.9rem;">
                ${finalCh.legacyPoints.broaderInterpretations
                  .map(
                    (bi) => `
                    <div class="tl-detail-box box-science">
                      <span class="tl-detail-box-label" style="color: var(--text-primary);">${esc(bi.title)}</span>
                      <p>${esc(bi.text)}</p>
                    </div>`
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           SECTION 5.8: SOURCES, CREDITS & VISUAL EVIDENCE REGISTER
           ================================================================== -->
      <section class="exhibit-section" id="sec-sources" aria-labelledby="heading-sources">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 08 • VERIFIED DOCUMENTATION &amp; PROVENANCE</p>
            <h2 id="heading-sources" class="section-main-title">Visual Evidence Register (V1–V7) &amp; Primary NASA Sources (S1–S11)</h2>
            <p class="section-lead-text">
              Every photograph, laboratory image, technical drawing, and orbital scan in this pilot exhibit is traced to its official NASA source with explicit media-type classification and credit preservation.
            </p>
          </div>
        </div>

        <!-- Visual Evidence Cards V1-V7 -->
        <div class="visual-register-grid">
          ${ex.visual_assets
            .map(
              (va) => `
              <article class="register-asset-card">
                <div class="register-asset-thumb" data-lightbox-src="${esc(va.imagePath)}" data-lightbox-title="Asset ${esc(va.id)} — ${esc(va.title)}" data-lightbox-type="${esc(va.visualType)}" data-lightbox-caption="${esc(va.caption)}" data-lightbox-credit="${esc(va.credit)}" data-lightbox-url="${esc(va.nasaPageUrl)}">
                  <img src="${esc(va.imagePath)}" alt="${esc(va.title)}" loading="lazy" />
                  <div class="figure-overlay-top">
                    <span class="media-type-badge ${getBadgeClass(va.visualType)}">Asset ${esc(va.id)} • ${esc(va.visualType)}</span>
                    <span class="zoom-hint-pill">🔍 Inspect</span>
                  </div>
                </div>
                <div class="register-asset-body">
                  <div>
                    <h4 style="font-family: var(--font-heading); font-size: 1.05rem; margin-bottom: 0.35rem;">${esc(va.title)}</h4>
                    <p style="font-size: 0.83rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${esc(va.caption)}</p>
                  </div>
                  <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.65rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
                    <div><strong>Date:</strong> ${esc(va.historicalDate)}</div>
                    <div><strong>Credit:</strong> ${esc(va.credit)}</div>
                    <div style="margin-top: 0.35rem;">
                      <a href="${esc(va.nasaPageUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-secondary);">Official NASA Page ↗</a>
                      &nbsp;•&nbsp;
                      <a href="${esc(va.originalFileUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-secondary);">Direct NASA File ↗</a>
                    </div>
                  </div>
                </div>
              </article>`
            )
            .join("")}
        </div>

        <!-- Primary Source Register S1-S11 -->
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 1rem;">Official NASA Source Register (S1–S11)</h3>
        <div class="sources-list-grid">
          ${ex.sources
            .map(
              (s) => `
              <div class="source-item-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <span class="media-type-badge">${esc(s.id)}</span>
                  <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-secondary); text-decoration: none;">Open Official NASA Source ↗</a>
                </div>
                <h4 style="font-family: var(--font-heading); font-size: 0.98rem; margin-bottom: 0.35rem;">${esc(s.title)}</h4>
                <p style="font-size: 0.84rem; color: var(--text-secondary);">${esc(s.role)}</p>
              </div>`
            )
            .join("")}
        </div>

        <!-- Open Verification Log (Research Report Section 10) -->
        <div class="dossier-table-card">
          <div class="dossier-card-header">
            <span>Archival Open Verification Log (Research Dossier Section 10)</span>
            <span>Transparency &amp; Accuracy Standard</span>
          </div>
          <table class="specs-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Verification Status</th>
                <th>Archival Handling in Pilot Build</th>
              </tr>
            </thead>
            <tbody>
              ${ex.openVerificationItems
                .map(
                  (ov) => `
                  <tr>
                    <td style="font-family: var(--font-mono); color: var(--accent-secondary);">#0${esc(ov.itemNumber)}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-primary);">${esc(ov.status)}</td>
                    <td style="color: var(--text-secondary); font-size: 0.86rem;">${esc(ov.description)}</td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;

    renderTimelineComponent();
    renderBlueprintInspector();
  }

  // ============================================================================
  // 6. INTERACTIVE MISSION TIMELINE CONTROLLER
  // ============================================================================
  function renderTimelineComponent() {
    const nodesMount = document.getElementById("timeline-nodes-mount");
    const stageMount = document.getElementById("timeline-stage-mount");
    if (!nodesMount || !stageMount) return;

    const events = DATA.pilotExhibit.timeline.events;
    const activeIdx = state.selectedTimelineIndex;
    const ev = events[activeIdx];

    nodesMount.innerHTML = events
      .map(
        (item, idx) => `
        <button type="button" class="timeline-node-btn ${idx === activeIdx ? "is-active" : ""}" data-timeline-idx="${idx}" role="tab" aria-selected="${idx === activeIdx}">
          <span class="tl-step-num">EVENT ${esc(item.stepNumber)} // 1971</span>
          <span class="tl-node-date">${esc(item.date)}</span>
          <span class="tl-node-title">${esc(item.shortTitle)}</span>
        </button>`
      )
      .join("");

    const prevIdx = (activeIdx - 1 + events.length) % events.length;
    const nextIdx = (activeIdx + 1) % events.length;

    stageMount.innerHTML = `
      <div class="timeline-stage-content">
        <div>
          <p class="tl-stage-phase">EVENT ${esc(ev.stepNumber)} OF 0${events.length} • ${esc(ev.missionPhase)}</p>
          <h3 class="tl-stage-date-heading">${esc(ev.date)} — ${esc(ev.shortTitle)}</h3>
          <div class="tl-rover-status-pill">
            <span>ROVER STATUS: ${esc(ev.roverStatus)}</span>
          </div>

          <div class="tl-detail-blocks">
            <div class="tl-detail-box">
              <span class="tl-detail-box-label">What Happened</span>
              <p>${esc(ev.whatHappened)}</p>
            </div>
            <div class="tl-detail-box box-rover-enabled">
              <span class="tl-detail-box-label" style="color: #bae6fd;">What the Lunar Roving Vehicle Enabled</span>
              <p>${esc(ev.whatRoverEnabled)}</p>
            </div>
            <div class="tl-detail-box box-science">
              <span class="tl-detail-box-label" style="color: #6ee7b7;">Scientific &amp; Mission Connection</span>
              <p>${esc(ev.scientificConnection)}</p>
            </div>
          </div>
        </div>

        <div class="tl-stage-nav-footer">
          <button type="button" class="diagram-tab-btn" data-timeline-idx="${prevIdx}">
            ← Prev: ${esc(events[prevIdx].date)}
          </button>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
            Sources: ${esc(ev.sourceIds.join(", "))}
          </span>
          <button type="button" class="diagram-tab-btn" data-timeline-idx="${nextIdx}">
            Next: ${esc(events[nextIdx].date)} →
          </button>
        </div>
      </div>

      <figure class="timeline-stage-media">
        <div class="tl-media-img-container" data-lightbox-src="${esc(ev.imagePath)}" data-lightbox-title="${esc(ev.date)} — ${esc(ev.shortTitle)}" data-lightbox-type="${esc(ev.imageType)}" data-lightbox-caption="${esc(ev.imageCaption)}" data-lightbox-credit="${esc(ev.imageCredit)}" data-lightbox-url="https://www.nasa.gov/mission/apollo-15/">
          <img src="${esc(ev.imagePath)}" alt="${esc(ev.imageCaption)}" />
          <div class="figure-overlay-top">
            <span class="media-type-badge ${getBadgeClass(ev.imageType)}">${esc(ev.imageType)} • ${esc(ev.imageAssetId)}</span>
            <span class="zoom-hint-pill">🔍 Click to Zoom</span>
          </div>
        </div>
        <figcaption class="exhibit-hero-figcaption">
          <p>${esc(ev.imageCaption)}</p>
          <div class="figcaption-meta">
            <span>Historical Date: ${esc(ev.imageDate)} • Credit: ${esc(ev.imageCredit)}</span>
          </div>
        </figcaption>
      </figure>
    `;
  }

  // ============================================================================
  // 7. INTERACTIVE NASA PRESS KIT BLUEPRINT INSPECTOR CONTROLLER
  // ============================================================================
  function renderBlueprintInspector() {
    const tabsMount = document.getElementById("diagram-tabs-mount");
    const canvasWrap = document.getElementById("blueprint-canvas-wrap");
    const imageInner = document.getElementById("blueprint-image-inner");
    const sidebarMount = document.getElementById("blueprint-sidebar-mount");
    const scanModeBtn = document.getElementById("toggle-scan-mode-btn");
    const zoomBtn = document.getElementById("zoom-current-diagram-btn");

    if (!tabsMount || !canvasWrap || !imageInner || !sidebarMount) return;

    const diagrams = DATA.pilotExhibit.engineering_systems.diagrams;
    const currentDiag = diagrams.find((d) => d.id === state.selectedDiagramId) || diagrams[0];

    // Ensure selectedHotspotId belongs to current diagram if hotspots exist
    let activeHotspot = null;
    if (currentDiag.hotspots && currentDiag.hotspots.length > 0) {
      activeHotspot =
        currentDiag.hotspots.find((h) => h.id === state.selectedHotspotId) ||
        currentDiag.hotspots[0];
      state.selectedHotspotId = activeHotspot.id;
    }

    // Render diagram selector tabs
    const shortTabLabels = {
      diag_isometric: "1. Subsystem Callouts (p.79)",
      diag_ortho: "2. Dimensions 3-View (p.80)",
      diag_payload: "3. Stowed Payload (p.81)",
      diag_wheel: "4. Wire-Mesh Wheel (p.84)",
      diag_console: "5. Control Console (p.87)",
      diag_controller: "6. Hand Controller (p.88)",
      diag_deployment: "7. Deployment Sequence (p.94)"
    };

    tabsMount.innerHTML = diagrams
      .map(
        (d) => `
        <button type="button" class="diagram-tab-btn ${d.id === currentDiag.id ? "is-active" : ""}" data-select-diagram="${esc(d.id)}" role="tab" aria-selected="${d.id === currentDiag.id}">
          ${esc(shortTabLabels[d.id] || d.title)}
        </button>`
      )
      .join("");

    // Update scan mode class
    canvasWrap.classList.toggle("scan-mode-blueprint", state.blueprintScanMode === "blueprint");
    canvasWrap.classList.toggle("scan-mode-original", state.blueprintScanMode === "original");
    if (scanModeBtn) {
      scanModeBtn.textContent =
        state.blueprintScanMode === "blueprint"
          ? "Switch to 1971 Original Paper Scan"
          : "Switch to Blueprint Dark Mode";
    }

    if (zoomBtn) {
      zoomBtn.setAttribute("data-lightbox-src", currentDiag.imagePath);
      zoomBtn.setAttribute("data-lightbox-title", currentDiag.title);
      zoomBtn.setAttribute("data-lightbox-type", currentDiag.visualType);
      zoomBtn.setAttribute("data-lightbox-caption", currentDiag.caption);
      zoomBtn.setAttribute("data-lightbox-credit", currentDiag.credit);
      zoomBtn.setAttribute("data-lightbox-url", currentDiag.sourceUrl);
    }

    // Render diagram image and interactive hotspot pins
    const hotspotsHtml = (currentDiag.hotspots || [])
      .map(
        (hs) => `
        <button type="button" class="diagram-hotspot-pin ${activeHotspot && hs.id === activeHotspot.id ? "is-selected" : ""}" style="left: ${hs.x}%; top: ${hs.y}%;" data-hotspot-id="${esc(hs.id)}" data-system-ref="${esc(hs.systemRef)}" title="${esc(hs.label)}">
          ${esc(hs.code)}
        </button>`
      )
      .join("");

    imageInner.innerHTML = `
      <img src="${esc(currentDiag.imagePath)}" alt="${esc(currentDiag.title)}" />
      ${hotspotsHtml}
    `;

    // Render sidebar details
    sidebarMount.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="media-type-badge type-drawing">${esc(currentDiag.visualType)} • Asset V3</span>
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">${esc(currentDiag.pressKitPage)}</span>
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.55rem;">${esc(currentDiag.title)}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${esc(currentDiag.caption)}</p>

        ${
          activeHotspot
            ? `
            <div class="tl-detail-box box-rover-enabled" style="margin-bottom: 1.15rem;">
              <span class="tl-detail-box-label" style="color: var(--accent-secondary);">SELECTED CALLOUT PIN // ${esc(activeHotspot.code)}</span>
              <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 0.35rem; color: var(--text-primary);">${esc(activeHotspot.label)}</h4>
              <p style="font-size: 0.86rem;">${esc(activeHotspot.detail)}</p>
              <button type="button" class="diagram-tab-btn" style="margin-top: 0.75rem;" data-scroll-subsystem="${esc(activeHotspot.systemRef)}">
                Highlight Subsystem Card ↓
              </button>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${currentDiag.hotspots
                .map(
                  (h) => `
                  <button type="button" class="diagram-tab-btn ${h.id === activeHotspot.id ? "is-active" : ""}" data-hotspot-id="${esc(h.id)}">
                    Pin ${esc(h.code)}
                  </button>`
                )
                .join("")}
            </div>`
            : `
            <div class="tl-detail-box">
              <span class="tl-detail-box-label">PRIMARY SOURCE TECHNICAL SCHEMATIC</span>
              <p style="font-size: 0.86rem;">Use the "Full-Res Lightbox" button above to inspect every callout table and engineering measurement at full archival resolution.</p>
            </div>`
        }
      </div>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.9rem; margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
        <div>Credit: ${esc(currentDiag.credit)}</div>
        <div style="margin-top: 0.35rem;">
          <a href="${esc(currentDiag.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-secondary);">Download Official NASA Apollo 15 Press Kit PDF (S1) ↗</a>
        </div>
      </div>
    `;
  }

  // ============================================================================
  // 8. FULL-RESOLUTION ARCHIVAL LIGHTBOX CONTROLLER
  // ============================================================================
  function openLightbox({ src, title, type, caption, credit, url }) {
    const modal = document.getElementById("archival-lightbox");
    const img = document.getElementById("lightbox-image");
    const titleEl = document.getElementById("lightbox-title");
    const badgeEl = document.getElementById("lightbox-badge");
    const captionEl = document.getElementById("lightbox-caption");
    const creditEl = document.getElementById("lightbox-credit");
    const linkEl = document.getElementById("lightbox-source-link");

    if (!modal || !img) return;

    img.src = src || "";
    img.alt = title || "Archival NASA visual";
    if (titleEl) titleEl.textContent = title || "";
    if (badgeEl) {
      badgeEl.textContent = type || "Historical Photograph";
      badgeEl.className = `media-type-badge ${getBadgeClass(type)}`;
    }
    if (captionEl) captionEl.textContent = caption || "";
    if (creditEl) creditEl.textContent = `Credit: ${credit || "NASA"}`;
    if (linkEl) {
      linkEl.href = url || "https://www.nasa.gov/mission/apollo-15/";
    }

    modal.classList.add("is-open");
  }

  function closeLightbox() {
    const modal = document.getElementById("archival-lightbox");
    if (modal) modal.classList.remove("is-open");
  }

  // ============================================================================
  // 9. GLOBAL EVENT DELEGATION & INITIALIZATION
  // ============================================================================
  function bindEvents() {
    document.addEventListener("click", (e) => {
      // 1. Lightbox trigger (check before navigation so buttons inside cards work cleanly)
      const lbTrigger = e.target.closest("[data-lightbox-src]");
      if (lbTrigger) {
        e.stopPropagation();
        openLightbox({
          src: lbTrigger.getAttribute("data-lightbox-src"),
          title: lbTrigger.getAttribute("data-lightbox-title"),
          type: lbTrigger.getAttribute("data-lightbox-type"),
          caption: lbTrigger.getAttribute("data-lightbox-caption"),
          credit: lbTrigger.getAttribute("data-lightbox-credit"),
          url: lbTrigger.getAttribute("data-lightbox-url")
        });
        return;
      }

      // 2. View Navigation trigger
      const navTrigger = e.target.closest("[data-nav-view]");
      if (navTrigger) {
        e.preventDefault();
        const targetView = navTrigger.getAttribute("data-nav-view");
        navigateToView(targetView);
        return;
      }

      // 3. Timeline Node selection
      const tlBtn = e.target.closest("[data-timeline-idx]");
      if (tlBtn) {
        state.selectedTimelineIndex = Number(tlBtn.getAttribute("data-timeline-idx"));
        renderTimelineComponent();
        return;
      }

      // 4. Diagram selection tab or "View Schematic" button on subsystem card
      const diagBtn = e.target.closest("[data-select-diagram]");
      if (diagBtn) {
        state.selectedDiagramId = diagBtn.getAttribute("data-select-diagram");
        state.selectedHotspotId = null;
        renderBlueprintInspector();
        const inspector = document.querySelector(".blueprint-inspector");
        if (inspector && diagBtn.closest(".subsystem-card")) {
          inspector.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // 5. Blueprint Hotspot Pin click
      const hsBtn = e.target.closest("[data-hotspot-id]");
      if (hsBtn) {
        state.selectedHotspotId = hsBtn.getAttribute("data-hotspot-id");
        renderBlueprintInspector();
        return;
      }

      // 6. Scroll to & highlight Subsystem Card from Hotspot sidebar
      const scrollSysBtn = e.target.closest("[data-scroll-subsystem]");
      if (scrollSysBtn) {
        const sysId = scrollSysBtn.getAttribute("data-scroll-subsystem");
        const targetCard = document.getElementById(`card-${sysId}`);
        document.querySelectorAll(".subsystem-card").forEach((c) => c.classList.remove("is-highlighted"));
        if (targetCard) {
          targetCard.classList.add("is-highlighted");
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // 7. Toggle Blueprint Scan Mode
      if (e.target.closest("#toggle-scan-mode-btn")) {
        state.blueprintScanMode = state.blueprintScanMode === "blueprint" ? "original" : "blueprint";
        renderBlueprintInspector();
        return;
      }

      // 8. Exhibit Subnav smooth scroll
      const scrollLink = e.target.closest("[data-scroll-target]");
      if (scrollLink) {
        e.preventDefault();
        const targetId = scrollLink.getAttribute("data-scroll-target");
        const targetSec = document.getElementById(targetId);
        document.querySelectorAll(".exhibit-subnav .subnav-link").forEach((l) => l.classList.remove("is-active"));
        scrollLink.classList.add("is-active");
        if (targetSec) {
          targetSec.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      // 9. Close Lightbox
      if (
        e.target.closest("#lightbox-close-btn") ||
        e.target.id === "archival-lightbox"
      ) {
        closeLightbox();
      }
    });

    // Keyboard accessibility (Enter/Space on portal cards, Escape for lightbox)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
      if (e.key === "Enter" || e.key === " ") {
        const focusedPortal = document.activeElement?.closest(".destination-portal[data-nav-view]");
        if (focusedPortal) {
          e.preventDefault();
          navigateToView(focusedPortal.getAttribute("data-nav-view"));
        }
      }
    });

    // Handle initial hash or back/forward navigation
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) navigateToView(hash, true);
    });
  }

  // Boot application
  function init() {
    initStarfield();
    renderDestinations();
    renderCollections();
    renderLRVExhibit();
    bindEvents();

    const initialHash = window.location.hash.replace(/^#/, "");
    if (initialHash) {
      navigateToView(initialHash, true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
