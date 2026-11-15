/**
 * THE FORGOTTEN EXPLORERS — Digital Space Museum
 * Complete Verified Archival Dossiers for All Museum Exhibits (Moon & Mars Wings)
 *
 * Strictly compiled from the official artifact research dossiers & 3D specification addenda:
 * 1. Falcon — Apollo 15 Lunar Module (LM-10): Verified Dossier V2 + 3D Addendum V1
 * 2. Apollo 15 ALSEP — Array A-2: Revised Dossier V2 + 3D & Interaction Addendum V1
 * 3. Surveyor 3: Verified Dossier V2 + 3D & Interaction Addendum V1
 * 4. Sojourner — Mars Pathfinder Micro Rover (1997): Verified Dossier V2 + 3D Addendum
 * 5. Spirit & Opportunity — Mars Exploration Rovers (MER-A & MER-B): Dossier V1 + 3D Addendum
 * 6. Viking 1 & Viking 2: Verified Dossier + 3D Specification V2
 * 7. Phoenix & InSight: Verified Dossier + 3D Addendum V2 + Phoenix Document Specs V3 & V4
 * 8. Ingenuity Mars Helicopter: Verified Dossier + 3D Experience Specification V2
 */

window.EXHIBITS_DATA = {
  // ==========================================================================
  // EXHIBIT 02 (MOON WING): FALCON — APOLLO 15 LUNAR MODULE (LM-10)
  // ==========================================================================
  falcon_apollo15: {
    artifact_id: "falcon_apollo15",
    destination: "moon",
    atlasLocationId: "loc_falcon_apollo15",
    artifact_name: "Falcon — Apollo 15 Lunar Module",
    official_full_name: "Apollo Lunar Module LM-10 (Call Sign: Falcon) — Extended J-Series Lander",
    subtitle: "Two Stages • One Landing • One Return • One Permanent Lunar Monument",
    mission: "Apollo 15",
    statusBadge: "VERIFIED EXHIBIT • EXTENDED J-SERIES LM-10",
    heroImage: "assets/photos/s3_falcon_lunar_module.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Apollo 15 Lunar Module Falcon resting on the undulating Hadley–Apennine plain (~10° tilt toward Hadley Rille) with the Apennine Mountains in the background and the deployed LRV tracks in the regolith.",
    heroImageCredit: "NASA (AS15-87-11782 / Apollo 15 Crew)",
    heroImageSource: "https://www.nasa.gov/mission/apollo-15/",

    identityCard: {
      artifact: "Apollo Lunar Module LM-10 (Call sign: Falcon)",
      destinationSite: "Moon — Hadley–Apennine (26.13239° N, 3.63330° E; pre-mission target 26°04'54\" N, 3°39'30\" E)",
      crew: "David R. Scott (Commander) & James B. Irwin (Lunar Module Pilot); Alfred M. Worden orbited in CSM Endeavour (CSM-112)",
      launchDate: "26 July 1971, 13:34:00 GMT (00:00:00 GET) — Saturn V SA-510, Pad 39A, Kennedy Space Center",
      landingDate: "30 July 1971, 22:16:29 GMT (104:42:29 GET)",
      surfaceStayDuration: "66 hours 54 minutes 54 seconds (nearly three Earth days; three EVAs + 33-min stand-up EVA)",
      ascentLiftoffDate: "2 August 1971, 17:11:23 GMT (171:37:23 GET)",
      ascentImpactDate: "3 August 1971, 01:04:01 GMT (179:30:01 GET) at 26.36° N, 0.25° E (~93 km west of Hadley–Apennine)",
      builder: "Grumman Aerospace Corporation, Bethpage, New York (for NASA Manned Spacecraft Center)",
      massAndDimensions:
        "Launch mass: ~16,437 kg (36,237 lb) including propellant & consumables • Height: 7.0 m (22 ft 11 in) legs extended • Landing gear span: 9.4 m (31 ft)"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Falcon was a two-stage crewed spacecraft piloted by David Scott and James Irwin.",
      shortIntroduction:
        "I am Falcon, the tenth flight-configured Apollo Lunar Module and the first of the heavily upgraded J-series landers. Unlike every spacecraft built to survive Earth's atmosphere, I was designed solely for the vacuum of space—two joined stages that carried David Scott, James Irwin, the folded Lunar Roving Vehicle, and the ALSEP science station across the 15,000-foot Apennine Mountains down to the plain of Hadley.",
      fullStoryParagraphs: [
        {
          heading: "Built Only for Vacuum, Upgraded for a Three-Day Expedition",
          text: "To make Apollo 15 a true scientific expedition, Grumman engineers stretched my propellant tanks, added a second water tank and extra oxygen and batteries to my descent stage, stowed the folded Lunar Roving Vehicle in Quadrant 1, and extended my descent engine nozzle skirt by 10 inches to lift a 36,237-pound lander to the Moon."
        },
        {
          heading: "The Loose Umbilical and Steep Mountain Approach",
          text: "In lunar orbit on 30 July 1971, my first undocking attempt from Command Module Endeavour failed until Al Worden entered the docking tunnel and reconnected a loose umbilical plug. Hours later, I fired my Descent Propulsion System for 739.2 seconds, pitching down a steep 26-degree approach path over the Apennine peaks while David Scott made 18 manual target redesignations to steer 853 meters downrange."
        },
        {
          heading: "Touchdown on the Rim of a Buried Crater",
          text: "Inside the cabin, the glass cover of my range and range-rate meter had broken during launch—leaving about 20 percent of the glass missing—while blowing lunar dust hid the ground below 60 feet. My longer J-series engine bell brushed the rim of a subdued crater as I settled at an ~11-degree tilt (6.9 degrees pitch up, 8.6 degrees left roll), buckling the extended nozzle skirt after touchdown—an impact distortion, not an engine failure."
        },
        {
          heading: "Base Camp on the Hadley Plain",
          text: "For nearly 67 hours I served as the crew's pressurized home on the Moon. First, David Scott opened my top docking hatch for the only stand-up EVA in Apollo history. Then across three surface EVAs, the crew depressurized and repressurized my cabin, recharged their spacesuits, slept in hammocks without bulky suits, and overcame an 8-pound oxygen leak and a 26-pound water spill."
        },
        {
          heading: "Two Stages, Two Separate Endings",
          text: "On 2 August 1971 at 17:11:23 GMT, explosive bolts and guillotine blades severed my two halves. My Descent Stage stayed behind at Hadley–Apennine as a launch pad and permanent monument, captured live by the rover's television camera. My Ascent Stage fired for 433.6 seconds to return Scott, Irwin, and 77 kilograms of lunar rocks to Endeavour—before being deliberately crashed into the Moon 93 kilometers west so the ALSEP seismometers could record the impact."
        }
      ]
    },

    viewer3d: {
      available: true,
      glbPath: "assets/models/Apollo Lunar Module.glb",
      modelTitle: "Apollo Lunar Module 3D Reference Model",
      provenanceBadge: "OFFICIAL NASA 3D RESOURCE • GENERAL APOLLO LM REFERENCE MODEL",
      provenanceNote:
        "Model Provenance & J-Series Distinction Note: This official NASA 3D model (by Michael D. Carbajal, NASA 3D Resources) represents the standard Apollo Lunar Module geometry. It is presented as a general Apollo Lunar Module reference model, not a tail-number scan of LM-10 Falcon; J-series external additions specific to LM-10 (the 10-inch Descent Engine skirt extension and Quadrant 1 LRV stowage) are detailed in the NASA Apollo 15 Press Kit engineering diagrams below.",
      sourceUrl: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models/Apollo%20Lunar%20Module",
      stageModes: [
        { id: "full", label: "Full Lunar Module (Both Stages)" },
        { id: "descent", label: "Descent Stage Focus (Remained at Hadley)" },
        { id: "ascent", label: "Ascent Stage Focus (Returned Crew to Orbit)" }
      ],
      hotspots: [
        {
          id: "lm_hs_1",
          code: "01",
          stage: "ascent",
          position: [0.0, 1.35, 1.15],
          name: "Forward Ingress/Egress Hatch & Porch",
          category: "Ascent Stage • Crew Cabin Access",
          whatItIs: "Square inward-opening forward cabin hatch (32 × 32 in) leading onto the forward platform ('porch') above the ladder.",
          howItWorked: "Once the cabin was vented to lunar vacuum via the forward dump valve, the crew opened the hatch inward and crawled out onto the porch to descend the 9-rung ladder.",
          missionRole: "Used by Scott and Irwin at the start and end of all three surface EVAs to transfer themselves, sample bags, and film magazines between the lunar surface and the pressurized cabin.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 141) & Apollo 15 Mission Report"
        },
        {
          id: "lm_hs_2",
          code: "02",
          stage: "ascent",
          position: [-0.48, 1.75, 1.05],
          name: "Triangular Crew Windows & Landing Point Designator (LPD)",
          category: "Ascent Stage • Crew Visibility & Guidance",
          whatItIs: "Two canted triangular panes of dual-glazed structural glass angled downward and forward for landing visibility.",
          howItWorked: "Etched degree scales on the Commander's left window formed the Landing Point Designator (LPD). The computer called out look-angles to the target site, and Scott clicked his hand controller to shift the landing point.",
          missionRole: "During pitchover at Hadley–Apennine, Scott used the LPD to execute 18 manual redesignations, shifting Falcon's touchdown point ~853 m (2,800 ft) downrange to avoid rough craters.",
          sourceNote: "Apollo 15 Mission Report (MSC-05161, 1971)"
        },
        {
          id: "lm_hs_3",
          code: "03",
          stage: "ascent",
          position: [0.0, 2.55, 0.0],
          name: "Overhead Docking Tunnel & Upper Hatch (SEVA Station)",
          category: "Ascent Stage • Docking & Stand-Up EVA",
          whatItIs: "32-inch-diameter cylindrical tunnel and upper hatch at the top of the Ascent Stage, fitted with the drogue assembly and umbilical connectors.",
          howItWorked: "Connected Falcon structurally and electrically to Command Module Endeavour in orbit. On the surface, opening the upper hatch allowed the Commander to stand with his head and shoulders above the cabin roof.",
          missionRole: "Site of two historic Apollo 15 events: (1) Al Worden cleared a loose umbilical plug here to allow undocking, and (2) shortly after landing, David Scott performed the only Stand-Up EVA (SEVA) of the Apollo program from this hatch (33 minutes) to photograph and scout the Hadley–Apennine geology.",
          sourceNote: "Apollo 15 Mission Report & NASA History"
        },
        {
          id: "lm_hs_4",
          code: "04",
          stage: "ascent",
          position: [0.0, 2.35, 0.85],
          name: "S-Band Steerable Antenna & Rendezvous Radar",
          category: "Ascent Stage • Communications & Navigation",
          whatItIs: "Gimbaled parabolic dish antennas mounted on the upper forward face of the Ascent Stage.",
          howItWorked: "The S-band antenna maintained voice, telemetry, and TV links with Earth, while the Rendezvous Radar tracked the Command and Service Module transponder during ascent and docking.",
          missionRole: "Enabled direct one-orbit rendezvous with CSM Endeavour on 2 August 1971 and relayed telemetry during the final unmanned lunar impact burn.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 141)"
        },
        {
          id: "lm_hs_5",
          code: "05",
          stage: "ascent",
          position: [0.95, 1.65, 0.75],
          name: "Reaction Control System (RCS) Thruster Quads",
          category: "Ascent Stage • Attitude Control",
          whatItIs: "Four clusters of four 100-lbf (445 N) hypergolic attitude-control thrusters mounted at 45° around the Ascent Stage corners, with jet plume deflectors below.",
          howItWorked: "Burned nitrogen tetroxide and Aerozine-50 in short pulses for pitch, roll, yaw, and fine translation during descent, hover, undocking, and rendezvous.",
          missionRole: "Maintained attitude stability during the steep 26° descent over the Apennine Mountains and held the Unmanned Ascent Stage steady for its final deorbit burn.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 141)"
        },
        {
          id: "lm_hs_6",
          code: "06",
          stage: "ascent",
          position: [0.0, 0.95, -0.15],
          name: "Ascent Propulsion System (APS)",
          category: "Ascent Stage • Return Engine",
          whatItIs: "Fixed-thrust 3,500-lbf (15.6 kN) hypergolic rocket engine housed in the lower center of the Ascent Stage cabin.",
          howItWorked: "Pressure-fed hypergolic propellants ignited on contact without an igniter or turbopump, engineered for utmost simplicity because failure meant the crew could not leave the Moon.",
          missionRole: "Fired at 17:11:23 GMT on 2 August 1971 to lift Falcon's Ascent Stage off the Descent Stage; combined APS burn time for lunar liftoff and subsequent impact maneuver totaled 433.6 seconds (secondary summary pages round the liftoff burn to ~431 seconds).",
          sourceNote: "Apollo 15 Mission Report (433.6 s total APS firing)"
        },
        {
          id: "lm_hs_7",
          code: "07",
          stage: "descent",
          position: [-1.15, -0.15, 0.95],
          name: "Descent Stage Quadrant 1 — Folded LRV Stowage Bay",
          category: "Descent Stage • J-Series Payload Bay",
          whatItIs: "Starboard-forward external equipment bay (Quadrant 1, left of the ladder when facing the lander) modified on J-series Lunar Modules.",
          howItWorked: "Held the Lunar Roving Vehicle folded into a compact triangular space; astronauts pulled two deployment tapes/lanyards from the surface to unfold the chassis and lower the rover to the regolith.",
          missionRole: "Allowed LM-10 Falcon to deliver the first crewed rover to the Moon on 31 July 1971 despite Falcon's ~11° surface tilt.",
          sourceNote: "NASA Apollo 15 Press Kit (pp. 94, 144)"
        },
        {
          id: "lm_hs_8",
          code: "08",
          stage: "descent",
          position: [1.15, -0.15, -0.95],
          name: "Descent Stage Scientific Equipment Bay (SEQ / Quadrant 2 & 3)",
          category: "Descent Stage • ALSEP & Consumables Storage",
          whatItIs: "Rear-port equipment bays housing the two Apollo Lunar Surface Experiments Package (ALSEP) subpackages, SNAP-27 RTG fuel capsule cask, and extended J-series water/oxygen/battery tanks.",
          howItWorked: "Booms and lanyard pulleys enabled James Irwin and David Scott to lower the ALSEP packages and extract the plutonium-238 fuel capsule from its graphite reentry cask on the side of the Descent Stage.",
          missionRole: "Supplied both the independent ALSEP station and the enlarged consumables that stretched Falcon's surface stay to nearly 67 hours.",
          sourceNote: "NASA Apollo 15 Press Kit (pp. 42, 144)"
        },
        {
          id: "lm_hs_9",
          code: "09",
          stage: "descent",
          position: [0.0, -0.95, 0.0],
          name: "Descent Propulsion System (DPS) & 10-Inch Extended Nozzle Skirt",
          category: "Descent Stage • Throttled Landing Engine",
          whatItIs: "Deeply throttleable gimbaled hypergolic rocket engine (up to 10,500 lbf thrust) fitted on LM-10 with a 10-inch columbium nozzle skirt extension to increase specific impulse.",
          howItWorked: "Controlled by the Primary Guidance and Navigation System (PGNS) and Commander's throttle from Braking Phase through High Gate, Low Gate, and terminal hover.",
          missionRole: "Burned continuously for 739.2 seconds during powered descent, leaving ~1,055 lb of propellant (~103 seconds of hover margin). Because the nozzle was 10 inches longer and Falcon touched down straddling a subdued crater rim, ground contact buckled the lower nozzle bell after touchdown (a structural contact distortion, not a propulsion failure).",
          sourceNote: "Apollo 15 Mission Report & Press Kit (p. 144)"
        },
        {
          id: "lm_hs_10",
          code: "10",
          stage: "descent",
          position: [0.0, -0.85, 1.75],
          name: "Cantilever Landing Gear, 9-Rung Ladder & Lunar Contact Probes",
          category: "Descent Stage • Touchdown Attenuation",
          whatItIs: "Four splayed aluminum struts with crushable honeycomb shock-absorber cartridges, 37-inch-diameter circular footpads, and 5-foot surface-sensing probes (omitted on the forward ladder leg).",
          howItWorked: "When any of the three 5-foot probes touched the regolith, the blue 'CONTACT LIGHT' illuminated on the instrument panel, signaling the Commander to shut down the Descent Engine.",
          missionRole: "Absorbed touchdown on the uneven crater rim at Hadley–Apennine, leaving Falcon tilted 6.9° pitch-up and 8.6° left roll (~11° composite tilt) where the Descent Stage still stands today.",
          sourceNote: "Apollo 15 Mission Report (MSC-05161)"
        }
      ]
    },

    diagrams: [
      {
        id: "diag_lm_components",
        title: "Apollo Lunar Module Labeled External Components (Press Kit p. 141)",
        imagePath: "assets/diagrams/lm_labeled_components.png",
        visualType: "Technical Drawing",
        pressKitPage: "NASA Apollo 15 Press Kit, p. 141",
        caption:
          "Official NASA Grumman engineering callout drawing of the Apollo Lunar Module showing the Overhead Hatch, Rendezvous Radar, S-Band Steerable Antenna, RCS Thruster Quads, Forward Ingress/Egress Hatch, Plume Deflectors, Landing Gear, and Lunar Surface Sensing Probes.",
        credit: "NASA (Apollo 15 Press Kit, 1971, p. 141)",
        sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf"
      },
      {
        id: "diag_lm10_mods",
        title: "LM-10 Extended J-Series Modifications Schematic (Press Kit p. 144)",
        imagePath: "assets/diagrams/lm10_modifications_diagram.png",
        visualType: "Technical Drawing",
        pressKitPage: "NASA Apollo 15 Press Kit, p. 144",
        caption:
          "Official NASA Apollo 15 Press Kit diagram highlighting the J-series upgrades introduced on LM-10 Falcon: Quadrant 1 LRV stowage, enlarged Descent Stage propellant tanks, additional water tank, gaseous oxygen tank, extra silver-zinc battery, and the 10-inch Descent Engine skirt extension.",
        credit: "NASA (Apollo 15 Press Kit, 1971, p. 144)",
        sourceUrl: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf"
      }
    ],

    timeline: {
      chronologyNote:
        "Timestamp Convention Note: Both Ground Elapsed Time (GET, elapsed since launch at 13:34:00 GMT on 26 July 1971) and Greenwich Mean Time (GMT/UTC) are preserved from the Apollo 15 Mission Report so mission events are never conflated.",
      events: [
        {
          stepNumber: "01",
          date: "26 July 1971 • 13:34:00 GMT (00:00:00 GET)",
          shortTitle: "Launch & Transposition-Docking",
          missionPhase: "Launch & Translunar Injection",
          statusText: "STOWED IN SLA • EXTRACTED AT 03:24 GET",
          whatHappened:
            "Saturn V (SA-510) lifted off from Pad 39A. Following Translunar Injection, Command Module Pilot Al Worden separated CSM Endeavour, turned around, and docked with Falcon inside the Spacecraft-LM Adapter (SLA) to extract LM-10 for the coast to the Moon.",
          whatArtifactEnabled:
            "During launch acceleration or cabin depressurization, the glass cover on Falcon's range/range-rate tape meter fractured (~20% of the glass missing), a hazard the crew would have to clean up in lunar orbit before descent.",
          scientificConnection:
            "Carried the heavier J-series payload—including LRV-1 in Quadrant 1 and the expanded ALSEP package—toward the Moon.",
          imagePath: "assets/photos/s3_apollo15_launch.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Saturn V SA-510 lifts off from Launch Complex 39A carrying CSM Endeavour and LM-10 Falcon on 26 July 1971.",
          imageCredit: "NASA (KSC-71PC-539)"
        },
        {
          stepNumber: "02",
          date: "30 July 1971 • 18:13:16 GMT (100:39:16 GET)",
          shortTitle: "Delayed Undocking & Loose Umbilical Fix",
          missionPhase: "Lunar Orbit Separation",
          statusText: "UNDOCKED ON 2ND ATTEMPT AFTER 25-MIN FIX",
          whatHappened:
            "On the 12th lunar revolution, the first command to undock Falcon from Endeavour failed to release the spacecraft. Telemetry revealed no separation signal. Al Worden depressurized the docking tunnel, inspected the LM-to-CM umbilical, and found a loose electrical connector plug. Once reseated and locked, Falcon undocked cleanly at 100:39:16 GET—about 25 minutes behind the nominal timeline.",
          whatArtifactEnabled:
            "Before undocking, Scott and Irwin used vacuum cleaner hoses and duct tape inside Falcon to trap floating glass shards from the broken range/range-rate meter.",
          scientificConnection:
            "Cleared Falcon to descend into a low 58.5 × 9.5 nmi descent orbit targeting the Apennine Mountain front.",
          imagePath: "assets/photos/falcon_csm_in_orbit.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Command and Service Module Endeavour (CSM-112) photographed from Lunar Module Falcon in lunar orbit after separation.",
          imageCredit: "NASA (AS15-88-11974)"
        },
        {
          stepNumber: "03",
          date: "30 July 1971 • 22:16:29 GMT (104:42:29 GET)",
          shortTitle: "Steep 26° Descent & Touchdown at Hadley–Apennine",
          missionPhase: "Powered Descent (739.2 s Burn)",
          statusText: "LANDED • 11° TILT • ~103 s HOVER FUEL REMAINING",
          whatHappened:
            "Falcon ignited its Descent Propulsion System at 104:30:09 GET for a 739.2-second burn. Instead of the flat 14° approach of earlier missions, Falcon flew a steep 26° approach path over the Apennine peaks. After pitchover at 104:39:31 GET, Scott saw the guidance was tracking slightly south and executed 18 manual LPD redesignations to shift touchdown 853 m (2,800 ft) downrange. Blowing dust obscured the ground below 60 ft until contact light and engine cutoff just before 1 ft altitude.",
          whatArtifactEnabled:
            "Falcon settled with its rear and left footpads inside a shallow subdued crater rim, tilting 6.9° pitch-up and 8.6° left roll (~11° composite tilt). Roughly 1,055 lb of DPS propellant (~103 seconds of hover margin) remained. Touchdown contact buckled the 10-inch extended engine nozzle bell.",
          scientificConnection:
            "Two hours after landing (106:42:49 GET), David Scott opened Falcon's top docking hatch and performed a 33-minute Stand-Up EVA (SEVA)—the only one in Apollo history—describing and photographing the sunlit Apennine slopes and Hadley Rille.",
          imagePath: "assets/photos/s3_falcon_lunar_module.jpg",
          imageType: "Historical Photograph",
          imageCaption: "LM-10 Falcon tilted on the rim of a subdued crater at Hadley–Apennine with its buckled extended descent nozzle bell beneath the center bay.",
          imageCredit: "NASA (AS15-87-11782)"
        },
        {
          stepNumber: "04",
          date: "31 July – 2 August 1971 (EVA 1, EVA 2 & EVA 3)",
          shortTitle: "66h 55m Base Camp & Cabin Anomalies",
          missionPhase: "Lunar Surface Base Operations",
          statusText: "3 SURFACE EVAS • 77.3 KG SAMPLES STOWED",
          whatHappened:
            "Across nearly three days on the Moon, Falcon served as the crew's living quarters and PLSS recharge station. For the first time on the Moon, astronauts removed their pressure suits inside the LM cabin to sleep in hammocks, dramatically improving rest.",
          whatArtifactEnabled:
            "Inside the cabin, the crew managed three documented technical anomalies: (1) an ~8 lb gaseous oxygen loss caused by an inadvertently open urine-dump valve during initial depressurization; (2) a ~26 lb potable water spill inside the cabin from a cracked bacteria-filter housing near the PLSS fill station, mopped up with towels; and (3) a VHF communications link dropout during EVA 1 traced to an astronaut switch set to 296.8 MHz instead of 259.7 MHz.",
          scientificConnection:
            "Enabled 18 hours 35 minutes of surface EVA outside the cabin and stowed 77.3 kg (170.4 lb) of documented lunar samples for return to Earth.",
          imagePath: "assets/photos/falcon_apod_home.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Lunar Module Falcon and the Lunar Roving Vehicle on the Hadley plain beneath Mount Hadley Delta.",
          imageCredit: "NASA (AS15-82-11082)"
        },
        {
          stepNumber: "05",
          date: "2 August 1971 • 17:11:23 GMT (171:37:23 GET)",
          shortTitle: "Ascent Stage Liftoff & Direct Rendezvous",
          missionPhase: "Lunar Liftoff & Orbital Docking",
          statusText: "ASCENT LIFTOFF • DESCENT STAGE LEFT AT HADLEY",
          whatHappened:
            "At 17:11:23 GMT (171:37:23 GET), Falcon's Ascent Propulsion System ignited, separating the Ascent Stage from the Descent Stage in a cloud of foil and dust captured live on television by the parked LRV camera 90 meters away. The Ascent Stage climbed into a 42.5 × 9.0 nmi orbit and completed a direct first-orbit rendezvous with CSM Endeavour, docking at 19:10:25 GMT (173:36:25 GET).",
          whatArtifactEnabled:
            "The Descent Stage acted as the launch platform and remained permanently at 26.13239° N, 3.63330° E.",
          scientificConnection:
            "Delivered Scott, Irwin, and the Apollo 15 sample collection—including the Genesis Rock (15415) and deep drill cores—safely back to Endeavour.",
          imagePath: "assets/photos/falcon_liftoff_tv.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Television frame transmitted by the parked Lunar Roving Vehicle showing Falcon's Ascent Stage blasting off from the Descent Stage on 2 August 1971.",
          imageCredit: "NASA (S71-41511)"
        },
        {
          stepNumber: "06",
          date: "3 August 1971 • 01:04:01 GMT (179:30:01 GET)",
          shortTitle: "Jettison Delay & Deliberate Seismic Impact",
          missionPhase: "Ascent Stage Disposal & Seismic Experiment",
          statusText: "IMPACTED AT 26.36° N, 0.25° E (~93 KM WEST)",
          whatHappened:
            "After transferring samples and equipment, jettison of the empty Ascent Stage was delayed when cabin tunnel pressure failed to vent as expected, indicating the LM cabin hatch was not fully sealed; once resealed, Falcon's Ascent Stage was jettisoned at 23:48:00 GMT on 2 August (178:14:00 GET). Ground controllers commanded a final retrofire burn (bringing cumulative APS firing time to 433.6 seconds), crashing the Ascent Stage into the Moon at 01:04:01 GMT on 3 August 1971.",
          whatArtifactEnabled:
            "The Ascent Stage struck the lunar surface at 26.36° N, 0.25° E—about 93 km west of Hadley–Apennine (23.5 km from the planned impact point)—at ~1.7 km/s.",
          scientificConnection:
            "Generated a known artificial seismic wave recorded simultaneously by the newly deployed Apollo 15 ALSEP Passive Seismic Experiment as well as the Apollo 12 and Apollo 14 stations.",
          imagePath: "assets/photos/v6_lro_retracing_steps_pia13058.jpg",
          imageType: "Orbital Image",
          imageCaption: "LRO Narrow Angle Camera orbital view (PIA13058) showing the Falcon Descent Stage still standing at Hadley–Apennine.",
          imageCredit: "NASA / GSFC / Arizona State University (PIA13058)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "What Did the Extended J-Series Lunar Module Enable?",
      summary:
        "Falcon did not carry geological analyzers of its own, but its J-series engineering upgrades doubled the lunar surface stay time over earlier H-missions, carried the Lunar Roving Vehicle and expanded ALSEP station over a 15,000-foot mountain range, and provided a calibrated artificial seismic impact at the end of its flight.",
      metrics: [
        { value: "66h 55m", label: "Surface Stay Duration", note: "Nearly 3 Earth days on the Hadley plain (104:42:29 to 171:37:23 GET)" },
        { value: "739.2 s", label: "Descent Burn Time", note: "26° steep mountain approach; ~1,055 lb (~103 s hover) propellant remaining" },
        { value: "433.6 s", label: "Total APS Firing", note: "Combined Ascent Propulsion System firing (liftoff + impact; ~431 s liftoff in secondary summaries)" },
        { value: "853 m", label: "Manual Redesignation", note: "Downrange shift across 18 manual LPD clicks by Commander David Scott" }
      ],
      challenges: [
        {
          badge: "LAUNCH / CABIN ANOMALY",
          title: "Broken Range / Range-Rate Meter Glass (~20% Missing)",
          summary: "During Translunar coast entry into Falcon, the crew discovered the glass cover over the tapemeter had shattered.",
          details: [
            "About 20% of the glass face was missing, sending sharp fragments floating in zero-g.",
            "Scott and Irwin taped the broken bezel and vacuumed the cabin with the ECS hose so glass shards would not enter their eyes or suits.",
            "Despite the damaged cover, the underlying range/range-rate tape continued to function accurately during landing."
          ]
        },
        {
          badge: "UNDOCKING & TUNNEL",
          title: "Failed First Undocking & Jettison Tunnel Vent Delay",
          summary: "Both separation events in lunar orbit encountered mechanical/electrical delays in the docking tunnel.",
          details: [
            "On 30 July, Falcon failed to separate on the first undocking attempt because an electrical umbilical plug in the tunnel had worked loose; CMP Al Worden reconnected it to enable undocking 25 minutes later.",
            "On 2 August after docking, final jettison of the Ascent Stage was delayed when the tunnel failed to vent, requiring the crew to re-enter the tunnel and properly latch the LM overhead hatch."
          ]
        },
        {
          badge: "TOUCHDOWN DYNAMICS",
          title: "11° Crater-Rim Tilt & Buckled 10-Inch Extended Engine Skirt",
          summary: "Blowing lunar dust below 60 ft masked a subdued crater directly under Falcon's rear and port footpads.",
          details: [
            "Falcon came to rest tilted 6.9° pitch-up and 8.6° left roll (~11° composite tilt).",
            "Because LM-10 featured a 10-inch longer Descent Engine nozzle skirt for higher specific impulse, the nozzle rim struck the crater mound during touchdown stroke and buckled inward.",
            "Source Verification Rule: The buckled bell was strictly a post-contact mechanical compression—the Descent Propulsion System performed nominally throughout the 739.2-second burn."
          ]
        },
        {
          badge: "CONSUMABLES & COMMS",
          title: "8 lb Oxygen Loss, 26 lb Water Spill & VHF Frequency Mismatch",
          summary: "Extended 3-day cabin operations tested Falcon's environmental control and communications systems.",
          details: [
            "An inadvertently open urine-dump valve vented ~8 lb of gaseous oxygen before it was caught.",
            "A cracked plastic housing on the potable water bacteria filter leaked ~26 lb of water onto the cabin floor after EVA 1.",
            "An EVA 1 VHF voice dropout was resolved when telemetry showed a switch set to 296.8 MHz instead of the 259.7 MHz simplex channel."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Ascent Propulsion System (APS) Burn Duration (433.6 s vs ~431 s)",
          resolution:
            "Primary engineering documentation (Apollo 15 Mission Report MSC-05161) records 433.6 seconds of total APS firing (combining lunar liftoff insertion and the subsequent deorbit impact maneuver), whereas general NASA mission summaries round the liftoff burn alone to ~431 seconds. Both figures are preserved."
        },
        {
          topic: "3D Model Representation (General Apollo LM vs LM-10 Specifics)",
          resolution:
            "NASA's official 3D model is a general Apollo Lunar Module reference mesh; J-series LM-10 specifics (Quadrant 1 LRV stowage and the 10-inch extended DPS bell) are explicitly documented via the 1971 Apollo 15 Press Kit schematics."
        }
      ]
    },

    sources: [
      { id: "LM-S1", title: "Apollo 15 Mission Report (NASA MSC-05161, December 1971)", url: "https://ntrs.nasa.gov/citations/19720010051", role: "Primary post-mission engineering source for GET/GMT timestamps, 739.2 s DPS burn, 18 LPD redesignations, 11° tilt, broken meter glass, and cabin anomalies." },
      { id: "LM-S2", title: "NASA Apollo 15 Press Kit (Release No. 71-119K, July 1971, pp. 139–146)", url: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf", role: "Primary source for LM-10 J-series modifications diagram (p. 144) and labeled LM component schematic (p. 141)." },
      { id: "LM-S3", title: "NASA NSSDCA — Apollo 15 Lunar Module (1971-063C) & Lunar Sites", url: "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html", role: "Official LRO-refined coordinates for Falcon Descent Stage (26.13239° N, 3.63330° E) and Ascent Stage impact site (26.36° N, 0.25° E)." },
      { id: "LM-S4", title: "NASA 3D Resources — Apollo Lunar Module GLB (Michael D. Carbajal)", url: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models/Apollo%20Lunar%20Module", role: "Official NASA 3D reference model rendered in the interactive 360° viewer." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 03 (MOON WING): APOLLO 15 ALSEP — ARRAY A-2
  // ==========================================================================
  alsep_apollo15: {
    artifact_id: "alsep_apollo15",
    destination: "moon",
    atlasLocationId: "loc_alsep_apollo15",
    artifact_name: "Apollo 15 ALSEP — Array A-2",
    official_full_name: "Apollo Lunar Surface Experiments Package (ALSEP Array A-2) & Nearby Surface Experiments",
    subtitle: "The Station That Stayed Behind • Six Years of Autonomous Lunar Geophysics (1971–1977)",
    mission: "Apollo 15",
    statusBadge: "VERIFIED EXHIBIT • AUTONOMOUS NUCLEAR GEOPHYSICAL STATION",
    heroImage: "assets/photos/s2_alsep_central_station.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "The deployed Apollo 15 ALSEP Central Station and SNAP-27 radioisotope thermoelectric generator on the Hadley–Apennine plain northwest of the Lunar Module Falcon.",
    heroImageCredit: "NASA (AS15-86-11590 / Apollo 15 Crew)",
    heroImageSource: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",

    identityCard: {
      artifact: "Apollo Lunar Surface Experiments Package — Array A-2 (Apollo 15)",
      destinationSite:
        "Hadley–Apennine region, ~110 m NW of LM Falcon (NSSDCA LRO: 26.13406° N, 3.62991° E; see SP-4029 vs ALSJ longitude-sign note)",
      deployedBy: "David R. Scott (Commander) & James B. Irwin (Lunar Module Pilot) during EVA 1 & EVA 2",
      commandOnDate: "31 July 1971, 18:37 GMT (First telemetry data received 18:52 GMT)",
      drillCompletionDate: "1 August 1971 (EVA 2 — Heat Flow Borestem #2 & deep core recovery)",
      networkTerminationDate: "30 September 1977 (Entire ALSEP network commanded off due to NASA budget/station closeout; HFE powered down earlier in Jan 1977)",
      powerSource: "SNAP-27 Radioisotope Thermoelectric Generator (Plutonium-238 fuel capsule; minimum 63.5 W design specification)",
      primeContractor: "Bendix Aerospace Systems Division, Ann Arbor, Michigan (for NASA Manned Spacecraft Center); General Electric built SNAP-27 under AEC",
      instrumentArchitecture:
        "7 wired ALSEP Array A-2 experiments (PSE, LSM, SWS, SIDE, HFE, CCGE/CCIG, and Lunar Dust Detector M-515 on Central Station) + 2 separate nearby surface experiments (LRRR S-078 & SWC S-080)"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. ALSEP was an autonomous geophysical station operated via the NASA Manned Space Flight Network.",
      shortIntroduction:
        "I am Array A-2 of the Apollo Lunar Surface Experiments Package. Long after David Scott and James Irwin climbed back into Falcon and left the Moon, I stayed awake in the freezing lunar nights and blistering lunar days. Powered by the heat of plutonium-238 inside my SNAP-27 generator, I listened to moonquakes, measured the heat escaping the Moon's interior, and watched the solar wind for more than six years.",
      fullStoryParagraphs: [
        {
          heading: "Carried in Two Packages, Assembled by Hand",
          text: "I rode to the Moon inside the Scientific Equipment Bay of the Lunar Module Falcon, divided into two subpackages connected by a fiberglass carry bar. On 31 July 1971 during EVA 1, James Irwin and David Scott carried me about 110 meters northwest of Falcon, extracted the glowing-hot plutonium-238 fuel capsule from its graphite cask on the lander's side, and inserted it into my finned SNAP-27 generator."
        },
        {
          heading: "Seven Wired Experiments Around a Central Hub",
          text: "At 18:37 GMT on 31 July 1971, Houston commanded me on, and by 18:52 GMT my S-band antenna was streaming telemetry across 384,000 kilometers of space. Flat ribbon cables linked my Central Station to a circle of instruments: the Passive Seismic Experiment, Lunar Surface Magnetometer, Solar Wind Spectrometer, Suprathermal Ion Detector, Cold Cathode Gauge, Heat Flow Experiment, and the three-cell Lunar Dust Detector mounted directly on my Central Station roof."
        },
        {
          heading: "The Struggle with the Fiberglass Borestems",
          text: "Deploying my Heat Flow Experiment proved to be one of the toughest physical tasks of Apollo 15. David Scott had to rotary-percussion drill two hollow fiberglass borestems into the compacted Hadley regolith. Misaligned flute junctions on the early-design drill stems bound inside the dense soil, stopping both Borestem #1 (~1.6–1.7 m) and Borestem #2 (~1.0–1.4 m) short of their planned 3-meter depth—yet across EVA 1 and EVA 2 the crew emplaced both temperature probes."
        },
        {
          heading: "Neighbors on the Plain: The Retroreflector and the Foil",
          text: "Near my wired array, the crew also deployed two standalone experiments that needed no power cables from my Central Station: the 300-corner-cube Laser Ranging Retroreflector (LRRR, S-078), which still reflects laser pulses from Earth observatories today, and the Swiss-led Solar Wind Composition foil (SWC, S-080), which was rolled up after 41 hours of exposure and returned to Earth."
        },
        {
          heading: "Six Years of Discovery Until the Final Command",
          text: "Through 75 lunations of +120°C noon heat and −170°C midnight cold, I worked alongside the Apollo 12, 14, 16, and 17 stations to reveal the Moon's crust, mantle, and internal heat flux. Even after my Heat Flow electronics overheated in early 1976 and were powered down in January 1977, my remaining instruments transmitted until 30 September 1977—when budget constraints, not total hardware failure, led NASA to turn off the ALSEP network forever."
        }
      ]
    },

    // Interactive Site Plan & Power/Telemetry Flow Diagram (No official NASA 3D GLB exists; strict source policy)
    sitePlanInteractive: {
      diagramImage: "assets/diagrams/alsep_array_layout.png",
      rtgDiagramImage: "assets/diagrams/alsep_snap27_rtg.png",
      modelPolicyBadge: "NO OFFICIAL NASA 3D MODEL • INTERACTIVE PRESS KIT SITE PLAN & TELEMETRY ARCHITECTURE",
      modelPolicyExplanation:
        "Strict Source Policy: NASA's official 3D Resources catalog does not include a verified 3D model of the Apollo 15 ALSEP array. Per the ALSEP Research & Interaction Specification, this exhibit features an interactive station layout built directly on the official 1971 NASA Apollo 15 Press Kit site plan (p. 42) and SNAP-27 cutaway (p. 57), separating the wired ALSEP array from the standalone nearby experiments.",
      nodes: [
        {
          id: "alsep_cs",
          code: "CS",
          group: "hub",
          x: 49,
          y: 48,
          name: "ALSEP Central Station & S-Band Helical Antenna",
          experimentCode: "Central Command, Power Conditioning & Telemetry Hub",
          whatItIs: "Thermal-controlled box (25 kg) topped by a gimbaled 1-meter cylindrical S-band antenna mast aligned toward Earth.",
          howItWorked: "Received ~63.5+ W DC electrical power from the SNAP-27 RTG, regulated voltages for all wired instruments, decoded uplinked commands from Houston (2,119.0 MHz), and transmitted multiplexed science telemetry to Earth at 2,278.5 MHz.",
          missionRole: "Commanded on at 18:37 GMT on 31 July 1971 (first data 18:52 GMT); operated continuously until network shutdown on 30 September 1977.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 42) & TM X-58131"
        },
        {
          id: "alsep_rtg",
          code: "RTG",
          group: "hub",
          x: 68,
          y: 41,
          name: "SNAP-27 Radioisotope Thermoelectric Generator",
          experimentCode: "Nuclear Power Source (Plutonium-238 • Min 63.5 W Design Spec)",
          whatItIs: "Beryllium-finned cylindrical thermoelectric generator (46 cm high, 40 cm diameter across fins) fueled by a plutonium-238 oxide capsule carried in a separate graphite lunar-module cask.",
          howItWorked: "Radioactive decay of Pu-238 heated 442 lead-telluride thermocouples (~1,480 W thermal), generating at least 63.5 W of electrical power day and night with no moving parts.",
          missionRole: "Eliminated reliance on solar panels during the 14-Earth-day lunar night, sustaining Array A-2 for over 6 years.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 57)"
        },
        {
          id: "alsep_pse",
          code: "01",
          group: "wired",
          x: 34,
          y: 22,
          name: "Passive Seismic Experiment (PSE)",
          experimentCode: "Experiment S-031 • Principal Investigator: Gary Latham (Lamont-Doherty)",
          whatItIs: "Triaxial long-period seismometer and vertical short-period seismometer wrapped beneath a multi-layer aluminized Mylar thermal shroud.",
          howItWorked: "Detected ground motion as small as 0.05 nanometers from deep moonquakes, meteoroid impacts, and artificial S-IVB / LM Ascent Stage crashes.",
          missionRole: "Formed the northern vertex of the Apollo seismic triangle with Apollo 12 and 14, measuring the thickness of the lunar crust and recording Falcon's Ascent Stage impact on 3 August 1971.",
          sourceNote: "Apollo 15 Preliminary Science Report (NASA SP-289)"
        },
        {
          id: "alsep_lsm",
          code: "02",
          group: "wired",
          x: 24,
          y: 62,
          name: "Lunar Surface Magnetometer (LSM)",
          experimentCode: "Experiment S-034 • Principal Investigator: Charles P. Sonett (NASA Ames)",
          whatItIs: "Three orthogonal fluxgate magnetometer sensor booms mounted on fiberglass arms above a central electronics base.",
          howItWorked: "Measured both the weak remanent magnetic field of the Hadley–Apennine crust and time-varying magnetic fields induced deep inside the Moon as it passed through the solar wind and Earth's magnetotail.",
          missionRole: "Provided electrical conductivity and temperature profiles of the lunar mantle and constrained the size of the Moon's metallic core.",
          sourceNote: "Apollo 15 Press Kit (p. 44) & NASA SP-289"
        },
        {
          id: "alsep_sws",
          code: "03",
          group: "wired",
          x: 42,
          y: 76,
          name: "Solar Wind Spectrometer (SWS)",
          experimentCode: "Experiment S-035 • Principal Investigator: Conway W. Snyder (JPL)",
          whatItIs: "Seven Faraday-cup plasma sensors arranged in a dome to cover a 2π-steradian field of view.",
          howItWorked: "Measured the flux, energy spectra, and arrival direction of solar-wind electrons and protons reaching the unmagnetized lunar surface.",
          missionRole: "Tracked how the solar wind interacted directly with the regolith and passed through Earth's magnetotail each month.",
          sourceNote: "Apollo 15 Press Kit (p. 45)"
        },
        {
          id: "alsep_side",
          code: "04",
          group: "wired",
          x: 74,
          y: 72,
          name: "Suprathermal Ion Detector Experiment (SIDE)",
          experimentCode: "Experiment S-036 • Principal Investigator: John W. Freeman Jr. (Rice University)",
          whatItIs: "Positive-ion detector package paired by cable with the Cold Cathode Gauge Experiment.",
          howItWorked: "Counted positive ions from low-energy photo-ionized lunar exosphere gases up to keV solar-wind energies using curved-plate electrostatic analyzers.",
          missionRole: "Detected bursts of water-vapor and exhaust ions from the Lunar Module and tracked natural ion clouds along the lunar terminator.",
          sourceNote: "Apollo 15 Press Kit (p. 46)"
        },
        {
          id: "alsep_ccge",
          code: "05",
          group: "wired",
          x: 84,
          y: 76,
          name: "Cold Cathode Gauge Experiment (CCGE / CCIG)",
          experimentCode: "Experiment S-058 • Principal Investigator: Francis S. Johnson (UT Dallas)",
          whatItIs: "Cold-cathode ionization pressure gauge connected to the SIDE electronics package.",
          howItWorked: "Measured the total neutral gas pressure of the tenuous lunar atmosphere (exosphere) down to 10⁻¹² torr without a heated filament that could outgas.",
          missionRole: "Documented how quickly Lunar Module rocket exhaust dissipated and measured natural argon-40 venting from the lunar interior.",
          sourceNote: "Apollo 15 Press Kit (p. 50)"
        },
        {
          id: "alsep_hfe",
          code: "06",
          group: "wired",
          x: 62,
          y: 24,
          name: "Heat Flow Experiment (HFE)",
          experimentCode: "Experiment S-037 • Principal Investigator: Marcus G. Langseth (Lamont-Doherty)",
          whatItIs: "Two slender platinum-resistance temperature-gradient probes inserted into hollow fiberglass borestems drilled into the lunar subsurface.",
          howItWorked: "Measured vertical temperature gradients and thermal conductivity below the diurnal surface wave to determine the rate at which primordial and radiogenic heat flows out of the Moon.",
          missionRole: "First successful lunar heat-flow measurement (after Apollo 13's abort). Despite borestem drilling resistance that limited Probe 1 and Probe 2 depths, HFE operated until overheating electronics forced its shutdown in January 1977.",
          sourceNote: "NASA SP-289 & TM X-58131"
        },
        {
          id: "alsep_ldd",
          code: "07",
          group: "wired",
          x: 52,
          y: 38,
          name: "Lunar Dust Detector (LDD)",
          experimentCode: "Experiment M-515 • Principal Investigator: James R. Bates (NASA MSC)",
          whatItIs: "Three calibrated solar cells and thermistor sensors mounted directly on top of the ALSEP Central Station sunshield.",
          howItWorked: "Monitored solar-cell output degradation from dust deposition (especially during LM liftoff) and high-energy radiation damage. Note: Because M-515 was mounted on the Central Station rather than on a separate ground cable, some summaries count 6 cabled instruments while comprehensive NASA reports count 7 wired ALSEP experiments.",
          missionRole: "Measured dust blast from Falcon's liftoff 110 meters away and long-term thermal coating performance.",
          sourceNote: "NASA TM X-58131 (ALSEP Termination Report)"
        },
        {
          id: "alsep_lrrr",
          code: "LRRR",
          group: "nearby",
          x: 18,
          y: 32,
          name: "Laser Ranging Retroreflector (LRRR — Standalone Nearby Experiment)",
          experimentCode: "Experiment S-078 • Principal Investigator: James E. Faller (Wesleyan / LURE Team)",
          whatItIs: "Largest Apollo passive optical array containing 300 fused-silica corner-cube prisms (3× the size of Apollo 11 and 14 arrays), deployed ~43 m southwest of the ALSEP Central Station.",
          howItWorked: "Requires no electrical power or telemetry cable; reflects laser pulses fired from telescopes on Earth directly back along their incoming beam path to measure the Earth–Moon distance to millimeter/centimeter precision.",
          missionRole: "The only Apollo 15 surface experiment still actively used today—testing General Relativity, lunar tidal dissipation, and the Moon's fluid core long after the wired ALSEP network was turned off in 1977.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 52) & LRO PIA13037"
        },
        {
          id: "alsep_swc",
          code: "SWC",
          group: "nearby",
          x: 82,
          y: 26,
          name: "Solar Wind Composition Experiment (SWC — Standalone Returned Foil)",
          experimentCode: "Experiment S-080 • Principal Investigator: Johannes Geiss (University of Bern)",
          whatItIs: "Ultra-pure aluminum-and-platinum foil sheet (1.4 × 0.3 m) unrolled on a telescopic staff facing the Sun near the ALSEP site.",
          howItWorked: "Passively trapped noble-gas ions (helium, neon, argon isotopes) directly in the metallic foil lattice with no electrical connection to ALSEP.",
          missionRole: "Exposed for 41 hours 8 minutes on the lunar surface before Scott and Irwin rolled up the foil on EVA 3 and brought it back to Earth for mass-spectrometer analysis in Switzerland.",
          sourceNote: "NASA Apollo 15 Press Kit (p. 55) & SP-289"
        }
      ]
    },

    timeline: {
      chronologyNote:
        "Operational Lifespan Note: Distinguish between the Heat Flow Experiment power-down in January 1977 (following early-1976 electronics overheating) and the whole-network ALSEP termination on 30 September 1977.",
      events: [
        {
          stepNumber: "01",
          date: "31 July 1971 • EVA 1 Deployment",
          shortTitle: "Unloading, Fueling SNAP-27 & Command-On (18:37 GMT)",
          missionPhase: "EVA 1 Station Deployment",
          statusText: "COMMANDED ON 18:37 GMT • FIRST DATA 18:52 GMT",
          whatHappened:
            "After their first rover traverse to Hadley Rille, David Scott and James Irwin unloaded ALSEP Subpackages 1 and 2 from Falcon, carried them ~110 m northwest, inserted the plutonium-238 fuel capsule into the SNAP-27 RTG, aligned the S-band antenna, and laid out the wired experiments. Houston sent the turn-on command at 18:37 GMT and received the first science data stream at 18:52 GMT.",
          whatArtifactEnabled:
            "During EVA 1, Scott also began drilling Borestem #1 for the Heat Flow Experiment, encountering unexpected binding at ~1.6–1.7 m depth due to stem joint design in dense regolith.",
          scientificConnection:
            "Initiated continuous geophysical monitoring at the northernmost site of the Apollo surface network.",
          imagePath: "assets/photos/s2_alsep_central_station.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Apollo 15 ALSEP Central Station and SNAP-27 RTG deployed on the Hadley plain.",
          imageCredit: "NASA (AS15-86-11590)"
        },
        {
          stepNumber: "02",
          date: "1–2 August 1971 • EVA 2 & EVA 3",
          shortTitle: "Heat Flow Completion, LRRR Deployment & SWC Foil Retrieval",
          missionPhase: "EVA 2 & EVA 3 Science Completion",
          statusText: "BOTH HFE PROBES EMPLACED • 300-PRISM LRRR DEPLOYED",
          whatHappened:
            "On 1 August (EVA 2), Scott drilled Borestem #2 and emplaced the second Heat Flow probe despite continued stem binding (~1.0–1.4 m depth), and deployed the 300-prism Laser Ranging Retroreflector (S-078). On 2 August (EVA 3), the crew extracted the deep rotary-percussion drill core and retrieved the Solar Wind Composition foil (S-080) for return to Earth.",
          whatArtifactEnabled:
            "Hours later, ALSEP sensors recorded the pressure wave and dust pulse from Falcon's Ascent Stage liftoff (2 Aug 17:11 GMT) and the seismic wave from the Ascent Stage impact 93 km away (3 Aug 01:04 GMT).",
          scientificConnection:
            "Completed the full Apollo 15 surface experiment suite before the crew departed lunar orbit.",
          imagePath: "assets/photos/alsep_hfe_drill_irwin.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Apollo 15 Heat Flow Experiment drilling and surface deployment operations at the ALSEP site.",
          imageCredit: "NASA (Apollo 15 Surface Archive)"
        },
        {
          stepNumber: "03",
          date: "1971 – 1975 • Multi-Year Autonomous Operations",
          shortTitle: "75 Lunations of Seismic, Magnetic & Plasma Science",
          missionPhase: "Extended Autonomous Network Operations",
          statusText: "CONTINUOUS DAY/NIGHT SNAP-27 TELEMETRY",
          whatHappened:
            "Operating unattended through 300°C temperature swings each lunar month, Array A-2 transmitted continuous measurements of deep tidal moonquakes, shallow tectonic moonquakes, meteoroid impacts, interior heat flux, and magnetotail plasma crossings.",
          whatArtifactEnabled:
            "The SNAP-27 RTG maintained stable electrical output well above the minimum 63.5 W design specification for years after deployment.",
          scientificConnection:
            "Together with Apollo 12, 14, 16, and 17, established the internal seismic velocity profile of the Moon.",
          imagePath: "assets/photos/alsep_lrrr_retroreflector.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Apollo 15's 300-corner-cube Laser Ranging Retroreflector (LRRR, S-078) on the lunar surface.",
          imageCredit: "NASA (AS15-85-11468 / PIA13037)"
        },
        {
          stepNumber: "04",
          date: "Early 1976 – 30 September 1977",
          shortTitle: "HFE Overheating (Jan 1977) & Whole-Array Termination (30 Sep 1977)",
          missionPhase: "Subsystem Degradation & Network Closeout",
          statusText: "TERMINATED BY GROUND COMMAND • LRRR STILL ACTIVE",
          whatHappened:
            "In early 1976, the Heat Flow Experiment electronics began overheating during lunar noon, leading ground controllers to power down the HFE in January 1977. Eight months later, on 30 September 1977, NASA terminated the entire Apollo ALSEP network due to budgetary and tracking-station closeout constraints—even though Apollo 15's SNAP-27 RTG and Central Station transmitter were still functioning.",
          whatArtifactEnabled:
            "While the wired ALSEP array fell silent on 30 September 1977, the passive Laser Ranging Retroreflector (S-078) required no power and remains active into the 21st century.",
          scientificConnection:
            "Archived over six years of continuous lunar geophysical data at the National Space Science Data Center.",
          imagePath: "assets/photos/alsep_swc_foil.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Solar Wind Composition (SWC) foil experiment deployed near the Apollo 15 ALSEP station prior to retrieval on EVA 3.",
          imageCredit: "NASA (AS15-87-11759)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "How Did Array A-2 Measure the Moon's Interior and Space Environment?",
      summary:
        "Unlike short-stay crewed traverses, ALSEP provided a fixed, long-baseline geophysical observatory. By combining nuclear thermoelectric power (SNAP-27) with a centralized S-band telemetry hub, it transformed the Hadley–Apennine landing site into a six-year scientific station.",
      metrics: [
        { value: "6+ Years", label: "Active Telemetry Span", note: "31 July 1971 (18:37 GMT) to 30 September 1977 network closeout" },
        { value: "≥63.5 W", label: "SNAP-27 RTG Spec", note: "Minimum pre-mission design power from Pu-238 thermoelectric generator" },
        { value: "7 + 2", label: "Experiment Architecture", note: "7 wired ALSEP instruments (incl. M-515 LDD) + 2 standalone nearby experiments (LRRR & SWC)" },
        { value: "300 Cubes", label: "LRRR Optical Array", note: "Passive fused-silica retroreflector (S-078) still active today" }
      ],
      challenges: [
        {
          badge: "DRILLING RESISTANCE",
          title: "Heat Flow Borestem Binding in Compacted Regolith",
          summary: "Early-design fiberglass borestems with external titanium-jointed flutes bound tightly inside the dense Hadley subsurface.",
          details: [
            "On EVA 1, Borestem #1 stalled at ~1.6–1.7 m rather than the planned 3.0 m design depth.",
            "On EVA 2, Borestem #2 also encountered severe resistance (~1.0–1.4 m), and separating the electric drill chuck from the stem required intense physical effort by Scott and Irwin.",
            "Engineers redesigned the borestem joints with continuous external auger flutes for Apollo 16 and Apollo 17."
          ]
        },
        {
          badge: "THERMAL DEGRADATION",
          title: "Early-1976 HFE Overheating vs. 30 September 1977 Network Shutdown",
          summary: "Long-term solar degradation of thermal control surfaces gradually raised daytime electronics temperatures.",
          details: [
            "In early 1976, the Heat Flow Experiment electronics experienced thermal excursions, and HFE was commanded off in January 1977.",
            "The rest of Array A-2 did not fail; NASA commanded the station off on 30 September 1977 to reallocate Manned Space Flight Network / budget resources."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Coordinate Longitude Sign Conflict (SP-4029 vs. ALSJ & NSSDCA)",
          resolution:
            "NASA SP-4029 prints the Apollo 15 ALSEP coordinate with a minus sign (26.13407, -3.62981, implying West), whereas the Apollo Lunar Surface Journal (26.13407 N, 3.62981 E) and NASA NSSDCA LRO table (26.13406° N, 3.62991° E) place it in East longitude at Hadley–Apennine. Both are disclosed transparently."
        },
        {
          topic: "Instrument Count Variations (6 vs. 7 vs. 9 Experiments)",
          resolution:
            "Differences across NASA summaries arise from whether the Central Station-mounted Lunar Dust Detector (M-515) is counted alongside the 6 cabled ground instruments (totaling 7 wired ALSEP experiments) and whether the two standalone nearby experiments—Laser Ranging Retroreflector (S-078) and Solar Wind Composition foil (S-080)—are grouped with the station."
        }
      ]
    },

    sources: [
      { id: "AL-S1", title: "Apollo Lunar Surface Experiments Package Termination Report (NASA TM X-58131 / RP-1036, 1979)", url: "https://ntrs.nasa.gov/citations/19790014805", role: "Primary NASA technical report documenting Array A-2 turn-on (31 Jul 1971 18:37 GMT), 7 wired experiments including M-515, Jan 1977 HFE shutdown, and 30 Sep 1977 network closeout." },
      { id: "AL-S2", title: "NASA Apollo 15 Press Kit (Release No. 71-119K, pp. 41–58)", url: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/a/Apollo_15-1.pdf", role: "Primary source for the ALSEP Array Layout diagram (p. 42), SNAP-27 RTG cutaway (p. 57), and minimum 63.5 W design specification." },
      { id: "AL-S3", title: "Apollo 15 Preliminary Science Report (NASA SP-289, 1972)", url: "https://ntrs.nasa.gov/citations/19720019005", role: "Primary scientific report on PSE, LSM, SWS, SIDE, CCGE, HFE borestem depths, LRRR, and SWC results." },
      { id: "AL-S4", title: "NASA NSSDCA Lunar Exploration Sites & LRO Photojournal PIA13037", url: "https://photojournal.jpl.nasa.gov/catalog/PIA13037", role: "LRO orbital coordinates and imagery of the Apollo 15 ALSEP and LRRR at Hadley–Apennine." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 04 (MOON WING): SURVEYOR 3 ("THE MISSION THAT WAS VISITED TWICE")
  // ==========================================================================
  surveyor3: {
    artifact_id: "surveyor3",
    destination: "moon",
    atlasLocationId: "loc_surveyor3",
    artifact_name: "Surveyor 3",
    official_full_name: "Surveyor 3 Robotic Lunar Lander (Surveyor Model A-21B)",
    subtitle: "The Mission That Was Visited Twice • Robotic Pioneer (1967) & Apollo 12 Encounter (1969)",
    mission: "Surveyor 3 & Apollo 12",
    statusBadge: "VERIFIED EXHIBIT • ONLY SPACECRAFT VISITED BY ASTRONAUTS ON ANOTHER WORLD",
    heroImage: "assets/photos/surveyor3_apollo12_conrad.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Apollo 12 Commander Charles 'Pete' Conrad Jr. inspects Surveyor 3's television camera and soil mechanics scoop inside Surveyor Crater on 20 November 1969, with Lunar Module Intrepid visible on the crater rim 155 meters away.",
    heroImageCredit: "NASA (Photo by Alan L. Bean, AS12-48-7134)",
    heroImageSource: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/",

    identityCard: {
      artifact: "Surveyor 3 Robotic Lunar Lander",
      destinationSite:
        "Southeastern Oceanus Procellarum — Surveyor Crater (JPL TR 32-1177: 2.94° S, 23.34° W; NASA public summary: 3° S, 23.41° W)",
      launchDate: "17 April 1967, 07:05:01 GMT — Atlas-Centaur AC-12, Cape Canaveral Pad 36B",
      landingDate: "20 April 1967, 00:04:17 GMT (19 April 1967 in US local time zones)",
      roboticMissionEnd: "3 May 1967 (Last telemetry 4 May 1967, 00:04 GMT after first lunar sunset)",
      humanVisitDate: "20 November 1969, ~06:27 GMT (Apollo 12 EVA 2 — Charles Conrad Jr. & Alan L. Bean)",
      apollo12Distance: "155 meters (509 ft) in NASA SP-284 primary report (~180 m / 600 ft in general NASA summaries)",
      builder: "Hughes Aircraft Company, El Segundo, California (for NASA Jet Propulsion Laboratory)",
      massAndDimensions:
        "Launch mass: 1,042 kg (2,297 lb) • Landed dry mass: 296 kg (652.6 lb) • Height: ~3 m (10 ft) • Footpad span: 4.27 m (14 ft)"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Surveyor 3 was an uncrewed JPL/Hughes lander later inspected in person by the Apollo 12 crew.",
      shortIntroduction:
        "I am Surveyor 3, a three-legged robotic scout launched in April 1967 to prove whether the lunar soil could support the weight of Apollo astronauts. My landing was anything but calm: when sunlit rocks confused my radar altimeter, my vernier engines failed to shut off at 14 feet, and I touched down three times inside a 200-meter crater before controllers in Pasadena cut my engines. Two and a half years later, I became the only spacecraft on another world ever visited by human beings.",
      fullStoryParagraphs: [
        {
          heading: "Blinded Radar and Three Touchdowns in Oceanus Procellarum",
          text: "On 20 April 1967, my solid-fuel main retrorocket slowed me and dropped away at 37,000 feet, leaving my three liquid-propellant vernier engines and Radar Altitude and Doppler Velocity Sensor (RADVS) to guide me down. As I dipped inside a shallow crater at 37 feet, glint from sunlit rocks caused my radar to lose lock and switch to a backup mode—missing the automatic 14-foot vernier engine cutoff signal. With my vernier engines still firing at 90 percent of my lunar weight, I bounced across the crater wall twice—24 seconds and 12 seconds apart—until a ground command cut my engines one second before my third and final contact on a 12-to-14-degree slope."
        },
        {
          heading: "The First Mechanical Claw on the Moon",
          text: "Unlike Surveyor 1, I carried a pantograph-style Surface Sampler—an electric scoop mounted below my television camera. Over 18 hours and 22 minutes of intermittent operation across my single lunar day, JPL controllers commanded my scoop to dig four trenches up to 18 centimeters deep, perform eight static bearing-strength tests, and execute 14 impact tests while my rotating mirror camera transmitted more than 6,300 television frames."
        },
        {
          heading: "Thirty-One Months in the Lunar Environment",
          text: "After sunset on 3 May 1967, the −170°C lunar night silenced me permanently. For 31 months I stood motionless in Surveyor Crater, exposed to solar ultraviolet radiation, micrometeoroid impacts, and extreme thermal cycling."
        },
        {
          heading: "Footsteps on the Crater Rim: 20 November 1969",
          text: "On 19 November 1969, Apollo 12 Lunar Module Intrepid thundered down out of the sky and landed on the northwest rim of my crater just 155 meters away—blowing a thin veil of lunar dust across my white painted surfaces. The next day, 20 November 1969 at 06:27 GMT, Pete Conrad and Alan Bean walked down the crater slope to inspect me, noticing that solar radiation and dust had turned my bright white paint a tan-brown hue."
        },
        {
          heading: "Pieces Returned to Earth, Frame Left on the Moon",
          text: "Using long-handled cable cutters, Conrad and Bean severed and bagged five sets of hardware from my frame—including my complete 11.1-kilogram television camera, the front 29.8-centimeter scoop of my Surface Sampler, painted and unpainted aluminum tubes, and cable/glass insulation samples—returning them to Earth for 40 scientific teams to study while the rest of my spaceframe remained forever in Oceanus Procellarum."
        }
      ]
    },

    // Annotated Configuration & SP-284 Technical Diagrams (No official NASA 3D GLB exists; strict source policy)
    diagramInspector: {
      modelPolicyBadge: "NO OFFICIAL NASA 3D MODEL • PRIMARY NASA SP-284 TECHNICAL DIAGRAMS & LANDING SCRUBBER",
      modelPolicyExplanation:
        "Strict Source Policy: No official NASA 3D `.glb` model exists for Surveyor 3 in the NASA 3D Resources archive. Per the Surveyor 3 Research & Interaction Specification, this exhibit provides an interactive numbered configuration inspector built directly on the official NASA SP-284 (1972) engineering drawings, paired with an interactive Triple-Touchdown Landing Scrubber and Recovered-Parts Selector.",
      diagrams: [
        {
          id: "surv_diag_camera",
          title: "Surveyor 3 Returned Television Camera & Cutaway (NASA SP-284 pp. 25, 34)",
          imagePath: "assets/diagrams/surveyor3_sp284_camera_diagram.png",
          visualType: "Technical Drawing",
          sourcePage: "NASA SP-284 (1972), p. 25",
          caption:
            "Official NASA SP-284 engineering drawing of the Surveyor 3 Television Camera showing the rotating mirror hood, zoom lens assembly, filter wheel, vidicon tube housing, and lower mounting shroud where Apollo 12 astronauts severed the support struts.",
          credit: "NASA SP-284 (Analysis of Surveyor 3 Material and Photographs Returned by Apollo 12, 1972)",
          sourceUrl: "https://ntrs.nasa.gov/citations/19720019083",
          hotspots: [
            {
              id: "s3_hs_1",
              code: "01",
              x: 48,
              y: 18,
              name: "Stepping Mirror Hood & Optical Window",
              category: "Television Camera Upper Assembly",
              whatItIs: "Motorized azimuth/elevation mirror assembly atop the vertical television camera housing.",
              howItWorked: "Panned 360° horizontally and tilted vertically so the fixed downward-looking vidicon tube could image the entire crater, horizon, footpads, and sampler trenches.",
              missionRole: "Transmitted 6,326 television pictures in JPL TR 32-1177 (6,315 in general NASA summaries) despite glare caused by vernier-exhaust contamination during the triple landing.",
              sourceNote: "NASA SP-284 (pp. 14, 25) & JPL TR 32-1177"
            },
            {
              id: "s3_hs_2",
              code: "02",
              x: 52,
              y: 44,
              name: "Variable-Focal-Length Zoom Lens & Color Filter Wheel",
              category: "Optics & Spectral Imaging",
              whatItIs: "25-to-100 mm f/4 zoom lens with clear, red, green, and blue color filters.",
              howItWorked: "Allowed narrow-angle (6.4°) high-resolution inspection of soil trenches and wide-angle (25.4°) panoramas, including color views of a solar eclipse caused by Earth.",
              missionRole: "Returned to Earth by Apollo 12 in November 1969; post-return inspection studied micrometeoroid pitting and dust adhesion on the optical surfaces.",
              sourceNote: "NASA SP-284 (p. 25)"
            },
            {
              id: "s3_hs_3",
              code: "03",
              x: 50,
              y: 68,
              name: "Vidicon Tube & Thermal White-Paint Shroud",
              category: "Camera Electronics & Thermal Coating",
              whatItIs: "600-line/200-line slow-scan vidicon tube enclosed in an inorganic white-painted aluminum housing.",
              howItWorked: "Converted focused lunar scenes into video signals transmitted to Earth via the planar array or omnidirectional antennas.",
              missionRole: "After 31 months on the Moon, its white paint had tanned from solar UV exposure and a thin directional layer of lunar dust blasted by Intrepid's landing 155 m away.",
              sourceNote: "NASA SP-284 (pp. 14, 34)"
            },
            {
              id: "s3_hs_4",
              code: "04",
              x: 46,
              y: 86,
              name: "Severed Camera Support Collar & Electrical Harness",
              category: "Apollo 12 Retrieval Cut Zone",
              whatItIs: "Tubular aluminum mounting struts and braided glass-fiber/Teflon electrical cables attaching the camera to the Surveyor spaceframe.",
              howItWorked: "Cut by Alan Bean and Pete Conrad using long-handled Apollo 12 shear cutters during EVA 2 on 20 November 1969.",
              missionRole: "Allowed the complete 11.1 kg camera and attached cable sections to be stowed inside the Apollo 12 backpack for laboratory analysis on Earth.",
              sourceNote: "NASA SP-284 (p. 22)"
            }
          ]
        },
        {
          id: "surv_diag_crater",
          title: "Surveyor Crater Plan Map & Intrepid Landing Geometry (NASA SP-284 p. 16)",
          imagePath: "assets/diagrams/surveyor3_sp284_crater_map.png",
          visualType: "Technical Drawing",
          sourcePage: "NASA SP-284 (1972), p. 16",
          caption:
            "Official NASA SP-284 cartographic plan of the ~200-meter Surveyor Crater showing Apollo 12 Lunar Module Intrepid on the northwest rim 155 meters from Surveyor 3 and the three touchdown impressions left by Surveyor 3 in April 1967.",
          credit: "NASA SP-284 (1972, p. 16)",
          sourceUrl: "https://ntrs.nasa.gov/citations/19720019083",
          hotspots: [
            {
              id: "s3_cr_1",
              code: "01",
              x: 34,
              y: 26,
              name: "Apollo 12 LM Intrepid Touchdown Point (NW Rim)",
              category: "Pinpoint Crewed Landing Site",
              whatItIs: "Landing position of Apollo 12 Lunar Module Intrepid on 19 November 1969.",
              howItWorked: "Pete Conrad piloted Intrepid to a pinpoint landing just 155 meters (509 ft) northwest of Surveyor 3 (rounded to ~180 m / 600 ft in general NASA summaries).",
              missionRole: "Demonstrated precision lunar guidance required for later pinpoint landings like Apollo 15 at Hadley–Apennine.",
              sourceNote: "NASA SP-284 (p. 16)"
            },
            {
              id: "s3_cr_2",
              code: "02",
              x: 68,
              y: 58,
              name: "Surveyor 3 Final Resting Position (12°–14° Eastern Slope)",
              category: "Triple-Touchdown Terminal Site",
              whatItIs: "Final resting spot of Surveyor 3 inside the eastern inner slope of Surveyor Crater after two Vernier-powered bounces.",
              howItWorked: "Came to rest tilted ~12.4° (JPL TR 32-1177) to ~14° (NASA summary) after ground controllers commanded vernier cutoff 1 second before the third contact.",
              missionRole: "Safe enough on the slope for Conrad and Bean to walk around the downhill and uphill sides without the lander sliding.",
              sourceNote: "NASA SP-284 (pp. 13, 15, 16)"
            }
          ]
        },
        {
          id: "surv_diag_parts",
          title: "Catalog of Returned Surveyor 3 Hardware (NASA SP-284 p. 22)",
          imagePath: "assets/diagrams/surveyor3_sp284_returned_parts.png",
          visualType: "Technical Drawing",
          sourcePage: "NASA SP-284 (1972), p. 22",
          caption:
            "NASA SP-284 documentation of the five hardware assemblies retrieved from Surveyor 3 by the Apollo 12 crew on 20 November 1969: the complete TV camera, the front 29.8 cm of the Surface Sampler scoop, a 19.7 cm painted tube, a 10 cm unpainted tube, and cable/glass insulation.",
          credit: "NASA SP-284 (1972, p. 22)",
          sourceUrl: "https://ntrs.nasa.gov/citations/19720019083",
          hotspots: []
        },
        {
          id: "surv_diag_cutaway",
          title: "Surveyor 3 TV Camera Internal Cutaway Schematic (NASA SP-284 p. 34)",
          imagePath: "assets/diagrams/surveyor3_sp284_camera_cutaway.png",
          visualType: "Technical Drawing",
          sourcePage: "NASA SP-284 (1972), p. 34",
          caption:
            "Detailed internal cutaway from NASA SP-284 showing the vidicon assembly, focal-plane shutter, elevation drive motor, and lower electronic chassis examined after 31 months on the Moon.",
          credit: "NASA SP-284 (1972, p. 34)",
          sourceUrl: "https://ntrs.nasa.gov/citations/19720019083",
          hotspots: []
        }
      ],
      recoveredPartsTable: [
        { item: "1. Complete Television Camera", measurement: "11.1 kg mass (with attached cables & support collar)", analysisFocus: "Optical coatings, mirror micrometeoroid pits, white-paint UV/dust tanning, electronics & controversial Streptococcus mitis culture." },
        { item: "2. Surface Sampler Scoop & Arm Front", measurement: "29.8 cm (11.75 in) severed front section + lunar soil inside scoop", analysisFocus: "Soil-adhesion mechanics, bearing-wear surfaces, and baked-on Oceanus Procellarum regolith." },
        { item: "3. Painted Aluminum Support Tube", measurement: "19.7 cm (7.75 in) section from camera strut", analysisFocus: "Degradation of inorganic white thermal-control paint under 31 months of solar UV and Intrepid exhaust dust blast." },
        { item: "4. Unpainted Polished Aluminum Tube", measurement: "10.0 cm (4.0 in) section from RADVS strut", analysisFocus: "Sputtering by solar-wind ions, secondary cratering from Intrepid landing ejecta, and micrometeoroid flux." },
        { item: "5. Electrical Cabling & Glass Insulation", measurement: "Braided glass-fiber / Teflon cable wraps & mirror glass", analysisFocus: "Dielectric outgassing, embrittlement in vacuum through 31 lunar day/night thermal cycles." }
      ]
    },

    timeline: {
      chronologyNote:
        "Calendar Date & Discrepancy Note: Surveyor 3 touched down at 00:04:17 GMT on 20 April 1967, which corresponded to the evening of 19 April 1967 in US local time zones (explaining why NASA pages cite either April 19 or April 20). Both JPL TR 32-1177 primary figures and rounded NASA summary figures are preserved below.",
      events: [
        {
          stepNumber: "01",
          date: "20 April 1967 • 00:04:17 GMT (19 Apr US Time)",
          shortTitle: "RADVS Glint & Vernier-Powered Triple Touchdown",
          missionPhase: "Terminal Descent Anomaly",
          statusText: "3 TOUCHDOWNS (24 s & 12 s APART) • 12°–14° TILT",
          whatHappened:
            "After main retrorocket burnout and ejection, Surveyor 3 descended into a ~200 m crater on its three liquid vernier engines. At ~37 ft altitude, specular radar reflections from sunlit crater rocks caused the Radar Altitude and Doppler Velocity Sensor (RADVS) to lose lock and revert to an inertial hold mode—preventing the automatic 14-foot vernier cutoff mark from firing. With the vernier engines still burning and supporting ~90% of the lander's lunar weight (not the main solid retrorocket, which had already separated), Surveyor 3 bounced twice across the crater slope—24 seconds between 1st and 2nd contact, and 12 seconds between 2nd and 3rd contact—until ground command cut the verniers 1 second before the third touchdown.",
          whatArtifactEnabled:
            "Left crisp waffle-patterned footpad imprints on the crater slope and settled at a 12.4° tilt (JPL report; ~14° in public summaries).",
          scientificConnection:
            "Footpad penetration and rebound footprints immediately provided soil bearing-strength measurements before the scoop even moved.",
          imagePath: "assets/photos/surveyor3_footpad_imprint.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Footpad imprint in the lunar regolith next to Surveyor 3 photographed by Apollo 12 astronauts 31 months later (AS12-48-7110).",
          imageCredit: "NASA (AS12-48-7110)"
        },
        {
          stepNumber: "02",
          date: "21 April – 3 May 1967",
          shortTitle: "Surface Sampler Trenching & 6,326 TV Frames",
          missionPhase: "Robotic Lunar Day Operations",
          statusText: "4 TRENCHES • 8 BEARING • 14 IMPACT TESTS (18h 22m)",
          whatHappened:
            "Across 18 hours and 22 minutes of cumulative Surface Sampler operation, JPL engineers commanded the pantograph claw to excavate 4 trenches (up to 18 cm / 7 in deep), perform 8 static bearing tests, and execute 14 impact tests (secondary NASA summaries round these to 4 bearing and 13 impact tests). Meanwhile, the TV camera transmitted 6,326 frames (6,315 in general summaries), including color views of a total solar eclipse by Earth on 24 April 1967.",
          whatArtifactEnabled:
            "Proved conclusively that the lunar regolith had a firm bearing capacity (~2 × 10⁵ dynes/cm² at a few cm depth) increasing with depth—strong enough to support the Apollo Lunar Module and walking astronauts.",
          scientificConnection:
            "Following lunar sunset on 3 May 1967 (last telemetry 00:04 GMT on 4 May), Surveyor 3 never revived, beginning 31 months of passive exposure.",
          imagePath: "assets/diagrams/surveyor3_sp284_returned_camera_photo.png",
          imageType: "Laboratory Image",
          imageCaption: "Surveyor 3 television camera in the Lunar Receiving Laboratory after return by Apollo 12 (NASA SP-284, p. 14).",
          imageCredit: "NASA SP-284 (1972)"
        },
        {
          stepNumber: "03",
          date: "19–20 November 1969 • 06:27 GMT",
          shortTitle: "Apollo 12 Pinpoint Landing (155 m) & Human Inspection",
          missionPhase: "Apollo 12 Surface Rendezvous",
          statusText: "VISITED BY CONRAD & BEAN • 5 HARDWARE ITEMS RECOVERED",
          whatHappened:
            "On 19 November 1969, Apollo 12 Lunar Module Intrepid landed on the northwest rim of Surveyor Crater 155 m (509 ft) away (cited as ~180 m / 600 ft in general summaries). During EVA 2 on 20 November 1969 at ~06:27 GMT, Pete Conrad and Alan Bean walked down into the crater, photographed Surveyor 3 and its 1967 trenches, and severed five hardware items (TV camera, 29.8 cm scoop, 19.7 cm painted tube, 10 cm unpainted tube, and cabling) for return to Earth.",
          whatArtifactEnabled:
            "Provided the only 31-month controlled long-duration materials-exposure experiment retrieved from the lunar surface.",
          scientificConnection:
            "Analyzed by 40 scientific teams worldwide (published in NASA SP-284). While one microbiology team reported culturing Streptococcus mitis from camera foam, later NASA-cited reviews noted probable cleanroom/post-recovery contamination due to non-sterile handling.",
          imagePath: "assets/photos/surveyor3_intrepid_horizon.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Surveyor 3 in the foreground inside Surveyor Crater with Apollo 12 Lunar Module Intrepid on the horizon 155 meters away (AS12-48-7136).",
          imageCredit: "NASA (AS12-48-7136)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "What Did Surveyor 3 Prove in 1967—and Reveal in 1969?",
      summary:
        "Surveyor 3 served two distinct scientific missions: first as a robotic geotechnical laboratory that proved the Moon's surface could support Apollo, and second as a 31-month materials-exposure witness studied by 40 research teams after Apollo 12 brought its camera and scoop back to Earth.",
      metrics: [
        { value: "4 Trenches", label: "Soil Excavations (1967)", note: "Plus 8 bearing & 14 impact tests over 18h 22m in JPL TR 32-1177 (4 bearing / 13 impact in summary)" },
        { value: "6,326", label: "TV Frames Transmitted", note: "Primary JPL TR 32-1177 count (6,315 in general NASA summaries)" },
        { value: "155 m", label: "Distance to Intrepid", note: "509 ft in NASA SP-284 (~180 m / 600 ft in general public summaries)" },
        { value: "40 Teams", label: "Returned-Parts Analysts", note: "Investigated 5 retrieved assemblies after 31 months on the Moon (NASA SP-284)" }
      ],
      challenges: [
        {
          badge: "RADAR LOSS OF LOCK",
          title: "RADVS Glint & Missing 14-Foot Vernier Cutoff",
          summary: "Bright rocks inside Surveyor Crater caused the radar altimeter to lose lock at ~37 ft altitude.",
          details: [
            "Wait-mode logic prevented the 14-foot vernier engine cutoff signal from issuing.",
            "Accuracy Rule: It was the three liquid-fuel vernier engines—NOT the main solid retrorocket (which had already jettisoned)—that remained firing at ~90% of lunar weight across the first two touchdowns.",
            "Ground controllers sent a manual vernier cutoff command 1 second before the third contact, saving the mission."
          ]
        },
        {
          badge: "OPTICAL CONTAMINATION",
          title: "Vernier Exhaust Glare & 31-Month UV/Dust Tanning",
          summary: "Landing with the verniers firing kicked up dust and exhaust droplets onto the camera mirror and thermal paint.",
          details: [
            "During 1967 operations, JPL controllers had to step the camera mirror carefully to avoid sunlight scattering off the dusty mirror.",
            "In 1969, Apollo 12's descent engine sandblasted the side of Surveyor 3 facing Intrepid, creating a microscopic shadow pattern around bolts that SP-284 researchers used to measure dust trajectory."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Landing Date (19 April vs 20 April 1967), Coordinates & Tilt",
          resolution:
            "Touchdown occurred at 00:04:17 GMT on 20 April 1967 (19 April in US time zones). JPL TR 32-1177 lists 2.94° S, 23.34° W and ~12.4° tilt (NASA summary: 3° S, 23.41° W and ~14° tilt)."
        },
        {
          topic: "Sampler Counts (8/14 vs 4/13), TV Frames (6,326 vs 6,315) & Intrepid Distance (155 m vs 180 m)",
          resolution:
            "Primary engineering reports (JPL TR 32-1177 & NASA SP-284) record 4 trenches, 8 bearing tests, 14 impact tests, 6,326 TV frames, and 155 m separation from Intrepid; secondary NASA web summaries list 4 bearing tests, 13 impact tests, 6,315 images, and ~180 m (600 ft). All pairs are explicitly displayed."
        },
        {
          topic: "Streptococcus mitis Biological Claim (NASA SP-284)",
          resolution:
            "While a 1970–1972 team reported isolating Streptococcus mitis from a piece of foam inside the returned TV camera, subsequent reviews cited by NASA concluded the bacteria likely resulted from accidental human contamination after recovery rather than 31 months of lunar survival."
        }
      ]
    },

    sources: [
      { id: "S3-S1", title: "Analysis of Surveyor 3 Material and Photographs Returned by Apollo 12 (NASA SP-284, 1972)", url: "https://ntrs.nasa.gov/citations/19720019083", role: "Primary 305-page NASA report on the Apollo 12 visit (155 m distance), 5 returned hardware items, 40 research teams, and engineering diagrams." },
      { id: "S3-S2", title: "Surveyor III Mission Report, Part I: Mission Description and Performance (JPL TR 32-1177, 1967)", url: "https://ntrs.nasa.gov/citations/19670028267", role: "Primary JPL engineering source for triple touchdown timing (24 s & 12 s), RADVS loss of lock, 6,326 TV frames, and 4 trenches / 8 bearing / 14 impact tests." },
      { id: "S3-S3", title: "NASA Science — Surveyor 3 Mission Page & Apollo 12 Resource Gallery", url: "https://science.nasa.gov/mission/surveyor-3/", role: "Official NASA mission summary and archival Apollo 12 surface photography (AS12-48-7134, AS12-48-7136, AS12-48-7110)." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 05 (MARS WING): SOJOURNER — MARS PATHFINDER MICRO ROVER (1997)
  // ==========================================================================
  sojourner_mpf: {
    artifact_id: "sojourner_mpf",
    destination: "mars",
    atlasLocationId: "loc_sojourner_mpf",
    artifact_name: "Sojourner — Mars Pathfinder Micro Rover",
    official_full_name: "Mars Pathfinder Microrover Flight Unit (Named After Sojourner Truth)",
    subtitle: "The First Wheeled Rover on Mars • 83 Sols in the Ares Vallis Floodplain (1997)",
    mission: "Mars Pathfinder",
    statusBadge: "VERIFIED EXHIBIT • FIRST WHEELED PLANETARY ROVER ON MARS",
    heroImage: "assets/photos/sojourner_on_mars_hero.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Sojourner on the rocky floodplain of Ares Vallis, photographed by the Imager for Mars Pathfinder (IMP) aboard the Carl Sagan Memorial Station (PIA00660).",
    heroImageCredit: "NASA / JPL (PIA00660)",
    heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA00660",

    identityCard: {
      artifact: "Sojourner Microrover (Mars Pathfinder Flight Unit)",
      destinationSite:
        "Ares Vallis outflow floodplain, Chryse Planitia (19.13° N, 33.22° W planetocentric; pre-2002 planetographic 19.33° N, 33.55° W)",
      baseStation: "Mars Pathfinder Lander (renamed Carl Sagan Memorial Station; provided UHF relay & IMP mast imaging)",
      launchDate: "4 December 1996, 06:58:07 UTC — Delta II 7925, Cape Canaveral Pad 17B",
      landingDate: "4 July 1997, 16:56:55 UTC (Sol 1 — Airbag-cushioned direct entry)",
      surfaceRolloutDate: "5 July 1997 (Sol 2) down the Rear Ramp (Forward Ramp remained unused after airbag interference)",
      finalTransmissionDate: "27 September 1997 (Sol 83 / ~85 Earth days; planned mission was 7 sols / up to 30 sols extended)",
      dimensionsAndMass:
        "65 cm long × 48 cm wide × 30 cm high • Mass: 10.5 kg (rounded to 10.6 kg / 23 lb in public summaries)",
      mobilityAndPower:
        "6 independently driven 13-cm aluminum wheels with stainless-steel cleats • Rocker-bogie suspension • 11 brushed DC motors • 0.22 m² GaAs solar panel (~16 W peak) + 3 LiSOCl₂ non-rechargeable D-cell battery packs (~150 Wh) • Solid silica aerogel thermal insulation",
      builder: "NASA Jet Propulsion Laboratory (JPL), Pasadena, California"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Sojourner was a 10.5-kg autonomous/semi-autonomous JPL microrover.",
      shortIntroduction:
        "I am Sojourner, a six-wheeled microrover no larger than a microwave oven—65 centimeters long and weighing just 10.5 kilograms on Earth. When Mars Pathfinder bounced to a stop inside a cocoon of giant airbags on 4 July 1997, no wheeled vehicle had ever rolled across Mars. Designed to test whether a low-cost rover could survive seven Martian days, I explored the flood-carved rocks of Ares Vallis for 83 sols until my lander base station fell silent.",
      fullStoryParagraphs: [
        {
          heading: "Clearing the Airbag and Rolling Down the Rear Ramp",
          text: "On Sol 1 (4 July 1997), one of Pathfinder's deflated airbags bunched up against my petal, blocking my deployment ramps. Ground controllers commanded the lander petal to lift, retract the airbag cable, and re-lower—clearing the path so that on Sol 2 (5 July 1997) my two stainless-steel coil ramps unrolled. Because the forward ramp sat steeply perched on a rock with its end suspended off the ground, I rolled down the Rear Ramp onto the Martian soil while the forward ramp went unused."
        },
        {
          heading: "Cleated Wheels, Rocker-Bogie, and Silica Aerogel",
          text: "To survive −100°C Martian nights without heavy radioisotope heaters (beyond three tiny 1-watt pellets), my electronics Warm Electronics Box was insulated with ultra-light solid silica aerogel. Six 13-centimeter aluminum wheels with stainless-steel cleats and a passive rocker-bogie suspension let me climb over rocks larger than my wheels at 1 centimeter per second, driven by 11 brushed motors (6 drive, 4 corner steering, and 1 APXS deployment motor)."
        },
        {
          heading: "Nosing Up to Barnacle Bill, Yogi, Wedge, and Shark",
          text: "Because I could not talk directly to Earth, I sent every packet across a short-range UHF link to the Pathfinder lander. Backing up or driving forward to rocks like Barnacle Bill (Sol 3), Yogi (Sols 8–10), Wedge (Sols 35–37), and Shark (Sols 50–52), I pressed my Alpha Proton X-Ray Spectrometer (APXS) sensor head against their surfaces while my five front laser stripes and stereo cameras watched for hazards."
        },
        {
          heading: "Measuring Dust Accumulation and Wheel Trenching",
          text: "On the corner of my solar deck, the Materials Adherence Experiment (MAE) used a rotatable glass cover over a reference solar cell to measure how fast Martian atmospheric dust settled out of the sky—recording an obscuration rate of about 0.28 percent per sol. Meanwhile, by locking five wheels and spinning the sixth, I dug shallow trenches to measure soil cohesion and wheel abrasion."
        },
        {
          heading: "Eighty-Three Sols and the Final Contingency Circle",
          text: "Across 83 Martian sols (about 85 Earth days—nearly 12 times my 7-sol design life), I drove roughly 100 meters in cumulative path length while staying within ~12 meters of the lander, snapping 550 rover images. On 27 September 1997, when Pathfinder's main rechargeable battery failed in the cold and cut off my UHF relay to Earth, my onboard software was programmed to wait and then circle the silent lander autonomously."
        }
      ]
    },

    // Verified Archival Photo & APXS Target Inspector (No official NASA 3D GLB exists; strict source policy)
    diagramInspector: {
      modelPolicyBadge: "NO OFFICIAL NASA 3D MODEL • INTERACTIVE DEPLOYMENT, APXS ROCK TARGET & TRAVERSE INSPECTOR",
      modelPolicyExplanation:
        "Strict Source Policy: NASA's official 3D Resources catalog does not contain a verified 3D `.glb` model of the Sojourner microrover (only the Pathfinder airbag lander configuration exists in legacy archives). Per the Sojourner Research & Interaction Addendum, this exhibit provides an interactive multi-view NASA archival inspector covering Rear-Ramp Deployment, APXS Rock Targets, and the Ares Vallis Traverse Map.",
      diagrams: [
        {
          id: "soj_view_traverse",
          title: "1. Official Ares Vallis Traverse Map — Sols 1 to 83 (~100 m Cumulative Path, PIA01238)",
          imagePath: "assets/photos/sojourner_traverse_map.jpg",
          visualType: "Orbital / Surface Map",
          sourcePage: "NASA / JPL Photojournal PIA01238",
          caption:
            "Official NASA/JPL overhead map of Sojourner's 83-sol traverse around the Carl Sagan Memorial Station showing rock stops at Barnacle Bill, Yogi, Couch, Moe, Wedge, Shark, and Mermaid Dune (~100 m cumulative drive, >12 m max separation on Sol 75).",
          credit: "NASA / JPL (PIA01238)",
          sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA01238",
          hotspots: [
            {
              id: "soj_hs_1",
              code: "01",
              x: 48,
              y: 44,
              name: "Rear Deployment Ramp & Barnacle Bill (Sols 2–3)",
              category: "Rollout & First APXS Rock Target",
              whatItIs: "Stainless-steel Rear Ramp down which Sojourner drove on Sol 2 (5 July 1997) to reach 'Barnacle Bill' just inches away.",
              howItWorked: "Sojourner backed its rear-mounted APXS sensor head against Barnacle Bill for a 10-hour overnight integration.",
              missionRole: "Revealed high silica content (~andesitic composition), showing that some Ares Vallis rocks were more chemically evolved than simple basalts.",
              sourceNote: "NASA / JPL PIA00627 & PIA01238"
            },
            {
              id: "soj_hs_2",
              code: "02",
              x: 54,
              y: 28,
              name: "Yogi Rock — Wheel-Up Climb & APXS Re-Positioning (Sols 8–10)",
              category: "Second Major Rock Target & Mobility Test",
              whatItIs: "Meter-scale boulder (~5 m northwest of the lander) investigated on Sols 8–10.",
              howItWorked: "During its first approach on Sol 8, Sojourner drove one cleated wheel partway up Yogi's steep face, triggering its onboard tilt sensor to halt motion safely; controllers backed Sojourner down and repositioned the APXS cleanly on Sol 10.",
              missionRole: "Showed Yogi was a more primitive basaltic rock coated in windblown dust, contrasting with Barnacle Bill.",
              sourceNote: "NASA / JPL PIA00766"
            },
            {
              id: "soj_hs_3",
              code: "03",
              x: 36,
              y: 66,
              name: "Wedge & Shark Rocks — Rock Garden Exploration (Sols 35–52)",
              category: "Southern Rock Garden Targets",
              whatItIs: "Fluted, wind-abraded boulders in the 'Rock Garden' south-southwest of the lander.",
              howItWorked: "Sojourner examined Wedge (imaged Sol 35, APXS Sol 37) and Shark (Sols 50–52) while testing autonomous hazard avoidance.",
              missionRole: "Supported the geological interpretation that catastrophic Ares Vallis floods deposited a diverse suite of highland and volcanic boulders.",
              sourceNote: "NASA / JPL PIA00904 & PIA00914"
            },
            {
              id: "soj_hs_4",
              code: "04",
              x: 28,
              y: 78,
              name: "Farthest Point South — >12 m Separation (Sol 75)",
              category: "Maximum Distance from Base Station",
              whatItIs: "Southernmost excursion near Chimp rock on Sol 75 (PIA00969).",
              howItWorked: "Demonstrated that UHF communication and optical navigation worked beyond 12 meters from the lander.",
              missionRole: "Distinguishes maximum radial distance from the lander (>12 m) from total cumulative odometer distance (~100 m).",
              sourceNote: "NASA / JPL PIA00969"
            }
          ]
        },
        {
          id: "soj_view_rear_ramp",
          title: "2. Sol 2 Rollout Down the Rear Ramp (PIA00627)",
          imagePath: "assets/photos/sojourner_rear_ramp_deploy.jpg",
          visualType: "Historical Photograph",
          sourcePage: "NASA / JPL Photojournal PIA00627",
          caption:
            "Three-frame sequence captured on Sol 2 (5 July 1997) showing Sojourner rolling down the Rear Ramp onto the Martian surface after the airbag retraction procedure.",
          credit: "NASA / JPL (PIA00627)",
          sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00627",
          hotspots: []
        },
        {
          id: "soj_view_unused_ramp",
          title: "3. Unused Forward Ramp Perched on Rock (PIA00628)",
          imagePath: "assets/photos/sojourner_forward_ramp_unused.jpg",
          visualType: "Historical Photograph",
          sourcePage: "NASA / JPL Photojournal PIA00628",
          caption:
            "Archival verification photo (PIA00628) showing why the Forward Ramp was never used: it deployed across a rock at a steep angle with its lower tip suspended off the Martian soil.",
          credit: "NASA / JPL (PIA00628)",
          sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00628",
          hotspots: []
        },
        {
          id: "soj_view_yogi",
          title: "4. Sojourner Deploying APXS at Yogi Rock (PIA00766)",
          imagePath: "assets/photos/sojourner_yogi_apxs.jpg",
          visualType: "Historical Photograph",
          sourcePage: "NASA / JPL Photojournal PIA00766",
          caption:
            "Sojourner pressing its rear-mounted Alpha Proton X-Ray Spectrometer (APXS) against Yogi Rock after recovering from its Sol 8 wheel-climb.",
          credit: "NASA / JPL (PIA00766)",
          sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00766",
          hotspots: []
        },
        {
          id: "soj_view_lander_from_rover",
          title: "5.Rover's-Eye View vs. Lander IMP Camera Distinction (PIA00635)",
          imagePath: "assets/photos/sojourner_view_of_lander.jpg",
          visualType: "Historical Photograph",
          sourcePage: "NASA / JPL Photojournal PIA00635",
          caption:
            "Camera Attribution Distinction: While portraits showing Sojourner from the outside were taken by the Pathfinder lander's mast-mounted Imager for Mars Pathfinder (IMP), this low-angle monochrome view looking back at the lander and ramps was captured by Sojourner's own onboard rover camera (3 rover cameras total: 2 front monochrome stereo + 1 rear color).",
          credit: "NASA / JPL (PIA00635)",
          sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00635",
          hotspots: []
        }
      ]
    },

    timeline: {
      chronologyNote:
        "Sol vs. Earth-Day Distinction: A Martian solar day (sol) is 24 hours 39 minutes 35 seconds (~1.0275 Earth days). Sojourner operated for 83 Martian sols from landing on 4 July 1997 to final transmission on 27 September 1997 (approx. 85 Earth calendar days; some general summaries loosely write '83 days').",
      events: [
        {
          stepNumber: "01",
          date: "4–5 July 1997 • Sols 1–2",
          shortTitle: "Airbag Retraction & Rear-Ramp Rollout",
          missionPhase: "Landing & Surface Deployment",
          statusText: "DEPLOYED DOWN REAR RAMP • FORWARD RAMP UNUSED",
          whatHappened:
            "After landing in airbags on 4 July 1997, Pathfinder retracted a bunched airbag blocking the rover petal. On Sol 2 (5 July 1997), both coil ramps unrolled, and Sojourner drove down the Rear Ramp onto the Martian regolith.",
          whatArtifactEnabled:
            "Became the first wheeled vehicle to rove on Mars, immediately placing its APXS sensor on Soil and Barnacle Bill.",
          scientificConnection:
            "First in-situ chemical analysis of a Martian rock by a mobile rover.",
          imagePath: "assets/photos/sojourner_rear_ramp_deploy.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Sojourner rolls down the Rear Ramp onto Mars on Sol 2 (5 July 1997, PIA00627).",
          imageCredit: "NASA / JPL (PIA00627)"
        },
        {
          stepNumber: "02",
          date: "11–13 July 1997 • Sols 8–10",
          shortTitle: "Climbing Yogi & Autonomous Tilt Recovery",
          missionPhase: "Rock Target Investigation",
          statusText: "TILT SENSOR HALTED CLIMB • REPOSITIONED ON SOL 10",
          whatHappened:
            "Approaching the boulder Yogi on Sol 8, Sojourner's left rear wheel climbed the rock face until onboard tilt sensors stopped the drive to prevent overturning. Controllers backed the rover off and successfully placed the APXS against Yogi on Sol 10.",
          whatArtifactEnabled:
            "Validated the rocker-bogie suspension and autonomous hazard-protection logic on rough flood deposits.",
          scientificConnection:
            "Contrasted Yogi's basaltic chemistry with Barnacle Bill's higher-silica composition.",
          imagePath: "assets/photos/sojourner_yogi_apxs.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Sojourner analyzing Yogi Rock with its rear APXS turret (PIA00766).",
          imageCredit: "NASA / JPL (PIA00766)"
        },
        {
          stepNumber: "03",
          date: "August – September 1997 • Sols 35–75",
          shortTitle: "Rock Garden (Wedge & Shark) & Farthest Point (>12 m)",
          missionPhase: "Extended Traverse Campaign",
          statusText: "~100 M CUMULATIVE PATH • 0.28%/SOL DUST RATE",
          whatHappened:
            "Far outlasting its 7-sol primary mission, Sojourner explored Mermaid Dune and the southern Rock Garden, analyzing Wedge (Sol 35/37) and Shark (Sol 50/52) and reaching its maximum distance of >12 meters from the lander on Sol 75.",
          whatArtifactEnabled:
            "The Materials Adherence Experiment (MAE) measured dust settling at ~0.28% power loss per sol, while wheel-spin tests measured soil friction.",
          scientificConnection:
            "Collected 16 APXS chemical spectra (rocks and soils) and 550 rover camera images.",
          imagePath: "assets/photos/sojourner_farthest_journey.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Sojourner near Chimp rock at its farthest distance (>12 m) from the Pathfinder lander on Sol 75 (PIA00969).",
          imageCredit: "NASA / JPL (PIA00969)"
        },
        {
          stepNumber: "04",
          date: "27 September 1997 • Sol 83",
          shortTitle: "Loss of Base-Station Relay & Contingency Circle",
          missionPhase: "End of Communications",
          statusText: "LAST SIGNAL 27 SEP 1997 • BASE STATION BATTERY FAILED",
          whatHappened:
            "On 27 September 1997 (Sol 83), the Pathfinder lander's silver-zinc battery failed after repeated deep thermal cycles, shutting down the high-gain transmitter that relayed Sojourner's UHF data to Earth.",
          whatArtifactEnabled:
            "Sojourner itself had no known fatal fault; its onboard loss-of-command contingency program instructed it to drive back toward the lander and circle it at a safe radius.",
          scientificConnection:
            "Directly paved the engineering path for the larger Spirit, Opportunity, Curiosity, and Perseverance rovers.",
          imagePath: "assets/photos/sojourner_wedge_shark.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Sojourner in the Rock Garden near Wedge and Shark rocks late in its 83-sol mission (PIA00914).",
          imageCredit: "NASA / JPL (PIA00914)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "How Did a 10.5-Kilogram Microrover Unlock Mobile Mars Geology?",
      summary:
        "Sojourner proved that six cleated wheels on a passive rocker-bogie suspension, insulated by solid silica aerogel and guided by laser-stripe hazard detection, could carry an Alpha Proton X-Ray Spectrometer directly to multiple rocks across an ancient Martian flood channel.",
      metrics: [
        { value: "83 Sols", label: "Surface Lifespan", note: "Nearly 12× its 7-sol design life (4 Jul – 27 Sep 1997; ~85 Earth days)" },
        { value: "~100 m", label: "Cumulative Traverse", note: "Total odometer path while staying within >12 m max radial distance (Sol 75)" },
        { value: "550 + 16", label: "Rover Data Return", note: "550 rover camera images + 16 APXS chemical analyses of rocks & soil" },
        { value: "0.28%/sol", label: "Dust Obscuration Rate", note: "Measured on the solar array by the Materials Adherence Experiment (MAE)" }
      ],
      challenges: [
        {
          badge: "DEPLOYMENT OBSTRUCTION",
          title: "Sol 1 Airbag Bunching & Suspended Forward Ramp",
          summary: "Deflated landing airbags initially blocked the rover petal, and the Forward Ramp deployed onto a rock.",
          details: [
            "Controllers lifted the petal to winch the airbag further back on Sol 1.",
            "Because the Forward Ramp tip hung above the ground on a rock (PIA00628), controllers routed Sojourner safely down the Rear Ramp on Sol 2 (PIA00627)."
          ]
        },
        {
          badge: "RELAY DEPENDENCY",
          title: "UHF Modem Dropouts & Loss of the Pathfinder Base Station",
          summary: "Sojourner had no direct-to-Earth radio and depended entirely on the Pathfinder lander's UHF link.",
          details: [
            "Temperature drift occasionally interrupted UHF handshakes between rover and lander, resolved by software resets.",
            "When Pathfinder's main battery failed on Sol 83 (27 Sep 1997), Earth lost contact with a still-healthy Sojourner."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Mass (10.5 kg vs 10.6 kg / 23 lb) & Duration (83 Sols vs 83 Days)",
          resolution:
            "Technical specifications list 10.5 kg mass (rounded to 10.6 kg / 23 lb in general public fact sheets) and 83 Martian sols of surface operation (~85 Earth calendar days)."
        },
        {
          topic: "Rover Cameras (3 Onboard) vs. Lander IMP Camera Portraits",
          resolution:
            "All external photos showing Sojourner on Mars were captured by the Pathfinder lander's mast-mounted Imager for Mars Pathfinder (IMP); Sojourner's own 3 cameras (2 front monochrome stereo + 1 rear color) looked outward from the rover body."
        }
      ]
    },

    sources: [
      { id: "SOJ-S1", title: "Mars Pathfinder / Sojourner Mission Archive (NASA Science)", url: "https://science.nasa.gov/mission/mars-pathfinder/", role: "Primary NASA mission overview, 83-sol operational record, ~100 m traverse, and 550 rover images." },
      { id: "SOJ-S2", title: "Characterization of the Martian Surface Deposits by the Mars Pathfinder Rover, Sojourner (Science, 1997)", url: "https://ntrs.nasa.gov/citations/19980001908", role: "Primary scientific report on APXS rock analyses (Barnacle Bill, Yogi, Wedge, Shark), wheel trenching, and MAE 0.28%/sol dust rate." },
      { id: "SOJ-S3", title: "NASA/JPL Photojournal — Mars Pathfinder Microrover Catalog (PIA00627, PIA00628, PIA00660, PIA01238)", url: "https://photojournal.jpl.nasa.gov/mission/Mars+Pathfinder", role: "Verified archival imagery of Rear-Ramp rollout, unused Forward Ramp, Yogi APXS deployment, and Sol 1–83 traverse map." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 06 (MARS WING): SPIRIT & OPPORTUNITY — MARS EXPLORATION ROVERS
  // ==========================================================================
  mer_spirit_opportunity: {
    artifact_id: "mer_spirit_opportunity",
    destination: "mars",
    atlasLocationId: "loc_mer_opportunity",
    artifact_name: "Spirit & Opportunity — Mars Exploration Rovers",
    official_full_name: "Mars Exploration Rover – A (Spirit, MER-A) & Mars Exploration Rover – B (Opportunity, MER-B)",
    subtitle: "Two Robotic Geologists • Two Opposite Hemispheres • Two Extraordinary Journeys",
    mission: "Mars Exploration Rovers (MER-A & MER-B)",
    statusBadge: "VERIFIED TWIN EXHIBIT • 90-SOL DESIGN → 6 YEARS (SPIRIT) & 14+ YEARS (OPPORTUNITY)",
    heroImage: "assets/photos/mer_opportunity_eagle_crater.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Opportunity's view inside Eagle Crater on Meridiani Planum showing the empty airbag lander (Challenger Memorial Station) and the layered bedrock outcrop where the rover discovered hematite 'blueberries' (PIA05274).",
    heroImageCredit: "NASA / JPL / Cornell (PIA05274)",
    heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA05274",

    identityCard: {
      artifact: "Twin Mars Exploration Rovers: Spirit (MER-A) & Opportunity (MER-B)",
      destinationSite:
        "Spirit (MER-A): Gusev Crater / Columbia Hills (14.5684° S, 175.4726° E → Final stop Troy 14.5993° S, 175.5284° E) • Opportunity (MER-B): Meridiani Planum (1.9462° S, 354.4734° E → Perseverance Valley 2.2862° S, 354.2302° E)",
      launchDates:
        "Spirit: 10 June 2003, 17:58:47 UTC • Opportunity: 8 July 2003, 03:18:15 UTC (7 July 2003, 11:18 PM EDT local)",
      landingDates:
        "Spirit: 4 January 2004, 04:35 UTC (3 Jan PST) • Opportunity: 25 January 2004, 05:05 UTC (24 Jan PST)",
      finalCommunicationDates:
        "Spirit: 22 March 2010 (Sol 2210; 7.73 km driven) • Opportunity: 10 June 2018 (Sol 5111; 45.16 km driven; mission declared complete 13 Feb 2019)",
      dimensionsAndMass:
        "1.5 m high × 2.3 m wide × 1.6 m long • Mass: ~185 kg (408 lb) standard NASA specification (~170 kg in some early/sub-assembly tables)",
      instrumentPayload:
        "Mast: Pancam & Mini-TES (plus 2 Navcams) • Robotic Arm (IDD): Microscopic Imager (MI), Mössbauer Spectrometer (MB), Alpha Particle X-Ray Spectrometer (APXS), Rock Abrasion Tool (RAT) • Body: 4 Hazcams & Magnet Arrays",
      builder: "NASA Jet Propulsion Laboratory (JPL), Pasadena, California"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Spirit (MER-A) and Opportunity (MER-B) were identical twin robotic field geologists built and operated by NASA/JPL.",
      shortIntroduction:
        "We are Spirit and Opportunity—twin six-wheeled robotic field geologists sent to opposite sides of Mars in January 2004 with a single directive: 'Follow the Water.' Built for 90 Martian sols and roughly 600 meters of driving, we carried panoramic eyes on a 1.5-meter mast and a turret of four geological instruments on a human-like robotic arm. Together we rewrote the history of ancient liquid water on Mars across 7.73 kilometers at Gusev Crater and a record 45.16 kilometers across Meridiani Planum.",
      fullStoryParagraphs: [
        {
          heading: "Spirit (MER-A): From Volcanic Plains to the Summit of Husband Hill",
          text: "Landing in Gusev Crater on 4 January 2004 UTC, Spirit initially found basaltic lava rocks rather than lakebed sediments on the crater floor. After surviving a Sol 18 flash-memory reboot anomaly, Spirit trekked 2.6 kilometers across the plains to the Columbia Hills—where unexpected wind events swept dust off its solar panels—and climbed 82 meters above the plains to the summit of Husband Hill on Sol 581."
        },
        {
          heading: "Hydrothermal Silica at Home Plate and Final Rest at Troy",
          text: "Even after Spirit's right-front wheel drive motor failed on Sol 779 (March 2006), forcing the rover to drive backward dragging the dead wheel through the soil, that very furrow exposed a bright white patch of ~90 percent pure opaline silica at Gertrude Weise near Home Plate (May 2007)—textbook evidence of ancient hot springs or volcanic steam vents, alongside carbonate-rich outcrops at Comanche. In May 2009 (Sol 1892), Spirit broke through a crust into hidden loose sulfate sand at a site called 'Troy' and sent its final transmission on 22 March 2010 (Sol 2210)."
        },
        {
          heading: "Opportunity (MER-B): A Hole-in-One at Eagle Crater",
          text: "Three weeks after Spirit, on 25 January 2004 UTC, Opportunity bounced into tiny 22-meter Eagle Crater on Meridiani Planum—a planetary 'hole-in-one' directly in front of exposed layered bedrock. Within weeks, Opportunity's Microscopic Imager, Mössbauer Spectrometer, and APXS revealed millimeter-sized gray hematite spherules ('blueberries'), jarosite sulfates, and centimeter-scale festoon cross-bedding formed in shallow, acidic, flowing liquid water."
        },
        {
          heading: "Forty-Five Kilometers from Endurance and Victoria to Endeavour Crater",
          text: "Over the next 14 years, Opportunity drove farther than any off-Earth vehicle in history: descending into 130-meter Endurance Crater (2004), escaping Purgatory Dune (2005), exploring scalloped 800-meter Victoria Crater (2006–2008), and completing a three-year trek to the 22-kilometer rim of ancient Endeavour Crater (2011)—where it discovered bright calcium-sulfate (gypsum) veins ('Homestake') and neutral-pH clay minerals (smectites) far more hospitable to ancient life."
        },
        {
          heading: "The Global Dust Storm of June 2018 (Sol 5111)",
          text: "While descending Perseverance Valley on Endeavour Crater's western rim in June 2018, Opportunity was engulfed by a planet-encircling dust storm that raised atmospheric opacity (tau) above 10.8, blocking nearly all sunlight from its solar arrays. Opportunity transmitted its final message on 10 June 2018 (Sol 5111) after driving 45.16 kilometers (28.06 miles)."
        }
      ]
    },

    viewer3d: {
      available: true,
      glbPath: "assets/models/MER_Twin_Rover_24883_MER_static.glb",
      altGlbPath: "assets/models/Mars Exploration Rover - Opportunity (MER-B).glb",
      modelTitle: "Mars Exploration Rover (Spirit MER-A & Opportunity MER-B) Shared 3D Model",
      provenanceBadge: "OFFICIAL NASA / JPL-CALTECH 3D MODEL • SHARED TWIN MER HARDWARE ARCHITECTURE",
      provenanceNote:
        "Twin Rover Model Note: Spirit (MER-A) and Opportunity (MER-B) were built to an identical mechanical and instrument blueprint. This official high-resolution NASA/JPL-Caltech 3D model (24883_MER_static.glb) represents both rovers; use the Rover Identity Switcher below to compare Spirit's and Opportunity's distinct missions, anomalies, and discoveries.",
      sourceUrl: "https://science.nasa.gov/resource/spirit-and-opportunity-rover-3d-model/",
      stageModes: [
        { id: "full", label: "Shared Twin MER Architecture (Both Rovers)" },
        { id: "spirit", label: "Spirit (MER-A • Gusev & Columbia Hills)" },
        { id: "opportunity", label: "Opportunity (MER-B • Meridiani Planum)" }
      ],
      hotspots: [
        {
          id: "mer_hs_1",
          code: "01",
          stage: "full",
          position: [0.42, 1.38, 0.35],
          name: "Pancam Mast Assembly (Pancam, Navcams & Mini-TES)",
          category: "Remote Sensing Mast (~1.5 m Height)",
          whatItIs: "Deployable vertical mast carrying two high-resolution color Panoramic Cameras (Pancam), two wide-angle monochrome Navigation Cameras (Navcam), and the periscope mirror for the Miniature Thermal Emission Spectrometer (Mini-TES).",
          howItWorked: "Pancam imaged the terrain across 11 spectral filters at human eye height; Mini-TES identified rock-forming minerals (carbonates, silicates, oxides) from their thermal infrared spectra before the rover even drove up to them.",
          missionRole: "Spirit used Mini-TES to spot the Comanche carbonate outcrops in the Columbia Hills; Opportunity used Pancam to survey layered stratigraphy inside Endurance, Victoria, and Endeavour Craters.",
          sourceNote: "NASA Mars Exploration Rover Press Kit & Science Reports"
        },
        {
          id: "mer_hs_2",
          code: "02",
          stage: "full",
          position: [0.68, 0.42, 0.55],
          name: "Instrument Deployment Device (IDD / 5-DOF Robotic Arm & 4-Tool Turret)",
          category: "Contact Science Arm & Turret",
          whatItIs: "Five-degree-of-freedom titanium robotic arm ending in a rotating cross-shaped turret carrying four instruments: Microscopic Imager (MI), Mössbauer Spectrometer (MB), Alpha Particle X-Ray Spectrometer (APXS), and Rock Abrasion Tool (RAT).",
          howItWorked: "Positioned instruments with millimeter precision against rock and soil targets; the RAT used diamond-impregnated grinding wheels to brush away dust or grind 4.5-cm-diameter holes up to 5 mm deep into weathered rock.",
          missionRole: "Examined hematite 'blueberries' at Eagle Crater, ground into Gusev basalts, and analyzed Spirit's opaline silica soil. On Opportunity, a right-front shoulder azimuth motor stall in 2005 required driving with the arm deployed forward in the 'fishing' posture.",
          sourceNote: "NASA/JPL MER Instrument Payload Documentation"
        },
        {
          id: "mer_hs_3",
          code: "03",
          stage: "full",
          position: [0.0, 0.72, 0.0],
          name: "Triple-Junction Solar Array Wings ('Gull Wings')",
          category: "Electrical Power Generation",
          whatItIs: "Fold-out gallium-indium-phosphide / gallium-arsenide / germanium solar panels spanning 2.3 meters across the rover deck.",
          howItWorked: "Generated ~900 Wh per sol at the start of the mission, charging two lithium-ion rechargeable batteries inside the Warm Electronics Box.",
          missionRole: "Expected to fail after ~90 sols from dust accumulation, both rovers were repeatedly saved by Martian dust devils and wind gusts ('cleaning events') that swept the panels clean—until the 2010 winter silenced trapped Spirit and the 2018 global dust storm silenced Opportunity.",
          sourceNote: "NASA MER Mission Reports"
        },
        {
          id: "mer_hs_4",
          code: "04",
          stage: "full",
          position: [-0.25, 0.85, -0.15],
          name: "High-Gain Antenna (HGA) & UHF Orbiter Relay Monopole",
          category: "Direct-to-Earth & Orbital Telecommunications",
          whatItIs: "Steerable X-band flat dish (HGA), vertical X-band Low-Gain Antenna (LGA), and UHF monopole antenna mounted on the rover deck.",
          howItWorked: "HGA linked directly with NASA's Deep Space Network on Earth, while the UHF antenna relayed high-volume science data through Mars Odyssey and Mars Reconnaissance Orbiter passing overhead.",
          missionRole: "Returned more than 342,000 raw images between the two rovers across 14+ years.",
          sourceNote: "NASA/JPL MER Telecommunications Subsystem"
        },
        {
          id: "mer_hs_5",
          code: "05",
          stage: "full",
          position: [0.0, 0.52, 0.0],
          name: "Warm Electronics Box (WEB), RAD6000 Computer & RHU Heaters",
          category: "Avionics & Thermal Control",
          whatItIs: "Gold-coated, aerogel-insulated composite body housing the 20-MHz BAE RAD6000 flight computer (128 MB RAM, 256 MB flash memory), batteries, IMU, and eight 1-watt Radioisotope Heater Units (RHUs).",
          howItWorked: "Protected electronics from −105°C nighttime cold. Note: The eight 1-watt RHUs provided passive warmth only—all electrical power came from the solar panels.",
          missionRole: "Survived Spirit's Sol 18 flash-memory file-table overflow anomaly and operated Opportunity's avionics after flash memory wear forced 'amnesia mode' RAM-only operations later in the mission.",
          sourceNote: "NASA MER Systems Engineering"
        },
        {
          id: "mer_hs_6",
          code: "06",
          stage: "full",
          position: [0.55, 0.15, 0.65],
          name: "Rocker-Bogie Suspension & Six 25-cm Cleated Aluminum Wheels",
          category: "Mobility Subsystem (6 Drive + 4 Corner Steering Motors)",
          whatItIs: "Articulated titanium/aluminum rocker-bogie linkage with six 25-cm-diameter spiral-flexure aluminum wheels fitted with machined cleats.",
          howItWorked: "Maintained equal weight distribution across all six wheels while climbing obstacles up to one wheel diameter (25 cm); front and rear wheels steered independently for spin-in-place turns.",
          missionRole: "On Spirit, when the right-front wheel actuator failed on Sol 779, driving backward and dragging the locked wheel gouged the trench at Gertrude Weise that uncovered ~90% opaline silica! On Opportunity, the wheels rolled a record 45.16 km.",
          sourceNote: "NASA/JPL MER Mobility & PDS Traverse Reports"
        }
      ]
    },

    diagrams: [
      {
        id: "mer_diag_opp_last",
        title: "Opportunity's Final 360° Panorama at Perseverance Valley (PIA22929)",
        imagePath: "assets/photos/mer_opportunity_last_message.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech / Cornell / ASU (PIA22929)",
        caption:
          "Opportunity's final 354-image 360° Pancam panorama from Perseverance Valley on the rim of Endeavour Crater (Sols 5084–5108, May–June 2018), with the dark left-hand frames showing the last monochrome filter exposures before the global dust storm cut off power.",
        credit: "NASA / JPL-Caltech / Cornell / ASU (PIA22929)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA22929"
      },
      {
        id: "mer_diag_blueberries",
        title: "Hematite 'Blueberries' in Eagle Crater Outcrop (PIA05584)",
        imagePath: "assets/photos/mer_opportunity_blueberries.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL / Cornell / USGS (PIA05584)",
        caption:
          "Millimeter-scale spherical hematite concretions ('blueberries') weathering out of sulfate-rich sedimentary rock in Eagle Crater—direct evidence of ancient groundwater percolating through Martian bedrock.",
        credit: "NASA / JPL / Cornell / USGS (PIA05584)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA05584"
      },
      {
        id: "mer_diag_silica",
        title: "Spirit's Hydrothermal Silica Soil Discovery near Home Plate (PIA09491)",
        imagePath: "assets/photos/mer_spirit_silica_soil.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech / Cornell (PIA09491)",
        caption:
          "Bright silica-rich (~90% opaline silica) soil churned up by Spirit's dragged right-front wheel near Home Plate in the Columbia Hills—diagnostic of ancient hot-spring or fumarole water activity.",
        credit: "NASA / JPL-Caltech / Cornell (PIA09491)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA09491"
      }
    ],

    timeline: {
      chronologyNote:
        "Twin Chronology & Timezone Note: Both UTC timestamps and US Pacific (PST) dates are preserved (Spirit landed 4 Jan 2004 UTC / 3 Jan PST; Opportunity landed 25 Jan 2004 UTC / 24 Jan PST). Use the Planetary Atlas to inspect all 487 Spirit PDS waypoints and 674 Opportunity PDS waypoints.",
      events: [
        {
          stepNumber: "01",
          date: "4 Jan & 25 Jan 2004 UTC",
          shortTitle: "Twin Airbag Landings at Gusev Crater & Eagle Crater",
          missionPhase: "Entry, Descent & Landing",
          statusText: "SPIRIT AT GUSEV (4 JAN) • OPPORTUNITY AT EAGLE CRATER (25 JAN)",
          whatHappened:
            "On 4 January 2004 (04:35 UTC), Spirit bounced to rest on the basaltic floor of Gusev Crater. Twenty-one days later, on 25 January 2004 (05:05 UTC), Opportunity rolled directly into 22-meter Eagle Crater on Meridiani Planum in front of exposed layered sedimentary bedrock.",
          whatArtifactEnabled:
            "On Sol 18, Spirit suffered a flash-memory file-system reboot loop; JPL engineers diagnosed the anomaly, reformatted the flash memory, and restored Spirit to full health by Sol 33.",
          scientificConnection:
            "Within weeks at Eagle Crater, Opportunity discovered gray hematite spherules ('blueberries'), jarosite sulfates, and water-lain cross-bedding.",
          imagePath: "assets/photos/mer_opportunity_eagle_crater.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Opportunity looks back at its empty lander inside Eagle Crater on Meridiani Planum (PIA05274).",
          imageCredit: "NASA / JPL / Cornell (PIA05274)"
        },
        {
          stepNumber: "02",
          date: "2004 – 2007 • Spirit Sols 150–1200",
          shortTitle: "Spirit Climbs Husband Hill & Uncovers ~90% Opaline Silica",
          missionPhase: "Columbia Hills & Home Plate Campaign",
          statusText: "HUSBAND HILL SUMMIT (SOL 581) • SILICA DISCOVERY (MAY 2007)",
          whatHappened:
            "Helped by dust-devil panel cleanings, Spirit reached the summit of Husband Hill on Sol 581 (Aug 2005) and descended to the layered volcanic plateau of Home Plate. After its right-front wheel failed in March 2006 (Sol 779), Spirit drove backward, dragging the locked wheel—which trenched into the soil at Gertrude Weise (Sol 1187, May 2007) and exposed bright ~90% opaline silica.",
          whatArtifactEnabled:
            "Turned a mechanical wheel failure into one of the mission's greatest geological discoveries, alongside the magnesium-iron carbonate outcrops at Comanche.",
          scientificConnection:
            "Proved that ancient Gusev Crater hosted both neutral-water carbonate environments and hydrothermal hot springs or steam vents.",
          imagePath: "assets/photos/mer_spirit_husband_hill.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Spirit's panoramic view from the summit region of Husband Hill in the Columbia Hills (PIA03610).",
          imageCredit: "NASA / JPL / Cornell (PIA03610)"
        },
        {
          stepNumber: "03",
          date: "May 2009 – 22 March 2010 • Spirit Sols 1892–2210",
          shortTitle: "Spirit Entrapped at 'Troy' & Final Transmission (7.73 km)",
          missionPhase: "Spirit Stationary Science & Winter Loss",
          statusText: "LAST SPIRIT CONTACT: 22 MARCH 2010 (SOL 2210 • 7,730.50 M)",
          whatHappened:
            "On Sol 1892 (May 2009), while driving west of Home Plate, Spirit's wheels broke through a thin surface crust into hidden loose ferric-sulfate sand at a site called 'Troy.' Months of extraction tests on Earth and Mars could not free the rover before the fourth southern Martian winter arrived. Unable to tilt its dusty panels northward toward the low winter Sun, Spirit sent its last signal on 22 March 2010 (Sol 2210).",
          whatArtifactEnabled:
            "Even while stationary at Troy, Spirit studied the layered sulfate stratigraphy chewed up by its spinning wheels.",
          scientificConnection:
            "Completed 7,730.50 meters (4.80 miles) of driving—more than 12 times its 600-m design goal.",
          imagePath: "assets/photos/mer_spirit_traverse_map.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Spirit's view of the Home Plate plateau in the Columbia Hills (PIA02055).",
          imageCredit: "NASA / JPL-Caltech / Cornell (PIA02055)"
        },
        {
          stepNumber: "04",
          date: "2004 – 10 June 2018 • Opportunity Sols 100–5111",
          shortTitle: "Endurance, Victoria, Endeavour Crater & Final Storm (45.16 km)",
          missionPhase: "Opportunity Marathon & Endeavour Rim Campaign",
          statusText: "LAST OPPORTUNITY CONTACT: 10 JUNE 2018 (SOL 5111 • 45,161.02 M)",
          whatHappened:
            "Opportunity explored Endurance Crater (2004), escaped Purgatory Dune (2005), investigated Victoria Crater (2006–2008), and reached the rim of 22-km Endeavour Crater in August 2011 (Sol 2681), discovering gypsum veins ('Homestake') and ancient smectite clays at Cape York and Marathon Valley. In June 2018, a historic global dust storm darkened the sky above Perseverance Valley; Opportunity sent its final communication on 10 June 2018 (Sol 5111).",
          whatArtifactEnabled:
            "Set the all-time off-Earth driving distance record of 45,161.02 meters (28.06 miles).",
          scientificConnection:
            "Documented the transition on ancient Mars from neutral, clay-forming Noachian waters to acidic, sulfate-forming Hesperian groundwaters.",
          imagePath: "assets/photos/mer_opportunity_last_message.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Opportunity's final panorama at Perseverance Valley before the June 2018 dust storm (PIA22929).",
          imageCredit: "NASA / JPL-Caltech / Cornell / ASU (PIA22929)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "Two Rovers, Two Hemispheres, One Decisive Answer About Ancient Martian Water",
      summary:
        "By placing a field geologist's toolkit—Pancam, Mini-TES, Microscopic Imager, Mössbauer, APXS, and the Rock Abrasion Tool—on two long-range mobile platforms, Spirit and Opportunity proved that ancient Mars possessed both hydrothermal springs/carbonates (Gusev) and widespread groundwater/surface water (Meridiani).",
      metrics: [
        { value: "45.16 km", label: "Opportunity Odometer", note: "45,161.02 m (28.06 mi) across 5,111 sols (25 Jan 2004 – 10 Jun 2018)" },
        { value: "7.73 km", label: "Spirit Odometer", note: "7,730.50 m (4.80 mi) across 2,210 sols (4 Jan 2004 – 22 Mar 2010)" },
        { value: "90 Sols", label: "Original Design Life", note: "Both rovers exceeded their 90-sol baseline by 24× (Spirit) and 56× (Opportunity)" },
        { value: "~90% SiO₂", label: "Gertrude Weise Silica", note: "Hydrothermal opaline silica soil uncovered by Spirit's dragged right-front wheel" }
      ],
      challenges: [
        {
          badge: "SPIRIT ANOMALIES",
          title: "Sol 18 Flash Reboot, Right-Front Wheel Failure & Troy Sand Trap",
          summary: "Spirit overcame software, actuator, and terrain hazards for over six years.",
          details: [
            "Sol 18 (Jan 2004): Flash-memory file-system table overflow caused continuous reboots until engineers deleted files in crib-mode and reformatted flash memory.",
            "Sol 779 (Mar 2006): Right-front wheel drive actuator failed permanently; Spirit drove backward for the rest of its mission, dragging the wheel (which serendipitously trenched into the bright silica soil at Home Plate).",
            "Sol 1892 (May 2009): Broke through a thin duricrust into loose sulfate sand at Troy; loss of right-rear wheel as well prevented extraction before winter."
          ]
        },
        {
          badge: "OPPORTUNITY ANOMALIES",
          title: "Purgatory Dune, Arm Shoulder Stall, Flash Amnesia & 2018 Global Dust Storm",
          summary: "Opportunity adapted its driving and memory operations across nearly 15 Earth years.",
          details: [
            "Sols 446–484 (Apr–Jun 2005): All six wheels embedded in a 30-cm wind ripple named Purgatory Dune; careful centimeter-by-centimeter backward driving freed the rover.",
            "Right-front steering actuator stall, robotic arm shoulder azimuth motor stall, and Mini-TES mirror heater/dust shroud wear were all worked around operationally.",
            "Aging flash memory banks caused resets beginning in 2014; engineers reformatted flash and operated Opportunity in volatile RAM ('amnesia mode') until the June 2018 global dust storm (tau > 10.8) ended the mission."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Rover Mass (185 kg / 408 lb vs ~170 kg) & UTC vs Local Dates",
          resolution:
            "Standard NASA mission documentation lists each rover's mass at ~185 kg (408 lb), while some component summaries cite ~170 kg. Launch and landing dates are shown in both UTC and US local time zones."
        },
        {
          topic: "PDS Bundle-Adjusted Traverse Coordinates (Raw vs Corrected)",
          resolution:
            "In the Planetary Atlas, both Spirit's 487-waypoint traverse and Opportunity's 674-waypoint traverse are loaded directly from the official PDS Geosciences Node archives using the bundle-adjusted corrected coordinates (with raw dead-reckoning offsets preserved in the dataset)."
        }
      ]
    },

    sources: [
      { id: "MER-S1", title: "NASA Science — Mars Exploration Rovers (Spirit & Opportunity) Mission Archive", url: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/", role: "Official NASA record of Spirit (Sols 1–2210, 7.73 km) and Opportunity (Sols 1–5111, 45.16 km)." },
      { id: "MER-S2", title: "PDS Geosciences Node — MER Analyst's Notebook Traverse Archives (MERA & MERB)", url: "https://an.rsl.wustl.edu/mera/AN/pages/mer/mer_traverse.htm", role: "Primary coordinate source for the 487 Spirit waypoints and 674 Opportunity waypoints plotted on the Mars Atlas." },
      { id: "MER-S3", title: "NASA 3D Resources — Spirit and Opportunity Rover 3D Model (NASA/JPL-Caltech)", url: "https://science.nasa.gov/resource/spirit-and-opportunity-rover-3d-model/", role: "Official high-resolution NASA/JPL-Caltech 3D GLB model rendered in the 360° viewer." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 07 (MARS WING): VIKING 1 & VIKING 2 LANDERS (1976–1982)
  // ==========================================================================
  viking_1_2: {
    artifact_id: "viking_1_2",
    destination: "mars",
    atlasLocationId: "loc_viking1",
    artifact_name: "Viking 1 & Viking 2 Landers",
    official_full_name: "Viking 1 Lander (Thomas A. Mutch Memorial Station) & Viking 2 Lander (Gerald Soffen Memorial Station)",
    subtitle: "The First Long Stay on Mars • Two Nuclear-Powered Landers • Two Distant Plains (1976–1982)",
    mission: "Viking 1 & Viking 2",
    statusBadge: "VERIFIED TWIN EXHIBIT • FIRST SUCCESSFUL LONG-DURATION MARS LANDERS",
    heroImage: "assets/photos/viking1_chryse_panorama.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Viking 1 Lander looking across the boulder-strewn rust-red plains of Chryse Planitia with its Meteorology Boom deployed in the foreground (PIA00393).",
    heroImageCredit: "NASA / JPL (PIA00393)",
    heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA00393",

    identityCard: {
      artifact: "Twin Viking Landers: Viking 1 Lander & Viking 2 Lander",
      destinationSite:
        "Viking 1: Western Chryse Planitia (22.27° N, 47.95° W / 312.05° E) • Viking 2: Utopia Planitia (47.64° N, 225.71° W / 134.29° E, ~6,460 km away)",
      launchDates: "Viking 1: 20 August 1975 • Viking 2: 9 September 1975 — Titan IIIE-Centaur, Cape Canaveral",
      landingDates:
        "Viking 1: 20 July 1976, 11:53:06 UTC (First surface image transmitted 25 seconds after touchdown) • Viking 2: 3 September 1976, 22:37:50 UTC",
      finalContactDates:
        "Viking 2 Lander: 11 April 1980 (battery failure) • Viking 1 Lander: 11/13 November 1982 (after an erroneous ground command overwrote antenna pointing software)",
      powerAndStructure:
        "Hexagonal aluminum/titanium body on 3 shock-absorbing landing legs • Powered by 2 SNAP-19 Plutonium-238 Radioisotope Thermoelectric Generators (~70 W total continuous power; NO solar panels on the landers; solar wings belonged only to the Viking Orbiters) + 4 nickel-cadmium batteries",
      dimensionsAndMass:
        "Landed dry mass: ~572 kg (1,261 lb; ~600 kg wet at touchdown) • Width across footpads: 3.0 m (9.8 ft) • Height to top of S-band dish: 2.1 m (7 ft)",
      builder: "Martin Marietta Aerospace, Denver, Colorado (Lander Prime Contractor for NASA Langley Research Center; JPL built the Viking Orbiters)"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Viking 1 and Viking 2 were twin automated landers managed by NASA Langley and JPL.",
      shortIntroduction:
        "We are the Viking 1 and Viking 2 Landers—the first spacecraft to touch down safely on Mars and survive to conduct years of scientific exploration. On 20 July 1976, exactly seven years after Apollo 11 landed on the Moon, Viking 1 settled onto Chryse Planitia and began scanning the first crisp image of its own footpad 25 seconds later. Six weeks later, Viking 2 landed 6,460 kilometers away on the northern plains of Utopia Planitia.",
      fullStoryParagraphs: [
        {
          heading: "Orbiter Recon, Parachute, and 18-Nozzle Hydrazine Engines",
          text: "Each of us traveled to Mars attached to a solar-powered Viking Orbiter (which mapped 97 percent of the planet Across 52,663 orbital images). When orbital photos showed Viking 1's original landing target was rougher than expected, controllers spent three weeks certifying a safer site in western Chryse Planitia. Protected by a heat-shield aeroshell and slowed by a 16-meter parachute, we fired three throttleable hydrazine terminal descent engines—each fitted with 18 small nozzles to avoid excavating deep craters or contaminating the soil—to land softly on three honeycomb-cushioned legs."
        },
        {
          heading: "Powered by Two SNAP-19 Nuclear Generators—Not Solar Panels",
          text: "Unlike the Viking Orbiters cruising overhead on four solar wings, we landers carried no solar panels at all. Beneath two tall octagonal windscreens on top of our hexagonal decks sat two SNAP-19 plutonium-238 radioisotope thermoelectric generators, supplying ~70 watts of continuous electricity day and night while waste nuclear heat kept our delicate biology laboratories warm through −85°C Martian nights."
        },
        {
          heading: "Freezing the Locking Pin and Digging the First Trench (28 July 1976)",
          text: "When Viking 1 first commanded its 3-meter retractable boom to deploy the Surface Sampler collector head, a shroud locking pin failed to drop free. Engineers diagnosed that warming the boom in sunlight after a cold soak would thermally expand the bracket and release the pin; after exposing the arm to sunlight, the pin dropped cleanly to the ground, allowing Viking 1 to dig the first Martian soil trench on 28 July 1976 (Sol 8)."
        },
        {
          heading: "Three Biology Chambers and the GCMS Organic Puzzle",
          text: "Inside each lander sat a miniature automated biology laboratory containing three experiments—Labeled Release (LR), Pyrolytic Release (PR), and Gas Exchange (GEx)—paired with a Gas Chromatograph–Mass Spectrometer (GCMS) and X-Ray Fluorescence Spectrometer (XRFS). When soil samples were moistened in the GEx and LR chambers, oxygen and radioactive carbon-14 gas surged forth—yet the GCMS detected no complex organic molecules at parts-per-billion sensitivity, leading most scientists to attribute the reactions to reactive superoxides/peroxides in the dry Martian soil (a debate revisited decades later when Phoenix discovered perchlorates)."
        },
        {
          heading: "Six Years of Weather Reports, Winter Frost, and the Final Command",
          text: "On Utopia Planitia, Viking 2 photographed thin layers of winter water-ice frost on the ground and operated a working seismometer (whereas Viking 1's seismometer remained uncaged and inoperable), operating until battery failure on 11 April 1980. On Chryse Planitia, Viking 1 transmitted for more than six Earth years until 11/13 November 1982, when a ground command intended to update battery-charging software inadvertently overwrote the lander's high-gain antenna pointing table."
        }
      ]
    },

    viewer3d: {
      available: true,
      glbPath: "assets/models/Viking Lander.glb",
      modelTitle: "Viking 1 & Viking 2 Shared Surface Lander 3D Model",
      provenanceBadge: "OFFICIAL NASA 3D RESOURCE • SHARED VIKING SURFACE LANDER CONFIGURATION",
      provenanceNote:
        "Model Provenance & Orbiter Distinction Note: This official NASA 3D model (by Michael D. Carbajal, NASA 3D Resources) represents the landed surface configuration shared by Viking 1 and Viking 2 (hexagonal body, 3 landing legs, 2 SNAP-19 RTG windscreens, S-band dish, 2 facsimile cameras, meteorology boom, and surface sampler boom). It depicts the surface lander only—not the solar-powered Viking Orbiter or entry aeroshell.",
      sourceUrl: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models/Viking%20Lander",
      stageModes: [
        { id: "full", label: "Shared Viking Lander Design" },
        { id: "viking1", label: "Viking 1 Focus (Chryse Planitia • 1976–1982)" },
        { id: "viking2", label: "Viking 2 Focus (Utopia Planitia • 1976–1980)" }
      ],
      hotspots: [
        {
          id: "vk_hs_1",
          code: "01",
          stage: "full",
          position: [-0.45, 0.95, 0.35],
          name: "Twin Facsimile Cameras (Camera 1 & Camera 2 Cylinders)",
          category: "Surface Stereo & Color Imaging",
          whatItIs: "Two vertical cylindrical mechanical-scanning cameras with nodding mirrors and photodiode arrays mounted on the front deck.",
          howItWorked: "Scanned vertical lines across 12 photodiode channels (4 broadband focus, 3 color RGB, 3 infrared, 1 sun, 1 survey) as the camera turret stepped in azimuth, eliminating fragile vidicon tubes.",
          missionRole: "Viking 1 Camera 2 began scanning the first close-up image of Footpad #3 just 25 seconds after touchdown on 20 July 1976; together the two landers transmitted over 4,500 surface views.",
          sourceNote: "NASA Viking 1 & 2 Mission Reports & PIA00381"
        },
        {
          id: "vk_hs_2",
          code: "02",
          stage: "full",
          position: [0.0, 0.45, 1.35],
          name: "Surface Sampler Boom & Collector Head (3-Meter Retractable Arm)",
          category: "Soil Excavation & Sample Delivery",
          whatItIs: "3.05-meter furlable stainless-steel double-ribbon tube boom tipped with a backhoe/scoop collector head, sieve, temperature probe, and magnets.",
          howItWorked: "Unrolled like a stiff carpenter's tape from a motorized housing, dug trenches in the Martian soil, sieved particles <2 mm, and deposited samples into the deck funnels for the Biology, GCMS, and XRFS instruments.",
          missionRole: "After engineers cleared a stuck locking pin on Viking 1 via solar thermal expansion, it dug the first Martian soil trench on 28 July 1976 (Sol 8). On Viking 2, the arm even pushed aside a rock ('Bonneville') to sample shaded soil beneath it.",
          sourceNote: "NASA Viking Lander System Report & PIA00386"
        },
        {
          id: "vk_hs_3",
          code: "03",
          stage: "full",
          position: [0.35, 1.05, -0.35],
          name: "Two SNAP-19 Radioisotope Thermoelectric Generator (RTG) Windscreens",
          category: "Nuclear Electrical & Thermal Power (~70 W Total)",
          whatItIs: "Two tall octagonal thermal windscreens mounted symmetrically atop the lander deck, each enclosing a plutonium-238 SNAP-19 RTG (35 W electrical each).",
          howItWorked: "Converted Pu-238 decay heat into continuous electrical power while thermal switches piped waste heat into the lander body during cold Martian nights. Accuracy Rule: The Viking Landers had NO solar panels.",
          missionRole: "Sustained Viking 1 for more than 6 Earth years (2,245 sols) on Chryse Planitia and Viking 2 through bitter high-latitude winters on Utopia Planitia.",
          sourceNote: "NASA Viking Press Kit & Langley Engineering Report"
        },
        {
          id: "vk_hs_4",
          code: "04",
          stage: "full",
          position: [-0.55, 1.45, -0.45],
          name: "Steerable S-Band High-Gain Dish & UHF Relay Antenna",
          category: "Direct-to-Earth & Orbiter Communications",
          whatItIs: "76-cm parabolic S-band High-Gain Antenna dish on a two-axis gimbal mast, paired with a low-gain S-band omni antenna and a UHF relay antenna.",
          howItWorked: "UHF linked at high data rates to the overhead Viking Orbiters, while the S-band dish communicated directly with NASA's Deep Space Network on Earth.",
          missionRole: "In November 1982, an uplink intended to test battery-reconditioning software on Viking 1 accidentally overwrote the S-band antenna pointing memory, ending contact after 6+ years.",
          sourceNote: "NASA Viking 1 Mission Archive"
        },
        {
          id: "vk_hs_5",
          code: "05",
          stage: "full",
          position: [-0.85, 0.85, 0.65],
          name: "Deployable Meteorology Boom (Wind, Temperature & Pressure)",
          category: "Surface Weather Station",
          whatItIs: "1.3-meter fold-out tubular sensor boom carrying hot-film anemometers, wind-direction quadrant sensors, and thermocouple arrays (paired with a deck pressure sensor).",
          howItWorked: "Held weather sensors clear of the warm lander body and RTG thermal plumes to record ambient Martian wind speed, wind direction, and air temperature.",
          missionRole: "Provided the first continuous multi-year weather reports from another planet, recording seasonal atmospheric pressure swings of ~25–30% as CO₂ froze onto and sublimated from the polar caps.",
          sourceNote: "Viking Meteorology Science Team Reports"
        },
        {
          id: "vk_hs_6",
          code: "06",
          stage: "full",
          position: [0.15, 0.72, 0.15],
          name: "Biology Instrument, GCMS & XRFS Sample Inlet Funnels",
          category: "Life-Detection & Chemical Analysis Suite",
          whatItIs: "Carousel of covered soil processor hoppers on the upper deck feeding the 15.5-kg Biology Package (LR, PR, GEx), Gas Chromatograph–Mass Spectrometer (GCMS), and X-Ray Fluorescence Spectrometer (XRFS).",
          howItWorked: "Distributed sieved soil into incubation chambers (testing metabolic gas exchange and carbon assimilation) and pyrolysis ovens (heating soil to 500°C to detect organic molecules).",
          missionRole: "Produced the famous Viking biology puzzle: rapid gas release in the LR and GEx experiments contrasted with the absence of complex organics in GCMS.",
          sourceNote: "Klein et al. / Biemann et al., Viking Science Reports (1976–1977)"
        },
        {
          id: "vk_hs_7",
          code: "07",
          stage: "full",
          position: [0.75, 0.55, 0.0],
          name: "Three 18-Nozzle Hydrazine Terminal Descent Engines & 3 Landing Legs",
          category: "Propulsive Soft Landing & Touchdown Attenuation",
          whatItIs: "Three throttleable monopropellant hydrazine engines mounted on the sides of the hexagonal body, each discharging through 18 shower-head nozzles, plus three honeycomb shock-absorbing tripod legs.",
          howItWorked: "Spreading the exhaust across 18 small nozzles per engine reduced plume pressure on the ground by >90%, preventing deep cratering or chemical alteration of the sampling zone.",
          missionRole: "Delivered both landers safely onto rocky Martian plains; Viking 2's Footpad #2 perched atop a 25-cm boulder, tilting the lander 8.2°.",
          sourceNote: "NASA Langley Viking Terminal Descent Report"
        }
      ]
    },

    diagrams: [
      {
        id: "vk_diag_footpad",
        title: "First Image Ever Transmitted from the Surface of Mars — Viking 1 Footpad #3 (PIA00381)",
        imagePath: "assets/photos/viking1_first_image_footpad.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL (PIA00381 — 20 July 1976)",
        caption:
          "Scanned line-by-line beginning 25 seconds after touchdown on 20 July 1976, this historic view shows Viking 1's circular Footpad #3 resting on fine soil and pebbles in Chryse Planitia.",
        credit: "NASA / JPL (PIA00381)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00381"
      },
      {
        id: "vk_diag_trench",
        title: "First Soil Sample Trench Dug on Mars by Viking 1 (28 July 1976, PIA00386)",
        imagePath: "assets/photos/viking1_sampler_trench.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL (PIA00386 — Sol 8)",
        caption:
          "Cohesive walls of the first trench excavated by Viking 1's Surface Sampler collector head at 'Sandy Flats' on 28 July 1976 after engineers freed the stuck boom pin.",
        credit: "NASA / JPL (PIA00386)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00386"
      },
      {
        id: "vk_diag_frost",
        title: "Seasonal Water-Ice Frost at Viking 2 in Utopia Planitia (PIA00571)",
        imagePath: "assets/photos/viking2_utopia_frost.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL (PIA00571)",
        caption:
          "Thin white coating of winter water-ice frost blanketing the red rocks around Viking 2 on Utopia Planitia (47.64° N)—confirming active seasonal water transport between atmosphere and ground.",
        credit: "NASA / JPL (PIA00571)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA00571"
      }
    ],

    timeline: {
      chronologyNote:
        "Orbiter vs. Lander Distinction: Each Viking spacecraft consisted of a solar-powered Orbiter (which mapped 97% of Mars in 52,663 images) and a nuclear-powered SNAP-19 Lander. Dates below track the two surface landers.",
      events: [
        {
          stepNumber: "01",
          date: "20 July 1976 • 11:53:06 UTC",
          shortTitle: "Viking 1 Touchdown on Chryse Planitia & First Image (25 s)",
          missionPhase: "Viking 1 Landing",
          statusText: "LANDED 22.27° N, 47.95° W • FIRST SURFACE PHOTO IN 25 s",
          whatHappened:
            "After three weeks of orbital site certification, Viking 1 separated from its Orbiter, entered the Martian atmosphere inside an aeroshell, deployed its parachute at 6 km, and fired its three 18-nozzle hydrazine engines to land softly on Chryse Planitia at 11:53:06 UTC on 20 July 1976. Twenty-five seconds later, Camera 2 began scanning Footpad #3.",
          whatArtifactEnabled:
            "Became the first spacecraft in history to land safely on Mars and complete its mission (following the Soviet Mars 3 lander in December 1971, which failed ~20 seconds after touchdown).",
          scientificConnection:
            "Revealed a rust-red iron-oxide surface beneath a pinkish dust-laden sky.",
          imagePath: "assets/photos/viking1_first_image_footpad.jpg",
          imageType: "Historical Photograph",
          imageCaption: "First image ever transmitted from the surface of Mars, showing Viking 1 Footpad #3 on 20 July 1976 (PIA00381).",
          imageCredit: "NASA / JPL (PIA00381)"
        },
        {
          stepNumber: "02",
          date: "28 July 1976 • Viking 1 Sol 8",
          shortTitle: "Clearing the Stuck Boom Pin & First Soil Trench",
          missionPhase: "Surface Sampler & Biology Activation",
          statusText: "PIN FREED BY SOLAR WARMING • 3 BIOLOGY CHAMBERS FED",
          whatHappened:
            "After an initial boom-shroud locking pin failed to drop on Sol 2, engineers exposed the sampler boom to sunlight for thermal expansion, dropping the pin onto the soil. On 28 July 1976 (Sol 8), Viking 1 dug the first Martian trench and delivered sieved soil to the Biology (LR, PR, GEx), GCMS, and XRFS instruments.",
          whatArtifactEnabled:
            "Initiated the first direct in-situ chemical and biological assays of Martian regolith.",
          scientificConnection:
            "XRFS revealed iron-rich, silicon-and-sulfur-bearing clays/salts; LR and GEx released gas bursts while GCMS found no complex organics.",
          imagePath: "assets/photos/viking1_sampler_trench.jpg",
          imageType: "Historical Photograph",
          imageCaption: "First trench dug in Martian soil by Viking 1 on 28 July 1976 (PIA00386).",
          imageCredit: "NASA / JPL (PIA00386)"
        },
        {
          stepNumber: "03",
          date: "3 September 1976 • 22:37:50 UTC",
          shortTitle: "Viking 2 Lands on Utopia Planitia (~6,460 km Away)",
          missionPhase: "Viking 2 Landing & Northern Plains Science",
          statusText: "LANDED 47.64° N, 225.71° W • WORKING SEISMOMETER & FROST",
          whatHappened:
            "On 3 September 1976, Viking 2 touched down on the high-latitude plains of Utopia Planitia with one footpad perched on a boulder (8.2° tilt). Unlike Viking 1—whose deck seismometer failed to uncage—Viking 2's seismometer unlocked cleanly and recorded wind vibrations and one candidate marsquake event.",
          whatArtifactEnabled:
            "Sampled soil from beneath rocks moved by the sampler arm and photographed white winter water-ice frost across two Martian winters.",
          scientificConnection:
            "Viking 2 Lander operated until battery failure on 11 April 1980 (1,281 sols).",
          imagePath: "assets/photos/viking2_utopia_frost.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Winter water-ice frost coating rocks and soil around Viking 2 at Utopia Planitia (PIA00571).",
          imageCredit: "NASA / JPL (PIA00571)"
        },
        {
          stepNumber: "04",
          date: "11 / 13 November 1982 • Viking 1 Sol 2245",
          shortTitle: "Overwritten Antenna Memory Ends 6+ Year Mission",
          missionPhase: "End of Viking Surface Operations",
          statusText: "2,245 SOLS (6+ EARTH YEARS) • RECORD HELD UNTIL OPPORTUNITY",
          whatHappened:
            "Designated the Thomas A. Mutch Memorial Station in 1981, Viking 1 continued automated weather and imaging cycles until November 1982. On 11/13 November 1982, a ground command sent to adjust battery-charging voltage inadvertently overwrote memory addresses controlling the S-band high-gain antenna pointing. Four months of recovery attempts could not restore the link, and NASA formally ended the mission on 21 May 1983.",
          whatArtifactEnabled:
            "Held the Mars surface longevity record (6 years 116 days) for 34 years until surpassed by Opportunity in 2010.",
          scientificConnection:
            "Atmospheric isotope measurements by Viking also provided the decisive fingerprint proving that SNC meteorites found on Earth originated on Mars.",
          imagePath: "assets/photos/viking1_chryse_panorama.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Viking 1 Lander on Chryse Planitia (Thomas A. Mutch Memorial Station, PIA00393).",
          imageCredit: "NASA / JPL (PIA00393)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "Three Biology Experiments, One Chemical Spectrometer, and the Search for Life",
      summary:
        "The Viking Landers carried the most ambitious automated biological and chemical laboratory ever landed on Mars in the 20th century, alongside meteorology booms, X-ray fluorescence spectrometers, and facsimile cameras powered by twin SNAP-19 nuclear generators.",
      metrics: [
        { value: "6+ Years", label: "Viking 1 Surface Life", note: "20 Jul 1976 – 11/13 Nov 1982 (2,245 sols on Chryse Planitia)" },
        { value: "3.6 Years", label: "Viking 2 Surface Life", note: "3 Sep 1976 – 11 Apr 1980 (1,281 sols on Utopia Planitia)" },
        { value: "2 × SNAP-19", label: "Nuclear RTG Power", note: "~70 W continuous thermoelectric power + waste heat (no solar panels)" },
        { value: "4,500+ / 52,663", label: "Surface vs Orbiter Images", note: "4,500+ Lander surface views vs 52,663 Orbiter mapping frames (97% of Mars)" }
      ],
      challenges: [
        {
          badge: "BIOLOGY VS GCMS",
          title: "The Viking Biology Puzzle (LR, PR, GEx vs. GCMS)",
          summary: "Why did the Labeled Release experiment evolve gas while the GCMS saw no complex organics?",
          details: [
            "Gas Exchange (GEx): Released a sudden burst of O₂ when soil was humidified—consistent with inorganic superoxides/peroxides rather than biology.",
            "Pyrolytic Release (PR): Tested carbon fixation under simulated sunlight; small positive signals persisted even after heating soil to 90°C, pointing to surface chemistry.",
            "Labeled Release (LR, PI Gilbert Levin): Released ¹⁴CO₂ when nutrient was added and stopped when pre-sterilized at 160°C—matching the pre-mission criteria for life. However, because the GCMS detected no organic carbon compounds down to ppb levels (and later Phoenix found perchlorates that break down organics when heated), the scientific consensus interpreted the Viking results as reactive soil oxidants rather than confirmed extant life."
          ]
        },
        {
          badge: "HARDWARE ANOMALIES",
          title: "Viking 1 Stuck Sampler Pin, Inoperable Seismometer & 1982 Command Error",
          summary: "Both landers experienced mechanical and operational hurdles on the surface.",
          details: [
            "Viking 1 Sampler Pin (Sol 2–5): Freed by rotating the boom into sunlight so thermal expansion released the jammed latch.",
            "Viking 1 Seismometer: Caging pins failed to release after landing, leaving Viking 1's seismometer inoperable (Viking 2's seismometer worked).",
            "November 1982 Antenna Uplink: Battery-care software patch inadvertently overwrote Viking 1's S-band antenna pointing table, ending communications."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "First Successful Mars Lander Distinction (Mars 3 vs Viking 1)",
          resolution:
            "Soviet Mars 3 achieved the first soft touchdown on Mars on 2 December 1971 but lost contact after ~20 seconds without returning a complete surface image; Viking 1 (20 July 1976) was the first spacecraft to land safely on Mars and complete an operational surface mission."
        },
        {
          topic: "Viking Final Contact Date (11 November vs 13 November 1982)",
          resolution:
            "NASA sources cite both 11 November 1982 (last completed telemetry session) and 13 November 1982 (date the scheduled contact failed following the battery-command uplink); formal termination followed on 21 May 1983."
        }
      ]
    },

    sources: [
      { id: "VK-S1", title: "NASA Science — Viking 1 & Viking 2 Mission Archives", url: "https://science.nasa.gov/mission/viking-1/", role: "Official NASA documentation of Viking 1 (Chryse Planitia, 1976–1982) and Viking 2 (Utopia Planitia, 1976–1980)." },
      { id: "VK-S2", title: "On Mars: Exploration of the Red Planet 1958–1978 (NASA SP-4212, Ezell & Ezell)", url: "https://ntrs.nasa.gov/citations/19840020149", role: "Comprehensive NASA historical volume covering site certification, 18-nozzle engines, stuck sampler pin fix, and the LR/PR/GEx/GCMS biology results." },
      { id: "VK-S3", title: "NASA 3D Resources — Viking Lander GLB (Michael D. Carbajal)", url: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models/Viking%20Lander", role: "Official NASA 3D surface lander model rendered in the 360° viewer." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 08 (MARS WING): PHOENIX & INSIGHT STATIONARY LANDERS
  // ==========================================================================
  phoenix_insight: {
    artifact_id: "phoenix_insight",
    destination: "mars",
    atlasLocationId: "loc_phoenix_lander",
    artifact_name: "Phoenix & InSight Landers",
    official_full_name: "Phoenix Mars Scout Polar Lander (2008) & InSight Discovery Geophysical Lander (2018–2022)",
    subtitle: "Two Stationary Landers on a Common Heritage Deck • Shallow Polar Ice Below • Deep Planetary Secrets Within",
    mission: "Phoenix (2008) & InSight (2018–2022)",
    statusBadge: "VERIFIED COMPARATIVE EXHIBIT • PHOENIX DIAGRAM V4 + INSIGHT 4-STATE 3D VIEWER",
    heroImage: "assets/photos/insight_seis_wtshield_hp3.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "InSight's deployed instruments on the ground at Homestead Hollow, Elysium Planitia: the dome-shaped Wind and Thermal Shield covering the SEIS seismometer (left) and the HP³ heat-flow probe next to the lander's grappling arm (PIA23177).",
    heroImageCredit: "NASA / JPL-Caltech (PIA23177)",
    heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA23177",

    identityCard: {
      artifact: "Comparative Stationary Landers: Phoenix (2008) & InSight (2018–2022)",
      destinationSite:
        "Phoenix: Green Valley, Vastitas Borealis (68.22° N, 125.7° W / 234.3° E) • InSight: Homestead Hollow, Elysium Planitia (4.5024° N, 135.6234° E)",
      launchDates:
        "Phoenix: 4 August 2007 (Delta II 7925, Cape Canaveral) • InSight: 5 May 2018 (Atlas V 401, Vandenberg AFB — first interplanetary launch from the US West Coast)",
      landingDates:
        "Phoenix: 25 May 2008, 23:38:38 UTC (Propulsive pulse-jet landing, no airbags) • InSight: 26 November 2018, 19:52:59 UTC",
      finalContactDates:
        "Phoenix: 2 November 2008 (152 sols / ~5+ months; silenced by polar autumn darkness & CO₂ ice) • InSight: 15 December 2022 (Mission end declared 21 Dec 2022 after 1,440 sols due to dust on solar arrays)",
      sharedHeritage:
        "Both spacecraft were built by Lockheed Martin Space Systems (Littleton, Colorado) around the three-legged propulsive Mars Surveyor 2001 lander bus fitted with twin UltraFlex fan-fold circular/decagonal solar arrays.",
      distinctMissions:
        "Phoenix excavated shallow polar permafrost at 68° N with a 2.35-m titanium Robotic Arm to feed deck ovens/wet-chemistry cells (TEGA & MECA); InSight used a 1.8-m Instrument Deployment Arm at 4.5° N to lift SEIS and HP³ off the deck onto the ground to probe Mars's deep crust, mantle, and liquid core."
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device comparing the two Lockheed Martin / JPL stationary landers.",
      shortIntroduction:
        "We are Phoenix and InSight—two three-legged stationary landers built from a shared spacecraft lineage to answer two very different questions without driving a single meter. In May 2008, Phoenix touched down in the Martian Arctic at 68.2 degrees North to dig into shallow water-ice permafrost. Ten years later, in November 2018, InSight landed near the Martian equator on Elysium Planitia to place a seismometer directly onto the ground and listen to the heartbeat of Mars's deep interior.",
      fullStoryParagraphs: [
        {
          heading: "Phoenix (2008): Touching and Tasting Martian Water Ice at 68° North",
          text: "Rebuilt from the unflown 2001 Mars Surveyor lander and instruments from the lost 1999 Mars Polar Lander, Phoenix descended on pulsed hydrazine thrusters onto the polygonal permafrost troughs of Green Valley on 25 May 2008. Even before its 2.35-meter Robotic Arm dug its first trench, cameras beneath the lander showed that its descent thrusters had blown away 5 centimeters of topsoil to expose a flat slab of hard subsurface ice ('Holy Cow')."
        },
        {
          heading: "Sublimating Ice Cubes, Perchlorate Salts, and Snow Falling from Martian Clouds",
          text: "When Phoenix dug the 'Dodo-Goldilocks' trench on Sol 20 (15 June 2008), bright dice-sized chunks broke loose in the bottom; four sols later (Sol 24), those bright chunks had completely vaporized (sublimated)—proving beyond doubt they were water ice, not salt! Using a motorized rasp on the back of its scoop to shave icy filings into the TEGA thermal ovens and MECA wet-chemistry beakers, Phoenix confirmed water vapor, mildly alkaline soil (pH 7.7), calcium carbonate (formed in past liquid water), and perchlorate salts (ClO₄⁻), while its Canadian LIDAR watched water-ice snow crystals falling from polar clouds before autumn darkness ended the mission on 2 November 2008."
        },
        {
          heading: "InSight (2018–2022): Placing the First Seismometer on the Martian Ground",
          text: "On 26 November 2018, InSight used the same three-legged propulsive architecture to land in 'Homestead Hollow' on equatorial Elysium Planitia. Instead of scooping soil into deck ovens, InSight used its five-fingered grapple on the Instrument Deployment Arm to lift the French-led SEIS broadband seismometer off the deck and set it directly onto the Martian surface (19 December 2018), covering it with a heavy domed Wind and Thermal Shield."
        },
        {
          heading: "The Struggle of the HP³ 'Mole' vs. 1,300+ Marsquakes",
          text: "Beside SEIS, InSight deployed the German-built Heat Flow and Physical Properties Package (HP³)—a self-hammering 'mole' designed to burrow 3 to 5 meters deep. Unexpectedly cohesive, cement-like duricrust soil failed to collapse around the hull to provide friction; despite two years of heroic arm-pinning and soil-scooping maneuvers that buried the mole just beneath the surface (~40 cm), HP³ retired in January 2021 without reaching its target depth. Meanwhile, SEIS and the RISE radio-science experiment triumphed: recording more than 1,300 marsquakes (including a magnitude 4.7 event and meteoroid impacts that excavated fresh ice craters) and measuring Mars's layered crust (~24–72 km), mantle, and large liquid iron-alloy core (~1,830 km radius) before dust silenced InSight in December 2022."
        }
      ]
    },

    // ========================================================================
    // PART A: PHOENIX DOCUMENT-BASED TECHNICAL DIAGRAM (REVISION V3 & V4)
    // Mandatory Layout: 1. Full-Width Numbered Diagram -> 2. Component Legend -> 3. Single Persistent Explanation Panel Directly BELOW
    // ========================================================================
    phoenixDiagramSpec: {
      policyBadge: "VERIFIED PHOENIX SPECIFICATION (REVISIONS V2, V3 & V4) • NO OFFICIAL NASA 3D MODEL FOR PHOENIX",
      policyNote:
        "3D Model Verification Rule: NASA's official 3D catalog does NOT provide a verified downloadable 3D `.glb` model of the Phoenix Mars Lander (only InSight has official NASA 3D models). Per Phoenix Revisions V3 and V4, Phoenix is presented through an official JPL document-based numbered technical diagram with a single persistent explanation panel positioned directly below the diagram.",
      diagrams: [
        {
          id: "phx_diag_deck",
          title: "1. Phoenix Lander Deck & 2.14 m Digging Workspace Diagram (JPL Robotics Paper Fig. 2)",
          imagePath: "assets/diagrams/phoenix_fig_6_p3.png",
          visualType: "Technical Drawing",
          sourcePage: "Bonitz et al. (JPL / IEEE Aerospace & Robotics Report, p. 3, Fig. 2)",
          caption:
            "Official JPL RSVP top-down technical diagram of the Phoenix Mars Lander showing the octagonal/decagonal UltraFlex solar arrays, Robotic Arm (RA), Stereo Surface Imager (SSI), Thermal and Evolved Gas Analyzer (TEGA), Microscopy, Electrochemistry, and Conductivity Analyzer (MECA), Meteorology Mast (MET), and the 2.14 m excavation workspace.",
          credit: "NASA / JPL-Caltech / University of Arizona (Bonitz et al., Phoenix Robotic Arm Report)",
          sourceUrl: "https://science.nasa.gov/mission/phoenix/"
        },
        {
          id: "phx_diag_scoop",
          title: "2. Phoenix Robotic Arm Scoop, Motorized Rasp, Blades & TECP Probe (JPL Paper Fig. 3)",
          imagePath: "assets/diagrams/phoenix_fig_3_p3.png",
          visualType: "Technical Drawing",
          sourcePage: "Bonitz et al. (JPL Robotics Report, p. 3, Fig. 3)",
          caption:
            "Labeled JPL hardware photograph of the Phoenix Robotic Arm end effector showing the Robotic Arm Camera (RAC), Thermal and Electrical Conductivity Probe (TECP), compartmentalized aluminum/titanium scoop, primary blade, secondary carbide blade, and motorized rasp bit.",
          credit: "NASA / JPL-Caltech (Bonitz et al., p. 3)",
          sourceUrl: "https://science.nasa.gov/mission/phoenix/"
        },
        {
          id: "phx_diag_cutaway",
          title: "3. Scoop & Motorized Ice Rasp Cutaway Engineering Drawing (JPL Paper Fig. 5)",
          imagePath: "assets/diagrams/phoenix_fig_5_p3.png",
          visualType: "Technical Drawing",
          sourcePage: "Bonitz et al. (JPL Robotics Report, p. 3, Fig. 5)",
          caption:
            "Cross-sectional CAD cutaway of the Phoenix scoop showing the spring-loaded pivot and motorized tungsten-carbide rasp bit designed to drill into cement-hard water ice and fling icy shavings into the rear receiving chamber.",
          credit: "NASA / JPL-Caltech / Honeybee Robotics (Bonitz et al., p. 3)",
          sourceUrl: "https://science.nasa.gov/mission/phoenix/"
        }
      ],
      callouts: [
        {
          id: "phx_c1",
          code: "01",
          x: 52,
          y: 38,
          name: "Robotic Arm (RA — 2.35 m, 4-DOF Backhoe Excavator)",
          category: "Primary Excavation & Sample Delivery System",
          whatItIs: "4-degree-of-freedom (shoulder azimuth, shoulder elevation, elbow, wrist pitch) titanium/aluminum robotic arm extending 2.35 meters from the lander deck.",
          howItWorked: "Operated like a backhoe across a green 2.14-meter-radius workspace in front of the lander, exerting up to 80 N of digging force to trench through dry soil down to the hard water-ice table.",
          missionRole: "Dug over a dozen trenches ('Dodo-Goldilocks', 'Snow White', 'Upper Cupboard') and delivered icy soil samples to the TEGA and MECA inlet ports on the deck.",
          sourceNote: "Bonitz et al., JPL Phoenix Robotic Arm Report (pp. 1–3)"
        },
        {
          id: "phx_c2",
          code: "02",
          x: 54,
          y: 56,
          name: "End-Effector Scoop, Secondary Blade & Motorized Ice Rasp",
          category: "Soil Trenching & Hard-Ice Sampling Tool",
          whatItIs: "Dual-chambered scoop fitted with a sharp titanium front blade, a bottom tungsten-carbide scraper blade, and a high-speed motorized rasp bit in the rear heel.",
          howItWorked: "When the Martian permafrost proved as hard as concrete, the motorized rasp spun at high speed to shave millimeter-sized ice/soil filings into the rear chamber for rapid delivery before the ice could sublimate.",
          missionRole: "Enabled the successful ice-bearing sample delivery to TEGA Oven 4 on Sol 65 (31 July 2008), directly confirming water vapor via mass spectrometry.",
          sourceNote: "Bonitz et al. (p. 3, Figs. 3–5)"
        },
        {
          id: "phx_c3",
          code: "03",
          x: 49,
          y: 52,
          name: "Robotic Arm Camera (RAC) & TECP Four-Needle Probe",
          category: "Close-Up Imaging & Soil Physics Sensors",
          whatItIs: "Wrist-mounted color camera (RAC, with red/green/blue LED lamps and focus down to 23 µm/pixel) and the knuckle-mounted four-needle Thermal and Electrical Conductivity Probe (TECP).",
          howItWorked: "RAC inspected trench walls, scoop contents, and the slab of ice beneath the lander ('Holy Cow'); TECP inserted its four needles into trench soil and the air to measure thermal conductivity, dielectric permittivity, and relative humidity.",
          missionRole: "Imaged the sublimating ice chunks in 'Dodo-Goldilocks' (Sols 20–24) and measured diurnal water-vapor exchange between the soil and polar atmosphere.",
          sourceNote: "Bonitz et al. (p. 3) & PIA10909"
        },
        {
          id: "phx_c4",
          code: "04",
          x: 61,
          y: 26,
          name: "Thermal and Evolved Gas Analyzer (TEGA — 8 Single-Use Ovens + Mass Spectrometer)",
          category: "Thermal Volatiles & Isotope Laboratory",
          whatItIs: "Eight miniature high-temperature furnaces (each the size of a ballpoint pen cartridge, used once) coupled to a scanning-sector mass spectrometer.",
          howItWorked: "Motorized vibrating screens sieved soil into an oven, which sealed and ramped temperature cleanly up to 1,000°C while measuring heat absorption (calorimetry, such as ice melting at 0°C) and evolved H₂O, CO₂, and O₂ gases.",
          missionRole: "When the first clumpy polar soil bridged across Oven 4's screen, controllers pulsed the vibrator motor over several sols until soil filled the oven; later detected both water ice melting and high-temperature CO₂ release from calcium carbonate (CaCO₃).",
          sourceNote: "Boynton et al., Science (2009) & JPL Report"
        },
        {
          id: "phx_c5",
          code: "05",
          x: 60,
          y: 14,
          name: "Microscopy, Electrochemistry, and Conductivity Analyzer (MECA)",
          category: "Wet-Chemistry Cells & Optical / Atomic-Force Microscopes",
          whatItIs: "Deck-mounted laboratory housing four single-use Wet Chemistry Laboratory (WCL) beakers, a sample wheel with 69 substrates, an Optical Microscope, and an Atomic Force Microscope (AFM).",
          howItWorked: "WCL mixed scooped Martian soil with leached water and ion-selective electrodes to measure pH and dissolved ions (Mg²⁺, Ca²⁺, Na⁺, K⁺, Cl⁻, SO₄²⁻, ClO₄⁻).",
          missionRole: "Made the landmark discovery that Martian polar soil is mildly alkaline (pH 7.7 ± 0.3) and contains ~0.4–0.6 wt% perchlorate salts (ClO₄⁻)—a powerful freezing-point depressant and chemical energy source that also explained Viking's 1976 GCMS results!",
          sourceNote: "Hecht et al., Science (2009)"
        },
        {
          id: "phx_c6",
          code: "06",
          x: 42,
          y: 32,
          name: "Surface Stereo Imager (SSI — 2 m Mast)",
          category: "Multispectral Panoramic Stereo Camera",
          whatItIs: "Deployable 2-meter vertical mast carrying twin 1024×1024 CCD eyes and 12 geological/atmospheric spectral filters.",
          howItWorked: "Generated high-resolution 3D digital elevation maps of the polygonal permafrost terrain so JPL engineers could plan millimeter-accurate Robotic Arm digging sequences.",
          missionRole: "Monitored dust devils, frost formation as polar autumn approached, and workspace trench geometry across 152 sols.",
          sourceNote: "Lemmon et al., Phoenix SSI Team"
        },
        {
          id: "phx_c7",
          code: "07",
          x: 47,
          y: 9,
          name: "Meteorological Station (MET Mast) & Atmospheric LIDAR",
          category: "Canadian Space Agency Weather & Cloud Profiler",
          whatItIs: "Vertical 1-meter meteorology mast with temperature/pressure sensors and a telltale wind indicator, paired with an upward-pointing green-laser LIDAR (532 nm).",
          howItWorked: "Pulsed laser beams up to 20 km into the arctic sky to measure backscattered light from dust layers and water-ice clouds.",
          missionRole: "Around Sol 99, the LIDAR detected water-ice snow crystals Virga-precipitating out of Martian clouds at ~4 km altitude toward the surface.",
          sourceNote: "Whiteway et al., Science (2009)"
        },
        {
          id: "phx_c8",
          code: "08",
          x: 20,
          y: 42,
          name: "Twin UltraFlex Octagonal/Decagonal Solar Arrays",
          category: "Solar Electrical Power System",
          whatItIs: "Two lightweight fan-fold gallium-arsenide solar arrays (2.1 m diameter each) unfolded like oriental fans on either side of the octagonal deck.",
          howItWorked: "Basked in 24-hour continuous arctic summer sunlight at 68.2° N during the first 90 sols, charging two Li-ion batteries.",
          missionRole: "Sustained Phoenix for 152 sols (well past its 90-sol prime mission) until the Sun dipped below the northern horizon in late October 2008; in 2010, MRO HiRISE images showed seasonal CO₂ dry-ice slabs had snapped one of the solar wings.",
          sourceNote: "NASA Phoenix Mission Report"
        },
        {
          id: "phx_c9",
          code: "09",
          x: 44,
          y: 49,
          name: "Three Shock-Absorbing Landing Legs & Pulsed Hydrazine Thrusters",
          category: "Propulsive Touchdown System (Exposed 'Holy Cow' Ice Slab)",
          whatItIs: "Three tripod landing legs and 12 pulsed monopropellant hydrazine descent thrusters mounted under the octagonal lander bus.",
          howItWorked: "Controlled descent velocity after parachute separation without using airbags, settling level (0.3° tilt) on Green Valley.",
          missionRole: "Exhaust plumes from the thrusters blew away ~5 cm of loose dry soil directly beneath the lander, exposing the flat 'Holy Cow' water-ice table photographed by the Robotic Arm Camera on Sol 5.",
          sourceNote: "NASA Phoenix Landing Report & PIA10732"
        },
        {
          id: "phx_c10",
          code: "10",
          x: 53,
          y: 68,
          name: "2.14-Meter Arc Excavation Workspace ('Green Zone')",
          category: "Polar Permafrost Trenching Sector",
          whatItIs: "Crescent-shaped northern surface sector spanning a 2.14-meter radius reachable by the Robotic Arm.",
          howItWorked: "Divided into national-park-themed Wonderland sectors where the arm excavated trenches into polygon centers and troughs.",
          missionRole: "Revealed that the depth to the solid water-ice table varied from just 3 to 6 centimeters across the workspace.",
          sourceNote: "Bonitz et al. (p. 3, Fig. 2)"
        }
      ]
    },

    // ========================================================================
    // PART B: INSIGHT 360° INTERACTIVE 3D VIEWER (4-STATE CONFIGURATION SWITCHER)
    // ========================================================================
    viewer3d: {
      available: true,
      glbPath: "assets/models/InSight Cruise Lander (arm deployed).glb",
      modelTitle: "InSight Geophysical Lander — Interactive 3D Configuration Viewer",
      provenanceBadge: "OFFICIAL NASA 3D RESOURCE • INSIGHT 4-STATE CONFIGURATION SWITCHER",
      provenanceNote:
        "Model Provenance & Surface-Deployment Distinction Note: NASA's official 4-state InSight 3D models (by Brian E. Kumanchik, NASA 3D Resources) represent the lander in stowed/cruise, panels-stowed, panels-deployed, and arm-deployed configurations with SEIS, the Wind & Thermal Shield, and HP³ still mounted on the lander deck (pre-surface placement). A fifth option loads the NASA/JPL-Caltech surface-deployed mesh. On Mars in December 2018 – February 2019, InSight's arm lifted SEIS, the WTS dome, and HP³ off the deck onto the ground in front of the lander (as shown in surface photo PIA23177).",
      sourceUrl: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models",
      configVariants: [
        {
          id: "arm_deployed",
          label: "1. Arm & Solar Panels Deployed (Default)",
          glbPath: "assets/models/InSight Cruise Lander (arm deployed).glb"
        },
        {
          id: "panels_deployed",
          label: "2. Solar Panels Deployed (Arm Stowed)",
          glbPath: "assets/models/InSight Cruise Lander (panels deployed).glb"
        },
        {
          id: "panels_stowed",
          label: "3. Landing Configuration (Panels Stowed)",
          glbPath: "assets/models/InSight Cruise Lander (panels stowed).glb"
        },
        {
          id: "cruise_stowed",
          label: "4. Cruise / Entry Configuration (Fully Stowed)",
          glbPath: "assets/models/InSight Cruise Lander (stowed).glb"
        },
        {
          id: "surface_deployed_hires",
          label: "5. JPL Surface-Deployed Reference Model",
          glbPath: "assets/models/24880_InSight_deployed.glb"
        }
      ],
      stageModes: [
        { id: "full", label: "InSight Full Lander & Instruments" }
      ],
      hotspots: [
        {
          id: "ins_hs_1",
          code: "01",
          stage: "full",
          position: [0.0, 0.95, 0.85],
          name: "Instrument Deployment Arm (IDA), Five-Finger Grapple & Scoop",
          category: "Robotic Crane & Surface Placement System (1.8 m)",
          whatItIs: "4-degree-of-freedom composite/titanium robotic arm equipped with a mechanical five-fingered grapple suspended on a cable, a small soil scoop, and the elbow-mounted Instrument Deployment Camera (IDC).",
          howItWorked: "Unlike Phoenix's digging arm, InSight's IDA was engineered primarily as a precision crane to grasp the spherical grapple hooks atop SEIS, the Wind and Thermal Shield, and HP³ and place them gently onto the ground.",
          missionRole: "After placing all three packages on the ground, the arm spent nearly two years pressing its scoop against the HP³ mole ('pinning') and scraping dust onto the solar panels to trickle-clean them.",
          sourceNote: "NASA InSight Launch Press Kit (2018)"
        },
        {
          id: "ins_hs_2",
          code: "02",
          stage: "full",
          position: [-0.35, 0.55, 0.35],
          name: "SEIS (Seismic Experiment for Interior Structure) & Wind/Thermal Shield",
          category: "CNES / European Ultra-Sensitive Broadband Seismometer",
          whatItIs: "Copper-colored hexagonal vacuum vessel containing three Very Broad Band (VBB) pendulum seismometers and three Short Period (SP) silicon sensors, covered after placement by the white domed Wind and Thermal Shield (WTS) with chainmail skirt.",
          howItWorked: "Placed directly on the Martian ground at the end of a flexible tether (unlike Viking 1/2's deck-mounted seismometers) so wind shaking the lander wouldn't mask faint seismic waves as small as the diameter of a hydrogen atom.",
          missionRole: "Detected more than 1,300 marsquakes between 2019 and 2022 (including the magnitude 4.7 S1222a event in May 2022), revealing the thickness of Mars's crust, the structure of its mantle, and the ~1,830-km radius of its liquid core.",
          sourceNote: "Lognonné et al. / Banerdt et al., Nature Geoscience & Science (2020–2021)"
        },
        {
          id: "ins_hs_3",
          code: "03",
          stage: "full",
          position: [0.35, 0.55, 0.35],
          name: "HP³ (Heat Flow and Physical Properties Package — The 'Mole')",
          category: "DLR Self-Hammering Subsurface Heat Probe",
          whatItIs: "Tripod support structure housing a 40-cm-long spring-hammering penetrator ('the mole') trailing a ribbon tether embedded with platinum temperature sensors.",
          howItWorked: "Designed to hammer itself 3 to 5 meters below the surface to measure heat escaping Mars's interior.",
          missionRole: "Placed on the ground on 12 February 2019, the mole rebounded after ~30 cm because Homestead Hollow's cohesive duricrust lacked loose sand to collapse around the hull for friction. Despite pinning with the arm scoop and burying the mole body just below the surface (~40 cm), HP³ could not penetrate deeper and ended hammering attempts in January 2021.",
          sourceNote: "Spohn et al., DLR / NASA InSight HP³ Reports"
        },
        {
          id: "ins_hs_4",
          code: "04",
          x: 50,
          y: 50,
          position: [-0.25, 0.75, -0.35],
          name: "RISE (Rotation and Interior Structure Experiment — Two X-Band Horns)",
          category: "Precision Geodesy & Liquid-Core Nutation Experiment",
          whatItIs: "Two fixed medium-gain X-band horn antennas mounted on the lander deck.",
          howItWorked: "Transponded X-band radio signals directly back to NASA's Deep Space Network to measure Doppler shifts in Mars's rotation axis (precession and nutation) to within a few centimeters.",
          missionRole: "Proved independently alongside SEIS that Mars has a large, low-density liquid iron-nickel-sulfur core.",
          sourceNote: "Le Maistre et al., Nature (2023)"
        },
        {
          id: "ins_hs_5",
          code: "05",
          position: [0.0, 0.25, 0.55],
          name: "ICC (Instrument Context Camera) & TWINS / APSS Weather Suite",
          category: "Fish-Eye Workspace Camera, Magnetometer & Microbarometer",
          whatItIs: "Under-deck 120° wide-angle Instrument Context Camera (ICC) plus deck-mounted TWINS wind/temperature booms, Fluxgate Magnetometer (IFG), and continuous ultra-sensitive pressure sensor (APSS).",
          howItWorked: "APSS and TWINS calibrated wind and pressure noise out of the SEIS seismic signal in real time, while IFG measured crustal magnetic fields 10× stronger than predicted from orbit.",
          missionRole: "Turned InSight into the most sensitive continuous meteorological and infrasound station ever operated on Mars.",
          sourceNote: "Banfield et al., Nature Geoscience (2020)"
        },
        {
          id: "ins_hs_6",
          code: "06",
          position: [-1.45, 0.45, 0.0],
          name: "Twin UltraFlex Decagonal Solar Arrays (2.15 m Diameter Each)",
          category: "Solar Power Generation (6.0 m Total Wingspan)",
          whatItIs: "Two fan-fold solar arrays inherited from Phoenix, enlarged slightly to 2.15 m diameter each for dusty equatorial operations.",
          howItWorked: "Generated ~4,588 Wh on Sol 1—the highest single-sol solar energy output of any Mars surface spacecraft—but unlike Spirit and Opportunity, Homestead Hollow experienced very few dust-devil cleaning events.",
          missionRole: "In 2021, engineers used the robotic arm to trickle coarse sand next to the panels in the wind, knocking loose enough fine dust to extend SEIS science through late 2022 before power ran out on 15 December 2022.",
          sourceNote: "NASA InSight Mission End Release (Dec 2022) & PIA25287"
        }
      ]
    },

    diagrams: [
      {
        id: "pi_diag_sublimating_ice",
        title: "Phoenix Sol 20 vs. Sol 24: Sublimating Water-Ice Chunks in 'Dodo-Goldilocks' (PIA10909)",
        imagePath: "assets/photos/phoenix_sublimating_ice.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech / University of Arizona / Texas A&M (PIA10909)",
        caption:
          "Decisive visual proof of shallow Martian water ice: bright dice-sized chunks excavated in the shadow of the 'Dodo-Goldilocks' trench on Sol 20 (15 June 2008, left) completely sublimated (vaporized) by Sol 24 (19 June 2008, right).",
        credit: "NASA / JPL-Caltech / University of Arizona / Texas A&M (PIA10909)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA10909"
      },
      {
        id: "pi_diag_insight_selfie",
        title: "InSight's Final Dusty Selfie on Elysium Planitia (April 2022, PIA25287)",
        imagePath: "assets/photos/insight_dusty_selfie.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech (PIA25287 — Sol 1211)",
        caption:
          "InSight's final full-lander selfie showing thick reddish Martian dust coating its twin UltraFlex solar arrays after more than three Earth years of seismic observations at Homestead Hollow.",
        credit: "NASA / JPL-Caltech (PIA25287)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA25287"
      }
    ],

    timeline: {
      chronologyNote:
        "Comparative Chronology: Events 01–02 track Phoenix's 2008 Arctic mission at 68.22° N; Events 03–04 track InSight's 2018–2022 geophysical mission at 4.50° N.",
      events: [
        {
          stepNumber: "01",
          date: "25 May – 19 June 2008 • Phoenix Sols 1–24",
          shortTitle: "Phoenix Lands at 68.2° N & Exposes Sublimating Water Ice",
          missionPhase: "Phoenix Polar Landing & Ice Discovery",
          statusText: "LANDED 25 MAY 2008 • SUBLIMATING ICE PROVED SOLS 20–24",
          whatHappened:
            "On 25 May 2008, Phoenix made the first successful propulsive (non-airbag) landing on Mars since Viking, touching down in Green Valley (68.22° N, 125.7° W). Thruster exhaust exposed the 'Holy Cow' ice slab under the lander, and between Sol 20 and Sol 24 bright chunks dug up in the 'Dodo-Goldilocks' trench sublimated away—proving they were water ice.",
          whatArtifactEnabled:
            "First spacecraft to directly touch and excavate Martian water ice.",
          scientificConnection:
            "Confirmed Mars Odyssey orbital gamma-ray predictions of vast high-latitude water-ice permafrost within centimeters of the surface.",
          imagePath: "assets/photos/phoenix_sublimating_ice.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Sublimating water-ice chunks in the Dodo-Goldilocks trench between Sol 20 and Sol 24 (PIA10909).",
          imageCredit: "NASA / JPL-Caltech / UA (PIA10909)"
        },
        {
          stepNumber: "02",
          date: "July – 2 November 2008 • Phoenix Sols 40–152",
          shortTitle: "TEGA Ice Vapor, MECA Perchlorates & Polar Winter Loss",
          missionPhase: "Phoenix Chemical Analysis & End of Mission",
          statusText: "pH 7.7 • PERCHLORATE & CARBONATE • LAST SIGNAL 2 NOV 2008",
          whatHappened:
            "Using its motorized rasp, Phoenix delivered icy soil to TEGA (confirming H₂O melting at 0°C and CaCO₃ decomposition) and MECA (measuring pH 7.7 and discovering perchlorate salts ClO₄⁻), while LIDAR detected falling snow crystals. As arctic autumn darkness set in, Phoenix transmitted its final signal on 2 November 2008 (152 sols).",
          whatArtifactEnabled:
            "Exceeded its 90-sol prime mission by 62 sols before seasonal CO₂ frost encased the lander.",
          scientificConnection:
            "Perchlorate discovery reshaped astrobiology and resolved the 1976 Viking GCMS organic-detection mystery.",
          imagePath: "assets/photos/phoenix_robotic_arm_scoop.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Phoenix Robotic Arm scoop holding Martian polar soil above the trench workspace (PIA10732).",
          imageCredit: "NASA / JPL-Caltech / UA (PIA10732)"
        },
        {
          stepNumber: "03",
          date: "26 Nov 2018 – Feb 2019 • InSight Sols 1–80",
          shortTitle: "InSight Lands at Elysium Planitia & Places SEIS & HP³ on Ground",
          missionPhase: "InSight Landing & Surface Instrument Placement",
          statusText: "LANDED 26 NOV 2018 • SEIS (19 DEC) & HP³ (12 FEB) DEPLOYED",
          whatHappened:
            "On 26 November 2018, InSight touched down at Homestead Hollow (4.5024° N, 135.6234° E). Its Instrument Deployment Arm lifted SEIS onto the ground on 19 December 2018 (Sol 22), covered it with the Wind and Thermal Shield on 2 February 2019, and placed the HP³ heat-flow probe on 12 February 2019.",
          whatArtifactEnabled:
            "First robotic crane placement of scientific instruments directly onto the surface of another planet.",
          scientificConnection:
            "Detected the first confirmed marsquake on Sol 128 (6 April 2019).",
          imagePath: "assets/photos/insight_seis_wtshield_hp3.jpg",
          imageType: "Historical Photograph",
          imageCaption: "SEIS under its white Wind and Thermal Shield alongside the HP³ mole on the ground at Homestead Hollow (PIA23177).",
          imageCredit: "NASA / JPL-Caltech (PIA23177)"
        },
        {
          stepNumber: "04",
          date: "2019 – 15 December 2022 • InSight Sols 100–1440",
          shortTitle: "1,300+ Marsquakes, Liquid Core Measurement & Dusty Finale",
          missionPhase: "Deep Interior Discovery & Power Exhaustion",
          statusText: "1,319 MARSQUAKES • LIQUID CORE MAPPED • LAST CONTACT 15 DEC 2022",
          whatHappened:
            "While the HP³ mole could not hammer past ~40 cm in cohesive duricrust (ending attempts in Jan 2021), SEIS and RISE mapped Mars's interior across 1,319 detected marsquakes—including a magnitude 4.7 quake (May 2022) and large meteoroid impacts. Coated in thick dust, InSight sent its final communication on 15 December 2022 (mission ended 21 Dec 2022).",
          whatArtifactEnabled:
            "Ingenious 'sand-trickle' arm cleanings kept SEIS running into late 2022.",
          scientificConnection:
            "Provided the first direct seismic measurements of the crust, mantle, and liquid core of any planet besides Earth.",
          imagePath: "assets/photos/insight_dusty_selfie.jpg",
          imageType: "Historical Photograph",
          imageCaption: "InSight's final dusty selfie on Elysium Planitia (PIA25287).",
          imageCredit: "NASA / JPL-Caltech (PIA25287)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "One Spacecraft Heritage, Two Distinct Windows Into Mars",
      summary:
        "Phoenix and InSight demonstrated how a single proven three-legged propulsive lander platform could be tailored first as a polar ice-excavating chemical laboratory (Phoenix, 2008) and a decade later as a precision robotic crane and deep-interior geophysical observatory (InSight, 2018–2022).",
      metrics: [
        { value: "68.22° N", label: "Phoenix Polar Site", note: "Northernmost Mars landing; excavated shallow water ice over 152 sols (2008)" },
        { value: "1,319", label: "Marsquakes Detected", note: "Recorded by InSight's surface-placed SEIS seismometer over 1,440 sols (2018–2022)" },
        { value: "~1,830 km", label: "Mars Liquid Core Radius", note: "Measured by InSight SEIS core-reflected seismic waves and RISE Doppler tracking" },
        { value: "pH 7.7", label: "Phoenix MECA Soil Chemistry", note: "Mildly alkaline polar soil containing CaCO₃ and 0.4–0.6% perchlorate salts (ClO₄⁻)" }
      ],
      challenges: [
        {
          badge: "PHOENIX CHALLENGES",
          title: "Clumpy Polar Soil in TEGA Screens & Concrete-Hard Permafrost",
          summary: "Cohesive arctic soil initially bridged across TEGA's 1-mm screen and resisted simple blade scraping.",
          details: [
            "Controllers vibrated TEGA Oven 4's screen over multiple sols and switched to sprinkling smaller soil quantities.",
            "To sample rock-hard icy permafrost before it sublimated or stuck to the scoop, engineers used the high-speed motorized rasp bit in the heel of the scoop."
          ]
        },
        {
          badge: "INSIGHT CHALLENGES",
          title: "HP³ 'Mole' Lack of Soil Friction (~40 cm Depth) & Uncleaned Solar Dust",
          summary: "Homestead Hollow's thick cohesive duricrust thwarted the self-hammering heat probe.",
          details: [
            "Because the soil formed an open pit around the mole rather than collapsing to provide hull friction, the mole bounced in place.",
            "Engineers lifted the support housing and used the robotic arm scoop to pin the mole sideways and pack soil over it—burying the 40-cm body just below the surface—before ending hammering in Jan 2021.",
            "To combat relentless dust buildup on the solar arrays, controllers poured scoopfuls of coarse sand into the wind above the deck so saltating grains knocked off fine dust."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "3D Model Availability (InSight Verified GLBs vs. Phoenix Document Diagram)",
          resolution:
            "Per the Phoenix & InSight 3D Verification Addendum (V2/V3/V4), NASA provides official downloadable 3D GLBs only for InSight (4 cruise/deployment states + JPL surface mesh), while no verified official NASA 3D model exists for Phoenix. Phoenix is therefore presented through its official JPL technical diagrams with the explanation panel directly below the diagram."
        }
      ]
    },

    sources: [
      { id: "PI-S1", title: "The Phoenix Mars Lander Robotic Arm (Bonitz et al., JPL / IEEE Aerospace Report)", url: "https://science.nasa.gov/mission/phoenix/", role: "Primary technical source for Phoenix's 2.35-m 4-DOF Robotic Arm, 2.14-m workspace diagram, motorized rasp, RAC, TECP, TEGA, and MECA." },
      { id: "PI-S2", title: "NASA Science — Phoenix (2008) & InSight (2018–2022) Mission Archives", url: "https://science.nasa.gov/mission/insight/", role: "Official NASA records for Phoenix (sublimating ice, perchlorates, pH 7.7, snow) and InSight (1,319 marsquakes, liquid core, HP³ mole)." },
      { id: "PI-S3", title: "NASA 3D Resources — InSight Lander 4-Configuration GLB Models (Brian E. Kumanchik & JPL-Caltech)", url: "https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Models", role: "Official NASA 3D models rendered in the InSight 4-State Configuration Switcher." }
    ]
  },

  // ==========================================================================
  // EXHIBIT 09 (MARS WING): INGENUITY MARS HELICOPTER (2021–2024)
  // ==========================================================================
  ingenuity_mars: {
    artifact_id: "ingenuity_mars",
    destination: "mars",
    atlasLocationId: "loc_ingenuity_mars",
    artifact_name: "Ingenuity Mars Helicopter",
    official_full_name: "Mars Helicopter Scout — Ingenuity (Deployed from Mars 2020 Perseverance Rover)",
    subtitle: "The First Powered, Controlled Aerodynamic Flight on Another World • 72 Flights Across Jezero Crater",
    mission: "Mars 2020 — Perseverance & Ingenuity",
    statusBadge: "VERIFIED EXHIBIT • INTERACTIVE COAXIAL ROTOR SPIN 3D VIEWER",
    heroImage: "assets/photos/ingenuity_deployed_airfield.jpg",
    heroImageType: "Historical Photograph",
    heroImageCaption:
      "Ingenuity standing upright on its four carbon-fiber landing legs at 'Wright Brothers Field' (Octavia E. Butler Landing) inside Jezero Crater after dropping from the belly of the Perseverance rover (PIA24584).",
    heroImageCredit: "NASA / JPL-Caltech (PIA24584)",
    heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA24584",

    identityCard: {
      artifact: "Ingenuity Mars Helicopter (Mars Helicopter Technology Demonstrator)",
      destinationSite:
        "Jezero Crater — Deployed at Wright Brothers Field (18.4447° N, 77.4508° E) → Final landing at 'Valinor Hills' / Airfield Chi (~18.497° N, 77.316° E)",
      hostSpacecraft: "Carried to Mars stowed horizontally beneath the belly of the Mars 2020 Perseverance Rover",
      launchAndLandingDates: "Launched 30 July 2020 • Landed in Jezero Crater 18 February 2021 • Deployed onto surface 3 April 2021",
      firstFlightDate: "19 April 2021, 07:34 UTC (03:34 PDT / 12:33 Local Mean Solar Time on Mars — 3.0 m altitude, 39.1 s duration)",
      finalFlightDate: "18 January 2024 (Flight 72 — ~12 m vertical check flight; hard landing damaged rotor blade tips; mission end announced 25 Jan 2024)",
      dimensionsAndMass:
        "Mass: 1.8 kg (4.0 lb on Earth; ~0.68 kg equivalent weight in Mars's 0.38 g) • Coaxial rotor diameter: 1.2 m (4.0 ft) • Height: 0.49 m (19 in) • Fuselage box: 13.6 × 19.5 × 16.3 cm",
      flightRecords:
        "72 completed flights (vs. 5 planned over 30 sols) • Total flight time: 128.8 minutes (>2 hours 8 minutes) • Total distance flown: ~17.0 km (10.5 mi) • Max altitude: 24.0 m (Flight 61) • Max groundspeed: 10.0 m/s (Flights 62, 68, 69)",
      builder: "NASA Jet Propulsion Laboratory (JPL) in collaboration with AeroVironment Inc., NASA Ames Research Center, and NASA Langley Research Center"
    },

    narrative_script: {
      editorialDisclaimer:
        "Museum Storytelling Note: First-person narration is an interpretive device. Ingenuity was an autonomous planetary rotorcraft designed and operated by NASA/JPL.",
      shortIntroduction:
        "I am Ingenuity, a 1.8-kilogram coaxial helicopter built to attempt something many thought nearly impossible: powered, controlled aerodynamic flight in an atmosphere with barely 1 percent of Earth's sea-level density. Carried to Jezero Crater tucked horizontally beneath the belly of the Perseverance rover, I was designed for just five short test flights over 30 Martian sols. Instead, I flew 72 times across nearly three Earth years—scouting ancient river deltas, dunes, and boulder fields from the Martian sky.",
      fullStoryParagraphs: [
        {
          heading: "How Do You Fly Where the Air Is As Thin As 100,000 Feet Above Earth?",
          text: "Mars has 38 percent of Earth's gravity, but its carbon-dioxide atmosphere at Jezero Crater has only about 1 to 1.5 percent of Earth's sea-level air density. To generate lift in that near-vacuum, my entire body had to weigh just 1.8 kilograms while spinning two counter-rotating 1.2-meter sculpted carbon-fiber-over-foam rotors at 2,400 to 2,800 revolutions per minute—about five times faster than a terrestrial passenger helicopter!"
        },
        {
          heading: "Five-Hundred-Hertz Autonomous Control and a Postage-Stamp Fragment of Kitty Hawk",
          text: "Because radio signals take 5 to 20 minutes to travel between Earth and Mars, no human pilot could steer me with a joystick. During every flight, my downward-looking 30-frames-per-second monochrome Navigation Camera, Garmin laser altimeter, and inertial measurement unit tracked surface features inside a 500-Hz control loop to adjust my upper and lower swashplates automatically. Wrapped around the cable beneath my top solar panel sat a postage-stamp-sized swatch of muslin fabric from the Wright brothers' 1903 Wright Flyer."
        },
        {
          heading: "19 April 2021: Thirty-Nine Seconds at Wright Brothers Field",
          text: "After unfolding from Perseverance's belly and surviving my first freezing −80°C night alone on the ground on 3 April 2021, I encountered a watchdog timer issue during a high-speed spin test that engineers solved with a flight-software patch. Then, at 12:33 Local Mean Solar Time on 19 April 2021, I spun up my blades, climbed 3 meters into the Martian air, hovered, turned 96 degrees, and touched back down after 39.1 seconds—achieving the first powered, controlled aerodynamic flight on another planet."
        },
        {
          heading: "From Five-Flight Tech Demo to 72-Flight Aerial Scout",
          text: "After completing my five planned flights, NASA promoted me to an operational demonstration phase, scouting ahead of Perseverance across South Séítah (Flight 9), sprinting 704 meters in a single flight (Flight 25), surviving freezing winter dust-season brownouts via morning cold reboots, climbing to a record 24 meters altitude (Flight 61), and flying at 10 meters per second (Flights 62, 68, and 69)."
        },
        {
          heading: "Flight 72 at Valinor Hills: Damaged Rotor Tips, Still Standing Upright",
          text: "On Flight 71 (6 January 2024), flying over smooth, featureless sand ripples in Neretva Vallis starved my downward visual navigation camera of trackable rocks, triggering an early emergency landing. On 18 January 2024, I lifted off to 12 meters on Flight 72 to check my position. During descent over those same featureless dunes, high horizontal velocity at touchdown caused my spinning carbon-fiber blades to flex and strike the sand slope—snapping the tip off one blade and damaging the others. Yet I remained upright on all four legs, still charging my batteries and communicating with Perseverance from my final airfield at Valinor Hills."
        }
      ]
    },

    viewer3d: {
      available: true,
      glbPath: "assets/models/Ingenuity Mars Helicopter.glb",
      modelTitle: "Ingenuity Mars Helicopter — Interactive 360° 3D Viewer with Coaxial Rotor Spin",
      provenanceBadge: "OFFICIAL NASA 3D RESOURCE • COUNTER-ROTATING COAXIAL ROTOR ANIMATION",
      provenanceNote:
        "Official NASA 3D Model Note: This official NASA/JPL 3D model (by Brian E. Kumanchik, NASA 3D Resources) contains 11 individually named scene-graph nodes including separate upper (`rotors_01`) and lower (`rotors_02`) coaxial rotor assemblies. Use the 'Spin Coaxial Rotors' control in the toolbar to watch the upper and lower blades counter-rotate in opposite directions!",
      sourceUrl: "https://science.nasa.gov/resource/ingenuity-mars-helicopter-3d-model/",
      enableRotorSpin: true,
      stageModes: [
        { id: "full", label: "Deployed Flight Configuration (3D Model)" }
      ],
      hotspots: [
        {
          id: "ing_hs_1",
          code: "01",
          stage: "full",
          position: [0.0, 0.46, 0.0],
          name: "Solar Array & 900-MHz Zigbee Antenna (Top Cap + Kitty Hawk Fabric)",
          category: "Solar Charging & Rover Radio Link",
          whatItIs: "Rectangular high-efficiency solar cell panel mounted above the coaxial mast with a central 900-MHz quarter-wave antenna.",
          howItWorked: "Recharged Ingenuity's six Sony Li-ion batteries between flights (providing ~350 Wh for overnight survival heaters and ~10% energy for a 90-second flight) and linked via 900-MHz Zigbee radio to Perseverance up to ~1 km away.",
          missionRole: "Beneath this solar panel, engineers attached a small swatch of original unbleached muslin wing fabric from the 1903 Wright Flyer.",
          sourceNote: "NASA/JPL Ingenuity Press Kit (2021)"
        },
        {
          id: "ing_hs_2",
          code: "02",
          stage: "full",
          position: [0.35, 0.36, 0.0],
          name: "Upper & Lower Counter-Rotating Carbon-Fiber Rotors (1.2 m Span)",
          category: "Coaxial Lift System (2,400–2,800 RPM)",
          whatItIs: "Two four-bladed counter-rotating coaxial rotors (1.2 m / 4 ft tip-to-tip) molded from ultra-stiff carbon-fiber skins over a structural foam core (~35 grams per blade pair).",
          howItWorked: "Spinning in opposite directions cancelled torque without needing a tail rotor, while specialized low-Reynolds-number airfoils spun at 2,400–2,800 RPM to bite into Mars's 1% density atmosphere.",
          missionRole: "Powered 72 flights totaling 128.8 minutes. During hard touchdown on Flight 72 (18 Jan 2024), blade strike against the sand slope snapped off a rotor tip (PIA26243), ending flight capability while the fuselage stayed upright.",
          sourceNote: "NASA/JPL Ingenuity Aerodynamics & PIA26243"
        },
        {
          id: "ing_hs_3",
          code: "03",
          stage: "full",
          position: [0.0, 0.28, 0.0],
          name: "Dual Swashplates, Servo Actuators & Propulsion Motors",
          category: "500-Hz Collective & Cyclic Pitch Control",
          whatItIs: "Precision machined titanium/aluminum upper and lower swashplates driven by six micro-servos and two hand-wound brushless propulsion motors around the hollow carbon-fiber mast.",
          howItWorked: "Changed collective blade pitch together to climb/descend and tilted cyclic blade pitch 500 times per second to pitch, roll, yaw, and counter Martian wind gusts.",
          missionRole: "Survived a Flight 6 in-flight camera timestamp glitch by damping out 20° pitch/roll oscillations and landing safely.",
          sourceNote: "Grip et al., JPL Ingenuity Flight Control Report"
        },
        {
          id: "ing_hs_4",
          code: "04",
          stage: "full",
          position: [0.0, 0.14, 0.07],
          name: "Tissue-Box Fuselage, Aerogel Gap & Avionics Cube (1.8 kg Total)",
          category: "Thermal & Flight Computer Enclosure",
          whatItIs: "13.6 × 19.5 × 16.3 cm ultra-lightweight kapton-foiled outer box enclosing a CO₂-gas-gap insulated inner battery/avionics cube.",
          howItWorked: "Paired a radiation-tolerant microcontroller (running the 500-Hz control loop) with a Qualcomm Snapdragon 801 processor (handling 30-Hz visual odometry) and six Li-ion cells.",
          missionRole: "Endured nearly three Earth years of −80°C Jezero Crater nights, surviving dusty winter power brownouts that reset its internal clock.",
          sourceNote: "Balaram et al., JPL Mars Helicopter Design"
        },
        {
          id: "ing_hs_5",
          code: "05",
          stage: "full",
          position: [0.0, 0.07, 0.08],
          name: "Downward Navigation Camera (Navcam), Color RTE Camera & Laser Altimeter",
          category: "Optical Navigation & Terrain Sensing (Bottom Plate)",
          whatItIs: "Nadir-pointing 0.5-MP global-shutter monochrome Navcam, 45°-angled 13-MP color Return-to-Earth (RTE) camera, and Garmin LIDAR Lite v3 laser altimeter mounted on the bottom of the fuselage.",
          howItWorked: "Navcam tracked rocks and surface texture at 30 frames/second while the laser altimeter measured height above ground; the 13-MP color camera photographed outcrops and even Perseverance's discarded backshell/parachute.",
          missionRole: "On Flights 71 and 72 over featureless sand ripples in Neretva Vallis, the scarcity of high-contrast surface features confused the Navcam velocity estimator, leading to the hard lateral touchdown on 18 January 2024.",
          sourceNote: "NASA/JPL Flight 72 Anomaly Assessment (Dec 2024)"
        },
        {
          id: "ing_hs_6",
          code: "06",
          stage: "full",
          position: [0.18, -0.05, 0.18],
          name: "Four Ultra-Light Carbon-Fiber Landing Legs (0.384 m Each)",
          category: "Spring-Damped Touchdown Gear",
          whatItIs: "Four splayed tapered carbon-fiber-tube legs with flexible titanium fold hinges and compliant damping feet.",
          howItWorked: "Dropped down and locked into place when Ingenuity rotated down from Perseverance's belly on 3 April 2021; absorbed vertical and horizontal landing loads without bouncing.",
          missionRole: "Kept Ingenuity standing upright across all 72 landings—including the final hard touchdown at Valinor Hills.",
          sourceNote: "NASA/JPL Ingenuity Mechanical Systems"
        }
      ]
    },

    diagrams: [
      {
        id: "ing_diag_stowed",
        title: "1. State A: Stowed Horizontally Beneath Perseverance's Belly (Sol 39, PIA24490)",
        imagePath: "assets/photos/ingenuity_stowed_perseverance.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech / MSSS (PIA24490)",
        caption:
          "WATSON camera view underneath the Perseverance rover showing Ingenuity mid-deployment as it rotated from its horizontal belly-stowed position to vertical before the 10-cm final drop onto Wright Brothers Field.",
        credit: "NASA / JPL-Caltech / MSSS (PIA24490)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA24490"
      },
      {
        id: "ing_diag_damaged_rotor",
        title: "2. State C: Post-Flight 72 Damaged Rotor Blade & Shadow at Valinor Hills (PIA26243)",
        imagePath: "assets/photos/ingenuity_flight72_damaged_rotor.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech / ASU (PIA26243 — January 2024)",
        caption:
          "Post-Flight 72 image showing Ingenuity standing upright in the Neretva Vallis dunes ('Valinor Hills') with a broken carbon-fiber rotor blade tip visible after striking the sloped sand ripple during its final descent on 18 January 2024.",
        credit: "NASA / JPL-Caltech / ASU (PIA26243)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA26243"
      },
      {
        id: "ing_diag_hard_landing",
        title: "3. Flight 72 Final Descent & Rotor-Strike Assessment Sequence (PIA26482)",
        imagePath: "assets/photos/ingenuity_hard_landing_sequence.jpg",
        visualType: "Historical Photograph",
        pressKitPage: "NASA / JPL-Caltech (PIA26482)",
        caption:
          "Navcam and engineering sequence documenting how featureless sand ripples on Flight 72 (18 January 2024) induced lateral velocity errors during touchdown, causing blade contact with the dune slope.",
        credit: "NASA / JPL-Caltech (PIA26482)",
        sourceUrl: "https://photojournal.jpl.nasa.gov/catalog/PIA26482"
      }
    ],

    timeline: {
      chronologyNote:
        "First Flight Timestamp Precision: Ingenuity's historic Flight 1 occurred on 19 April 2021 at 07:34 UTC (03:34 AM PDT at JPL Mission Control / 12:33 Local Mean Solar Time on Mars, chosen for peak solar energy and favorable midday wind modeling).",
      events: [
        {
          stepNumber: "01",
          date: "3–19 April 2021 • Flight 1",
          shortTitle: "Belly Drop & First Powered Flight on Another Planet (19 Apr 2021)",
          missionPhase: "Technology Demonstration (Flights 1–5)",
          statusText: "FLIGHT 1: 3.0 M ALTITUDE • 39.1 SECONDS • KITTY HAWK MOMENT",
          whatHappened:
            "Dropped 10 cm from Perseverance's belly onto Wright Brothers Field on 3 April 2021, Ingenuity survived its first freezing night alone and received a watchdog-timer software patch. At 07:34 UTC on 19 April 2021 (12:33 LMST), Ingenuity spun its blades to ~2,537 RPM, climbed 3.0 meters, hovered, pivoted 96°, and landed safely after 39.1 seconds.",
          whatArtifactEnabled:
            "Proved that powered, controlled aerodynamic flight is possible in Mars's 1% density atmosphere.",
          scientificConnection:
            "Completed all 5 planned technology-demonstration flights by 7 May 2021, earning transition to an Operational Demonstration Phase.",
          imagePath: "assets/photos/ingenuity_deployed_airfield.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Ingenuity on Wright Brothers Field in Jezero Crater prior to its historic first flight (PIA24584).",
          imageCredit: "NASA / JPL-Caltech (PIA24584)"
        },
        {
          stepNumber: "02",
          date: "May 2021 – April 2022 • Flights 6–25",
          shortTitle: "Flight 6 Anomaly Survival, South Séítah Scouting & 704 m Sprint",
          missionPhase: "Operational Reconnaissance Phase",
          statusText: "FLIGHT 9: 625 M SCOUT • FLIGHT 25: RECORD 704 M SINGLE FLIGHT",
          whatHappened:
            "On Flight 6 (22 May 2021), a dropped Navcam image frame caused timestamp mismatches and ±20° pitch/roll oscillations that Ingenuity's control system survived to land safely. On Flight 9 (5 July 2021), Ingenuity flew 625 m across impassable sand dunes in South Séítah to scout outcrops for Perseverance, and on Flight 25 (8 April 2022) set its single-flight distance record of 704 meters.",
          whatArtifactEnabled:
            "Photographed the shattered Mars 2020 backshell and supersonic parachute from the air on Flight 26 (19 April 2022) to aid Mars Sample Return engineers.",
          scientificConnection:
            "Guided Perseverance's geological path across the Jezero crater floor and toward the ancient river delta.",
          imagePath: "assets/photos/ingenuity_stowed_perseverance.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Ingenuity unfolding beneath Perseverance prior to its 72-flight campaign (PIA24490).",
          imageCredit: "NASA / JPL-Caltech / MSSS (PIA24490)"
        },
        {
          stepNumber: "03",
          date: "2022 – Late 2023 • Flights 26–70",
          shortTitle: "Winter Dust Survival, Delta Ascent & 24 m / 10 m/s Records",
          missionPhase: "Jezero River Delta & Neretva Vallis Campaign",
          statusText: "MAX ALTITUDE: 24 M (FLIGHT 61) • MAX SPEED: 10 M/S (FLIGHTS 62/68/69)",
          whatHappened:
            "During dusty Martian winter (May 2022), Ingenuity's inclinometer sensor failed and low solar power caused overnight battery brownouts; engineers patched the software to initialize attitude using the IMU accelerometers alone and flew short daytime hops. Climbing onto the ancient Jezero river delta in 2023, Ingenuity reached a record 24.0 m altitude on Flight 61 (5 Oct 2023) and 10.0 m/s groundspeed on Flights 62, 68, and 69.",
          whatArtifactEnabled:
            "Operated through narrow canyon walls where radio line-of-sight with Perseverance briefly dropped out on Flight 50–52.",
          scientificConnection:
            "Scouted high-energy boulder conglomerates in the Neretva Vallis inflow channel.",
          imagePath: "assets/photos/ingenuity_deployed_airfield.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Ingenuity standing on the floor of Jezero Crater (PIA24584).",
          imageCredit: "NASA / JPL-Caltech (PIA24584)"
        },
        {
          stepNumber: "04",
          date: "18 January 2024 • Flight 72",
          shortTitle: "Featureless Dune Navigation Error & Rotor Blade Strike at Valinor Hills",
          missionPhase: "Final Flight & Stationary Weather/Avionics Legacy",
          statusText: "72 FLIGHTS • 128.8 MIN • ~17.0 KM • REMAINS UPRIGHT & ACTIVE",
          whatHappened:
            "After an early landing on Flight 71 over bland sand ripples, Ingenuity performed a vertical 12-meter check hop on 18 January 2024 (Flight 72). With few visual features on the smooth dunes below, the Navcam optical-flow algorithm accumulated horizontal velocity error during descent; striking the sloped sand ripple caused the high-speed carbon-fiber blades to flex and snap a blade tip. NASA announced the end of flight operations on 25 January 2024.",
          whatArtifactEnabled:
            "Crucial Distinction: Ingenuity did NOT crash into pieces or lose power—it landed upright on all four legs, remained in communication with Perseverance, and was configured to record long-term temperature and avionics data at 'Valinor Hills.'",
          scientificConnection:
            "Completed 72 flights (14× planned), 128.8 minutes aloft, and ~17.0 km distance—proving the engineering blueprint for future Mars Sample Return helicopters and Titan's Dragonfly.",
          imagePath: "assets/photos/ingenuity_flight72_damaged_rotor.jpg",
          imageType: "Historical Photograph",
          imageCaption: "Ingenuity at Valinor Hills after Flight 72 showing its damaged rotor blade tip while standing upright (PIA26243).",
          imageCredit: "NASA / JPL-Caltech / ASU (PIA26243)"
        }
      ]
    },

    scienceAndEngineering: {
      headline: "Thin-Atmosphere Aerodynamics: 1.8 Kilograms, 1.2-Meter Blades, 2,400–2,800 RPM",
      summary:
        "Ingenuity was an aerodynamic technology demonstrator rather than a science-instrument carrier, yet its 13-MP color camera and 72-flight campaign transformed how rovers explore Mars—scouting impassable dunes, river-delta strata, and entry hardware from the air.",
      metrics: [
        { value: "72 Flights", label: "Completed Sorties", note: "19 Apr 2021 – 18 Jan 2024 (vs. 5 planned flights over 30 sols)" },
        { value: "128.8 min", label: "Total Time Aloft", note: ">2 hours 8 minutes cumulative aerodynamic flight in ~1% Earth air density" },
        { value: "~17.0 km", label: "Total Distance Flown", note: "Single-flight distance record: 704 m on Flight 25 (8 Apr 2022)" },
        { value: "24 m / 10 m/s", label: "Altitude & Speed Records", note: "24.0 m max altitude (Flight 61) • 10.0 m/s max speed (Flights 62, 68, 69)" }
      ],
      challenges: [
        {
          badge: "IN-FLIGHT & WINTER ANOMALIES",
          title: "Watchdog Timer (Pre-Flight 1), Flight 6 Image Drop & Inclinometer Failure",
          summary: "JPL engineers updated Ingenuity's software in flight across three years on Mars.",
          details: [
            "April 2021: A watchdog timer expiration prevented transition to Flight Mode during high-speed spin testing; patched via command sequence tweak and flight-software update.",
            "Flight 6 (22 May 2021): A single dropped Navcam image skewed timestamps, causing ±20° oscillations that the control loop damped to land safely.",
            "May 2022: When the MEMS inclinometer failed in winter cold, engineers uploaded a patch allowing the IMU accelerometers to estimate pre-flight tilt."
          ]
        },
        {
          badge: "FLIGHT 72 ROOT CAUSE",
          title: "Featureless Sand Ripples & High-Slope Blade Strike (18 January 2024)",
          summary: "Why did Ingenuity's 72nd landing damage its carbon-fiber rotor blades?",
          details: [
            "Ingenuity's visual navigation system required rocks and texture on the ground to measure horizontal velocity.",
            "Over the monochrome, featureless sand ripples of Neretva Vallis on Flights 71 and 72, the Navcam lacked trackable features, inducing lateral velocity at touchdown on a steep sand ripple.",
            "Ground impact flexed the spinning rotor blades enough to snap a blade tip—ending flight capability while leaving the helicopter upright, powered, and communicating."
          ]
        }
      ],
      discrepanciesAndTransparency: [
        {
          topic: "Atmospheric Density (~1% vs 1–1.5% / <3%) & Rotor RPM (2,400 vs 2,537–2,800 RPM)",
          resolution:
            "At Jezero Crater's elevation, surface air density is ~1–1.5% of Earth sea level (changing seasonally with temperature and CO₂ condensation). Ingenuity spun its rotors at ~2,400–2,537 RPM during early warm-season flights and increased rotor speed up to ~2,700–2,800 RPM when seasonal air density dropped."
        }
      ]
    },

    sources: [
      { id: "ING-S1", title: "NASA Science — Ingenuity Mars Helicopter Mission Page & Official Flight Log (Flights 1–72)", url: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/", role: "Official NASA log of all 72 flights (128.8 min, ~17.0 km, 24 m max altitude, 10 m/s max speed)." },
      { id: "ING-S2", title: "Ingenuity Mars Helicopter Landing Press Kit & Flight 72 Assessment (NASA/JPL-Caltech)", url: "https://photojournal.jpl.nasa.gov/catalog/PIA26482", role: "Primary technical documentation of Ingenuity's 1.8 kg coaxial design, 500-Hz control loop, and Flight 72 featureless-terrain blade strike." },
      { id: "ING-S3", title: "NASA 3D Resources — Ingenuity Mars Helicopter GLB (Brian E. Kumanchik)", url: "https://science.nasa.gov/resource/ingenuity-mars-helicopter-3d-model/", role: "Official NASA 3D model with separate counter-rotating `rotors_01` and `rotors_02` nodes rendered in the 360° viewer." }
    ]
  }
};

// ============================================================================
// ACTIVATE ALL 4 MOON & 5 MARS EXHIBITS IN WINDOW.MUSEUM_DATA
// ============================================================================
(function unlockAllMuseumCollections() {
  if (!window.MUSEUM_DATA) return;
  const D = window.MUSEUM_DATA;

  // Clean up any // slashes in project / destinations / LRV pilot
  D.project.version = "2.0 — Complete 9-Exhibit Archival Museum & Planetary Atlas";

  if (D.destinations && D.destinations.items) {
    const moonDest = D.destinations.items.find((i) => i.id === "moon");
    if (moonDest) {
      moonDest.status = "4 ACTIVE EXHIBITS • MOON ATLAS READY";
      moonDest.stats = [
        { label: "Active Exhibits", value: "4 Verified Exhibits" },
        { label: "Planetary Atlas", value: "Moon Atlas (LRO WAC)" },
        { label: "Environment", value: "1/6 g • Hard Vacuum" }
      ];
    }
    const marsDest = D.destinations.items.find((i) => i.id === "mars");
    if (marsDest) {
      marsDest.status = "5 ACTIVE EXHIBITS • MARS ATLAS READY";
      marsDest.stats = [
        { label: "Active Exhibits", value: "5 Verified Exhibits (7 Craft)" },
        { label: "Planetary Atlas", value: "Mars Atlas (Viking + MOLA)" },
        { label: "Environment", value: "0.38 g • CO₂ Atmosphere" }
      ];
    }
  }

  // Update Moon Collection Groups (All 4 Unlocked!)
  D.collections.moon.wingCode = "WING 01 • LUNA — EARTH'S MOON";
  D.collections.moon.groups = [
    {
      groupId: "lrv_group",
      groupTitle: "Lunar Roving Vehicles (Apollo 15, 16, 17)",
      groupCategory: "Crewed Surface Mobility Systems",
      status: "active",
      statusLabel: "Verified Exhibit • Interactive Press Kit Blueprints",
      featuredArtifact: {
        artifact_id: "lrv_apollo15",
        atlasLocationId: "loc_lrv_apollo15",
        artifact_name: "Lunar Roving Vehicle (Apollo 15)",
        mission: "Apollo 15 (LRV-1)",
        designation: "First Crewed Planetary Rover",
        site: "Hadley–Apennine (26.1322° N, 3.6339° E)",
        dates: "Deployed 31 July 1971 • Active through 2 August 1971",
        heroImage: "assets/photos/v1_apollo15_on_moon.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA (AS15-86-11603)",
        heroImageSource: "https://science.nasa.gov/resource/apollo-15-on-the-moon/",
        summary:
          "Folded into Quadrant 1 of the Lunar Module Falcon, this battery-powered, four-wheel-drive electric vehicle carried David Scott and James Irwin 27.9 km across the Apennine Front, Spur Crater (Genesis Rock 15415), and Hadley Rille.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Collection group also encompasses Apollo 16 (LRV-2) and Apollo 17 (LRV-3)."
      }
    },
    {
      groupId: "apollo_lm_group",
      groupTitle: "Apollo Lunar Modules",
      groupCategory: "Crewed Two-Stage Descent & Ascent Spacecraft",
      status: "active",
      statusLabel: "Verified Exhibit • Interactive 360° 3D Model",
      featuredArtifact: {
        artifact_id: "falcon_apollo15",
        atlasLocationId: "loc_falcon_apollo15",
        artifact_name: "Falcon — Apollo 15 Lunar Module (LM-10)",
        mission: "Apollo 15 (Extended J-Series)",
        designation: "Two-Stage Crewed Lunar Lander",
        site: "Hadley–Apennine (26.13239° N, 3.63330° E)",
        dates: "Landed 30 July 1971 • 66h 55m Surface Stay • Liftoff 2 Aug 1971",
        heroImage: "assets/photos/s3_falcon_lunar_module.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA (AS15-87-11782)",
        heroImageSource: "https://www.nasa.gov/mission/apollo-15/",
        summary:
          "The first Extended J-Series Apollo Lunar Module. Flew a steep 26° approach over the Apennine Mountains (739.2 s burn), supported nearly three days on the Moon, left its Descent Stage at Hadley, and crashed its Ascent Stage 93 km west for seismic science.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes interactive 360° 3D Apollo Lunar Module reference model & LM-10 modification schematics."
      }
    },
    {
      groupId: "alsep_group",
      groupTitle: "ALSEP Scientific Packages",
      groupCategory: "Autonomous Nuclear-Powered Geophysical Stations",
      status: "active",
      statusLabel: "Verified Exhibit • Interactive Array A-2 Site Plan",
      featuredArtifact: {
        artifact_id: "alsep_apollo15",
        atlasLocationId: "loc_alsep_apollo15",
        artifact_name: "Apollo 15 ALSEP — Array A-2",
        mission: "Apollo 15 Surface Observatory",
        designation: "SNAP-27 Nuclear Geophysical Station",
        site: "Hadley–Apennine (26.13406° N, 3.62991° E; ~110 m NW of Falcon)",
        dates: "Commanded On 31 July 1971 (18:37 GMT) • Terminated 30 Sep 1977",
        heroImage: "assets/photos/s2_alsep_central_station.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA (AS15-86-11590)",
        heroImageSource: "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
        summary:
          "The autonomous geophysical station that stayed awake for more than six years after Apollo 15 left the Moon—operating 7 wired experiments powered by a SNAP-27 plutonium-238 generator alongside the 300-prism Laser Ranging Retroreflector still used today.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes interactive 1971 Press Kit Array A-2 station map & SNAP-27 power flow."
      }
    },
    {
      groupId: "surveyor_group",
      groupTitle: "Surveyor Landers",
      groupCategory: "Robotic Precursor Landers & Human Rendezvous",
      status: "active",
      statusLabel: "Verified Exhibit • SP-284 Diagrams & Recovered Parts",
      featuredArtifact: {
        artifact_id: "surveyor3",
        atlasLocationId: "loc_surveyor3",
        artifact_name: "Surveyor 3",
        mission: "Surveyor 3 (1967) & Apollo 12 Visit (1969)",
        designation: "The Mission That Was Visited Twice",
        site: "Oceanus Procellarum — Surveyor Crater (2.94° S, 23.34° W)",
        dates: "Landed 20 April 1967 • Visited by Apollo 12 on 20 November 1969",
        heroImage: "assets/photos/surveyor3_apollo12_conrad.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA (AS12-48-7134)",
        heroImageSource: "https://science.nasa.gov/resource/apollo-12-and-surveyor-3/",
        summary:
          "Survived a vernier-powered triple touchdown in April 1967 to dig the Moon's first soil trenches and transmit 6,326 TV frames—then waited 31 months until Apollo 12 astronauts Pete Conrad and Alan Bean landed 155 meters away and brought its camera and scoop back to Earth.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes NASA SP-284 technical diagrams, triple-touchdown analysis, and recovered hardware catalog."
      }
    }
  ];

  // Update Mars Collection Groups (All 5 Unlocked!)
  D.collections.mars.wingCode = "WING 02 • MARS — THE RED PLANET";
  D.collections.mars.environmentSummary =
    "Across the floodplains of Chryse Planitia, the craters of Gusev, Meridiani, and Jezero, the polar permafrost of Vastitas Borealis, and the plains of Utopia and Elysium, NASA's robotic landers, rovers, and rotorcraft transformed Mars from an astronomical point of light into a world of ancient rivers, lakes, hot springs, and marsquakes.";
  D.collections.mars.groups = [
    {
      groupId: "sojourner_group",
      groupTitle: "Sojourner — Mars Pathfinder Micro Rover",
      groupCategory: "First Wheeled Planetary Rover on Mars (1997)",
      status: "active",
      statusLabel: "Verified Exhibit • Rear-Ramp & APXS Rock Inspector",
      featuredArtifact: {
        artifact_id: "sojourner_mpf",
        atlasLocationId: "loc_sojourner_mpf",
        artifact_name: "Sojourner Microrover",
        mission: "Mars Pathfinder (Carl Sagan Memorial Station)",
        designation: "10.5 kg Six-Wheeled Technology Demonstrator",
        site: "Ares Vallis, Chryse Planitia (19.13° N, 33.22° W)",
        dates: "Landed 4 July 1997 • Deployed Sol 2 • Last Signal 27 Sep 1997 (Sol 83)",
        heroImage: "assets/photos/sojourner_on_mars_hero.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA / JPL (PIA00660)",
        heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA00660",
        summary:
          "The microwave-sized six-wheeled pioneer that rolled down Pathfinder's Rear Ramp on 5 July 1997. Insulated with solid silica aerogel, Sojourner outlasted its 7-sol design life nearly twelvefold to analyze Barnacle Bill, Yogi, Wedge, and Shark across 83 sols.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes Rear-Ramp vs. unused Forward-Ramp verification and Sol 1–83 Ares Vallis traverse map."
      }
    },
    {
      groupId: "mer_group",
      groupTitle: "Spirit & Opportunity",
      groupCategory: "Mars Exploration Rovers (MER-A & MER-B)",
      status: "active",
      statusLabel: "Verified Twin Exhibit • Interactive 360° 3D Model & PDS Traverses",
      featuredArtifact: {
        artifact_id: "mer_spirit_opportunity",
        atlasLocationId: "loc_mer_opportunity",
        artifact_name: "Spirit (MER-A) & Opportunity (MER-B)",
        mission: "Mars Exploration Rovers",
        designation: "Two Robotic Geologists • 7.73 km & 45.16 km",
        site: "Spirit: Gusev Crater (14.57° S, 175.47° E) • Opportunity: Meridiani Planum (1.95° S, 354.47° E)",
        dates: "Landed Jan 2004 • Spirit to 22 Mar 2010 (Sol 2210) • Opportunity to 10 Jun 2018 (Sol 5111)",
        heroImage: "assets/photos/mer_opportunity_eagle_crater.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA / JPL / Cornell (PIA05274)",
        heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA05274",
        summary:
          "Sent for 90 sols to 'Follow the Water,' Spirit climbed Husband Hill and uncovered ~90% hydrothermal silica soil at Home Plate before becoming embedded at Troy, while Opportunity discovered hematite 'blueberries' and gypsum veins across a record 45.16-km marathon to Endeavour Crater.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes high-resolution NASA/JPL 3D model and full 487-point / 674-point PDS traverses on the Mars Atlas."
      }
    },
    {
      groupId: "viking_group",
      groupTitle: "Viking 1 & Viking 2 Landers",
      groupCategory: "Nuclear-Powered Surface Landers & Biology Laboratories",
      status: "active",
      statusLabel: "Verified Twin Exhibit • Interactive 360° 3D Model",
      featuredArtifact: {
        artifact_id: "viking_1_2",
        atlasLocationId: "loc_viking1",
        artifact_name: "Viking 1 & Viking 2 Landers",
        mission: "Viking Program (1976–1982)",
        designation: "The First Long Stay on Mars • Twin SNAP-19 Landers",
        site: "Viking 1: Chryse Planitia (22.27° N, 47.95° W) • Viking 2: Utopia Planitia (47.64° N, 225.71° W)",
        dates: "Landed 20 Jul & 3 Sep 1976 • Active to Apr 1980 (VL-2) & Nov 1982 (VL-1)",
        heroImage: "assets/photos/viking1_chryse_panorama.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA / JPL (PIA00393)",
        heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA00393",
        summary:
          "Powered by twin SNAP-19 nuclear generators (no solar panels), Viking 1 and Viking 2 transmitted the first close-up images from the Martian surface, dug the first soil trenches, conducted three famous biology experiments alongside GCMS chemical tests, and monitored Martian weather for over six years.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes interactive 360° 3D Viking Lander model and LR / PR / GEx vs. GCMS biology breakdown."
      }
    },
    {
      groupId: "phoenix_insight_group",
      groupTitle: "Phoenix & InSight Landers",
      groupCategory: "Polar Ice Excavator (2008) & Deep-Interior Seismometer (2018–2022)",
      status: "active",
      statusLabel: "Verified Exhibit • Phoenix Numbered Diagram + InSight 4-State 3D Viewer",
      featuredArtifact: {
        artifact_id: "phoenix_insight",
        atlasLocationId: "loc_phoenix_lander",
        artifact_name: "Phoenix (2008) & InSight (2018–2022)",
        mission: "Mars Scout & Discovery Stationary Landers",
        designation: "Two Stationary Landers • Ice Below • Secrets Within",
        site: "Phoenix: Green Valley (68.22° N, 125.7° W) • InSight: Elysium Planitia (4.50° N, 135.62° E)",
        dates: "Phoenix: May–Nov 2008 (152 Sols) • InSight: Nov 2018 – Dec 2022 (1,440 Sols)",
        heroImage: "assets/photos/insight_seis_wtshield_hp3.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA / JPL-Caltech (PIA23177)",
        heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA23177",
        summary:
          "Built on a shared three-legged Lockheed Martin lander heritage: Phoenix excavated shallow water ice, calcium carbonate, and perchlorate salts in the Martian Arctic (68.2° N), while InSight placed the SEIS seismometer directly onto the ground to record 1,319 marsquakes and measure Mars's liquid core.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes JPL numbered Phoenix diagram (V4 layout) and InSight 4-configuration 3D switcher."
      }
    },
    {
      groupId: "ingenuity_group",
      groupTitle: "Ingenuity Mars Helicopter",
      groupCategory: "First Planetary Aerial Rotorcraft (72 Flights • 2021–2024)",
      status: "active",
      statusLabel: "Verified Exhibit • 360° 3D Model with Counter-Rotating Rotor Spin",
      featuredArtifact: {
        artifact_id: "ingenuity_mars",
        atlasLocationId: "loc_ingenuity_mars",
        artifact_name: "Ingenuity Mars Helicopter",
        mission: "Mars 2020 — Perseverance & Ingenuity",
        designation: "1.8 kg Coaxial Rotorcraft • 72 Flights Across Jezero Crater",
        site: "Jezero Crater: Wright Brothers Field (18.44° N, 77.45° E) to Valinor Hills",
        dates: "First Flight 19 April 2021 • Final Flight (Flight 72) 18 January 2024",
        heroImage: "assets/photos/ingenuity_deployed_airfield.jpg",
        heroImageType: "Historical Photograph",
        heroImageCredit: "NASA / JPL-Caltech (PIA24584)",
        heroImageSource: "https://photojournal.jpl.nasa.gov/catalog/PIA24584",
        summary:
          "Spinning two 1.2-meter carbon-fiber rotors at 2,400–2,800 RPM in an atmosphere with 1% of Earth's density, Ingenuity achieved the first powered, controlled flight on another planet on 19 April 2021 and completed 72 flights (~17.0 km) before a rotor tip strike on featureless sand dunes ended flight operations.",
        ctaLabel: "Open Museum Exhibit",
        siblingUnitsNote: "Includes interactive 360° 3D Ingenuity model with real counter-rotating coaxial blade animation."
      }
    }
  ];
})();
