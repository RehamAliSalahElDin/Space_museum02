/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Dynamic Exhibit Renderer for All 8 Newly Unlocked Lunar & Martian Exhibits
 *
 * Strictly enforces:
 * - Primary-source NASA data from `window.EXHIBITS_DATA`
 * - Mandatory Below-Viewer Explanation Layout:
 *   1. Full-Width 360° 3D Viewer or Numbered Technical Diagram
 *   2. Component Selector Legend Bar Directly Below
 *   3. Single Persistent Component Explanation Panel Directly BELOW (never a side-by-side column or modal)
 * - Clean typography without `//` slashes
 * - Direct "Locate on the Atlas" integration with `window.MuseumAtlas`
 */

(function () {
  "use strict";

  const exState = {
    currentArtifactId: null,
    timelineIdx: 0,
    diagramIdx: 0,
    calloutIdx: 0,
    phoenixDiagIdx: 0,
    phoenixCalloutIdx: 0
  };

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function getBadgeClass(visualType) {
    const t = (visualType || "").toLowerCase();
    if (t.includes("drawing") || t.includes("diagram") || t.includes("blueprint")) return "type-drawing";
    if (t.includes("orbital") || t.includes("map")) return "type-orbital";
    if (t.includes("lab")) return "type-lab";
    return "type-photo";
  }

  function renderExhibit(artifactId) {
    const mount = document.getElementById("dynamic-exhibit-mount");
    if (!mount || !window.EXHIBITS_DATA || !window.EXHIBITS_DATA[artifactId]) return;

    if (exState.currentArtifactId !== artifactId) {
      exState.currentArtifactId = artifactId;
      exState.timelineIdx = 0;
      exState.diagramIdx = 0;
      exState.calloutIdx = 0;
      exState.phoenixDiagIdx = 0;
      exState.phoenixCalloutIdx = 0;
    }

    const ex = window.EXHIBITS_DATA[artifactId];
    const wingView = ex.destination === "mars" ? "collection-mars" : "collection-moon";
    const wingLabel = ex.destination === "mars" ? "Mars Collection" : "Moon Collection";
    const atlasBody = ex.destination === "mars" ? "mars" : "moon";
    const atlasBtnLabel = ex.destination === "mars" ? "Locate on Mars Atlas" : "Locate on Moon Atlas";

    // Build Identity DL rows dynamically from ex.identityCard
    const labelMap = {
      artifact: "Official Artifact",
      destinationSite: "Destination & Landing Site",
      crew: "Mission Crew",
      deployedBy: "Surface Deployment Crew",
      baseStation: "Base Station & Relay",
      hostSpacecraft: "Host Spacecraft",
      launchDate: "Launch Date & Vehicle",
      launchDates: "Launch Dates",
      launchAndLandingDates: "Launch, Landing & Deployment",
      landingDate: "Surface Touchdown",
      landingDates: "Surface Touchdowns",
      commandOnDate: "Station Command-On",
      drillCompletionDate: "Subsurface Completion",
      surfaceRolloutDate: "Surface Rollout",
      firstFlightDate: "First Powered Flight",
      surfaceStayDuration: "Surface Stay Duration",
      ascentLiftoffDate: "Ascent Stage Liftoff",
      ascentImpactDate: "Ascent Stage Lunar Impact",
      roboticMissionEnd: "Robotic Mission End",
      humanVisitDate: "Apollo 12 Human Visit",
      apollo12Distance: "Distance from Apollo 12 LM",
      networkTerminationDate: "Network Termination",
      finalTransmissionDate: "Final Transmission",
      finalCommunicationDates: "Final Communications",
      finalContactDates: "Final Contact Dates",
      finalFlightDate: "Final Flight (Flight 72)",
      powerSource: "Electrical Power Source",
      powerAndStructure: "Power & Structural Architecture",
      mobilityAndPower: "Mobility, Power & Thermal",
      instrumentArchitecture: "Experiment Architecture",
      instrumentPayload: "Scientific Payload",
      sharedHeritage: "Shared Spacecraft Heritage",
      distinctMissions: "Distinct Scientific Missions",
      flightRecords: "72-Flight Campaign Records",
      dimensionsAndMass: "Dimensions & Mass",
      massAndDimensions: "Mass & Dimensions",
      builder: "Prime Contractor / Builder",
      primeContractor: "Prime Contractor / Builder"
    };

    const identityRowsHtml = Object.entries(ex.identityCard || {})
      .map(
        ([k, v]) => `
        <dt>${esc(labelMap[k] || k)}</dt>
        <dd>${esc(v)}</dd>`
      )
      .join("");

    mount.innerHTML = `
      <!-- Sticky Exhibit Subnav -->
      <nav class="exhibit-subnav" aria-label="${esc(ex.artifact_name)} Exhibit Sections">
        <div class="exhibit-subnav-inner">
          <button type="button" class="subnav-link" data-nav-view="${wingView}">← ${wingLabel}</button>
          <a href="#dyn-sec-identity" class="subnav-link is-active" data-scroll-target="dyn-sec-identity">01. Meet the Explorer</a>
          <a href="#dyn-sec-interactive" class="subnav-link" data-scroll-target="dyn-sec-interactive">02. Interactive 3D &amp; Schematics</a>
          <a href="#dyn-sec-timeline" class="subnav-link" data-scroll-target="dyn-sec-timeline">03. Mission Timeline</a>
          <a href="#dyn-sec-science" class="subnav-link" data-scroll-target="dyn-sec-science">04. Science &amp; Metrics</a>
          <a href="#dyn-sec-challenges" class="subnav-link" data-scroll-target="dyn-sec-challenges">05. Challenges &amp; Provenance</a>
          <a href="#dyn-sec-sources" class="subnav-link" data-scroll-target="dyn-sec-sources">06. NASA Sources</a>
          <button type="button" class="subnav-link" data-open-atlas="${atlasBody}" data-atlas-focus="${esc(ex.atlasLocationId)}" data-return-exhibit="${esc(ex.artifact_id)}">
            🌐 ${atlasBtnLabel}
          </button>
        </div>
      </nav>

      <!-- HERO & SECTION 01: MEET THE EXPLORER -->
      <div class="exhibit-hero" id="dyn-sec-identity">
        <div class="exhibit-hero-grid">
          <div class="exhibit-hero-title-block">
            <div class="eyebrow-badge">
              <span class="eyebrow-badge-pulse"></span>
              <span>${esc(ex.statusBadge)} • MISSION: ${esc(ex.mission)}</span>
            </div>
            <h1 class="exhibit-hero-title">${esc(ex.artifact_name)}</h1>
            <p class="exhibit-hero-subtitle">${esc(ex.subtitle)}</p>

            <div class="first-person-voice-box">
              <div class="voice-kicker">
                <span>ARTIFACT NARRATIVE • FIRST-PERSON INTRODUCTION</span>
                <span>INTERPRETIVE VOICE</span>
              </div>
              <blockquote class="voice-quote">
                “${esc(ex.narrative_script.shortIntroduction)}”
              </blockquote>
            </div>

            <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="btn-museum-primary" data-scroll-target="dyn-sec-interactive">
                <span>Explore Interactive 3D &amp; Schematics</span>
                <span aria-hidden="true">↓</span>
              </button>
              <button type="button" class="btn-museum-secondary" data-open-atlas="${atlasBody}" data-atlas-focus="${esc(ex.atlasLocationId)}" data-return-exhibit="${esc(ex.artifact_id)}">
                <span>🌐 ${atlasBtnLabel}</span>
              </button>
            </div>

            <div class="editorial-disclaimer-bar">
              <strong>Editorial Principle:</strong> ${esc(ex.narrative_script.editorialDisclaimer)}
            </div>
          </div>

          <figure class="exhibit-hero-figure">
            <div class="exhibit-hero-img-wrap" data-lightbox-src="${esc(ex.heroImage)}" data-lightbox-title="${esc(ex.artifact_name)}" data-lightbox-type="${esc(ex.heroImageType)}" data-lightbox-caption="${esc(ex.heroImageCaption)}" data-lightbox-credit="${esc(ex.heroImageCredit)}" data-lightbox-url="${esc(ex.heroImageSource)}">
              <img src="${esc(ex.heroImage)}" alt="${esc(ex.heroImageCaption)}" />
              <div class="figure-overlay-top">
                <span class="media-type-badge ${getBadgeClass(ex.heroImageType)}">${esc(ex.heroImageType)}</span>
                <span class="zoom-hint-pill">🔍 Click to Inspect Full Resolution</span>
              </div>
            </div>
            <figcaption class="exhibit-hero-figcaption">
              <p>${esc(ex.heroImageCaption)}</p>
              <div class="figcaption-meta">
                <span>Credit: ${esc(ex.heroImageCredit)}</span>
                <a href="${esc(ex.heroImageSource)}" target="_blank" rel="noopener noreferrer">Official NASA Source ↗</a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Identity Card & Full Storytelling Chapters -->
      <section class="exhibit-section" aria-label="Verified Identity Dossier">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 01 • ARCHIVAL IDENTITY &amp; STORYTELLING</p>
            <h2 class="section-main-title">Meet the Explorer — Verified Identity Dossier</h2>
          </div>
        </div>

        <div class="identity-layout-grid">
          <div class="dossier-table-card">
            <div class="dossier-card-header">
              <span>Verified Artifact Identity Card</span>
              <span>Official NASA Sources</span>
            </div>
            <dl class="identity-dl">
              ${identityRowsHtml}
            </dl>
          </div>

          <div class="narrative-chapters-card">
            <div class="dossier-card-header" style="margin: -1.5rem -1.5rem 1rem; border-radius: 18px 18px 0 0;">
              <span>First-Person Exhibit Narrative</span>
              <span>Storytelling Device</span>
            </div>
            ${ex.narrative_script.fullStoryParagraphs
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

      <!-- SECTION 02: INTERACTIVE 3D VIEWER & NUMBERED TECHNICAL INSPECTOR -->
      <section class="exhibit-section" id="dyn-sec-interactive" aria-label="Interactive 3D & Technical Architecture">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 02 • INTERACTIVE HARDWARE &amp; COMPONENT EXPLORATION</p>
            <h2 class="section-main-title">Engineering Behind It — Interactive 3D &amp; Technical Schematics</h2>
            <p class="section-lead-text">
              Inspect every verified subsystem and component. Select any numbered callout on the model or diagram to read its full technical explanation in the persistent panel directly below the viewer.
            </p>
          </div>
        </div>

        <!-- Mount for Phoenix Numbered Diagram (if Phoenix & InSight exhibit) -->
        ${
          ex.phoenixDiagramSpec
            ? `<div id="dyn-phoenix-diagram-mount" style="margin-bottom: 3rem;"></div>`
            : ""
        }

        <!-- Mount for Interactive 360° 3D Viewer (if available) -->
        ${
          ex.viewer3d && ex.viewer3d.available
            ? `<div id="dyn-3d-viewer-mount"></div>`
            : ""
        }

        <!-- Mount for Interactive Site Plan / Annotated Technical Diagram Inspector -->
        ${
          ex.sitePlanInteractive || ex.diagramInspector
            ? `<div id="dyn-diagram-inspector-mount"></div>`
            : ""
        }

        <!-- Additional Archival Diagrams / Visual States Gallery -->
        ${
          ex.diagrams && ex.diagrams.length > 0
            ? `
            <div style="margin-top: 2rem;">
              <span class="section-number-kicker">VERIFIED ARCHIVAL EVIDENCE &amp; TECHNICAL SCHEMATICS</span>
              <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 1rem;">Primary NASA Diagrams &amp; Surface Documentation</h3>
              <div class="visual-register-grid">
                ${ex.diagrams
                  .map(
                    (dg) => `
                    <article class="register-asset-card">
                      <div class="register-asset-thumb" data-lightbox-src="${esc(dg.imagePath)}" data-lightbox-title="${esc(dg.title)}" data-lightbox-type="${esc(dg.visualType)}" data-lightbox-caption="${esc(dg.caption)}" data-lightbox-credit="${esc(dg.credit)}" data-lightbox-url="${esc(dg.sourceUrl)}">
                        <img src="${esc(dg.imagePath)}" alt="${esc(dg.title)}" loading="lazy" />
                        <div class="figure-overlay-top">
                          <span class="media-type-badge ${getBadgeClass(dg.visualType)}">${esc(dg.visualType)}</span>
                          <span class="zoom-hint-pill">🔍 Inspect Full Res</span>
                        </div>
                      </div>
                      <div class="register-asset-body">
                        <div>
                          <h4 style="font-family: var(--font-heading); font-size: 1.02rem; margin-bottom: 0.35rem;">${esc(dg.title)}</h4>
                          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${esc(dg.caption)}</p>
                        </div>
                        <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.6rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
                          <div>${esc(dg.pressKitPage || dg.sourcePage || "")} • Credit: ${esc(dg.credit)}</div>
                        </div>
                      </div>
                    </article>`
                  )
                  .join("")}
              </div>
            </div>`
            : ""
        }
      </section>

      <!-- SECTION 03: INTERACTIVE MISSION TIMELINE -->
      <section class="exhibit-section" id="dyn-sec-timeline" aria-label="Interactive Mission Timeline">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 03 • CHRONOLOGICAL MISSION JOURNEY</p>
            <h2 class="section-main-title">Interactive Mission Timeline</h2>
          </div>
        </div>

        <div id="dyn-timeline-nodes-mount" class="timeline-track-bar" role="tablist"></div>
        <div id="dyn-timeline-stage-mount" class="timeline-stage-panel" aria-live="polite"></div>

        <div class="editorial-disclaimer-bar">
          <strong>Chronology &amp; Timestamp Precision Note:</strong> ${esc(ex.timeline.chronologyNote)}
        </div>
      </section>

      <!-- SECTION 04: SCIENTIFIC DISCOVERIES & QUANTITATIVE METRICS -->
      <section class="exhibit-section" id="dyn-sec-science" aria-label="Scientific Contributions & Metrics">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 04 • SCIENTIFIC CONTRIBUTIONS &amp; PERFORMANCE METRICS</p>
            <h2 class="section-main-title">${esc(ex.scienceAndEngineering.headline)}</h2>
            <p class="section-lead-text">${esc(ex.scienceAndEngineering.summary)}</p>
          </div>
        </div>

        <div class="metrics-grid">
          ${ex.scienceAndEngineering.metrics
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
      </section>

      <!-- SECTION 05: CHALLENGES, ANOMALIES & SOURCE TRANSPARENCY -->
      <section class="exhibit-section" id="dyn-sec-challenges" aria-label="Challenges & Source Transparency">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 05 • ENGINEERING CHALLENGES &amp; ARCHIVAL DISCREPANCY LOG</p>
            <h2 class="section-main-title">Hardware Anomalies, Adaptation &amp; Source Verification</h2>
          </div>
        </div>

        <div class="challenges-grid" style="margin-bottom: 2rem;">
          ${ex.scienceAndEngineering.challenges
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
              </article>`
            )
            .join("")}
        </div>

        <!-- Source Discrepancy & Provenance Table -->
        <div class="dossier-table-card">
          <div class="dossier-card-header">
            <span>Archival Source Discrepancy &amp; Verification Log</span>
            <span>Strict Source Policy</span>
          </div>
          <table class="specs-table">
            <thead>
              <tr>
                <th>Archival Topic / Parameter</th>
                <th>Verified Primary-Source Resolution &amp; Disclosed Values</th>
              </tr>
            </thead>
            <tbody>
              ${(ex.scienceAndEngineering.discrepanciesAndTransparency || [])
                .map(
                  (row) => `
                  <tr>
                    <td style="font-weight:600; color:var(--text-primary); width:32%;">${esc(row.topic)}</td>
                    <td style="color:var(--text-secondary); font-size:0.88rem;">${esc(row.resolution)}</td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 06: PRIMARY NASA SOURCES -->
      <section class="exhibit-section" id="dyn-sec-sources" aria-label="Official NASA Sources">
        <div class="section-header-row">
          <div>
            <p class="section-number-kicker">SECTION 06 • VERIFIED DOCUMENTATION &amp; PROVENANCE</p>
            <h2 class="section-main-title">Official NASA &amp; Archival Source Register</h2>
          </div>
        </div>

        <div class="sources-list-grid">
          ${ex.sources
            .map(
              (s) => `
              <div class="source-item-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                  <span class="media-type-badge">${esc(s.id)}</span>
                  <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" style="font-family:var(--font-mono); font-size:0.72rem; color:var(--accent-secondary); text-decoration:none;">Open Official NASA Source ↗</a>
                </div>
                <h4 style="font-family:var(--font-heading); font-size:0.98rem; margin-bottom:0.35rem;">${esc(s.title)}</h4>
                <p style="font-size:0.84rem; color:var(--text-secondary);">${esc(s.role)}</p>
              </div>`
            )
            .join("")}
        </div>
      </section>
    `;

    // Mount 3D viewer if present
    if (ex.viewer3d && ex.viewer3d.available && window.Museum3DViewer) {
      window.Museum3DViewer.mountViewer("dyn-3d-viewer-mount", ex.viewer3d);
    }

    // Mount Phoenix V4 Document-Based Numbered Diagram if present
    if (ex.phoenixDiagramSpec) {
      renderPhoenixBelowDiagram(ex.phoenixDiagramSpec);
    }

    // Mount Site Plan (ALSEP) or Annotated Diagram Inspector (Surveyor 3 / Sojourner)
    if (ex.sitePlanInteractive) {
      renderAlsepSitePlan(ex.sitePlanInteractive);
    } else if (ex.diagramInspector) {
      renderDiagramInspector(ex.diagramInspector);
    }

    // Render interactive timeline
    renderDynamicTimeline(ex.timeline.events);
  }

  // ==========================================================================
  // PHOENIX V4 BELOW-DIAGRAM EXPLANATION LAYOUT
  // ==========================================================================
  function renderPhoenixBelowDiagram(spec) {
    const mount = document.getElementById("dyn-phoenix-diagram-mount");
    if (!mount) return;

    const currentDiag = spec.diagrams[exState.phoenixDiagIdx] || spec.diagrams[0];
    const currentCallout = spec.callouts[exState.phoenixCalloutIdx] || spec.callouts[0];

    const pinsHtml =
      exState.phoenixDiagIdx === 0
        ? spec.callouts
            .map(
              (c, idx) => `
              <button type="button" class="diagram-hotspot-pin ${idx === exState.phoenixCalloutIdx ? "is-selected" : ""}" style="left:${c.x}%; top:${c.y}%;" data-phx-callout="${idx}" title="${esc(c.name)}">
                ${esc(c.code)}
              </button>`
            )
            .join("")
        : "";

    mount.innerHTML = `
      <div class="model-policy-banner" style="margin-bottom: 1rem;">
        <div style="max-width: 920px;">
          <span class="media-type-badge type-drawing" style="margin-bottom: 0.4rem;">${esc(spec.policyBadge)}</span>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.3rem;">Phoenix Mars Lander (2008) — Interactive Numbered Technical Diagram</h3>
          <p style="font-size: 0.86rem; color: var(--text-secondary);">${esc(spec.policyNote)}</p>
        </div>
      </div>

      <!-- Toolbar: Switch between JPL Deck Workspace Diagram, Labeled Scoop/Rasp, and Cutaway -->
      <div class="viewer3d-toolbar">
        <div class="viewer3d-control-group">
          <span class="viewer3d-control-label">JPL Paper Schematics:</span>
          <div class="viewer3d-btn-row">
            ${spec.diagrams
              .map(
                (d, idx) => `
              <button type="button" class="diagram-tab-btn ${idx === exState.phoenixDiagIdx ? "is-active" : ""}" data-phx-diag="${idx}">
                ${esc(d.title)}
              </button>`
              )
              .join("")}
            <button type="button" class="diagram-tab-btn" data-lightbox-src="${esc(currentDiag.imagePath)}" data-lightbox-title="${esc(currentDiag.title)}" data-lightbox-type="${esc(currentDiag.visualType)}" data-lightbox-caption="${esc(currentDiag.caption)}" data-lightbox-credit="${esc(currentDiag.credit)}" data-lightbox-url="${esc(currentDiag.sourceUrl)}">
              🔍 Full-Res Lightbox
            </button>
          </div>
        </div>
      </div>

      <!-- 1. Full-Width Numbered Technical Diagram -->
      <div class="blueprint-canvas-wrap scan-mode-original" style="border: 1px solid var(--border-strong); border-bottom: none;">
        <div class="blueprint-image-inner">
          <img src="${esc(currentDiag.imagePath)}" alt="${esc(currentDiag.title)}" style="max-height: 520px; width: auto;" />
          ${pinsHtml}
        </div>
      </div>

      <!-- 2. Numbered Component Legend Bar Directly Below Diagram -->
      <div class="viewer3d-legend-bar" role="tablist" aria-label="Phoenix Lander Numbered Callouts">
        ${spec.callouts
          .map(
            (c, idx) => `
          <button type="button" class="viewer3d-legend-pill ${idx === exState.phoenixCalloutIdx ? "is-active" : ""}" data-phx-callout="${idx}">
            <span class="legend-pill-num">${esc(c.code)}</span>
            <span class="legend-pill-text">${esc(c.name)}</span>
          </button>`
          )
          .join("")}
      </div>

      <!-- 3. Single Persistent Explanation Panel Directly BELOW Diagram -->
      <div class="below-explanation-card" aria-live="polite">
        <div class="below-explanation-header">
          <div>
            <span class="below-callout-badge">PHOENIX CALLOUT ${esc(currentCallout.code)}</span>
            <span class="below-category-label">${esc(currentCallout.category)}</span>
          </div>
          <span class="below-source-tag">Source: ${esc(currentCallout.sourceNote)}</span>
        </div>
        <h4 class="below-component-title">${esc(currentCallout.name)}</h4>
        <div class="below-explanation-grid">
          <div class="below-detail-block">
            <span class="below-detail-label">What It Is</span>
            <p>${esc(currentCallout.whatItIs)}</p>
          </div>
          <div class="below-detail-block">
            <span class="below-detail-label">How It Worked</span>
            <p>${esc(currentCallout.howItWorked)}</p>
          </div>
          <div class="below-detail-block">
            <span class="below-detail-label">Mission Role &amp; Polar Ice Discovery</span>
            <p>${esc(currentCallout.missionRole)}</p>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // ALSEP INTERACTIVE STATION LAYOUT & POWER/TELEMETRY INSPECTOR
  // ==========================================================================
  function renderAlsepSitePlan(spec) {
    const mount = document.getElementById("dyn-diagram-inspector-mount");
    if (!mount) return;

    const currentNode = spec.nodes[exState.calloutIdx] || spec.nodes[0];

    const pinsHtml = spec.nodes
      .map(
        (n, idx) => `
        <button type="button" class="diagram-hotspot-pin ${idx === exState.calloutIdx ? "is-selected" : ""}" style="left:${n.x}%; top:${n.y}%;" data-alsep-node="${idx}" title="${esc(n.name)}">
          ${esc(n.code)}
        </button>`
      )
      .join("");

    mount.innerHTML = `
      <div class="model-policy-banner" style="margin-bottom: 1rem;">
        <div style="max-width: 920px;">
          <span class="media-type-badge type-drawing" style="margin-bottom: 0.4rem;">${esc(spec.modelPolicyBadge)}</span>
          <p style="font-size: 0.86rem; color: var(--text-secondary);">${esc(spec.modelPolicyExplanation)}</p>
        </div>
      </div>

      <div class="viewer3d-toolbar">
        <div class="viewer3d-control-group">
          <span class="viewer3d-control-label">Station Architecture:</span>
          <div class="viewer3d-btn-row">
            <button type="button" class="diagram-tab-btn" data-lightbox-src="${esc(spec.diagramImage)}" data-lightbox-title="Apollo 15 ALSEP Array Layout (Press Kit p. 42)" data-lightbox-type="Technical Drawing" data-lightbox-caption="Official 1971 NASA Apollo 15 Press Kit layout of ALSEP Array A-2 around the Central Station and SNAP-27 RTG." data-lightbox-credit="NASA (Apollo 15 Press Kit, p. 42)" data-lightbox-url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf">
              🔍 Inspect Full-Res Array Layout (p. 42)
            </button>
            <button type="button" class="diagram-tab-btn" data-lightbox-src="${esc(spec.rtgDiagramImage)}" data-lightbox-title="SNAP-27 Radioisotope Thermoelectric Generator Cutaway (Press Kit p. 57)" data-lightbox-type="Technical Drawing" data-lightbox-caption="Official NASA Apollo 15 Press Kit cutaway of the SNAP-27 RTG showing the Pu-238 fuel capsule and beryllium fins." data-lightbox-credit="NASA (Apollo 15 Press Kit, p. 57)" data-lightbox-url="https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf">
              🔍 Inspect SNAP-27 RTG Schematic (p. 57)
            </button>
          </div>
        </div>
      </div>

      <!-- 1. Full-Width Interactive ALSEP Array Map -->
      <div class="blueprint-canvas-wrap scan-mode-blueprint" style="border: 1px solid var(--border-strong); border-bottom: none;">
        <div class="blueprint-image-inner">
          <img src="${esc(spec.diagramImage)}" alt="Apollo 15 ALSEP Array A-2 Site Layout" />
          ${pinsHtml}
        </div>
      </div>

      <!-- 2. Numbered Station Node Selector Directly Below Map -->
      <div class="viewer3d-legend-bar" role="tablist">
        ${spec.nodes
          .map(
            (n, idx) => `
          <button type="button" class="viewer3d-legend-pill ${idx === exState.calloutIdx ? "is-active" : ""}" data-alsep-node="${idx}">
            <span class="legend-pill-num">${esc(n.code)}</span>
            <span class="legend-pill-text">${esc(n.name.split("(")[0].trim())}</span>
          </button>`
          )
          .join("")}
      </div>

      <!-- 3. Single Persistent Explanation Panel Directly BELOW Map -->
      <div class="below-explanation-card" aria-live="polite">
        <div class="below-explanation-header">
          <div>
            <span class="below-callout-badge">${currentNode.group === "nearby" ? "STANDALONE NEARBY EXPERIMENT" : "WIRED ALSEP ARRAY A-2"} • ${esc(currentNode.code)}</span>
            <span class="below-category-label">${esc(currentNode.experimentCode)}</span>
          </div>
          <span class="below-source-tag">Source: ${esc(currentNode.sourceNote)}</span>
        </div>
        <h4 class="below-component-title">${esc(currentNode.name)}</h4>
        <div class="below-explanation-grid">
          <div class="below-detail-block">
            <span class="below-detail-label">What It Is</span>
            <p>${esc(currentNode.whatItIs)}</p>
          </div>
          <div class="below-detail-block">
            <span class="below-detail-label">How It Worked &amp; Power/Telemetry Link</span>
            <p>${esc(currentNode.howItWorked)}</p>
          </div>
          <div class="below-detail-block">
            <span class="below-detail-label">Mission Role &amp; 1971–1977 Record</span>
            <p>${esc(currentNode.missionRole)}</p>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // SURVEYOR 3 & SOJOURNER TECHNICAL DIAGRAM INSPECTOR (BELOW-DIAGRAM PANEL)
  // ==========================================================================
  function renderDiagramInspector(spec) {
    const mount = document.getElementById("dyn-diagram-inspector-mount");
    if (!mount) return;

    const currentDiag = spec.diagrams[exState.diagramIdx] || spec.diagrams[0];
    const hotspots = currentDiag.hotspots || [];
    const currentHs = hotspots[exState.calloutIdx] || hotspots[0] || null;

    const pinsHtml = hotspots
      .map(
        (h, idx) => `
        <button type="button" class="diagram-hotspot-pin ${idx === exState.calloutIdx ? "is-selected" : ""}" style="left:${h.x}%; top:${h.y}%;" data-diag-hs="${idx}" title="${esc(h.name)}">
          ${esc(h.code)}
        </button>`
      )
      .join("");

    const recoveredPartsHtml = spec.recoveredPartsTable
      ? `
        <div class="dossier-table-card" style="margin-top: 1.75rem;">
          <div class="dossier-card-header">
            <span>Catalog of Hardware Retrieved from Surveyor 3 by Apollo 12 (NASA SP-284)</span>
            <span>Returned 24 November 1969 • Studied by 40 Research Teams</span>
          </div>
          <table class="specs-table">
            <thead>
              <tr>
                <th>Retrieved Hardware Assembly</th>
                <th>Documented Measurement (SP-284)</th>
                <th>Post-Return Laboratory Investigation Focus</th>
              </tr>
            </thead>
            <tbody>
              ${spec.recoveredPartsTable
                .map(
                  (r) => `
                  <tr>
                    <td style="font-weight:600; color:var(--text-primary);">${esc(r.item)}</td>
                    <td style="font-family:var(--font-mono); color:var(--accent-secondary); font-size:0.83rem;">${esc(r.measurement)}</td>
                    <td style="color:var(--text-secondary); font-size:0.86rem;">${esc(r.analysisFocus)}</td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>`
      : "";

    mount.innerHTML = `
      <div class="model-policy-banner" style="margin-bottom: 1rem;">
        <div style="max-width: 920px;">
          <span class="media-type-badge type-drawing" style="margin-bottom: 0.4rem;">${esc(spec.modelPolicyBadge)}</span>
          <p style="font-size: 0.86rem; color: var(--text-secondary);">${esc(spec.modelPolicyExplanation)}</p>
        </div>
      </div>

      <div class="viewer3d-toolbar">
        <div class="viewer3d-control-group">
          <span class="viewer3d-control-label">Select Archival View:</span>
          <div class="viewer3d-btn-row">
            ${spec.diagrams
              .map(
                (d, idx) => `
              <button type="button" class="diagram-tab-btn ${idx === exState.diagramIdx ? "is-active" : ""}" data-diag-tab="${idx}">
                ${esc(d.title)}
              </button>`
              )
              .join("")}
            <button type="button" class="diagram-tab-btn" data-lightbox-src="${esc(currentDiag.imagePath)}" data-lightbox-title="${esc(currentDiag.title)}" data-lightbox-type="${esc(currentDiag.visualType)}" data-lightbox-caption="${esc(currentDiag.caption)}" data-lightbox-credit="${esc(currentDiag.credit)}" data-lightbox-url="${esc(currentDiag.sourceUrl)}">
              🔍 Full-Res Lightbox
            </button>
          </div>
        </div>
      </div>

      <!-- 1. Full-Width Diagram / Archival View -->
      <div class="blueprint-canvas-wrap scan-mode-original" style="border: 1px solid var(--border-strong); border-bottom: none;">
        <div class="blueprint-image-inner">
          <img src="${esc(currentDiag.imagePath)}" alt="${esc(currentDiag.title)}" style="max-height: 520px; width: auto;" />
          ${pinsHtml}
        </div>
      </div>

      <!-- 2. Numbered Callout Bar Directly Below -->
      ${
        hotspots.length > 0
          ? `<div class="viewer3d-legend-bar" role="tablist">
               ${hotspots
                 .map(
                   (h, idx) => `
                 <button type="button" class="viewer3d-legend-pill ${idx === exState.calloutIdx ? "is-active" : ""}" data-diag-hs="${idx}">
                   <span class="legend-pill-num">${esc(h.code)}</span>
                   <span class="legend-pill-text">${esc(h.name)}</span>
                 </button>`
                 )
                 .join("")}
             </div>`
          : ""
      }

      <!-- 3. Single Persistent Explanation Panel Directly BELOW -->
      <div class="below-explanation-card" aria-live="polite">
        <div class="below-explanation-header">
          <div>
            <span class="below-callout-badge">${currentHs ? `CALLOUT ${esc(currentHs.code)}` : esc(currentDiag.visualType)}</span>
            <span class="below-category-label">${esc(currentHs ? currentHs.category : currentDiag.sourcePage)}</span>
          </div>
          <span class="below-source-tag">Credit: ${esc(currentDiag.credit)}</span>
        </div>
        <h4 class="below-component-title">${esc(currentHs ? currentHs.name : currentDiag.title)}</h4>
        <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:1rem;">${esc(currentDiag.caption)}</p>
        ${
          currentHs
            ? `<div class="below-explanation-grid">
                 <div class="below-detail-block">
                   <span class="below-detail-label">What It Is</span>
                   <p>${esc(currentHs.whatItIs)}</p>
                 </div>
                 <div class="below-detail-block">
                   <span class="below-detail-label">How It Worked</span>
                   <p>${esc(currentHs.howItWorked)}</p>
                 </div>
                 <div class="below-detail-block">
                   <span class="below-detail-label">Mission Role &amp; Significance</span>
                   <p>${esc(currentHs.missionRole)}</p>
                 </div>
               </div>`
            : ""
        }
      </div>

      ${recoveredPartsHtml}
    `;
  }

  // ==========================================================================
  // DYNAMIC MISSION TIMELINE RENDERER
  // ==========================================================================
  function renderDynamicTimeline(events) {
    const nodesMount = document.getElementById("dyn-timeline-nodes-mount");
    const stageMount = document.getElementById("dyn-timeline-stage-mount");
    if (!nodesMount || !stageMount || !events || !events.length) return;

    const idx = Math.min(exState.timelineIdx, events.length - 1);
    const ev = events[idx];
    const prevIdx = (idx - 1 + events.length) % events.length;
    const nextIdx = (idx + 1) % events.length;

    nodesMount.innerHTML = events
      .map(
        (item, i) => `
        <button type="button" class="timeline-node-btn ${i === idx ? "is-active" : ""}" data-dyn-tl="${i}" role="tab" aria-selected="${i === idx}">
          <span class="tl-step-num">EVENT ${esc(item.stepNumber)} • ${esc(item.missionPhase)}</span>
          <span class="tl-node-date">${esc(item.date)}</span>
          <span class="tl-node-title">${esc(item.shortTitle)}</span>
        </button>`
      )
      .join("");

    stageMount.innerHTML = `
      <div class="timeline-stage-content">
        <div>
          <p class="tl-stage-phase">EVENT ${esc(ev.stepNumber)} OF 0${events.length} • ${esc(ev.missionPhase)}</p>
          <h3 class="tl-stage-date-heading">${esc(ev.date)} — ${esc(ev.shortTitle)}</h3>
          <div class="tl-rover-status-pill">
            <span>STATUS: ${esc(ev.statusText)}</span>
          </div>

          <div class="tl-detail-blocks">
            <div class="tl-detail-box">
              <span class="tl-detail-box-label">What Happened</span>
              <p>${esc(ev.whatHappened)}</p>
            </div>
            <div class="tl-detail-box box-rover-enabled">
              <span class="tl-detail-box-label" style="color: #bae6fd;">Engineering &amp; Operational Highlight</span>
              <p>${esc(ev.whatArtifactEnabled)}</p>
            </div>
            <div class="tl-detail-box box-science">
              <span class="tl-detail-box-label" style="color: #6ee7b7;">Scientific &amp; Mission Significance</span>
              <p>${esc(ev.scientificConnection)}</p>
            </div>
          </div>
        </div>

        <div class="tl-stage-nav-footer">
          <button type="button" class="diagram-tab-btn" data-dyn-tl="${prevIdx}">
            ← Prev: ${esc(events[prevIdx].shortTitle)}
          </button>
          <button type="button" class="diagram-tab-btn" data-dyn-tl="${nextIdx}">
            Next: ${esc(events[nextIdx].shortTitle)} →
          </button>
        </div>
      </div>

      <figure class="timeline-stage-media">
        <div class="tl-media-img-container" data-lightbox-src="${esc(ev.imagePath)}" data-lightbox-title="${esc(ev.shortTitle)}" data-lightbox-type="${esc(ev.imageType)}" data-lightbox-caption="${esc(ev.imageCaption)}" data-lightbox-credit="${esc(ev.imageCredit)}" data-lightbox-url="https://science.nasa.gov/">
          <img src="${esc(ev.imagePath)}" alt="${esc(ev.imageCaption)}" />
          <div class="figure-overlay-top">
            <span class="media-type-badge ${getBadgeClass(ev.imageType)}">${esc(ev.imageType)}</span>
            <span class="zoom-hint-pill">🔍 Click to Zoom</span>
          </div>
        </div>
        <figcaption class="exhibit-hero-figcaption">
          <p>${esc(ev.imageCaption)}</p>
          <div class="figcaption-meta">
            <span>Credit: ${esc(ev.imageCredit)}</span>
          </div>
        </figcaption>
      </figure>
    `;
  }

  // Global event delegation for dynamic exhibit controls
  document.addEventListener("click", (e) => {
    if (!exState.currentArtifactId || !window.EXHIBITS_DATA) return;
    const ex = window.EXHIBITS_DATA[exState.currentArtifactId];
    if (!ex) return;

    // 1. Dynamic timeline step
    const tlBtn = e.target.closest("[data-dyn-tl]");
    if (tlBtn) {
      exState.timelineIdx = Number(tlBtn.getAttribute("data-dyn-tl")) || 0;
      renderDynamicTimeline(ex.timeline.events);
      return;
    }

    // 2. Phoenix diagram tab or callout
    const phxDiagBtn = e.target.closest("[data-phx-diag]");
    if (phxDiagBtn && ex.phoenixDiagramSpec) {
      exState.phoenixDiagIdx = Number(phxDiagBtn.getAttribute("data-phx-diag")) || 0;
      renderPhoenixBelowDiagram(ex.phoenixDiagramSpec);
      return;
    }
    const phxCalloutBtn = e.target.closest("[data-phx-callout]");
    if (phxCalloutBtn && ex.phoenixDiagramSpec) {
      exState.phoenixCalloutIdx = Number(phxCalloutBtn.getAttribute("data-phx-callout")) || 0;
      renderPhoenixBelowDiagram(ex.phoenixDiagramSpec);
      return;
    }

    // 3. ALSEP station node
    const alsepBtn = e.target.closest("[data-alsep-node]");
    if (alsepBtn && ex.sitePlanInteractive) {
      exState.calloutIdx = Number(alsepBtn.getAttribute("data-alsep-node")) || 0;
      renderAlsepSitePlan(ex.sitePlanInteractive);
      return;
    }

    // 4. Surveyor 3 / Sojourner diagram tab or hotspot
    const diagTabBtn = e.target.closest("[data-diag-tab]");
    if (diagTabBtn && ex.diagramInspector) {
      exState.diagramIdx = Number(diagTabBtn.getAttribute("data-diag-tab")) || 0;
      exState.calloutIdx = 0;
      renderDiagramInspector(ex.diagramInspector);
      return;
    }
    const diagHsBtn = e.target.closest("[data-diag-hs]");
    if (diagHsBtn && ex.diagramInspector) {
      exState.calloutIdx = Number(diagHsBtn.getAttribute("data-diag-hs")) || 0;
      renderDiagramInspector(ex.diagramInspector);
    }
  });

  window.DynamicExhibitRenderer = {
    renderExhibit
  };
})();
