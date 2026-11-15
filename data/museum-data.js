/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Verified Content & Archival Dataset (Version 1.0 — Pilot Dossier)
 *
 * Primary Reference: Forgotten_Explorers_LRV_Research_and_Website_Report.pdf
 * Primary NASA Sources: S1–S11 (Apollo 15 Press Kit, NASA Science, NASA History, LRO Photojournal)
 *
 * Editorial Principle: First-person narration is a storytelling device only.
 * The artifact does not literally speak, feel, or independently make scientific discoveries.
 * All scientific claims are attributed to the crew, mission team, instruments, samples, or subsequent laboratory analysis.
 */

window.MUSEUM_DATA = {
  project: {
    name: "The Forgotten Explorers",
    tagline: "They Left Earth, Their Legacy Stayed.",
    subtitle: "Some explorers never came home.",
    description:
      "Discover the forgotten machines that explored other worlds, the missions they served, and the scientific discoveries they left behind.",
    cta: "Enter the Museum",
    version: "1.0 — Pilot Exhibit Build (Apollo 15 LRV)",
    editorialPrinciple:
      "First-person narration is an interpretive museum storytelling device only. The Lunar Roving Vehicle did not literally speak, feel, or independently make scientific discoveries. All scientific observations, sample collections, and interpretations are attributable to the Apollo 15 crew, mission science teams, instruments, and post-mission laboratory analysis on Earth."
  },

  destinations: {
    header: "Choose Your Destination",
    items: [
      {
        id: "moon",
        name: "Moon",
        subtitle: "Earth's Closest Neighbor • 384,400 km",
        status: "ACTIVE PILOT WING",
        coordinates: "Hadley–Apennine • Mare Imbrium Rim",
        description:
          "Discover the machines that explored Earth's closest neighbor, uncovered the Moon's secrets, and paved the way for human exploration.",
        cta: "Explore Moon",
        atmosphereLabel: "Lunar Vacuum • High-Contrast Albedo • Regolith Silver",
        planetImage: "assets/photos/dest_moon_lro.jpg",
        planetImageCredit: "NASA / GSFC / Arizona State University (Lunar Reconnaissance Orbiter)",
        planetImageSourceUrl: "https://images.nasa.gov/details/GSFC_20171208_Archive_e001861",
        planetImageType: "Orbital Image",
        stats: [
          { label: "Collection Groups", value: "4 Archival Groups" },
          { label: "Active Pilot Exhibit", value: "Apollo 15 LRV" },
          { label: "Environment", value: "1/6 g • Hard Vacuum" }
        ]
      },
      {
        id: "mars",
        name: "Mars",
        subtitle: "The Red Planet • Fourth World from the Sun",
        status: "UPCOMING WING — DOSSIERS IN RESEARCH",
        coordinates: "Chryse Planitia • Gusev • Jezero",
        description:
          "Discover the robotic explorers that transformed our understanding of the Red Planet.",
        cta: "Explore Mars",
        atmosphereLabel: "Martian Oxide • Iron-Rich Regolith • Atmospheric Dust Haze",
        planetImage: "assets/photos/dest_mars_viking.jpg",
        planetImageCredit: "NASA / JPL / USGS (Viking Orbiter Mosaic PIA00407)",
        planetImageSourceUrl: "https://images.nasa.gov/details/PIA00407",
        planetImageType: "Orbital Image",
        stats: [
          { label: "Collection Groups", value: "5 Planned Groups" },
          { label: "Active Exhibits", value: "In Research Queue" },
          { label: "Environment", value: "0.38 g • CO₂ Atmosphere" }
        ]
      }
    ]
  },

  collections: {
    moon: {
      destinationId: "moon",
      title: "Lunar Surface Collection",
      wingCode: "WING 01 • LUNA — EARTH'S MOON",
      environmentSummary:
        "Across robotic precursor missions and six crewed Apollo landings, human-made descent stages, rovers, and surface experiment packages remained on the lunar regolith. Because the Moon lacks wind, rain, or atmospheric erosion, these artifacts—and the tracks around them—endure as a physical record of planetary exploration.",
      groups: [
        {
          groupId: "lrv_group",
          groupTitle: "Lunar Roving Vehicles (Apollo 15, 16, 17)",
          groupCategory: "Crewed Surface Mobility Systems",
          status: "active_pilot",
          statusLabel: "Active Pilot Exhibit Available",
          featuredArtifact: {
            artifact_id: "lrv_apollo15",
            artifact_name: "Lunar Roving Vehicle",
            mission: "Apollo 15",
            designation: "LRV-1 (Flight Vehicle 1)",
            site: "Hadley–Apennine (26° 04' 54\" N, 3° 39' 30\" E)",
            dates: "Deployed 31 July 1971 • Active through 2 August 1971",
            heroImage: "assets/photos/v1_apollo15_on_moon.jpg",
            heroImageType: "Historical Photograph",
            heroImageCredit: "NASA (Photo by Commander David R. Scott, 31 July 1971)",
            heroImageSource: "https://science.nasa.gov/resource/apollo-15-on-the-moon/",
            summary:
              "The first crewed surface rover operated on the Moon. Folded into Quadrant 1 of the Lunar Module Falcon, this battery-powered, four-wheel-drive electric vehicle enabled Apollo 15 astronauts David Scott and James Irwin to explore the Apennine Front, Spur Crater, and Hadley Rille across three geological traverses.",
            ctaLabel: "Open Museum Exhibit",
            siblingUnitsNote:
              "Collection group also encompasses Apollo 16 (LRV-2, Descartes Highlands) and Apollo 17 (LRV-3, Taurus–Littrow); individual dossiers for LRV-2 and LRV-3 are scheduled for future research passes."
          }
        },
        {
          groupId: "apollo_lm_group",
          groupTitle: "Apollo Lunar Modules",
          groupCategory: "Crewed Descent & Ascent Spacecraft",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Planned archival exhibit group. Detailed historical facts, primary-source engineering specifications, and verified NASA media inventories are pending separate dossier verification before publication."
        },
        {
          groupId: "alsep_group",
          groupTitle: "ALSEP Scientific Packages",
          groupCategory: "Autonomous Surface Geophysical Stations",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Planned archival exhibit group covering the Apollo Lunar Surface Experiments Packages deployed on the Moon. Note: ALSEP was a standalone scientific station deployed near the Lunar Module, separate from the Lunar Roving Vehicle. Detailed dossier pending verification."
        },
        {
          groupId: "surveyor_group",
          groupTitle: "Surveyor Landers",
          groupCategory: "Robotic Precursor Landers",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Planned archival exhibit group. Detailed historical facts, mission timelines, and verified NASA media inventories are pending separate dossier verification before publication."
        }
      ]
    },

    mars: {
      destinationId: "mars",
      title: "Martian Surface Collection",
      wingCode: "WING 02 • MARS — THE RED PLANET",
      environmentSummary:
        "The Martian Wing of The Forgotten Explorers will chronicle the robotic landers, rovers, and rotorcraft left across the plains and craters of Mars. In accordance with museum accuracy standards, these exhibits remain locked in archival preparation until their individual primary-source dossiers are verified.",
      groups: [
        {
          groupId: "sojourner_group",
          groupTitle: "Sojourner Rover",
          groupCategory: "Mars Pathfinder Microrover",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Approved site structure entry. Detailed facts, engineering specifications, and verified NASA media inventories must be researched separately before publication."
        },
        {
          groupId: "mer_group",
          groupTitle: "Spirit & Opportunity",
          groupCategory: "Mars Exploration Rovers (MER-A & MER-B)",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Approved site structure entry. Detailed facts, engineering specifications, and verified NASA media inventories must be researched separately before publication."
        },
        {
          groupId: "viking_group",
          groupTitle: "Viking 1 & 2 Landers",
          groupCategory: "Surface Landers & Biological Laboratories",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Approved site structure entry. Detailed facts, engineering specifications, and verified NASA media inventories must be researched separately before publication."
        },
        {
          groupId: "phoenix_insight_group",
          groupTitle: "Phoenix & InSight Landers",
          groupCategory: "Polar & Geophysical Surface Landers",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Approved site structure entry. Detailed facts, engineering specifications, and verified NASA media inventories must be researched separately before publication."
        },
        {
          groupId: "ingenuity_group",
          groupTitle: "Ingenuity Helicopter",
          groupCategory: "Planetary Aerial Rotorcraft",
          status: "upcoming",
          statusLabel: "Upcoming Exhibit — Research Dossier Pending",
          researchNote:
            "Approved site structure entry. Detailed facts, engineering specifications, and verified NASA media inventories must be researched separately before publication."
        }
      ]
    }
  },

  // ============================================================================
  // PILOT ARTIFACT DOSSIER: LUNAR ROVING VEHICLE (APOLLO 15)
  // Matches Section 12 Suggested Content Data Shape
  // ============================================================================
  pilotExhibit: {
    artifact_id: "lrv_apollo15",
    destination: "moon",
    artifact_name: "Lunar Roving Vehicle",
    official_full_name: "Lunar Roving Vehicle (LRV), Apollo 15 Flight Vehicle",
    mission: "Apollo 15",
    verification_status: "pilot_dossier_in_progress",

    identityCard: {
      artifact: "Lunar Roving Vehicle (LRV), Apollo 15 flight vehicle",
      destinationSite:
        "Moon — Hadley–Apennine region, near Hadley Rille and the Apennine front (26° 04' 54\" N, 3° 39' 30\" E)",
      surfaceCrew:
        "David R. Scott (Commander) and James B. Irwin (Lunar Module Pilot)",
      orbitalCrewNote:
        "Alfred M. Worden (Command Module Pilot) remained in lunar orbit aboard Command Module Endeavour",
      launchDate: "26 July 1971",
      launchSite: "Kennedy Space Center, Florida (Launch Complex 39A, Saturn V SA-510)",
      lunarLandingDate: "30 July 1971",
      lunarModuleName: "Falcon (LM-10)",
      firstDeploymentDate: "31 July 1971, during the first lunar surface EVA",
      splashdownDate: "7 August 1971",
      primaryPurpose:
        "Extend the astronauts' range and productivity on geological traverses; carry crew, tools, scientific and communications equipment, photographic gear, and lunar samples",
      builder:
        "The Boeing Company (Aerospace Group, Kent Space Center, Washington), under contract to NASA Marshall Space Flight Center; Delco Electronics Division of General Motors Corp. was a major subcontractor",
      primaryReferences: [
        "S1 — NASA Apollo 15 Press Kit (1971)",
        "S2 — 50 Years Ago: Apollo 15 on the Moon at Hadley–Apennine (NASA)",
        "S3 — Apollo 15 Mission Page (NASA)"
      ]
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an editorial device used to guide visitors through the artifact's operational history. The vehicle did not literally speak, feel, or independently make scientific discoveries.",
      shortIntroduction:
        "I am the Lunar Roving Vehicle, the battery-powered electric rover that helped Apollo 15 astronauts David Scott and James Irwin travel farther across the Moon than they could on foot. I carried astronauts, tools, cameras, communications equipment, and lunar samples across the Hadley–Apennine region. I was not a scientist and I did not make discoveries on my own; I gave the crew the mobility and carrying capacity to investigate more of the lunar landscape.",
      fullStoryParagraphs: [
        {
          heading: "The Folding Machine in Quadrant 1",
          text: "I began as an engineering challenge: how could a vehicle be folded into a compact space inside the Lunar Module, carried to another world, and then deployed to work in a vacuum, low gravity, extreme temperatures, and unfamiliar terrain?"
        },
        {
          heading: "Arrival at Hadley–Apennine",
          text: "My journey to the Moon was aboard Apollo 15. After the Lunar Module Falcon landed in the Hadley–Apennine region on 30 July 1971, David Scott and James Irwin deployed me during their first lunar surface excursion on 31 July. They unfolded and prepared me for operation, loaded the equipment they needed, and began exploring beyond the immediate area around the lander."
        },
        {
          heading: "Carrying Explorers to the Mountain Front",
          text: "Across three traverses, I carried the crew and their equipment to geological locations that would have been much harder to reach on foot. At Spur Crater, the astronauts collected a striking white anorthosite sample later known as the Genesis Rock. I helped them reach the site and transport their samples, but the astronauts selected and collected the rock, and scientists later studied it on Earth."
        },
        {
          heading: "Engineered for an Alien Road",
          text: "My work also depended on engineering systems that had to function in a place unlike any road on Earth: four independently powered wheels, redundant steering, battery power, navigation aids, and thermal protection. During the first traverse, the front steering system did not work as intended; the crew continued using rear steering. The front steering worked on the later traverses."
        },
        {
          heading: "A Permanent Trace in the Regolith",
          text: "When Apollo 15 ended, I remained on the lunar surface. My tracks did not disappear with weather, because the Moon has no wind or rain to erase them. Decades later, NASA's Lunar Reconnaissance Orbiter photographed the tracks left by the rover and the astronauts. I became part of a lasting record of how humans explored the Moon."
        }
      ],
      closingNarration:
        "When the astronauts left the Moon, I stayed behind. My wheels stopped turning, but the routes they travelled became part of the lunar record. Decades later, an orbiter traced those paths again from above. I was built to carry explorers across the surface; now the tracks I left help tell the story of where they went."
    },

    // ==========================================================================
    // SECTION 5.2: INTERACTIVE MISSION TIMELINE
    // ==========================================================================
    timeline: {
      chronologyNote:
        "Date note: The EVA dates below are consistent with NASA mission-history material (S2, S3) and NASA mission chronology (S4). Precise traverse start/end timestamps and per-EVA odometer vs. map distances remain separated pending cross-check against the primary Apollo 15 EVA Operations Report.",
      events: [
        {
          id: "evt_launch",
          stepNumber: "01",
          date: "26 July 1971",
          shortTitle: "Launch from Kennedy Space Center",
          missionPhase: "LAUNCH & TRANSLUNAR INJECTION",
          roverStatus: "Stowed in LM Quadrant 1 (Folded Configuration)",
          whatHappened:
            "Apollo 15 launches from Launch Complex 39A at Kennedy Space Center, Florida, atop a Saturn V launch vehicle (SA-510) carrying Commander David R. Scott, Command Module Pilot Alfred M. Worden, and Lunar Module Pilot James B. Irwin.",
          whatRoverEnabled:
            "The rover travels as stowed equipment folded inside Quadrant 1 of the Lunar Module Falcon descent stage; it is not yet operating. Its forward and aft chassis sections and four suspension assemblies are folded inward over the center chassis to fit the pie-shaped bay.",
          scientificConnection:
            "Saturn V vehicle SA-510 was modified to deliver a payload more than 4,000 lb heavier than Apollo 14, accommodating the first Lunar Roving Vehicle and nearly doubling lunar surface stay time.",
          imageAssetId: "S3_LAUNCH",
          imagePath: "assets/photos/s3_apollo15_launch.jpg",
          imageType: "Historical Photograph",
          imageDate: "26 July 1971",
          imageCaption:
            "The Saturn V (SA-510) launch vehicle lifts off from Kennedy Space Center Pad 39A on 26 July 1971 carrying the Apollo 15 crew and the folded Lunar Roving Vehicle.",
          imageCredit: "NASA (KSC-71PC-0571)",
          sourceIds: ["S1", "S3", "S4"]
        },
        {
          id: "evt_landing",
          stepNumber: "02",
          date: "30 July 1971",
          shortTitle: "Lunar Landing at Hadley–Apennine",
          missionPhase: "LUNAR DESCENT & TOUCHDOWN",
          roverStatus: "Stowed Aboard Falcon on the Lunar Surface",
          whatHappened:
            "The Lunar Module Falcon descends on a steeper 25° approach trajectory over the Apennine peaks and lands in the Hadley–Apennine region on the mare plains of Palus Putredinis, nestled between the Apennine Mountain front and the sinuous gorge of Hadley Rille.",
          whatRoverEnabled:
            "Landing establishes the base field site for three planned lunar surface exploration periods. The Hadley–Apennine site was specifically selected so astronauts Scott and Irwin could use the rover to sample a mare basin, a mountain front, and a lunar rille in a single mission.",
          scientificConnection:
            "Shortly after touchdown, Commander David Scott performed a 30-minute Standup EVA (SEVA) through the Lunar Module's upper hatch to photograph and describe the surrounding geological terrain prior to the next day's rover deployment.",
          imageAssetId: "S3_FALCON",
          imagePath: "assets/photos/s3_falcon_lunar_module.jpg",
          imageType: "Historical Photograph",
          imageDate: "July–August 1971",
          imageCaption:
            "The Apollo 15 Lunar Module Falcon on the lunar surface at the Hadley–Apennine landing site, with the Apennine Mountains rising in the background.",
          imageCredit: "NASA (AS15-85-11451)",
          sourceIds: ["S1", "S2", "S3", "S4"]
        },
        {
          id: "evt_eva1",
          stepNumber: "03",
          date: "31 July 1971",
          shortTitle: "First Lunar EVA — LRV Deployment & First Drive",
          missionPhase: "EVA 1 • DEPLOYMENT & APENNINE FRONT TRAVERSE",
          roverStatus: "Deployed & Operational (Rear-Steering Mode)",
          whatHappened:
            "During the first lunar surface EVA, Scott and Irwin manually deploy and prepare the LRV from Lunar Module Quadrant 1 using deployment cables and mylar tapes, then load auxiliary communications, television, and geological tools.",
          whatRoverEnabled:
            "Marks the first use of a crewed surface rover on the Moon. Despite a front-steering malfunction on this first sortie, the redundant rear steering system allowed the crew to drive south to the rim of Hadley Rille (Station 1 near Elbow Crater) and the base of the Apennine Front (Station 2 near St. George Crater) before returning to the Lunar Module to deploy the separate ALSEP science station.",
          scientificConnection:
            "Enabled the crew to inspect and sample both the canyon rim of Hadley Rille and the flank of St. George Crater on their very first excursion, then transport and set up the independent ALSEP array approximately 300 feet west of the Lunar Module.",
          imageAssetId: "V2",
          imagePath: "assets/photos/v2_loading_rover.jpg",
          secondaryImagePath: "assets/photos/s2_rover_station1_hadley_rille.jpg",
          imageType: "Historical Photograph",
          imageDate: "31 July 1971",
          imageCaption:
            "Lunar Module Pilot James B. Irwin loads the newly deployed Lunar Roving Vehicle with tools and equipment before the first lunar traverse, with Lunar Module Falcon visible at left.",
          imageCredit: "NASA",
          sourceIds: ["S1", "S2", "S4", "S7", "S8"]
        },
        {
          id: "evt_eva2",
          stepNumber: "04",
          date: "1 August 1971",
          shortTitle: "Second Lunar EVA — Spur Crater & Genesis Rock",
          missionPhase: "EVA 2 • APENNINE FRONT & STATION 7",
          roverStatus: "Operational (Full Front + Rear 4-Wheel Steering)",
          whatHappened:
            "With front steering now working alongside rear steering, Scott and Irwin conduct a major geological traverse southward along the base and slopes of the Apennine Front (Hadley Delta), visiting Stations 6, 6A, and Station 7 on the rim of Spur Crater.",
          whatRoverEnabled:
            "The LRV carried the astronauts, hand tool carrier, cameras, and sample bags to the elevated slopes of the Apennine Front and Station 7, where Scott and Irwin observed, documented, and collected Sample 15415—later known as the Genesis Rock. On the return trip from Station 7, the crew drove 3.4 km back to the Lunar Module and set a lunar land-speed record of 12 km/h.",
          scientificConnection:
            "At Station 7 near Spur Crater, the astronauts collected Sample 15415, a white crystalline anorthosite later dated by scientists on Earth to approximately 4 billion years old—providing key evidence regarding the Moon's early crust. (Note: The astronauts selected and collected the sample; the rover provided the mobility and carrying capacity to reach the site.)",
          imageAssetId: "V4",
          imagePath: "assets/photos/v4_genesis_rock_surface.jpg",
          secondaryImagePath: "assets/photos/s2_rover_slope_eva2.jpg",
          imageType: "Historical Photograph",
          imageDate: "1 August 1971",
          imageCaption:
            "Sample 15415—the so-called Genesis Rock—resting on a pedestal of smaller rocks at Station 7 on the rim of Spur Crater before collection by astronauts David Scott and James Irwin during EVA 2.",
          imageCredit: "NASA (AS15-86-11671)",
          sourceIds: ["S2", "S4", "S5"]
        },
        {
          id: "evt_eva3",
          stepNumber: "05",
          date: "2 August 1971",
          shortTitle: "Third Lunar EVA — Hadley Rille Traverse",
          missionPhase: "EVA 3 • HADLEY RILLE RIM & FINAL PARKING",
          roverStatus: "Final Surface Traverse & Parked at VIP Site",
          whatHappened:
            "The crew conducts its third and final lunar traverse, driving west from the Lunar Module toward the rim of Hadley Rille and visiting geological Stations 9, 9A, and 10.",
          whatRoverEnabled:
            "Carried the astronauts and geological sampling gear to the rim of Hadley Rille, where the crew photographed stratified rock outcrops in the rille walls and collected bedrock-derived samples. At the conclusion of EVA 3, Scott drove the LRV to its final parking site about 300 feet east of the Lunar Module so its remotely controlled color television camera could broadcast Falcon's liftoff.",
          scientificConnection:
            "Decades later, NASA's Lunar Reconnaissance Orbiter Camera (LROC) imaged the disturbed lunar soil at Stations 9 and 9A and the distinct parallel rover tracks left between Stations 9A and 10 near Hadley Rille (Orbital Image PIA13058).",
          imageAssetId: "V6",
          imagePath: "assets/photos/s2_rover_final_parking_vip.jpg",
          secondaryImagePath: "assets/photos/v6_lro_retracing_steps_pia13058.jpg",
          imageType: "Historical Photograph",
          imageDate: "2 August 1971",
          imageCaption:
            "The Apollo 15 Lunar Roving Vehicle parked at its final resting place ('VIP site') east of the Lunar Module at the end of the third and final EVA on 2 August 1971.",
          imageCredit: "NASA (AS15-88-11901)",
          sourceIds: ["S1", "S2", "S4", "S9"]
        },
        {
          id: "evt_return",
          stepNumber: "06",
          date: "7 August 1971",
          shortTitle: "Return to Earth — Splashdown",
          missionPhase: "MISSION COMPLETION & LEGACY",
          roverStatus: "Remains on the Moon at Hadley–Apennine",
          whatHappened:
            "Command Module Endeavour splashes down safely in the North Central Pacific Ocean north of Hawaii on 7 August 1971, returning astronauts David Scott, Alfred Worden, and James Irwin—along with their documented lunar samples—to Earth.",
          whatRoverEnabled:
            "The Lunar Roving Vehicle remains behind on the lunar surface at Hadley–Apennine. Its physical mission use ended with Apollo 15's surface operations, but the vehicle and its tracks remain part of the permanent lunar archaeological record.",
          scientificConnection:
            "Returned samples—including Sample 15415 (Genesis Rock) and suite samples from the Apennine Front and Hadley Rille—were transferred to the Lunar Receiving Laboratory on Earth for decades of geochemical and geochronological study.",
          imageAssetId: "S3_SPLASHDOWN",
          imagePath: "assets/photos/s3_apollo15_splashdown.jpg",
          imageType: "Historical Photograph",
          imageDate: "7 August 1971",
          imageCaption:
            "Apollo 15 Command Module Endeavour approaches splashdown in the Pacific Ocean on 7 August 1971 while the Lunar Roving Vehicle remains behind on the Moon.",
          imageCredit: "NASA (S71-43543)",
          sourceIds: ["S1", "S2", "S3", "S4"]
        }
      ]
    },

    // ==========================================================================
    // SECTION 5.3: SCIENTIFIC DISCOVERIES ENABLED
    // ==========================================================================
    scienceDiscoveries: {
      attributionRule:
        "Scientific Attribution Principle: The Lunar Roving Vehicle did not conduct science independently or make discoveries on its own. Its role was to extend the astronauts' operational radius, carry geological tools and communications gear, and transport collected samples. All scientific discoveries and interpretations are attributable to the Apollo 15 crew's field observations and sample collection, mission science teams, and subsequent laboratory analysis on Earth.",
      genesisRock: {
        title: "Genesis Rock — Lunar Sample 15415",
        station: "Station 7, Rim of Spur Crater (Apennine Front) • EVA 2 (1 August 1971)",
        classification: "Anorthosite (Calcium-rich Plagioclase Feldspar Crustal Rock)",
        approximateAge: "Approximately 4 billion years old (determined by post-mission laboratory analysis at MSC/JSC)",
        notOldestClarification:
          "Important Scientific Clarification: While initially hoped to be a primordial piece of the Moon's very first crust, NASA explicitly notes that Sample 15415 is NOT the oldest lunar sample brought back from the Moon.",
        narrative: [
          "During the second EVA on 1 August 1971, the Lunar Roving Vehicle carried Commander David R. Scott and Lunar Module Pilot James B. Irwin southward along the Apennine Front to Station 7 on the rim of Spur Crater—a location far easier to reach and sample with rover mobility and tool stowage.",
          "Resting on a dirt-covered pedestal rock, Scott and Irwin spotted a striking white crystalline rock with glinting cleavage faces. Using their lunar tongs and sampling tools, the astronauts photographed the rock in situ, collected it, and stowed it in a documented sample bag for transport back to the Lunar Module.",
          "Upon analysis on Earth, geologists at the Manned Spacecraft Center (now Johnson Space Center) identified Sample 15415 as anorthosite—a rock composed almost entirely of the mineral plagioclase—and determined its age to be approximately 4 billion years old. Although not the oldest lunar sample ever recovered, it provided vital scientific evidence for how the Moon's early highland crust formed."
        ],
        roleBreakdown: [
          {
            actor: "Lunar Roving Vehicle (Artifact Role)",
            contribution:
              "Transported astronauts Scott and Irwin, the Apollo Lunar Hand Tool Carrier, cameras, and sample return bags to Station 7 at Spur Crater and carried the collected samples 3.4 km back to the Lunar Module."
          },
          {
            actor: "Astronauts David Scott & James Irwin (Field Role)",
            contribution:
              "Recognized the distinctive white crystalline rock on the crater rim, documented its geological context with gnomon and Hasselblad photography, and collected Sample 15415."
          },
          {
            actor: "Earth-Based Geologists & Laboratories (Analytical Role)",
            contribution:
              "Examined Sample 15415 inside nitrogen processing cabinets at the Lunar Receiving Laboratory, confirmed its anorthosite mineralogy, and radiometrically dated it to ~4 billion years old."
          }
        ],
        visualComparison: [
          {
            assetId: "V4",
            badge: "Historical Surface Photograph (Moon)",
            title: "Sample 15415 In Situ at Station 7 Before Collection",
            imagePath: "assets/photos/v4_genesis_rock_surface.jpg",
            date: "1 August 1971",
            caption:
              "The so-called Genesis Rock (Sample 15415) perched on a smaller pedestal rock on the rim of Spur Crater (Station 7) before collection by the Apollo 15 crew. Photographed on the lunar surface during EVA 2.",
            credit: "NASA (AS15-86-11671)",
            sourceUrl: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/"
          },
          {
            assetId: "V5",
            badge: "Laboratory Photograph (Earth — Not Lunar Surface)",
            title: "Sample 15415 Under Examination in the Lunar Receiving Laboratory",
            imagePath: "assets/photos/v5_genesis_rock_lab.jpg",
            secondaryImagePath: "assets/photos/v5b_genesis_rock_sample_closeup.jpg",
            date: "August 1971 (Catalogued 20 October 2017 on NASA Science)",
            caption:
              "Apollo 15 Commander David R. Scott (right) and scientist-astronaut Joseph P. Allen IV (left) examine Sample 15415 in the Non-Sterile Nitrogen Processing Line at the Lunar Receiving Laboratory on Earth. Explicit Note: This is a terrestrial laboratory photograph, not a lunar-surface scene.",
            credit: "NASA",
            sourceUrl: "https://science.nasa.gov/resource/genesis-rock/"
          }
        ]
      },

      hadleyRilleAndApennine: {
        title: "Hadley Rille and the Apennine Front",
        subtitle: "Multi-Unit Geological Fieldwork Enabled by Surface Mobility",
        narrative: [
          "The Hadley–Apennine landing site (26° 04' 54\" N, 3° 39' 30\" E) was chosen to give Apollo 15 access to three fundamentally different lunar geological features within a single landing zone: the towering Apennine Mountain front, the sinuous canyon of Hadley Rille, and the dark volcanic plains of Palus Putredinis.",
          "The Apennine Mountain front forms the southeastern rim of the Imbrium basin, rising more than 12,000 to 15,000 feet above the surrounding plains. By driving the LRV to the mountain base and up the slopes of Hadley Delta during EVAs 1 and 2, Scott and Irwin were able to sample deep-seated crustal and pre-Imbrian highland materials excavated by the giant Imbrium impact.",
          "Running parallel to the mountain front is Hadley Rille (Rima Hadley), a V-shaped sinuous channel approximately 1 mile (1.5 km) wide and 1,200 to 1,300 feet (400 m) deep with ~25° wall slopes. During EVAs 1 and 3, rover mobility allowed the crew to drive directly to the rille rim (Stations 1, 2, 9, 9A, and 10) to photograph exposed rock strata in the canyon walls and sample boulders near the edge—investigations framed as astronaut geological fieldwork enabled by the rover, not the rover 'discovering' the rille."
        ],
        geologicalTargets: [
          {
            feature: "Apennine Mountain Front",
            significance:
              "Arcuate southeastern rim of Mare Imbrium rising >12,000–15,000 ft; targeted for ancient pre-Imbrian crustal rocks and deep-seated basin ejecta (Stations 2, 6, 6A, 7)."
          },
          {
            feature: "Hadley Rille (Rima Hadley)",
            significance:
              "Sinuous V-shaped gorge (~1 mile wide, ~1,200–1,300 ft deep) incising the mare plains; visited at Stations 1, 9, 9A, and 10 to photograph stratified mare beds and sample rim exposures."
          },
          {
            feature: "Mare Plains of Palus Putredinis",
            significance:
              "Dark basaltic basin-fill material around the Lunar Module landing site, sampled and trenched to determine mare lava age, composition, and soil mechanics."
          }
        ]
      },

      quantitativePerformance: {
        title: "Quantitative Mission Performance (Sourced Summary)",
        metricSource: "S10 — NASA Apollo 17 Press Kit (Retrospective Summary of Apollo 15 LRV Operations)",
        metrics: [
          {
            value: "27.9 km (17.3 mi)",
            label: "Total Distance Driven (Apollo 17 Press Kit Summary)",
            note: "Retrospective summary metric reported in the Apollo 17 Press Kit (S10). Note: NASA Science (S5) cites ~17.5 miles; primary Apollo 15 EVA Operations Report odometer vs. map distance verification is tracked in Open Item #1."
          },
          {
            value: "~3 Hours",
            label: "Cumulative Driving Duration",
            note: "Approximate driving time across the three Apollo 15 lunar surface EVAs as summarized in the Apollo 17 Press Kit (S10)."
          },
          {
            value: "9.3 km/h",
            label: "Average Driving Speed",
            note: "Retrospective average speed across Apollo 15 surface traverses (S10)."
          },
          {
            value: "12–13 km/h",
            label: "Reported Peak Lunar Speed",
            note: "NASA's 50-year history article (S2) cites a 12 km/h lunar land-speed record on the 3.4 km return drive from Station 7; the Apollo 17 Press Kit (S10) reports a maximum speed of 13 km/h."
          }
        ],
        openVerificationWarning:
          "Archival Verification Note (Open Item #1): In strict compliance with museum accuracy rules, odometer distance and mapped traverse distance must never be silently mixed. The figures above are explicitly cited to their specific secondary NASA press/history sources (S10, S2, S5) while primary odometer vs. map distance tables from the Apollo 15 EVA Operations Report remain queued for final archival verification."
      }
    },

    // ==========================================================================
    // SECTION 5.4: CHALLENGES, FAILURES, AND ADAPTATION
    // ==========================================================================
    challengesAndAdaptation: [
      {
        id: "challenge_steering",
        badge: "IN-MISSION HARDWARE ANOMALY & REDUNDANCY",
        title: "First-Traverse Front Steering Problem & Rear-Steering Adaptation",
        summary:
          "During Apollo 15's first lunar traverse on 31 July 1971, the LRV's front steering system did not operate as intended. Thanks to the vehicle's built-in steering redundancy, the crew completed the entire first traverse using rear-wheel steering alone.",
        details: [
          "The LRV was engineered with completely independent front and rear steering systems, each driven by its own 0.1-horsepower electric motor and gear reduction unit. By design, if either steering assembly malfunctioned, its linkage could be disconnected so the mission could continue using the remaining active steering system.",
          "When David Scott and James Irwin deployed the rover on EVA 1 (31 July 1971), the front steering system failed to respond. Relying on the rear steering system, Scott successfully drove the rover across the undulating lunar terrain to Hadley Rille and the Apennine Front and back to the Lunar Module.",
          "At the start of the second EVA (1 August 1971) and throughout the third EVA (2 August 1971), the front steering system worked normally, giving the crew full four-wheel double-Ackermann steering for the remainder of the mission."
        ],
        verificationStatusNote:
          "Open Verification Item #2: The high-level sequence above is confirmed in the research dossier; exact fault-isolation sequence wording from the NASA Apollo 15 EVA Operations Report is marked for final archival check prior to publication.",
        sourceIds: ["S1", "S2"]
      },
      {
        id: "challenge_environment",
        badge: "UNPRECEDENTED PLANETARY ENVIRONMENT",
        title: "Hard Vacuum, 1/6th Gravity, and +250°F Thermal Extremes",
        summary:
          "The NASA Apollo 15 Press Kit explicitly identified the Moon's vacuum, one-sixth gravity, surface temperature extremes, and unknown soil mechanics as unprecedented challenges with no counterpart in terrestrial vehicle design.",
        details: [
          "Hard Vacuum & Thermal Extremes: With no atmosphere on the Moon, conventional air cooling was impossible, and lunar surface temperatures during operation could reach +250°F (Press Kit p. 77). Engineers developed a passive/semi-passive thermal control system using fusible mass wax heat sinks, thermal straps, multi-layer Beta-cloth insulation, and space radiators covered by dust shields between drives.",
          "One-Sixth Gravity Dynamics: Reduced gravity (1/6 g) dramatically altered vehicle stability, braking, turning, and acceleration, causing pronounced pitching, bouncing, and swaying motions over craters, rocks, and undulations.",
          "Unknown Soil & Wheel Interaction: Conventional rubber pneumatic tires would fail in lunar vacuum and temperatures. Delco and Boeing engineered 32-inch woven zinc-coated piano-wire mesh wheels fitted with riveted titanium chevron treads and internal titanium bump-stop frames to float atop soft lunar regolith without sinking."
        ],
        verificationStatusNote: "Verified Primary Source — NASA Apollo 15 Press Kit (S1, pp. 77–78, 83–84, 92–93).",
        sourceIds: ["S1"]
      },
      {
        id: "challenge_range_safety",
        badge: "OPERATIONAL SAFETY CONSTRAINT",
        title: "The 'Walk-Back' Life-Support Safety Envelope",
        summary:
          "Although the LRV was mechanically capable of driving up to 40 miles (65 km) cumulatively, its maximum operating radius from the Lunar Module was deliberately restricted to preserve astronaut survival if the rover failed.",
        details: [
          "The Apollo 15 Press Kit specifies that the LRV was designed to operate for up to 78 hours during the lunar day and cover a cumulative distance of up to 40 miles (65 km) across multiple sorties.",
          "However, operational safety rules constrained the rover's maximum radius from the Lunar Module Falcon to approximately 6 miles (9.5 km). This was not a mechanical limitation of the rover, but a life-support safety constraint dictated by the astronauts' Portable Life Support Systems (PLSS): at any point on a traverse, Scott and Irwin had to remain within safe walking distance back to the Lunar Module should the LRV become immobilized.",
          "Even within that 6-mile walk-back radius, the rover opened approximately 113 square miles of lunar terrain to geological investigation—roughly ten times the area accessible on foot."
        ],
        verificationStatusNote: "Verified Primary Source — NASA Apollo 15 Press Kit (S1, p. 82).",
        sourceIds: ["S1"]
      }
    ],

    // ==========================================================================
    // SECTION 5.5: ENGINEERING BEHIND IT — HOW DID IT WORK?
    // ==========================================================================
    engineering_systems: {
      modelPolicyNotice: {
        status: "NOT YET VERIFIED IN OFFICIAL NASA 3D RESOURCES",
        badgeText: "3D Model Policy: Strict Archival Authenticity Enforced",
        explanation:
          "We searched the official NASA 3D Resources catalog (https://science.nasa.gov/3d-resources/ and the official NASA-3D-Resources repository). While NASA provides 3D models for the Apollo Lunar Module and the Apollo 15 Landing Site terrain, no verified official NASA downloadable 3D model of the Apollo 15 Lunar Roving Vehicle is currently published there. In strict compliance with museum policy, no AI-generated, fabricated, or third-party 3D model is substituted. Instead, this exhibit presents the authentic 1971 NASA Apollo 15 Press Kit primary-source technical drawings with interactive component callouts and multi-angle historical photography."
      },

      specificationsNote:
        "Important Distinction: The specifications below are pre-mission design specifications from the official NASA Apollo 15 Press Kit (S1, Release No. 71-119K, pp. 78–96), not measured post-mission surface results.",

      designSpecifications: [
        { spec: "Length", value: "10 ft 2 in (122 in)", sourceNote: "Apollo 15 Press Kit p. 78 & p. 80 diagram" },
        { spec: "Tread Width", value: "6 ft (72 in)", sourceNote: "Apollo 15 Press Kit p. 78 & p. 80 diagram" },
        { spec: "Height", value: "44.8 in (max)", sourceNote: "Apollo 15 Press Kit p. 78 & p. 80 diagram" },
        { spec: "Wheelbase", value: "7.5 ft (90 in)", sourceNote: "Apollo 15 Press Kit p. 78 & p. 80 diagram" },
        { spec: "Ground Clearance", value: "14 in (fully loaded) / 17 in (unloaded)", sourceNote: "Apollo 15 Press Kit p. 80, 82, 85" },
        { spec: "Deployed Empty Weight", value: "~460 lb Earth weight (462 lb* on Press Kit p. 80 diagram)", sourceNote: "*Includes batteries & payload supports, excludes SSE (Press Kit p. 78, 80)" },
        { spec: "Planned Payload Capacity", value: "~1,080 lb (more than twice the vehicle's own weight)", sourceNote: "~800 lb crew + PLSS, 100 lb comms, 120 lb science/photo gear, 60 lb samples (p. 78)" },
        { spec: "Drive Motors", value: "Four wheels, each with an individual 0.25 hp electric motor (total 1.0 hp)", sourceNote: "36V DC brush-type motors with 80:1 harmonic drive reduction (Press Kit p. 78, 83)" },
        { spec: "Electrical Power", value: "Two 36-volt silver-zinc batteries (115 Ah, 23 cells each)", sourceNote: "Full redundancy: either battery can power all vehicle systems (Press Kit p. 78, 91)" },
        { spec: "Steering System", value: "Separate front & rear electric steering; 10 ft (122 in) turn radius", sourceNote: "0.1 hp, 5,000-rpm motors with 257:1 reduction; disconnectable if one fails (p. 78, 85)" },
        { spec: "Planned Top Speed", value: "About 8 mph (~13 km/h) on relatively smooth terrain", sourceNote: "Pre-mission design estimate (Apollo 15 Press Kit p. 78)" },
        { spec: "Obstacle & Slope Design", value: "25° max slope • 9.8 in (25 cm) step obstacle • 22.4 in (50 cm) crevasse", sourceNote: "Parking brake holds on slopes up to 30°; ≥45° pitch/roll stability (Press Kit p. 82)" },
        { spec: "Design Range & Life", value: "78 hours (lunar day) • Up to 40 miles (65 km) cumulative design range", sourceNote: "Restricted operationally to ~6 miles (9.5 km) walk-back radius (Press Kit p. 82)" }
      ],

      // All 9 required engineering systems from Prompt Section 5.5 + Press Kit details
      subsystems: [
        {
          id: "sys_mobility",
          number: "01",
          name: "Mobility System & Chassis",
          calloutCode: "CALLOUTS 1 & 5",
          diagramId: "diag_isometric",
          shortSummary:
            "A three-section foldable aluminum chassis riding on four 32-inch woven zinc-coated piano-wire mesh wheels with riveted titanium chevron treads.",
          technicalDetails: [
            "Three-Part Hinged Aluminum Chassis: Divided into forward (batteries, navigation gyro/SPU, drive control electronics), center (crew station, beaded aluminum floor panels supporting both astronauts' weight), and aft (scientific payload pallet) sections. Forward and aft sections fold over the center section for Lunar Module stowage.",
            "Woven Wire-Mesh Wheels: Each wheel measures 32 inches in diameter and 9 inches wide, weighing only 12 pounds on Earth (2 lunar pounds) and designed for at least 112 statute miles (180 km) of driving.",
            "Titanium Chevron Treads & Bump Stop: The outer tire is woven from zinc-coated piano wire with titanium treads riveted in a chevron pattern around the circumference to grip lunar soil without clogging. Inside the wire mesh is a 25.5-inch-diameter titanium bump stop (inner frame) on a spun-aluminum hub to prevent excessive deflection during heavy impacts."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 79, 83–84"
        },
        {
          id: "sys_4wd",
          number: "02",
          name: "Four-Wheel Drive & Traction Drive",
          calloutCode: "CALLOUTS 4 & 6",
          diagramId: "diag_wheel",
          shortSummary:
            "Four independently powered wheels, each driven by its own 0.25-horsepower 36V DC electric motor coupled to a sealed 80:1 harmonic drive unit.",
          technicalDetails: [
            "Individual Wheel Motors: Each of the four wheels is powered by a quarter-horsepower (0.25 hp) direct-current, brush-type electric motor operating from a 36-volt input, providing a combined 1.0 horsepower across the vehicle.",
            "80:1 Harmonic Drive Reduction: Each wheel's traction drive houses a harmonic drive unit that reduces motor speed at an 80-to-1 ratio, allowing smooth, continuous operation across all speeds without gear shifting.",
            "Mechanical Braking & Free-Wheeling: Moving the hand controller rearward de-energizes the drive motors and presses hinged mechanical brake shoes against a brake drum to stop hub rotation. Each wheel also includes a manual decoupling mechanism so a crewman can uncouple a wheel to 'free-wheel' independent of the drivetrain if a motor or drive jams."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 78–79, 83–86"
        },
        {
          id: "sys_steering",
          number: "03",
          name: "Redundant Front & Rear Steering",
          calloutCode: "CALLOUT 3",
          diagramId: "diag_isometric",
          shortSummary:
            "Independent front and rear electric steering assemblies providing a 122-inch (10-foot) wall-to-wall turn radius and fail-safe disconnect redundancy.",
          technicalDetails: [
            "Double-Steering Agility: Both front and rear wheel sets turn in opposite directions, allowing a 'wall-to-wall' turning radius of 122 inches—exactly the length of the rover.",
            "Actuation Mechanics: Each steering system is powered by a 1/10th-horsepower (0.1 hp), 5,000-rpm electric motor driving through a 257-to-1 gear reduction connected via steering arms, a tie rod, and a steering vane.",
            "Fail-Safe Redundancy: If a malfunction occurs in either the front or rear steering assembly, the crew can disengage the affected linkage and continue the traverse using the remaining active steering system—a feature proven immediately on EVA 1 when front steering failed and the crew drove on rear steering."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 78–79, 85"
        },
        {
          id: "sys_suspension",
          number: "04",
          name: "Torsion-Bar Suspension System",
          calloutCode: "CALLOUT 2",
          diagramId: "diag_ortho",
          shortSummary:
            "Parallel upper and lower suspension arms with torsion bars and hydraulic dampers at each wheel, engineered for 1/6th-gravity terrain stability.",
          technicalDetails: [
            "Parallel Arms & Torsion Bars: The chassis is suspended from each wheel by a pair of parallel triangular arms mounted on longitudinal torsion bars and paired with a shock-absorbing damper.",
            "Ground Clearance & Folding Geometry: Deflection of the suspension and wire-mesh tires maintains 14 inches (35 cm) of ground clearance when fully loaded and 17 inches when unloaded. For launch stowage, all four suspension assemblies fold approximately 135° inward over the center chassis.",
            "Terrain Envelope: Designed to climb and descend 25° slopes, cross 22.4-inch (50 cm) crevasses, and surmount 9.8-inch (25 cm) step-like obstacles while maintaining pitch and roll stability angles of at least 45° with a full load."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 79–80, 82, 85"
        },
        {
          id: "sys_power",
          number: "05",
          name: "Dual 36-Volt Silver-Zinc Power System",
          calloutCode: "CALLOUT 8",
          diagramId: "diag_isometric",
          shortSummary:
            "Two non-rechargeable 36-volt silver-zinc batteries mounted in the forward chassis, engineered so either battery alone can power the entire vehicle.",
          technicalDetails: [
            "Battery Chemistry & Construction: Two 36-volt, non-rechargeable batteries encased in magnesium with plexiglass monoblock cell walls, using silver-zinc plates in a potassium hydroxide electrolyte. Each battery has 23 cells and a 115-ampere-hour capacity.",
            "Full Electrical Redundancy: Both batteries normally operate simultaneously with an approximately equal load across a dual-bus distribution system, but either battery can carry the entire LRV electrical load if the other fails.",
            "Auxiliary Power & Conservation: An auxiliary forward connector supplies 150 watts of 36V power to the Lunar Communications Relay Unit (LCRU). During stops exceeding five minutes, mobility power is switched off while navigation power remains active."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 78–79, 91–92"
        },
        {
          id: "sys_navigation",
          number: "06",
          name: "Dead-Reckoning Navigation System",
          calloutCode: "CALLOUT 9",
          diagramId: "diag_console",
          shortSummary:
            "An onboard dead-reckoning computer, directional gyroscope, Sun shadow compass, and wheel-pulse odometers that continuously track bearing and range back to the Lunar Module.",
          technicalDetails: [
            "Core Navigation Components: Comprises a directional gyroscope (providing heading relative to lunar north), four wheel traction-drive odometers, a solid-state Signal Processing Unit (SPU) digital computer, a fold-up Sun shadow device, and a vehicle attitude (pitch/roll) indicator.",
            "Third-Fastest-Wheel Logic: Each wheel revolution generates 9 magnetic odometer pulses. The SPU automatically selects pulses from the third-fastest wheel so that a slipping wheel or an inoperative pickup does not corrupt distance calculations.",
            "Integrated Position Indicator (IPI): Mounted on the upper left of the console, the IPI dial displays vehicle Heading (outer scale), Bearing to the Lunar Module, total Distance traveled, and straight-line Range to the Lunar Module (graduated to 99.9 km). If navigation power fails, the last bearing and range readings remain locked on display."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 79, 86–87, 89–91"
        },
        {
          id: "sys_thermal",
          number: "07",
          name: "Passive & Radiator Thermal Control",
          calloutCode: "CALLOUT 10",
          diagramId: "diag_isometric",
          shortSummary:
            "A vacuum thermal protection architecture that absorbs and stores heat in fusible wax heat sinks and batteries while driving, then radiates heat into space between sorties.",
          technicalDetails: [
            "Heat Storage During Operation: Because vacuum rules out air cooling, heat generated during a drive is stored in several fusible-mass tank heat sinks and in the thermal mass of the two forward batteries (Battery 1 serves as a partial heat sink for the SPU; Battery 2 for the directional gyro).",
            "Second-Surface Mirror Space Radiators: Space radiators bonded with fused-silica second-surface mirrors sit atop the SPU, Drive Control Electronics (DCE), and batteries. During traverses, three hinged dust covers protect the mirrors from lunar regolith.",
            "Post-Sortie Cooling Cycle: At the end of each EVA, the astronauts manually open the three dust covers. Latches hold the radiators open to radiate heat into space until battery temperatures cool to ~45°F (±5°F), at which point the covers automatically snap shut. Battery survival limits are 40°F to 125°F (an alarm flag pops up on the console if a battery reaches 125°F or a drive motor reaches 400°F)."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 77, 79, 92–93"
        },
        {
          id: "sys_crew_station",
          number: "08",
          name: "Crew Station & T-Handle Hand Controller",
          calloutCode: "CALLOUTS 6A & 7",
          diagramId: "diag_controller",
          shortSummary:
            "Side-by-side tubular aluminum seats, PLSS restraint backs, fiberglass dust fenders, and a single center-mounted T-shaped hand controller built for pressurized space-suit gloves.",
          technicalDetails: [
            "T-Shaped Hand Controller: Because pressurized A7LB spacesuits prevented conventional foot pedals or steering wheels, either astronaut could drive using a center T-handle controller: pivot forward to accelerate forward, pivot left/right to steer, pull rearward to brake (locking the parking brake at 3 inches rearward), and flip the vertical stem's reverse-inhibit knob up before pulling back to drive in reverse.",
            "Spacesuit-Adapted Seating: Tubular aluminum seats spanned by nylon webbing fold flat during launch and erect after deployment. Seat backs restrain the astronauts' Portable Life Support System (PLSS) backpacks from swaying, while seat-bottom cutouts give access to PLSS valves.",
            "Handholds, Toeholds & Fenders: Inboard and outboard handholds stabilize the crew; dismantled LRV support tripods insert into side receptacles to serve as entry toeholds (and double as tools to decouple wheels). Lightweight fiberglass fenders with extendable front/rear sections block regolith dust kicked up by the wire wheels."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 79, 85–90"
        },
        {
          id: "sys_deployment",
          number: "09",
          name: "Quadrant 1 Stowage & Deployment Mechanism",
          calloutCode: "SPACE SUPPORT EQUIPMENT (SSE)",
          diagramId: "diag_deployment",
          shortSummary:
            "A manual cable, reel, torsion-bar, and telescoping pushoff system that allowed two astronauts to unfold the rover from Lunar Module Quadrant 1 in minutes.",
          technicalDetails: [
            "Three-Point Quadrant 1 Stowage: During launch and lunar descent, the LRV is folded into Quadrant 1 of the Lunar Module descent stage (aft end pointing up) with its chassis sections and suspension folded inward.",
            "D-Ring Release & First Deployment Tape: An astronaut climbs partway up the LM ladder and pulls a D-ring to tilt the LRV out 5 inches (4°). Descending to the surface, the crewman unreels a mylar deployment tape on the right side: a pushoff tube shifts the rover's center of gravity over-center; at 45°, release pins pull and the aft chassis and rear wheels spring open and latch; at 73°, the forward chassis and front wheels spring open and lock.",
            "Surface Touchdown & Final Unfolding: After the rear wheels touch the lunar soil, the astronaut walks to the left side and pulls a second mylar deployment tape, lowering the front wheels to the ground while telescoping guide tubes hold the rover clear of the lander. The crew then releases the guide tubes, unfolds the seats, footrests, and console, and extends the fenders."
          ],
          pressKitRef: "Apollo 15 Press Kit, pp. 77, 82, 93–96"
        }
      ],

      // Official NASA Diagrams from Apollo 15 Press Kit (V3) with interactive hotspots
      diagrams: [
        {
          id: "diag_isometric",
          title: "LRV Without Stowed Payload — Official Subsystem Callouts",
          pressKitPage: "Apollo 15 Press Kit, Page 79 (PDF Page 83)",
          imagePath: "assets/diagrams/lrv_isometric_callouts.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA isometric engineering drawing of the Lunar Roving Vehicle without stowed payload, identifying the 11 numbered component groups across the forward, center, and aft chassis.",
          hotspots: [
            {
              id: "hs_power_thermal",
              x: 37,
              y: 16,
              code: "8 & 10",
              label: "Power System & Thermal Control (Forward Bay)",
              systemRef: "sys_power",
              detail:
                "Callouts 8B/10B/10C/10G: Forward chassis housing Battery #1 and Battery #2 (two 36V silver-zinc batteries), protected by thermal insulation blankets (10A), battery dust covers, and fused-silica space radiators."
            },
            {
              id: "hs_navigation",
              x: 42,
              y: 23,
              code: "9",
              label: "Dead-Reckoning Navigation System",
              systemRef: "sys_navigation",
              detail:
                "Callouts 9A/9E: Directional Gyro Unit (DGU), Signal Processing Unit (SPU), and Vehicle Attitude Indicator. Calculates vehicle heading, distance traveled, and bearing/range back to the Lunar Module."
            },
            {
              id: "hs_console_controller",
              x: 52,
              y: 13,
              code: "6A & 7A",
              label: "Control & Display Console + Hand Controller",
              systemRef: "sys_crew_station",
              detail:
                "Callouts 6A, 7A, 9C, 9D: Center control console featuring the Integrated Position Indicator (IPI), Sun Shadow Device, system monitors, and the T-shaped Hand Controller (6A) used to steer, accelerate, and brake."
            },
            {
              id: "hs_seats_crew",
              x: 61,
              y: 20,
              code: "7",
              label: "Crew Station (Foldable Nylon-Webbing Seats)",
              systemRef: "sys_crew_station",
              detail:
                "Callouts 7B–7H: Tubular aluminum frame seats spanned by nylon webbing, contoured to support the astronauts' Portable Life Support System (PLSS) backpacks, paired with footrests (7C), handholds (7D/7E), toeholds (7G), and fenders (7F)."
            },
            {
              id: "hs_steering_suspension",
              x: 24,
              y: 25,
              code: "2 & 3",
              label: "Suspension Arms, Torsion Bars & Steering",
              systemRef: "sys_suspension",
              detail:
                "Callouts 2A/2B/2C & 3: Upper and lower parallel suspension arms, torsion bars, hydraulic dampers, and independent forward and aft electric steering actuators (122-inch wall-to-wall turn radius)."
            },
            {
              id: "hs_wheel_drive",
              x: 50,
              y: 44,
              code: "4 & 5",
              label: "Woven Wire-Mesh Wheel & Traction Drive",
              systemRef: "sys_4wd",
              detail:
                "Callouts 4 & 5: 32-inch spun-aluminum hub and zinc-coated piano-wire mesh tire with riveted titanium chevron treads, driven by an individual 0.25 hp DC electric motor and 80:1 harmonic drive."
            },
            {
              id: "hs_aft_chassis",
              x: 70,
              y: 23,
              code: "1C & 3",
              label: "Aft Chassis Payload Platform & Rear Steering",
              systemRef: "sys_mobility",
              detail:
                "Callouts 1C & 3: Aft aluminum chassis section supporting scientific equipment, geological tool carrier, and the independent rear steering assembly (which carried EVA 1 when front steering failed)."
            }
          ]
        },
        {
          id: "diag_ortho",
          title: "LRV Components and Dimensions — Orthographic 3-View Blueprint",
          pressKitPage: "Apollo 15 Press Kit, Page 80 (PDF Page 84)",
          imagePath: "assets/diagrams/lrv_dimensions_ortho.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA three-view orthographic diagram specifying the LRV's 122-inch (10 ft 2 in) length, 90-inch (7.5 ft) wheelbase, 72-inch (6 ft) tread width, 44.8-inch max height, 14-inch loaded ground clearance, and 462 lb* deployed empty weight basis.",
          hotspots: [
            {
              id: "hs_ortho_weight",
              x: 28,
              y: 32,
              code: "462 LB*",
              label: "Deployed Empty Weight & C.G. Basis",
              systemRef: "sys_mobility",
              detail:
                "Diagram specifies Deployed Empty Weight = 462 lb* (including batteries and payload supports, excluding Space Support Equipment), while narrative text on p. 78 cites approximately 460 lb."
            },
            {
              id: "hs_ortho_width",
              x: 32,
              y: 77,
              code: "72\" TREAD",
              label: "72-Inch (6 ft) Tread Width & Ground Clearance",
              systemRef: "sys_suspension",
              detail:
                "Front elevation view showing 72-inch tread width, 44.8-inch maximum height, and ground clearance of 14 inches under full load (17 inches unloaded)."
            },
            {
              id: "hs_ortho_length",
              x: 65,
              y: 80,
              code: "122\" LENGTH",
              label: "122-Inch Length & 90-Inch Wheelbase",
              systemRef: "sys_mobility",
              detail:
                "Side elevation view showing the 122-inch (10 ft 2 in) overall length and 90-inch (7.5 ft) wheelbase."
            }
          ]
        },
        {
          id: "diag_payload",
          title: "LRV / Payload Composite View — Auxiliary & Stowed Equipment",
          pressKitPage: "Apollo 15 Press Kit, Page 81 (PDF Page 85)",
          imagePath: "assets/diagrams/lrv_payload_composite.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA composite diagram illustrating how auxiliary communications, television, and geological tools were mounted on the LRV. Note: These stowed items supported the traverses but are distinct from the rover's built-in core subsystems.",
          hotspots: [
            {
              id: "hs_pay_lcru",
              x: 25,
              y: 35,
              code: "F1–F4",
              label: "LCRU, Color TV Camera (GCTA) & High-Gain Antenna",
              systemRef: "sys_power",
              detail:
                "Forward auxiliary equipment: Lunar Communications Relay Unit (LCRU, F1), Television Control Unit (TCU, F3), Ground-Controlled Television Assembly (CTV, F2), and 3-foot parabolic High-Gain Antenna (F4)."
            },
            {
              id: "hs_pay_dac",
              x: 42,
              y: 28,
              code: "D1 & E1",
              label: "16mm Data Acquisition Camera & Low-Gain Antenna",
              systemRef: "sys_crew_station",
              detail:
                "Mounted on the inboard handholds: Low-Gain Helical Antenna (E1, for voice/telemetry while driving) and 16mm Maurer motion-picture camera (D1)."
            },
            {
              id: "hs_pay_tools",
              x: 85,
              y: 55,
              code: "A1–A13",
              label: "Apollo Lunar Hand Tool Carrier & Sampling Gear",
              systemRef: "sys_mobility",
              detail:
                "Mounted on the aft pallet (A1): Lunar Hand Tool Carrier (A2) stowing the 32-inch tongs, sampling hammer, adjustable scoop, gnomon, extension handle, core tubes, self-recording penetrometer, lunar rake, and Teflon sample bags."
            }
          ]
        },
        {
          id: "diag_wheel",
          title: "LRV Wheel — Woven Piano-Wire Mesh & Titanium Chevron Tread",
          pressKitPage: "Apollo 15 Press Kit, Page 84 (PDF Page 88)",
          imagePath: "assets/diagrams/lrv_wheel_diagram.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA engineering diagram of the 32.19-inch diameter LRV wheel showing the wheel decoupling devices, riveted titanium chevron tread strips over woven zinc-coated piano-wire mesh (View A-A), and internal 25.5-inch titanium bump-stop frame.",
          hotspots: []
        },
        {
          id: "diag_console",
          title: "LRV Crew Station — Control and Display Console",
          pressKitPage: "Apollo 15 Press Kit, Page 87 (PDF Page 91)",
          imagePath: "assets/diagrams/lrv_control_console.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA schematic of the 10-inch by 12-inch Control and Display Console: upper navigation section (Attitude Indicator, Sun Shadow Device, Integrated Position Indicator [IPI], Speed Indicator, Gyro Torquing, System Reset) and lower power/temperature monitor and motor control switches.",
          hotspots: []
        },
        {
          id: "diag_controller",
          title: "T-Handle Hand Controller Operation & Mechanics",
          pressKitPage: "Apollo 15 Press Kit, Page 88 (PDF Page 92)",
          imagePath: "assets/diagrams/lrv_hand_controller.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA diagram of the T-shaped Hand Controller detailing forward/reverse speed deflection, left/right steering deflection, the reverse inhibit switch on the vertical stem, and the parking brake contingency release ring.",
          hotspots: []
        },
        {
          id: "diag_deployment",
          title: "LRV Deployment Sequence from Lunar Module Quadrant 1",
          pressKitPage: "Apollo 15 Press Kit, Page 94 (PDF Page 98)",
          imagePath: "assets/diagrams/lrv_deployment_sequence.png",
          visualType: "Technical Drawing",
          credit: "NASA (Apollo 15 Press Kit, Release No. 71-119K, July 15, 1971)",
          sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
          caption:
            "Official NASA six-step sequence illustrating how the astronaut initiates deployment from Lunar Module Quadrant 1 and uses two reels/tapes to unfold the aft chassis, rear wheels, forward chassis, front wheels, and crew station seats.",
          hotspots: []
        }
      ],

      // Crucial Category Distinctions required by Prompt Section 5.5 & Report Sections 5.2 / 5.3
      categoryDistinctions: {
        auxiliaryEquipment: {
          title: "Core Vehicle Subsystems vs. Auxiliary / Stowed Equipment",
          subtitle: "Keeping Hardware Categories Distinct (Apollo 15 Press Kit, p. 81–82, 97–100)",
          explanation:
            "The NASA Apollo 15 Press Kit distinguishes the rover's five built-in core vehicle systems (mobility, crew station, navigation, power, and thermal control—plus Space Support Equipment for deployment) from auxiliary stowed equipment provided by the Manned Spacecraft Center, Houston. These auxiliary items were mounted on or carried by the LRV to support surface traverses, but are not built-in vehicle subsystems:",
          items: [
            {
              name: "Lunar Communications Relay Unit (LCRU)",
              role: "A self-contained 55-lb portable relay station (with its own 19-cell battery and auxiliary LRV power cable) mounted at the front of the rover to relay voice, biomedical telemetry, and color television directly between the crew and Earth beyond the lunar horizon."
            },
            {
              name: "High-Gain & Low-Gain Antennas",
              role: "A 3-foot foldable parabolic rib-mesh High-Gain Antenna (aimed at Earth at each traverse stop to transmit color TV) and a helical Low-Gain Antenna (for voice and data while driving)."
            },
            {
              name: "Ground-Controlled Television Assembly (GCTA) & Cameras",
              role: "An RCA color television camera mounted on a pan-and-tilt assembly controllable remotely from Mission Control in Houston, plus a 16mm Maurer motion-picture camera and 70mm Hasselblad cameras."
            },
            {
              name: "Apollo Lunar Hand Tool Carrier & Sample Stowage",
              role: "An aluminum rack mounted on the aft pallet carrying geological tools (hammer, scoop, tongs, rake, core tubes, penetrometer, gnomon) and Teflon documented sample collection bags."
            }
          ],
          diagramImage: "assets/diagrams/lrv_gcta_system.png",
          diagramCaption: "Official NASA Apollo 15 Press Kit diagram (p. 100) showing the GCTA and LCRU communications link between the rover and Earth."
        },

        alsepDistinction: {
          title: "The ALSEP Distinction — A Separate Scientific Station",
          subtitle: "Critical Accuracy Rule (Research Dossier Section 5.3)",
          warningText:
            "ALSEP (Apollo Lunar Surface Experiments Package) was a completely separate, nuclear-powered scientific station deployed on the lunar surface about 300 feet west of the Lunar Module. Do NOT describe the Lunar Roving Vehicle as containing ALSEP, operating ALSEP, or serving as the source of ALSEP measurements.",
          explanation:
            "According to the Apollo 15 Press Kit (p. 3, 21, 40–42), Scott and Irwin drove the LRV on their first geological traverse to Hadley Rille during EVA 1, and then returned to the Lunar Module to offload and deploy the ALSEP array (powered by a SNAP-27 radioisotope thermoelectric generator) on the lunar surface. While photographs such as V7 show the LRV parked near the deployed ALSEP instruments, the two were independent systems.",
          photoAssetId: "V7",
          photoPath: "assets/photos/v7_scott_in_rover_eva2_alsep.jpg",
          photoCaption:
            "Asset V7 — Commander David R. Scott seated on the Lunar Roving Vehicle at the start of EVA 2, with components of the separate Apollo Lunar Surface Experiments Package (ALSEP) visible on the lunar surface in the background. Historical date: 1 August 1971. Credit: NASA (AS15-85-11471).",
          diagramPath: "assets/diagrams/alsep_array_layout.png",
          diagramCaption:
            "Official NASA Apollo 15 Press Kit diagram (p. 42) of the ALSEP Array Layout deployed 300 feet west of the Lunar Module, illustrating its independent instruments (Passive Seismic, Magnetometer, Solar Wind Spectrometer, Heat Flow, SIDE/CCGE, Dust Detector)."
        }
      }
    },

    // ==========================================================================
    // SECTION 5.6 & 5.7: FINAL CHAPTER & LEGACY
    // ==========================================================================
    finalChapterAndLegacy: {
      closingQuote:
        "When the astronauts left the Moon, I stayed behind. My wheels stopped turning, but the routes they travelled became part of the lunar record. Decades later, an orbiter traced those paths again from above. I was built to carry explorers across the surface; now the tracks I left help tell the story of where they went.",
      whereDidItGo: [
        "The Lunar Roving Vehicle's active surface operations ended on 2 August 1971 at the conclusion of Apollo 15's third and final EVA. Following the mission plan (Press Kit p. 29, 99), Commander David Scott drove the rover to a final parking spot approximately 300 feet east of the Lunar Module Falcon.",
        "From that vantage point, the auxiliary Ground-Controlled Television Assembly (GCTA) and Lunar Communications Relay Unit (LCRU) mounted on the rover allowed flight controllers in Houston to remotely tilt the camera and broadcast Falcon's ascent stage lifting off from the Moon.",
        "After the astronauts departed the Moon and splashed down on Earth on 7 August 1971, the Apollo 15 LRV remained in the Hadley–Apennine valley. Because the Moon has no wind, rain, or atmospheric weather, the parallel wheel tracks carved into the lunar regolith did not vanish.",
        "Nearly four decades later, NASA's Lunar Reconnaissance Orbiter Narrow Angle Camera (LROC NAC) photographed the Hadley–Apennine site from lunar orbit (Image PIA13058, added 16 April 2010), clearly resolving the disturbed regolith at Stations 9 and 9A and the rover tracks running between Stations 9A and 10 near the rim of Hadley Rille."
      ],
      orbitalEvidenceAsset: {
        assetId: "V6",
        title: "Retracing the Steps of Apollo 15 (LRO Orbital Image PIA13058)",
        imagePath: "assets/photos/v6_lro_retracing_steps_pia13058.jpg",
        visualType: "Orbital Image",
        date: "Image Addition Date: 16 April 2010 (LROC NAC M11171816R)",
        credit: "NASA / GSFC / Arizona State University",
        sourceUrl: "https://science.nasa.gov/photojournal/retracing-the-steps-of-apollo-15/",
        caption:
          "Lunar Reconnaissance Orbiter Narrow Angle Camera (LROC NAC) orbital image showing the edge of Hadley Rille (lower left), disturbed regolith at Stations 9 and 9A, and the Apollo 15 Lunar Roving Vehicle tracks visible between Stations 9A and 10. Image width: 520 meters (0.52 m/pixel)."
      },
      surfaceFinalAsset: {
        assetId: "S2_FINAL_PARKING",
        title: "The Apollo 15 LRV at Its Final Resting Place",
        imagePath: "assets/photos/s2_rover_final_parking_vip.jpg",
        visualType: "Historical Photograph",
        date: "2 August 1971",
        credit: "NASA (AS15-88-11901)",
        sourceUrl: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
        caption:
          "Commander David Scott's photograph of the Apollo 15 Lunar Roving Vehicle parked at its final resting site east of the Lunar Module after the conclusion of EVA 3 on 2 August 1971."
      },
      legacyPoints: {
        historicalFacts: [
          {
            title: "First Crewed Planetary Rover",
            text: "The Apollo 15 LRV was the first crewed surface transportation vehicle designed and operated on the Moon, inaugurating rover-assisted surface operations on 31 July 1971."
          },
          {
            title: "Expanded Apollo Geological Fieldwork",
            text: "Together with the upgraded A7LB spacesuits and longer-duration Lunar Module, the LRV enabled the transition to Apollo's 'J-series' scientific missions—allowing astronauts to traverse across mare plains, mountain fronts, and canyon rims and transport documented rock and core samples."
          },
          {
            title: "Pioneered Extraterrestrial Vehicle Engineering",
            text: "Demonstrated practical engineering solutions for vacuum, 1/6th gravity, +250°F thermal extremes, and unconsolidated regolith, including wire-mesh chevron-tread wheels, 4-wheel harmonic-drive electric propulsion, dead-reckoning gyro/odometer navigation, and redundant steering."
          },
          {
            title: "Enduring Orbital & Archaeological Record",
            text: "Left both the flight vehicle and kilometers of surface wheel tracks at Hadley–Apennine that remain visible from lunar orbit decades later in NASA Lunar Reconnaissance Orbiter imagery."
          }
        ],
        broaderInterpretations: [
          {
            title: "Foundation for Future Planetary Surface Mobility",
            text: "While designed specifically for short-duration crewed Apollo sorties, the Apollo 15 LRV demonstrated that wheeled electric vehicles could reliably navigate rugged extraterrestrial terrain—informing subsequent concepts for lunar and planetary surface mobility."
          },
          {
            title: "Human–Machine Partnership in Field Geology",
            text: "The Apollo 15 mission illustrated how surface mobility hardware amplifies human scientific judgment: the machine provided range, payload capacity, and remote television relay, while trained astronaut-observers selected, documented, and collected the samples."
          }
        ]
      }
    },

    // ==========================================================================
    // SECTION 5.8: VISUAL ASSETS & SOURCE REGISTER
    // ==========================================================================
    visual_assets: [
      {
        id: "V1",
        title: "Apollo 15 on the Moon",
        visualType: "Historical Photograph",
        placement: "Hero image for LRV exhibit & Moon Collection exhibit card",
        imagePath: "assets/photos/v1_apollo15_on_moon.jpg",
        originalFileUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/as15-86-11603.jpg",
        nasaPageUrl: "https://science.nasa.gov/resource/apollo-15-on-the-moon/",
        historicalDate: "31 July 1971",
        credit: "NASA (Photographed by Commander David R. Scott, AS15-86-11603)",
        caption:
          "Astronaut James B. Irwin, Lunar Module Pilot, works at the Lunar Roving Vehicle during the first Apollo 15 lunar surface EVA at the Hadley–Apennine landing site, with the shadow of Lunar Module Falcon in the foreground and Mount Hadley in the background.",
        usageTerms: "Official NASA public domain historical mission imagery; retain NASA credit and caption context."
      },
      {
        id: "V2",
        title: "Loading the Rover",
        visualType: "Historical Photograph",
        placement: "Mission Journey timeline — 31 July 1971 deployment & preparation event",
        imagePath: "assets/photos/v2_loading_rover.jpg",
        originalFileUrl: "https://assets.science.nasa.gov/content/dam/science/psd/lunar-science/2023/08/apollo15_rover_1200.jpg",
        nasaPageUrl: "https://science.nasa.gov/resource/loading-the-rover/",
        historicalDate: "31 July 1971 (Published 6 October 2017 on NASA Science)",
        credit: "NASA",
        caption:
          "Apollo 15 Lunar Module Pilot James B. Irwin loads the Lunar Roving Vehicle with tools and equipment in preparation for the first lunar spacewalk at the Hadley–Apennine landing site, with Lunar Module Falcon visible at left.",
        usageTerms: "Official NASA public domain historical mission imagery; retain NASA credit."
      },
      {
        id: "V3",
        title: "LRV Engineering Diagrams (Apollo 15 Press Kit)",
        visualType: "Technical Drawing",
        placement: "Engineering Behind It section — Interactive Blueprint Inspector & Callouts",
        imagePath: "assets/diagrams/lrv_isometric_callouts.png",
        originalFileUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
        nasaPageUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
        historicalDate: "15 July 1971 (Release No. 71-119K)",
        credit: "NASA (Apollo 15 Press Kit, LRV section, printed pages 77–96 / PDF pages 81–100)",
        caption:
          "Primary-source NASA engineering drawings of the Apollo 15 Lunar Roving Vehicle, including isometric component callouts (p. 79), orthographic dimensions (p. 80), payload composite view (p. 81), wire-mesh wheel (p. 84), control console (p. 87), hand controller (p. 88), and deployment sequence (p. 94).",
        usageTerms: "Official NASA primary-source technical documentation; label specifications as pre-mission design data."
      },
      {
        id: "V4",
        title: "Genesis Rock Before Collection at Station 7",
        visualType: "Historical Photograph",
        placement: "Mission Journey timeline (1 August 1971) & Scientific Discoveries section",
        imagePath: "assets/photos/v4_genesis_rock_surface.jpg",
        originalFileUrl: "https://www.nasa.gov/wp-content/uploads/2021/07/apollo_15_moon_landing_26_eva2_station_7_genesis_rock_as15-86-11671hr.jpg",
        nasaPageUrl: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
        historicalDate: "1 August 1971",
        credit: "NASA (AS15-86-11671)",
        caption:
          "The so-called Genesis Rock (Sample 15415) resting on a pedestal rock at Station 7 near Spur Crater before collection by the Apollo 15 crew during EVA 2. Surface photograph; do not label as a laboratory image.",
        usageTerms: "Official NASA historical surface photograph; distinguish from terrestrial laboratory imagery."
      },
      {
        id: "V5",
        title: "Genesis Rock Sample 15415 in Lunar Receiving Laboratory",
        visualType: "Laboratory Photograph",
        placement: "Scientific Discoveries section — Post-mission sample analysis on Earth",
        imagePath: "assets/photos/v5_genesis_rock_lab.jpg",
        originalFileUrl: "https://assets.science.nasa.gov/content/dam/science/psd/lunar-science/2023/08/129_genesisrocklab_1200.jpg",
        nasaPageUrl: "https://science.nasa.gov/resource/genesis-rock/",
        historicalDate: "August 1971 (Published 20 October 2017 on NASA Science)",
        credit: "NASA",
        caption:
          "Apollo 15 Commander David R. Scott (right) and scientist-astronaut Joseph P. Allen IV (left) examine Sample 15415 ('Genesis Rock') in the Non-Sterile Nitrogen Processing Line at the Lunar Receiving Laboratory on Earth. Laboratory photograph, NOT a lunar-surface scene.",
        usageTerms: "Official NASA laboratory photograph; must be explicitly labeled as an Earth laboratory image."
      },
      {
        id: "V6",
        title: "Retracing the Steps of Apollo 15 (PIA13058)",
        visualType: "Orbital Image",
        placement: "Final Chapter & Legacy section; EVA 3 timeline connection",
        imagePath: "assets/photos/v6_lro_retracing_steps_pia13058.jpg",
        originalFileUrl: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia13/pia13058/PIA13058.jpg",
        nasaPageUrl: "https://science.nasa.gov/photojournal/retracing-the-steps-of-apollo-15/",
        historicalDate: "16 April 2010 (LROC NAC M11171816R)",
        credit: "NASA / GSFC / Arizona State University",
        caption:
          "Lunar Reconnaissance Orbiter Camera (LROC NAC) orbital image showing disturbed regolith at Stations 9 and 9A and rover tracks between Stations 9A and 10 near the rim of Hadley Rille.",
        usageTerms: "Official NASA/GSFC/Arizona State University orbital imagery; retain full three-part credit line."
      },
      {
        id: "V7",
        title: "LRV and ALSEP Context on the Lunar Surface",
        visualType: "Historical Photograph",
        placement: "Engineering Behind It — The ALSEP Distinction section",
        imagePath: "assets/photos/v7_scott_in_rover_eva2_alsep.jpg",
        originalFileUrl: "https://www.nasa.gov/wp-content/uploads/2021/07/apollo_15_moon_landing_22_eva2_start_scott_in_rover_as15-85-11471hr.jpg",
        nasaPageUrl: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
        historicalDate: "1 August 1971",
        credit: "NASA (AS15-85-11471)",
        caption:
          "Commander David R. Scott seated on the Lunar Roving Vehicle at the start of EVA 2, with deployed components of the separate Apollo Lunar Surface Experiments Package (ALSEP) visible in the background.",
        usageTerms: "Official NASA surface photograph; caption must explicitly state that ALSEP is a separate scientific package."
      }
    ],

    sources: [
      {
        id: "S1",
        title: "Apollo 15 Press Kit (NASA Release No. 71-119K, July 15, 1971)",
        url: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf",
        role: "Primary mission planning and engineering source. LRV general description, design constraints, dimensions, drive motors, batteries, payload, navigation, thermal control, auxiliary equipment, deployment sequence, and technical diagrams (pp. 77–100)."
      },
      {
        id: "S2",
        title: "50 Years Ago: Apollo 15 on the Moon at Hadley–Apennine (NASA History)",
        url: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
        role: "Mission-history narrative; Station 7 / Genesis Rock collection; 3.4 km return drive and 12 km/h lunar speed record; EVA 1–3 traverses and stations; historical surface photographs and captions."
      },
      {
        id: "S3",
        title: "Apollo 15 Mission Page (NASA)",
        url: "https://www.nasa.gov/mission/apollo-15/",
        role: "Official mission overview, crew roles, launch date (26 July 1971), landing date (30 July 1971), splashdown date (7 August 1971), and mission photography."
      },
      {
        id: "S4",
        title: "Highlights of the Apollo 15 Mission (NASA NTRS 19710029103)",
        url: "https://ntrs.nasa.gov/api/citations/19710029103/downloads/19710029103.pdf",
        role: "Primary NASA mission chronology confirming launch, lunar landing, and EVA milestones."
      },
      {
        id: "S5",
        title: "Genesis Rock — NASA Science",
        url: "https://science.nasa.gov/solar-system/moon/genesis-rock/",
        role: "Sample 15415 identity, anorthosite classification, approximate 4-billion-year age determined by MSC geologists, and explicit clarification that it was not the oldest lunar sample."
      },
      {
        id: "S6",
        title: "Genesis Rock Image Resource — NASA Science",
        url: "https://science.nasa.gov/resource/genesis-rock/",
        role: "Official laboratory photograph and caption of Commander David R. Scott and Joseph P. Allen IV examining Sample 15415 at the Lunar Receiving Laboratory on Earth."
      },
      {
        id: "S7",
        title: "Apollo 15 on the Moon Image Resource — NASA Science",
        url: "https://science.nasa.gov/resource/apollo-15-on-the-moon/",
        role: "Official NASA image page for the first EVA surface photograph (AS15-86-11603, 31 July 1971) showing James B. Irwin at the LRV with Mount Hadley in the background."
      },
      {
        id: "S8",
        title: "Loading the Rover Image Resource — NASA Science",
        url: "https://science.nasa.gov/resource/loading-the-rover/",
        role: "Official NASA image page for the rover preparation and equipment-loading photograph alongside Lunar Module Falcon prior to the first lunar traverse."
      },
      {
        id: "S9",
        title: "Retracing the Steps of Apollo 15 — NASA Photojournal (PIA13058)",
        url: "https://science.nasa.gov/photojournal/retracing-the-steps-of-apollo-15/",
        role: "Lunar Reconnaissance Orbiter Narrow Angle Camera (LROC NAC) orbital image and caption documenting disturbed regolith and rover tracks between Stations 9A and 10 near Hadley Rille."
      },
      {
        id: "S10",
        title: "Apollo 17 Press Kit (NASA Historical Reference)",
        url: "https://www.nasa.gov/wp-content/uploads/static/apollo50th/pdf/A17_PressKit.pdf",
        role: "Retrospective summary of Apollo 15 LRV distance (27.9 km / 17.3 miles), duration (~3 hours), average speed (9.3 km/h), and max speed (13 km/h); cited separately from Apollo 15 pre-mission design specifications."
      },
      {
        id: "S11",
        title: "NASA 3D Resources Catalog",
        url: "https://science.nasa.gov/3d-resources/",
        role: "Official starting point checked for a verified downloadable NASA 3D model of the Apollo 15 LRV (status: not yet verified in official catalog; 2D primary-source Press Kit blueprints used per policy)."
      }
    ],

    openVerificationItems: [
      {
        itemNumber: 1,
        status: "Open / Tracked Separately",
        description:
          "Verify the exact measured Apollo 15 rover odometer distance and mapped traverse distance in the primary NASA Apollo 15 EVA Operations Report; keep odometer and map metrics strictly separate."
      },
      {
        itemNumber: 2,
        status: "Open / Tracked Separately",
        description:
          "Verify the exact first-traverse front-steering failure fault description and source wording from the primary NASA EVA Operations Report before final publication."
      },
      {
        itemNumber: 3,
        status: "Completed in Pilot Build",
        description:
          "Confirm exact acquisition dates and full-resolution download URLs for all NASA images (V1–V7 and supplementary S2/S3 assets retrieved directly from official NASA servers)."
      },
      {
        itemNumber: 4,
        status: "Completed in Pilot Build",
        description:
          "Recheck NASA asset-specific use terms and credit instructions (all NASA/GSFC/Arizona State University credits and lab vs. surface distinctions preserved verbatim)."
      },
      {
        itemNumber: 5,
        status: "Verified Current Catalog Status",
        description:
          "Official NASA 3D-model search conducted across science.nasa.gov/3d-resources/ and NASA-3D-Resources repository; no downloadable official Apollo 15 LRV vehicle 3D model is currently verified (status remains 'not yet verified', not 'does not exist')."
      },
      {
        itemNumber: 6,
        status: "Future Phase Scope",
        description:
          "Complete equivalent primary-source research dossiers for the other eight Moon and Mars collection groups before their detailed exhibit pages go live."
      }
    ]
  }
};
