export const carData = {
  name: "Pagani Zonda R",
  tagline: "Track-Only Hypercar",
  price: "€1,500,000",
  year: "2009",

  hero: {
    title: "PAGANI",
    subtitle: "ZONDA R",
    description: "Not just \"a\" supercar, it's \"the\" supercar",
    cta: "DISCOVER MORE",
  },

  design: {
    title: "DESIGN",
    subtitle: "New Heart, New Guise",
    description: "Flying on the wings of a wind that keeps blowing harder and faster, the Zonda R was designed for the racetrack, and from the racetrack, without limits. This fabulous supercar is ready to display its character in total purity and freedom. The central monocoque in carbon-titanium, more rigid and lighter than ever, represents the outcome of the maximum expression of aesthetic, aerodynamic and ergonomic research carried out at Pagani's atelier.",
    features: [
      { label: "Monocoque", value: "Carbon-Titanium" },
      { label: "Dry Weight", value: "1,070 kg" },
      { label: "Downforce", value: "Up to 1,500 kg" },
    ],
  },

  engine: {
    title: "ENGINE",
    subtitle: "Mercedes-Benz AMG V12",
    description: "The central monocoque in carbon-titanium encases a Mercedes-Benz AMG V12 high-performance racing engine as if it were a precious gem. This four wheel prodigy is able to deliver 750 HP and produce a torque of 710 Nm. The engine is bolted directly to the central monocoque, with direct throttle actuation via mechanical cable ensuring immediate throttle response.",
    specs: [
      { label: "Engine", value: "M120 V12 60°" },
      { label: "Power", value: "750 HP" },
      { label: "Torque", value: "710 Nm @ 5,700 RPM" },
      { label: "0-100 km/h", value: "< 2.7s" },
      { label: "Top Speed", value: "> 350 km/h" },
      { label: "Transmission", value: "6-Speed Sequential" },
    ],
  },

  specs: [
    { icon: "engine", label: "Engine", value: "M120 V12", description: "Mercedes-Benz AMG" },
    { icon: "power", label: "Power", value: "750 HP", description: "Racing Engine" },
    { icon: "torque", label: "Torque", value: "710 Nm", description: "@ 5,700 RPM" },
    { icon: "speed", label: "Top Speed", value: "> 350 km/h", description: "Track Optimized" },
    { icon: "acceleration", label: "0-100", value: "< 2.7s", description: "701 HP/ton" },
    { icon: "weight", label: "Weight", value: "1,070 kg", description: "Dry Weight" },
  ],

  features: [
    {
      title: "Intuitive & Configurable",
      description: "High performance combines with driving simplicity and manoeuvrability, thanks to a 12-stage Bosch Motorsport traction control and ABS system which allows the driver to fully adjust the settings while driving.",
      image: "/interior-cockpit.jpg"
    },
    {
      title: "Brembo Carbon Ceramic Brakes",
      description: "4 ventilated Brembo carbon ceramic discs with 380x34mm front 6-piston calipers and 380x34mm rear 4-piston calipers ensure the car comes to a standstill even quicker than it accelerates.",
      image: "/engineering-chassis.jpg.jpeg"
    },
    {
      title: "XTRAC Sequential Gearbox",
      description: "20 milliseconds is the time needed by the Zonda R to perform gearshifts, thanks to a transversal sequential gearbox in magnesium, enhanced by Xtrac transmission technology and Automac Engineering automation.",
      image: "/powerplant-exhaust.jpg.jpeg"
    },
  ],

  // Extended History Section
  history: {
    title: "THE LEGEND",
    subtitle: "Designed for the Racetrack, Without Limits",
    intro: "Inspired by the F version, this extreme supercar that features a longer wheelbase was created specifically to meet a client's request. It embodies dedicated engineering know-how that represents the outcome of the maximum expression of aesthetic, aerodynamic and ergonomic research carried out at Pagani's atelier.",
    timeline: [
      {
        year: "1992",
        title: "The Beginning",
        description: "Horacio Pagani founds Pagani Automobili Modena S.p.A. in San Cesario sul Panaro, Italy, with a dream to create the ultimate supercar using advanced composite materials."
      },
      {
        year: "1999",
        title: "Zonda C12 Launch",
        description: "The first Pagani Zonda is unveiled at the Geneva Motor Show, featuring a Mercedes-AMG V12 engine and revolutionary carbon fiber construction that would define the brand."
      },
      {
        year: "2005",
        title: "Zonda F",
        description: "Named after racing legend Juan Manuel Fangio, the Zonda F pushes performance further with 602 HP and enhanced aerodynamics, setting the stage for the ultimate track weapon."
      },
      {
        year: "2007",
        title: "Zonda R Development",
        description: "Pagani begins development of a track-only variant, removing all road-legal compromises to create the most extreme Zonda ever conceived."
      },
      {
        year: "2009",
        title: "Zonda R Debut",
        description: "The Zonda R is unveiled with 750 HP, weighing just 1,070 kg, and designed exclusively for the track. Only 15 examples were built, each a rolling masterpiece."
      },
      {
        year: "2012",
        title: "Nürburgring Record",
        description: "The Zonda R sets a blistering lap time of 6:47.50 at the Nürburgring Nordschleife, cementing its status as one of the fastest cars to ever lap the legendary circuit."
      }
    ]
  },

  // Detailed Engineering Section
  engineering: {
    title: "ENGINEERING",
    subtitle: "Dedicated Engineering Know-How",
    description: "The Modenese atelier – on a par with the greatest fashion designers – is capable of strengthening its uniqueness without sacrificing driver comfort. Every component represents the maximum expression of engineering excellence.",
    sections: [
      {
        title: "Carbon-Titanium Monocoque",
        description: "The central monocoque in carbon-titanium is more rigid and lighter than ever, with the engine bolted directly to it as a stressed member. Front and rear Cr-Mo space frames complement the bodywork in carbon fiber MD System.",
        stats: [
          { label: "Material", value: "Carbon-Titanium" },
          { label: "Dry Weight", value: "1,070 kg" },
          { label: "Configuration", value: "Stressed Member" }
        ]
      },
      {
        title: "Suspension System",
        description: "4 independent wheels with double A-arm configuration. Forged Avional suspension arms with pull rod helical springs and Öhlins adjustable shock absorbers. Fully adjustable suspension setup available at the pits.",
        stats: [
          { label: "Type", value: "Double A-Arm" },
          { label: "Arms", value: "Forged Avional" },
          { label: "Dampers", value: "Öhlins Adjustable" }
        ]
      },
      {
        title: "Braking System",
        description: "Brembo carbon-ceramic brakes provide consistent, fade-free stopping power even under the most demanding track conditions. The system can bring the car from 200 km/h to standstill in under 4 seconds.",
        stats: [
          { label: "Front Discs", value: "380mm" },
          { label: "Rear Discs", value: "355mm" },
          { label: "Caliper Pistons", value: "6F / 4R" }
        ]
      },
      {
        title: "Transmission",
        description: "XTRAC 672 bespoke magnesium casing gearbox with 6-speed sequential dog gearchange. Enhanced by Xtrac transmission technology and Automac Engineering AMT system. Shift paddles located behind the steering wheel.",
        stats: [
          { label: "Type", value: "XTRAC 672" },
          { label: "Gears", value: "6-Speed Sequential" },
          { label: "Shift Time", value: "20 milliseconds" }
        ]
      }
    ]
  },

  // Aerodynamics Deep Dive
  aerodynamics: {
    title: "AERODYNAMICS",
    subtitle: "Maximum Expression of Research",
    description: "Aerodynamic setups allow for a high downforce setting of up to 1,500kg and a >350km/h top speed setting. The effectiveness of the rear is matched by the complex new front bonnet, as well as the closed flat underbody and rear diffusor.",
    features: [
      {
        title: "Front Splitter",
        description: "The aggressive front splitter channels airflow beneath the car while generating significant front-end downforce. Its design is optimized to work in harmony with the flat underbody.",
        value: "350 kg downforce @ 300 km/h"
      },
      {
        title: "Rear Diffuser",
        description: "The massive rear diffuser accelerates airflow exiting from beneath the car, creating a low-pressure zone that sucks the car to the track. Integrated fins improve flow attachment.",
        value: "7-channel design"
      },
      {
        title: "Rear Wing",
        description: "The adjustable rear wing can generate up to 750 kg of downforce at top speed. Multiple angle settings allow for track-specific setup optimization.",
        value: "3-position adjustable"
      },
      {
        title: "NACA Ducts",
        description: "Strategically placed NACA ducts channel cooling air to the brakes and powertrain while maintaining laminar airflow over the body surface.",
        value: "4 integrated ducts"
      }
    ],
    totalDownforce: "1,500 kg @ 350 km/h",
    dragCoefficient: "Cd 0.37"
  },

  // Engine Details
  powerplant: {
    title: "POWERPLANT",
    subtitle: "A Precious Gem",
    description: "Mercedes-Benz AMG M120 12 cylinder V 60°, 48 valves high-performance racing engine. This four wheel prodigy is able to deliver 750 HP and produce a torque of 710 Nm. Direct throttle actuation via mechanical cable ensures immediate throttle response, achieving improved propulsor performance in terms of reactivity.",
    specifications: [
      { label: "Configuration", value: "V12 60°" },
      { label: "Displacement", value: "5,987 ccm" },
      { label: "Bore x Stroke", value: "89.00mm x 80.20mm" },
      { label: "Valvetrain", value: "48 Valves" },
      { label: "Max Power", value: "750 HP" },
      { label: "Max Torque", value: "710 Nm @ 5,700 RPM" },
      { label: "Lubrication", value: "Dry Sump" },
      { label: "Intake", value: "Single Throttle Bodies" },
      { label: "Throttle Actuation", value: "Mechanically Operated" },
      { label: "Exhaust", value: "Hydroformed Inconel" }
    ],
    features: [
      {
        title: "Hydroformed Inconel Exhaust",
        description: "Ceramic coated hydroformed Inconel exhaust system delivers the unmistakable Zonda symphony while optimizing performance."
      },
      {
        title: "Dry Sump System",
        description: "Advanced dry sump lubrication ensures consistent oil supply during extreme track conditions and high-G cornering."
      },
      {
        title: "Mechanical Throttle",
        description: "Single throttle bodies with mechanical cable actuation provide immediate response and improved propulsor performance in terms of reactivity."
      }
    ]
  },

  // Racing Heritage
  racing: {
    title: "RACING HERITAGE",
    subtitle: "Born to Compete",
    description: "While not a factory racing car, the Zonda R represents Pagani's commitment to motorsport principles and has competed in various track events worldwide.",
    achievements: [
      {
        title: "Nürburgring Lap Record",
        description: "6:47.50 around the Nordschleife",
        year: "2012"
      },
      {
        title: "Top Gear Power Lap",
        description: "Featured in Top Gear's iconic power laps",
        year: "2010"
      },
      {
        title: "Zonda Revolucion",
        description: "Evolved into the 800 HP Revolucion variant",
        year: "2013"
      }
    ],
    drivers: [
      "Marc Basseng - Professional racing driver and Nürburgring specialist",
      "Leonardo DiCaprio - Celebrity owner and track day enthusiast",
      "Tony Kanaan - IndyCar champion and Zonda collector"
    ]
  },

  // Interior Details
  interior: {
    title: "COCKPIT",
    subtitle: "Attention to Detail and Safety",
    description: "Although the overall conformation is kept to a bare minimum, the high quality finish and attention to detail do not fail to comply with the usual demanding Pagani Standards. The Modenese atelier is capable of strengthening its uniqueness without sacrificing driver comfort.",
    features: [
      {
        title: "Bespoke Toora Seats",
        description: "FIA approved and compliant with the latest HANS standards, the bespoke Toora seats provide optimum driver safety and support."
      },
      {
        title: "Safety Systems",
        description: "Five-point safety belts and roll-cage in Cr-Mo steel guarantee optimum driver safety in accordance with FIA regulations."
      },
      {
        title: "Carbon Fiber Construction",
        description: "HANS compatible carbon fiber seats combine minimal weight with maximum safety and lateral support during high-speed cornering."
      },
      {
        title: "Pagani Standards",
        description: "High quality finish and attention to detail comply with the usual demanding Pagani Standards, even in this track-focused configuration."
      }
    ],
    materials: [
      "Exposed carbon fiber weave",
      "Alcantara racing upholstery",
      "Machined aluminum controls",
      "Titanium hardware throughout"
    ]
  },

  // Production Details
  production: {
    title: "EXCLUSIVITY",
    subtitle: "Produced in a Limited Run of 15 Units",
    description: "This fabulous supercar is ready to display its character in total purity and freedom. Each of the 15 examples represents the outcome of the maximum expression of aesthetic, aerodynamic and ergonomic research carried out at Pagani's atelier in Modena.",
    details: [
      {
        title: "Atelier Craftsmanship",
        description: "Created at Pagani's atelier in San Cesario sul Panaro, Modena, each Zonda R embodies the dedicated engineering know-how and artisanal excellence that defines Pagani Automobili."
      },
      {
        title: "Client Specification",
        description: "This extreme supercar was created specifically to meet discerning clients' requests, with the Modenese atelier working to strengthen uniqueness without sacrificing performance."
      },
      {
        title: "Pagani Standards",
        description: "Despite the track-focused nature, high quality finish and attention to detail comply with the usual demanding Pagani Standards throughout every component."
      }
    ],
    buildHours: "6,000+",
    unitsProduced: "15",
    basePrice: "€1,500,000"
  },

  // Ownership Experience
  ownership: {
    title: "OWNERSHIP",
    subtitle: "Beyond Acquisition",
    description: "Owning a Zonda R means joining an exclusive family of passionate enthusiasts who share a common appreciation for automotive artistry.",
    benefits: [
      {
        title: "Track Support",
        description: "Factory-trained technicians available for track-day support worldwide, ensuring your Zonda R performs at its peak."
      },
      {
        title: "Exclusive Events",
        description: "Invitation to annual Pagani Raduno gatherings, bringing together owners from around the globe for unforgettable driving experiences."
      },
      {
        title: "Concierge Service",
        description: "24/7 owner concierge service for logistics, transportation, and parts support anywhere in the world."
      },
      {
        title: "Restoration Program",
        description: "Factory restoration and preservation services to maintain your Zonda R in museum-quality condition."
      }
    ]
  },

  // Technical Comparison
  comparison: {
    title: "COMPARISON",
    subtitle: "Among Legends",
    description: "How does the Zonda R compare to its contemporaries? See how this track-focused beast stacks up against other legendary machines.",
    competitors: [
      {
        name: "Ferrari FXX",
        power: "800 HP",
        weight: "1,155 kg",
        topSpeed: "345 km/h",
        price: "€1,500,000"
      },
      {
        name: "Zonda R",
        power: "750 HP",
        weight: "1,070 kg",
        topSpeed: "350 km/h",
        price: "€1,500,000",
        highlight: true
      },
      {
        name: "McLaren P1 GTR",
        power: "986 HP",
        weight: "1,400 kg",
        topSpeed: "350 km/h",
        price: "€2,500,000"
      },
      {
        name: "Aston Martin Vulcan",
        power: "820 HP",
        weight: "1,350 kg",
        topSpeed: "360 km/h",
        price: "€2,300,000"
      }
    ]
  },

  footer: {
    brand: "PAGANI",
    tagline: "The Art of the Hypercar",
    copyright: "@2026 Jeimeen Chaudhari Copyright. All rights reserved.",
    links: [
      { label: "About", href: "#about" },
      { label: "Models", href: "#models" },
      { label: "Heritage", href: "#heritage" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { label: "Instagram", href: "https://www.instagram.com/paganiautomobili/" },
      { label: "YouTube", href: "https://www.youtube.com/user/PaganiAutomobili" },
      { label: "Facebook", href: "https://www.facebook.com/PaganiAutomobili/" },
      { label: "Twitter", href: "https://twitter.com/OfficialPagani" }
    ],
    contact: {
      email: "info@pagani.com",
      phone: "+39 059 4739201",
      address: "Via dell'Artigianato, 5, 41018 San Cesario sul Panaro, Modena, Italy"
    }
  },
};

export type CarData = typeof carData;