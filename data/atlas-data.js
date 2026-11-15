/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Planetary Atlas Dataset (Moon Atlas & Mars Atlas)
 *
 * Primary Reference: Planetary Atlas Research and Implementation Specification (15 pp.)
 * Official Data Sources:
 * - NASA Solar System Treks (Moon Trek & Mars Trek OGC WMTS REST API)
 * - USGS / IAU Gazetteer of Planetary Nomenclature (planetarynames.wr.usgs.gov)
 * - NASA NSSDCA Lunar Exploration Timeline & Landing Site Coordinates (nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html)
 * - NASA Mars Exploration Program & PDS Geosciences Node (Spirit MER-A & Opportunity MER-B Route Data)
 */

window.ATLAS_DATA = {
  moon: {
    body: "moon",
    title: "Moon Atlas",
    subtitle: "Interactive Cartographic & Orbital Registry • Earth's Moon (Luna)",
    referenceSystem: "IAU Planetocentric / Mean Earth–Polar Axis (Selenographic Coordinates)",
    radiusKm: 1737.4,
    defaultCenter: { lat: 20.0, lon: 0.0, zoom: 1.35 },
    basemaps: [
      {
        id: "lro_wac",
        label: "LRO WAC Global Mosaic (303 ppd)",
        localTexture: "assets/atlas/moon_wac_global.jpg",
        wmtsTemplate:
          "https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/{z}/{y}/{x}.jpg",
        credit: "NASA / GSFC / Arizona State University / Lunar Reconnaissance Orbiter (Moon Trek WMTS)",
        sourceUrl: "https://trek.nasa.gov/moon/"
      }
    ],
    layers: {
      geographicFeatures: { label: "Geographic Features (IAU/USGS)", defaultVisible: true },
      landingSites: { label: "Mission Landing Sites", defaultVisible: true },
      museumArtifacts: { label: "Museum Artifacts (4 Exhibits)", defaultVisible: true },
      missionRoutes: { label: "Surface Traverse Routes", defaultVisible: true }
    },
    locations: [
      // ======================================================================
      // MUSEUM ARTIFACTS — MOON WING (4 EXHIBITS)
      // ======================================================================
      {
        id: "loc_lrv_apollo15",
        body: "moon",
        category: "artifact",
        officialName: "Apollo 15 Lunar Roving Vehicle (LRV-1)",
        featureType: "Crewed Electric Surface Rover (Final Parking Site)",
        latitude: 26.1322,
        longitude: 3.6339,
        displayCoords: "26° 07' 56\" N, 3° 38' 02\" E (Hadley–Apennine)",
        coordinateSystem: "Selenographic / LRO LROC Measured Coordinates",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital & NSSDC Coordinate",
        coordinateNote:
          "Pre-mission Apollo 15 Press Kit listed target site 26° 04' 54\" N, 3° 39' 30\" E; LRO NAC orbital imaging (PIA13058) and NASA NSSDCA pinpoint the Falcon descent stage at 26.13239° N, 3.63330° E and the final LRV parking spot ~90 m east of the Lunar Module.",
        missionName: "Apollo 15",
        missionDates: "Deployed 31 July 1971 • Final Parking 2 August 1971",
        summary:
          "The first crewed wheeled vehicle driven on the Moon. Parked east of the Lunar Module Falcon after completing three geological traverses totaling 27.9 km (17.25 mi) across the Hadley–Apennine valley.",
        artifactId: "lrv_apollo15",
        thumbnail: "assets/photos/s2_rover_final_parking_vip.jpg",
        sourceName: "NASA NSSDCA Lunar Sites & LRO Photojournal PIA13058",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA13058"
      },
      {
        id: "loc_falcon_apollo15",
        body: "moon",
        category: "artifact",
        officialName: "Apollo 15 Lunar Module Falcon (LM-10 Descent Stage)",
        featureType: "Crewed Lunar Lander Descent Stage",
        latitude: 26.13239,
        longitude: 3.6333,
        displayCoords: "26.13239° N, 3.63330° E (Hadley–Apennine)",
        coordinateSystem: "Selenographic / NASA NSSDCA LRO Reference",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital & NSSDC Coordinate",
        coordinateNote:
          "The Descent Stage remains intact at Hadley–Apennine (26.13239° N, 3.63330° E). The Ascent Stage lifted off on 2 August 1971 at 17:11:23 GMT and was deliberately impacted into the Moon on 3 August 1971 at 01:04:01 GMT at 26.36° N, 0.25° E (~93 km west of Hadley–Apennine).",
        missionName: "Apollo 15 (LM-10)",
        missionDates: "Landed 30 July 1971 (22:16:29 GMT) • Ascent Liftoff 2 August 1971",
        summary:
          "The first Extended J-Series Apollo Lunar Module. Delivered astronauts David Scott and James Irwin, the folded LRV-1, and the ALSEP scientific station across the Apennine Mountain front.",
        artifactId: "falcon_apollo15",
        thumbnail: "assets/photos/s3_falcon_lunar_module.jpg",
        sourceName: "NASA NSSDCA Lunar Exploration Sites & Apollo 15 Mission Report",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },
      {
        id: "loc_alsep_apollo15",
        body: "moon",
        category: "artifact",
        officialName: "Apollo 15 ALSEP — Array A-2 & Nearby LRRR/SWC",
        featureType: "Autonomous Nuclear-Powered Geophysical Station",
        latitude: 26.13406,
        longitude: 3.62991,
        displayCoords: "26.13406° N, 3.62991° E (Hadley–Apennine, NW of Falcon)",
        coordinateSystem: "Selenographic / NASA NSSDCA LRO Reference",
        confidence: "approximate",
        confidenceLabel: "Verified Region — Source Longitude Sign Discrepancy Disclosed",
        coordinateNote:
          "Archival Source Discrepancy Note: NASA SP-4029 prints the Apollo 15 ALSEP coordinate with a minus sign (26.13407, -3.62981, implying West), whereas the Apollo Lunar Surface Journal (26.13407 N, 3.62981 E) and NASA NSSDCA LRO-measured table (26.13406° N, 3.62991° E; LRRR at 26.13341° N, 3.62850° E) place the array in East longitude at Hadley–Apennine (~110 m NW of Falcon). Both values are disclosed per museum source rules.",
        missionName: "Apollo 15",
        missionDates: "Commanded On 31 July 1971 (18:37 GMT) • Terminated 30 September 1977",
        summary:
          "Autonomous surface geophysical laboratory powered by a SNAP-27 radioisotope thermoelectric generator. Operated for more than six years after the astronauts returned to Earth, transmitting seismic, magnetic, solar-wind, and heat-flow data.",
        artifactId: "alsep_apollo15",
        thumbnail: "assets/photos/s2_alsep_central_station.jpg",
        sourceName: "NASA TM X-58131 (ALSEP Termination Report) & NASA NSSDCA",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },
      {
        id: "loc_surveyor3",
        body: "moon",
        category: "artifact",
        officialName: "Surveyor 3 Robotic Lander",
        featureType: "Uncrewed Soft-Landing Precursor Spacecraft",
        latitude: -2.94,
        longitude: -23.34,
        displayCoords: "2.94° S, 23.34° W (Oceanus Procellarum — Surveyor Crater)",
        coordinateSystem: "Selenographic / JPL TR 32-1177 Primary Report",
        confidence: "exact",
        confidenceLabel: "Verified JPL Technical Report Coordinate",
        coordinateNote:
          "Primary engineering source JPL Technical Report 32-1177 gives 2.94° S, 23.34° W inside a ~200 m crater in southeastern Oceanus Procellarum. NASA's public mission summary rounds this to 3° S, 23.41° W; NASA NSSDCA LRO-measured table lists 3.016° S, 23.418° W alongside Apollo 12 LM Intrepid (3.01239° S, 23.42157° W, 155 m away).",
        missionName: "Surveyor 3 & Apollo 12",
        missionDates: "Landed 20 April 1967 • Visited by Apollo 12 on 20 November 1969",
        summary:
          "The only human-made spacecraft on another world visited in person by astronauts from a later mission. Performed the Moon's first soil-mechanics trenching tests in 1967 before Apollo 12 astronauts Charles Conrad and Alan Bean retrieved its TV camera and scoop after 31 months of lunar exposure.",
        artifactId: "surveyor3",
        thumbnail: "assets/photos/surveyor3_apollo12_conrad.jpg",
        sourceName: "NASA SP-284 (Analysis of Surveyor 3 Material) & JPL TR 32-1177",
        sourceUrl: "https://ntrs.nasa.gov/citations/19720019083"
      },

      // ======================================================================
      // ADDITIONAL APOLLO LANDING SITES — CONTEXTUAL REGISTRY
      // ======================================================================
      {
        id: "loc_apollo11_tranquillity",
        body: "moon",
        category: "landing_site",
        officialName: "Apollo 11 — Statio Tranquillitatis (Eagle LM-5)",
        featureType: "Crewed Lunar Landing Site",
        latitude: 0.67408,
        longitude: 23.47297,
        displayCoords: "0.67408° N, 23.47297° E (Mare Tranquillitatis)",
        coordinateSystem: "Selenographic / NASA NSSDCA",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital Coordinate",
        missionName: "Apollo 11",
        missionDates: "Landed 20 July 1969",
        summary:
          "First crewed lunar landing site where Neil Armstrong and Buzz Aldrin deployed the Early Apollo Surface Experiments Package (EASEP) and left the Lunar Module Eagle descent stage.",
        artifactId: null,
        thumbnail: "assets/photos/dest_moon_lro.jpg",
        sourceName: "NASA NSSDCA Lunar Exploration Sites",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },
      {
        id: "loc_apollo12_intrepid",
        body: "moon",
        category: "landing_site",
        officialName: "Apollo 12 — Lunar Module Intrepid (LM-6)",
        featureType: "Crewed Pinpoint Landing Site",
        latitude: -3.01239,
        longitude: -23.42157,
        displayCoords: "3.01239° S, 23.42157° W (Oceanus Procellarum)",
        coordinateSystem: "Selenographic / NASA NSSDCA",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital Coordinate",
        missionName: "Apollo 12",
        missionDates: "Landed 19 November 1969",
        summary:
          "Touchdown point of Apollo 12 Lunar Module Intrepid on the northwest rim of Surveyor Crater, 155 meters (509 ft) from Surveyor 3.",
        artifactId: "surveyor3",
        thumbnail: "assets/photos/surveyor3_intrepid_horizon.jpg",
        sourceName: "NASA SP-284 & NSSDCA",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },
      {
        id: "loc_apollo16_descartes",
        body: "moon",
        category: "landing_site",
        officialName: "Apollo 16 — Descartes Highlands (Orion LM-11 & LRV-2)",
        featureType: "Crewed Highland Landing Site",
        latitude: -8.97301,
        longitude: 15.50019,
        displayCoords: "8.97301° S, 15.50019° E (Descartes Highlands)",
        coordinateSystem: "Selenographic / NASA NSSDCA",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital Coordinate",
        missionName: "Apollo 16",
        missionDates: "Landed 21 April 1972",
        summary:
          "Second Apollo J-mission site in the lunar highlands where John Young and Charles Duke operated Lunar Roving Vehicle LRV-2.",
        artifactId: null,
        thumbnail: "assets/photos/dest_moon_lro.jpg",
        sourceName: "NASA NSSDCA Lunar Exploration Sites",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },
      {
        id: "loc_apollo17_taurus_littrow",
        body: "moon",
        category: "landing_site",
        officialName: "Apollo 17 — Taurus–Littrow Valley (Challenger LM-12 & LRV-3)",
        featureType: "Crewed Lunar Landing Site",
        latitude: 20.1908,
        longitude: 30.77168,
        displayCoords: "20.19080° N, 30.77168° E (Taurus–Littrow)",
        coordinateSystem: "Selenographic / NASA NSSDCA",
        confidence: "exact",
        confidenceLabel: "Exact LRO Orbital Coordinate",
        missionName: "Apollo 17",
        missionDates: "Landed 11 December 1972",
        summary:
          "Final Apollo lunar landing site where Eugene Cernan and Harrison Schmitt operated Lunar Roving Vehicle LRV-3 across the Taurus–Littrow valley.",
        artifactId: null,
        thumbnail: "assets/photos/dest_moon_lro.jpg",
        sourceName: "NASA NSSDCA Lunar Exploration Sites",
        sourceUrl: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"
      },

      // ======================================================================
      // GEOGRAPHIC FEATURES — MOON (IAU / USGS OFFICIAL NOMENCLATURE)
      // ======================================================================
      {
        id: "geo_montes_apenninus",
        body: "moon",
        category: "feature",
        officialName: "Montes Apenninus (Apennine Mountains)",
        featureType: "Mons / Mountain Range (Rim of Imbrium Basin)",
        latitude: 19.87,
        longitude: -0.03,
        displayCoords: "19.87° N, 0.03° W • Length: ~600 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Towering lunar mountain chain rising up to 5 km (15,000+ ft) along the southeastern rim of the Mare Imbrium impact basin. Apollo 15 descended over its peaks to land on the Hadley plain.",
        artifactId: "falcon_apollo15",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/3972"
      },
      {
        id: "geo_rima_hadley",
        body: "moon",
        category: "feature",
        officialName: "Rima Hadley (Hadley Rille)",
        featureType: "Rima / Sinuous Volcanic Channel",
        latitude: 25.7,
        longitude: 3.15,
        displayCoords: "25.70° N, 3.15° E • Width: ~1.5 km, Depth: ~300–400 m",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Coordinate",
        summary:
          "V-shaped sinuous rille curving along the base of the Apennine Front. Apollo 15 astronauts drove the LRV to its eastern rim during EVA 1 and EVA 3 to photograph and sample exposed bedrock strata.",
        artifactId: "lrv_apollo15",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/5062"
      },
      {
        id: "geo_mare_imbrium",
        body: "moon",
        category: "feature",
        officialName: "Mare Imbrium (Sea of Rains)",
        featureType: "Mare / Giant Flooded Impact Basin",
        latitude: 34.72,
        longitude: -14.91,
        displayCoords: "34.72° N, 14.91° W • Diameter: 1,145 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "One of the largest impact basins in the Solar System, subsequently filled by basaltic lava flows. Its southeastern rim forms the Apennine Front explored by Apollo 15.",
        artifactId: null,
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/3677"
      },
      {
        id: "geo_oceanus_procellarum",
        body: "moon",
        category: "feature",
        officialName: "Oceanus Procellarum (Ocean of Storms)",
        featureType: "Oceanus / Vast Western Lunar Mare",
        latitude: 20.67,
        longitude: -56.68,
        displayCoords: "20.67° N, 56.68° W • Diameter: 2,592 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Vast basaltic plain on the western near side of the Moon. Southeastern Oceanus Procellarum hosted both the robotic Surveyor 3 landing (April 1967) and the pinpoint Apollo 12 landing (November 1969).",
        artifactId: "surveyor3",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/4387"
      }
    ],
    routes: [
      {
        id: "route_apollo15_lrv",
        name: "Apollo 15 LRV Traverses (EVA 1, 2 & 3 — 27.9 km Total)",
        artifactId: "lrv_apollo15",
        color: "#38bdf8",
        summary:
          "Three geological traverses driven by David Scott and James Irwin from the Lunar Module Falcon south to Elbow, St. George, and Spur Craters (Station 7 Genesis Rock) and west along Hadley Rille.",
        waypoints: [
          { lat: 26.13239, lon: 3.6333, label: "LM Falcon & ALSEP Deployment" },
          { lat: 26.098, lon: 3.605, label: "EVA 1: Elbow Crater (Station 1)" },
          { lat: 26.086, lon: 3.612, label: "EVA 1: St. George Crater Flank (Station 2)" },
          { lat: 26.078, lon: 3.662, label: "EVA 2: Apennine Front (Station 6)" },
          { lat: 26.083, lon: 3.645, label: "EVA 2: Spur Crater — Genesis Rock 15415 (Station 7)" },
          { lat: 26.136, lon: 3.588, label: "EVA 3: Scarp & Hadley Rille Rim (Stations 9, 9A, 10)" },
          { lat: 26.1322, lon: 3.6339, label: "Final LRV Parking Site (VIP Site)" }
        ]
      }
    ]
  },

  mars: {
    body: "mars",
    title: "Mars Atlas",
    subtitle: "Interactive Cartographic & Orbital Registry • Mars (The Red Planet)",
    referenceSystem: "IAU Planetocentric / Mars_2000_Sphere (East Longitude 0°–360° / ±180°)",
    radiusKm: 3396.19,
    defaultCenter: { lat: 15.0, lon: -15.0, zoom: 1.35 },
    basemaps: [
      {
        id: "viking_mdim21",
        label: "Viking Color Mosaic (MDIM 2.1 — 232 m)",
        localTexture: "assets/atlas/mars_viking_global.jpg",
        wmtsTemplate:
          "https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg",
        credit: "NASA / JPL / USGS (Viking Orbiter MDIM 2.1 Global Mosaic via Mars Trek WMTS)",
        sourceUrl: "https://trek.nasa.gov/mars/"
      },
      {
        id: "mgs_mola",
        label: "MGS MOLA Colorized Elevation & Shaded Relief (463 m)",
        localTexture: "assets/atlas/mars_mola_global.jpg",
        wmtsTemplate:
          "https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/{z}/{y}/{x}.jpg",
        credit: "NASA / GSFC / JPL / MGS MOLA Science Team (Mars Trek WMTS)",
        sourceUrl: "https://trek.nasa.gov/mars/"
      }
    ],
    layers: {
      geographicFeatures: { label: "Geographic Features (IAU/USGS)", defaultVisible: true },
      landingSites: { label: "Mission Landing Sites", defaultVisible: true },
      museumArtifacts: { label: "Museum Artifacts (5 Exhibits)", defaultVisible: true },
      missionRoutes: { label: "Surface Traverse & Flight Routes", defaultVisible: true }
    },
    locations: [
      // ======================================================================
      // MUSEUM ARTIFACTS — MARS WING (5 EXHIBITS / 7 SURFACE EXPLORERS)
      // ======================================================================
      {
        id: "loc_sojourner_mpf",
        body: "mars",
        category: "artifact",
        officialName: "Sojourner Microrover (Mars Pathfinder / Carl Sagan Memorial Station)",
        featureType: "First Wheeled Planetary Rover on Mars",
        latitude: 19.13,
        longitude: -33.22,
        displayCoords: "19.13° N, 33.22° W (326.78° E — Ares Vallis, Chryse Planitia)",
        coordinateSystem: "IAU Planetocentric / NASA Mars Exploration Program",
        confidence: "exact",
        confidenceLabel: "Verified NASA Landing Site Coordinate",
        coordinateNote:
          "Landed at the mouth of the Ares Vallis outflow channel in Chryse Planitia (19.13° N, 33.22° W planetocentric; pre-2002 planetographic tables also cite 19.33° N, 33.55° W). Sojourner remained within ~12 meters of the Carl Sagan Memorial Station while driving ~100 meters cumulative distance.",
        missionName: "Mars Pathfinder",
        missionDates: "Landed 4 July 1997 • Deployed Sol 2 (5 July 1997) • Final Transmission 27 September 1997 (Sol 83)",
        summary:
          "A 10.5 kg, six-wheeled technology demonstrator that proved wheeled rovers could traverse rocky floodplains on Mars. Examined rocks including Barnacle Bill, Yogi, Wedge, and Shark with its Alpha Proton X-Ray Spectrometer (APXS).",
        artifactId: "sojourner_mpf",
        thumbnail: "assets/photos/sojourner_on_mars_hero.jpg",
        sourceName: "NASA Mars Pathfinder Mission Page & PDS",
        sourceUrl: "https://science.nasa.gov/mission/mars-pathfinder/"
      },
      {
        id: "loc_mer_spirit",
        body: "mars",
        category: "artifact",
        officialName: "Spirit Rover (MER-A — Columbia Memorial Station to Troy, Home Plate)",
        featureType: "Mars Exploration Rover (MER-A)",
        latitude: -14.5684,
        longitude: 175.4726,
        displayCoords: "14.5684° S, 175.4726° E (Landing) → 14.5993° S, 175.5284° E (Final Stop at Troy)",
        coordinateSystem: "Mars_2000_Sphere / PDS Geosciences Node Corrected Traverse",
        confidence: "exact",
        confidenceLabel: "Exact PDS Bundle-Adjusted Traverse Coordinate",
        coordinateNote:
          "Spirit touched down at 14.5684° S, 175.4726° E in Gusev Crater on 4 January 2004 UTC and drove 7,730.50 m across the plains, up Husband Hill in the Columbia Hills, and around Home Plate to its final embedded position at Troy (Site 137, Pose 24: 14.5993° S, 175.5284° E).",
        missionName: "Mars Exploration Rover — Spirit (MER-A)",
        missionDates: "Landed 4 Jan 2004 UTC • Last Communication 22 March 2010 (Sol 2210)",
        summary:
          "Twin robotic field geologist that climbed Husband Hill, discovered carbonate-rich outcrops at Comanche and ~90% opaline silica soil at Gertrude Weise (evidence of ancient hydrothermal activity), and operated for more than six years.",
        artifactId: "mer_spirit_opportunity",
        thumbnail: "assets/photos/mer_spirit_husband_hill.jpg",
        sourceName: "PDS Geosciences Node MER-A Traverse Archive",
        sourceUrl: "https://an.rsl.wustl.edu/mera/AN/pages/mer/mer_traverse.htm"
      },
      {
        id: "loc_mer_opportunity",
        body: "mars",
        category: "artifact",
        officialName: "Opportunity Rover (MER-B — Challenger Memorial Station to Perseverance Valley)",
        featureType: "Mars Exploration Rover (MER-B)",
        latitude: -1.9462,
        longitude: 354.4734,
        displayCoords: "1.9462° S, 354.4734° E / 5.5266° W (Eagle Crater) → 2.2862° S, 354.2302° E (Perseverance Valley)",
        coordinateSystem: "Mars_2000_Sphere / PDS Geosciences Node Corrected Traverse",
        confidence: "exact",
        confidenceLabel: "Exact PDS Bundle-Adjusted Traverse Coordinate",
        coordinateNote:
          "Opportunity landed inside Eagle Crater on Meridiani Planum (1.9462° S, 354.4734° E) on 25 January 2004 UTC and drove 45,161.02 m (28.06 miles) via Endurance, Victoria, and Endeavour Craters to Perseverance Valley (Site 139, Pose 60: 2.2862° S, 354.2302° E).",
        missionName: "Mars Exploration Rover — Opportunity (MER-B)",
        missionDates: "Landed 25 Jan 2004 UTC • Last Communication 10 June 2018 (Sol 5111)",
        summary:
          "Record-setting Martian marathon rover that discovered hematite 'blueberries' at Eagle Crater, sulfate sandstones at Endurance and Victoria Craters, and gypsum veins and neutral-water clays along the rim of Endeavour Crater across nearly 15 Earth years.",
        artifactId: "mer_spirit_opportunity",
        thumbnail: "assets/photos/mer_opportunity_eagle_crater.jpg",
        sourceName: "PDS Geosciences Node MER-B Traverse Archive",
        sourceUrl: "https://an.rsl.wustl.edu/merb/AN/pages/mer/mer_traverse.htm"
      },
      {
        id: "loc_viking1",
        body: "mars",
        category: "artifact",
        officialName: "Viking 1 Lander (Thomas A. Mutch Memorial Station)",
        featureType: "Nuclear-Powered Surface Lander & Biological Laboratory",
        latitude: 22.27,
        longitude: -47.95,
        displayCoords: "22.27° N, 47.95° W (312.05° E — Chryse Planitia)",
        coordinateSystem: "IAU Planetocentric / NASA Viking Mission Report",
        confidence: "exact",
        confidenceLabel: "Verified NASA & HiRISE Coordinate",
        coordinateNote:
          "NASA Viking mission documentation cites 22.27° N, 47.95° W (planetocentric; planetographic 22.48° N, 47.97° W) in western Chryse Planitia, later imaged directly on the surface by MRO HiRISE.",
        missionName: "Viking 1",
        missionDates: "Landed 20 July 1976 (11:53:06 UTC) • Final Contact 11/13 November 1982",
        summary:
          "The first spacecraft to land safely on Mars and complete an extended scientific mission. Operated for more than six Earth years on Chryse Planitia using two SNAP-19 radioisotope thermoelectric generators.",
        artifactId: "viking_1_2",
        thumbnail: "assets/photos/viking1_chryse_panorama.jpg",
        sourceName: "NASA Viking 1 Lander Mission Page",
        sourceUrl: "https://science.nasa.gov/mission/viking-1/"
      },
      {
        id: "loc_viking2",
        body: "mars",
        category: "artifact",
        officialName: "Viking 2 Lander (Gerald Soffen Memorial Station)",
        featureType: "Nuclear-Powered Surface Lander & Biological Laboratory",
        latitude: 47.64,
        longitude: -225.71,
        displayCoords: "47.64° N, 225.71° W (134.29° E — Utopia Planitia)",
        coordinateSystem: "IAU Planetocentric / NASA Viking Mission Report",
        confidence: "exact",
        confidenceLabel: "Verified NASA & HiRISE Coordinate",
        coordinateNote:
          "Located in northern Utopia Planitia (~6,460 km / 4,000 mi from Viking 1) at 47.64° N, 225.71° W (134.29° E; planetographic 47.97° N, 225.74° W).",
        missionName: "Viking 2",
        missionDates: "Landed 3 September 1976 (22:37:50 UTC) • Last Lander Data 11 April 1980",
        summary:
          "Twin Viking lander on the high-latitude plains of Utopia Planitia. Recorded seasonal winter water-ice surface frost, operated a working surface seismometer, and performed biological and organic soil analyses.",
        artifactId: "viking_1_2",
        thumbnail: "assets/photos/viking2_utopia_frost.jpg",
        sourceName: "NASA Viking 2 Lander Mission Page",
        sourceUrl: "https://science.nasa.gov/mission/viking-2/"
      },
      {
        id: "loc_phoenix_lander",
        body: "mars",
        category: "artifact",
        officialName: "Phoenix Mars Lander",
        featureType: "Solar-Powered Polar Excavating Lander",
        latitude: 68.22,
        longitude: -125.7,
        displayCoords: "68.22° N, 125.7° W (234.3° E — Green Valley, Vastitas Borealis)",
        coordinateSystem: "IAU Planetocentric / NASA Phoenix Mission Report",
        confidence: "exact",
        confidenceLabel: "Exact NASA & HiRISE Coordinate",
        coordinateNote:
          "Touched down in the northern polar plains of Vastitas Borealis ('Green Valley') at 68.22° N, 125.7° W (234.3° E), the farthest north of any Mars surface spacecraft.",
        missionName: "Phoenix Mars Lander",
        missionDates: "Landed 25 May 2008 • Last Signal 2 November 2008 (152 Sols)",
        summary:
          "Stationary polar lander whose 2.35-meter robotic arm excavated shallow subsurface trenches ('Dodo-Goldilocks', 'Snow White'), directly exposing water ice that sublimated over four sols and identifying perchlorate salts and calcium carbonate.",
        artifactId: "phoenix_insight",
        thumbnail: "assets/photos/phoenix_sublimating_ice.jpg",
        sourceName: "NASA Phoenix Mission Page & JPL Robotic Arm Report",
        sourceUrl: "https://science.nasa.gov/mission/phoenix/"
      },
      {
        id: "loc_insight_lander",
        body: "mars",
        category: "artifact",
        officialName: "InSight Geophysical Lander",
        featureType: "Solar-Powered Interior Exploration Lander",
        latitude: 4.5024,
        longitude: 135.6234,
        displayCoords: "4.5024° N, 135.6234° E (Homestead Hollow, Elysium Planitia)",
        coordinateSystem: "IAU Planetocentric / NASA InSight Mission Report",
        confidence: "exact",
        confidenceLabel: "Exact NASA & HiRISE Coordinate",
        coordinateNote:
          "Landed inside a shallow degraded impact depression nicknamed 'Homestead Hollow' on equatorial Elysium Planitia (4.5024° N, 135.6234° E).",
        missionName: "InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport)",
        missionDates: "Landed 26 November 2018 • Last Contact 15 December 2022 (Mission End 21 Dec 2022)",
        summary:
          "Stationary geophysical observatory that placed the first ultra-sensitive broadband seismometer (SEIS) directly onto the Martian ground, detecting more than 1,300 marsquakes and measuring Mars's liquid core, mantle, and crust before dust coated its solar arrays.",
        artifactId: "phoenix_insight",
        thumbnail: "assets/photos/insight_seis_wtshield_hp3.jpg",
        sourceName: "NASA InSight Mission Page",
        sourceUrl: "https://science.nasa.gov/mission/insight/"
      },
      {
        id: "loc_ingenuity_mars",
        body: "mars",
        category: "artifact",
        officialName: "Ingenuity Mars Helicopter (Wright Brothers Field to Valinor Hills)",
        featureType: "Coaxial Solar-Charged Planetary Rotorcraft",
        latitude: 18.4447,
        longitude: 77.4508,
        displayCoords: "18.4447° N, 77.4508° E (Airfield A) → ~18.497° N, 77.316° E (Airfield Chi / Valinor Hills)",
        coordinateSystem: "IAU Planetocentric / Mars 2020 Jezero Reference",
        confidence: "exact",
        confidenceLabel: "Verified NASA Mars 2020 Coordinate",
        coordinateNote:
          "Deployed at Octavia E. Butler Landing / Wright Brothers Field (18.4447° N, 77.4508° E) inside Jezero Crater on 3 April 2021. Across 72 flights totaling ~17.0 km, Ingenuity flew northwest across the ancient river delta to its final landing spot in Neretva Vallis / Valinor Hills on 18 January 2024.",
        missionName: "Mars 2020 — Ingenuity Mars Helicopter",
        missionDates: "First Flight 19 April 2021 • Final Flight (Flight 72) 18 January 2024",
        summary:
          "The first aircraft to achieve powered, controlled aerodynamic flight on another planet. Designed for 5 technology-demonstration flights over 30 sols, the 1.8 kg coaxial helicopter completed 72 flights over nearly three Earth years before rotor blade tip damage ended flight operations.",
        artifactId: "ingenuity_mars",
        thumbnail: "assets/photos/ingenuity_deployed_airfield.jpg",
        sourceName: "NASA Ingenuity Mars Helicopter Flight Log",
        sourceUrl: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/"
      },

      // ======================================================================
      // GEOGRAPHIC FEATURES — MARS (IAU / USGS OFFICIAL NOMENCLATURE)
      // ======================================================================
      {
        id: "geo_chryse_planitia",
        body: "mars",
        category: "feature",
        officialName: "Chryse Planitia (Plains of Gold)",
        featureType: "Planitia / Lowland Basin",
        latitude: 28.43,
        longitude: -39.97,
        displayCoords: "28.43° N, 39.97° W (320.03° E) • Diameter: ~1,540 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Broad northern lowland basin into which ancient catastrophic flood channels including Ares Vallis and Kasei Valles emptied. Hosted both Viking 1 (1976) and Mars Pathfinder / Sojourner (1997).",
        artifactId: "viking_1_2",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/1208"
      },
      {
        id: "geo_utopia_planitia",
        body: "mars",
        category: "feature",
        officialName: "Utopia Planitia",
        featureType: "Planitia / Largest Impact Basin on Mars",
        latitude: 46.74,
        longitude: 117.52,
        displayCoords: "46.74° N, 117.52° E • Diameter: ~3,560 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Vast northern plains basin where Viking 2 landed in September 1976 and documented seasonal water-ice frost on the Martian surface.",
        artifactId: "viking_1_2",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/6262"
      },
      {
        id: "geo_gusev_crater",
        body: "mars",
        category: "feature",
        officialName: "Gusev Crater & Columbia Hills",
        featureType: "Crater / Ancient Crater Basin",
        latitude: -14.51,
        longitude: 175.52,
        displayCoords: "14.51° S, 175.52° E • Diameter: 158 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "158-km impact crater breached from the south by Ma'adim Vallis. Selected as Spirit's landing site because orbital topography suggested an ancient crater lake; Spirit found volcanic plains on the floor before discovering hydrothermal silica and carbonates in the Columbia Hills.",
        artifactId: "mer_spirit_opportunity",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/2289"
      },
      {
        id: "geo_meridiani_planum",
        body: "mars",
        category: "feature",
        officialName: "Meridiani Planum",
        featureType: "Planum / Equatorial Hematite-Bearing Plain",
        latitude: -0.04,
        longitude: -3.14,
        displayCoords: "0.04° S, 356.86° E (3.14° W) • Extent: ~1,060 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Flat equatorial plain rich in coarse-grained gray hematite detected from orbit by Mars Global Surveyor. Opportunity explored its layered sulfate sedimentary rocks and Endeavour Crater rim for 5,111 sols.",
        artifactId: "mer_spirit_opportunity",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/14165"
      },
      {
        id: "geo_vastitas_borealis",
        body: "mars",
        category: "feature",
        officialName: "Vastitas Borealis (Green Valley Polar Plains)",
        featureType: "Vastitas / Circumpolar Northern Lowland",
        latitude: 67.79,
        longitude: -125.0,
        displayCoords: "68.22° N, 125.7° W (Green Valley Region)",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Regional Feature",
        summary:
          "Extensive northern circumpolar plain patterned by polygonal periglacial troughs underlain by shallow water-ice permafrost, excavated by the Phoenix Mars Lander in 2008.",
        artifactId: "phoenix_insight",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/6330"
      },
      {
        id: "geo_elysium_planitia",
        body: "mars",
        category: "feature",
        officialName: "Elysium Planitia",
        featureType: "Planitia / Equatorial Volcanic Plain",
        latitude: 2.97,
        longitude: 154.74,
        displayCoords: "2.97° N, 154.74° E • Diameter: ~3,000 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Broad, flat, low-elevation equatorial plain south of the Elysium volcanic province. Chosen for InSight in 2018 to maximize solar power and provide a safe, level surface for deploying its seismometer and heat probe.",
        artifactId: "phoenix_insight",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/1785"
      },
      {
        id: "geo_jezero_crater",
        body: "mars",
        category: "feature",
        officialName: "Jezero Crater",
        featureType: "Crater / Ancient River Delta & Lake Basin",
        latitude: 18.41,
        longitude: 77.69,
        displayCoords: "18.41° N, 77.69° E • Diameter: 47.5 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "47.5-km crater on the western edge of Isidis Planitia preserving a fan-shaped river delta fed by Neretva Vallis. Served as the operating theater for all 72 flights of the Ingenuity Mars Helicopter.",
        artifactId: "ingenuity_mars",
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/14395"
      },
      {
        id: "geo_olympus_mons",
        body: "mars",
        category: "feature",
        officialName: "Olympus Mons",
        featureType: "Mons / Shield Volcano",
        latitude: 18.65,
        longitude: -133.8,
        displayCoords: "18.65° N, 133.80° W (226.20° E) • Summit: ~21.9 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Largest volcano in the Solar System, rising nearly 22 km above the Martian datum across a 600-km base.",
        artifactId: null,
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/4453"
      },
      {
        id: "geo_valles_marineris",
        body: "mars",
        category: "feature",
        officialName: "Valles Marineris",
        featureType: "Vallis / Tectonic Canyon System",
        latitude: -13.9,
        longitude: -59.2,
        displayCoords: "13.90° S, 59.20° W (300.80° E) • Length: ~3,770 km",
        coordinateSystem: "IAU / USGS Planetary Gazetteer",
        confidence: "exact",
        confidenceLabel: "Official IAU Feature Center",
        summary:
          "Vast equatorial canyon system stretching nearly 4,000 km east toward the outflow channels that drain into Chryse Planitia.",
        artifactId: null,
        sourceName: "USGS / IAU Gazetteer of Planetary Nomenclature",
        sourceUrl: "https://planetarynames.wr.usgs.gov/Feature/6287"
      }
    ],
    routes: [
      {
        id: "route_mer_spirit",
        name: "Spirit (MER-A) PDS Traverse — 7.73 km across Gusev & Columbia Hills (487 Waypoints)",
        artifactId: "mer_spirit_opportunity",
        pdsSourceKey: "spirit_mera",
        color: "#fb923c",
        summary:
          "Official PDS Geosciences Node bundle-adjusted traverse from Columbia Memorial Station across Bonneville Crater, up Husband Hill, and down to Home Plate and Troy (Sols 1–2210)."
      },
      {
        id: "route_mer_opportunity",
        name: "Opportunity (MER-B) PDS Traverse — 45.16 km from Eagle to Endeavour Crater (674 Waypoints)",
        artifactId: "mer_spirit_opportunity",
        pdsSourceKey: "opportunity_merb",
        color: "#38bdf8",
        summary:
          "Official PDS Geosciences Node bundle-adjusted traverse from Eagle Crater through Endurance, Victoria, and Santa Maria Craters to Cape York, Marathon Valley, and Perseverance Valley on Endeavour Crater's western rim (Sols 1–5111)."
      },
      {
        id: "route_ingenuity_jezero",
        name: "Ingenuity Helicopter 72-Flight Corridor (~17.0 km across Jezero Crater)",
        artifactId: "ingenuity_mars",
        color: "#34d399",
        summary:
          "Aerial corridor from Wright Brothers Field (Airfield A) across the Séítah terrain, up the ancient Jezero river delta, and along Neretva Vallis to Airfield Chi (Valinor Hills).",
        waypoints: [
          { lat: 18.4447, lon: 77.4508, label: "Flight 1–5: Wright Brothers Field (Airfield A)" },
          { lat: 18.426, lon: 77.442, label: "Flight 9: South Séítah Reconnaissance (625 m)" },
          { lat: 18.458, lon: 77.405, label: "Flight 25: Record 704 m Sprint Toward Delta" },
          { lat: 18.472, lon: 77.368, label: "Flight 61: Record 24 m Altitude Over Delta Top" },
          { lat: 18.497, lon: 77.316, label: "Flight 72: Final Touchdown at Valinor Hills (18 Jan 2024)" }
        ]
      }
    ]
  }
};
