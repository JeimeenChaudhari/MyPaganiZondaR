export const carData = {
  name: "Pagani Zonda R",
  tagline: "Track-Only Hypercar",
  price: "€1,500,000",
  year: "2009",
  
  hero: {
    title: "PAGANI",
    subtitle: "ZONDA R",
    description: "The Ultimate Track Weapon",
    cta: "INQUIRE NOW",
  },
  
  design: {
    title: "DESIGN",
    subtitle: "Carbon Fiber Monocoque",
    description: "Every curve sculpted for aerodynamic perfection. The Zonda R's body is a masterpiece of carbon fiber engineering, weighing just 1,070 kg while providing unprecedented downforce and structural rigidity.",
    features: [
      { label: "Body", value: "Full Carbon Fiber" },
      { label: "Weight", value: "1,070 kg" },
      { label: "Downforce", value: "1,500 kg @ 350 km/h" },
    ],
  },
  
  engine: {
    title: "ENGINE",
    subtitle: "Mercedes-AMG V12",
    description: "At the heart of the Zonda R beats a naturally aspirated 6.0L V12 engine developed by Mercedes-AMG, producing an earth-shattering 750 horsepower.",
    specs: [
      { label: "Engine", value: "6.0L V12" },
      { label: "Power", value: "750 HP" },
      { label: "Torque", value: "710 Nm" },
      { label: "0-100 km/h", value: "2.7s" },
      { label: "Top Speed", value: "350 km/h" },
      { label: "Transmission", value: "6-Speed Sequential" },
    ],
  },
  
  specs: [
    { icon: "engine", label: "Engine", value: "6.0L V12", description: "Mercedes-AMG" },
    { icon: "power", label: "Power", value: "750 HP", description: "@ 8,500 RPM" },
    { icon: "torque", label: "Torque", value: "710 Nm", description: "@ 5,800 RPM" },
    { icon: "speed", label: "Top Speed", value: "350 km/h", description: "Limited" },
    { icon: "acceleration", label: "0-100", value: "2.7s", description: "Launch Control" },
    { icon: "weight", label: "Weight", value: "1,070 kg", description: "Dry Weight" },
  ],
  
  features: [
    {
      title: "Aerodynamics",
      description: "Advanced active aerodynamics with adjustable rear wing generating up to 1,500 kg of downforce at maximum speed.",
    },
    {
      title: "Carbon Brakes",
      description: "Brembo carbon-ceramic brake system with 6-piston front and 4-piston rear calipers for incredible stopping power.",
    },
    {
      title: "Racing Cockpit",
      description: "Purpose-built racing interior with exposed carbon fiber, racing harness, and digital dashboard.",
    },
  ],

  // Extended History Section
  history: {
    title: "THE LEGEND",
    subtitle: "A Legacy Born From Passion",
    intro: "The Pagani Zonda R represents the pinnacle of Horacio Pagani's vision—a track-only hypercar that pushes the boundaries of automotive engineering to their absolute limits.",
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
    subtitle: "Art Meets Science",
    description: "Every component of the Zonda R is engineered to perfection, representing thousands of hours of development and testing.",
    sections: [
      {
        title: "Carbon-Titanium Monocoque",
        description: "The central monocoque structure is crafted from a unique blend of carbon fiber and titanium, providing exceptional torsional rigidity while maintaining minimal weight. This advanced composite construction took over 4,000 hours to develop and perfect.",
        stats: [
          { label: "Torsional Rigidity", value: "35,000 Nm/deg" },
          { label: "Weight", value: "70 kg" },
          { label: "Development Hours", value: "4,000+" }
        ]
      },
      {
        title: "Suspension System",
        description: "Double wishbone suspension front and rear, with pushrod-activated dampers and adjustable anti-roll bars. The system is derived directly from Formula 1 technology, offering precise handling characteristics.",
        stats: [
          { label: "Type", value: "Double Wishbone" },
          { label: "Springs", value: "Titanium Coils" },
          { label: "Dampers", value: "4-Way Adjustable" }
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
        description: "The 6-speed sequential gearbox features magnesium casing and can execute gear changes in under 100 milliseconds. Paddle shifters mounted on the steering column provide intuitive control.",
        stats: [
          { label: "Type", value: "Sequential" },
          { label: "Gears", value: "6-Speed" },
          { label: "Shift Time", value: "< 100ms" }
        ]
      }
    ]
  },

  // Aerodynamics Deep Dive
  aerodynamics: {
    title: "AERODYNAMICS",
    subtitle: "Sculpted by Wind",
    description: "The Zonda R's bodywork is the result of extensive wind tunnel testing and CFD analysis, creating a machine that cuts through air with surgical precision while generating massive downforce.",
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
    subtitle: "Heart of a Champion",
    description: "The Mercedes-AMG M120 V12 engine has been specially developed and tuned for track use, producing 750 HP without any form of forced induction—pure naturally aspirated fury.",
    specifications: [
      { label: "Configuration", value: "V12 60°" },
      { label: "Displacement", value: "5,987 cc" },
      { label: "Bore x Stroke", value: "89mm x 80.2mm" },
      { label: "Compression Ratio", value: "11.8:1" },
      { label: "Max Power", value: "750 HP @ 8,500 RPM" },
      { label: "Max Torque", value: "710 Nm @ 5,800 RPM" },
      { label: "Redline", value: "9,000 RPM" },
      { label: "Valvetrain", value: "DOHC, 48 Valves" },
      { label: "Fuel System", value: "Sequential Multi-Point Injection" },
      { label: "Exhaust", value: "Inconel Titanium System" }
    ],
    features: [
      {
        title: "Titanium Exhaust",
        description: "The Inconel and titanium exhaust system weighs just 5 kg and produces the iconic Zonda howl that can reach 130 dB."
      },
      {
        title: "Dry Sump Lubrication",
        description: "Racing-derived dry sump oil system ensures consistent lubrication during high-G cornering maneuvers."
      },
      {
        title: "Carbon Intake",
        description: "Carbon fiber intake manifolds optimize airflow while reducing weight in the engine bay."
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
    subtitle: "Racing Command Center",
    description: "The Zonda R's interior strips away all luxury pretense in favor of pure functionality. Every control is positioned for maximum driver engagement.",
    features: [
      {
        title: "Racing Seat",
        description: "Fixed-back carbon fiber racing seat with 6-point harness mounting points. Weighs just 4.5 kg while providing exceptional lateral support."
      },
      {
        title: "Digital Display",
        description: "Central digital display shows real-time telemetry including lap times, sector splits, and performance data."
      },
      {
        title: "Steering Wheel",
        description: "Removable racing steering wheel with integrated paddle shifters and quick-release mechanism for easy driver egress."
      },
      {
        title: "Fire Suppression",
        description: "FIA-approved fire suppression system with dual nozzle deployment for driver safety."
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
    subtitle: "Only 15 Built",
    description: "The Zonda R represents the ultimate expression of exclusivity. With only 15 examples ever produced, each car was hand-built to the owner's exact specifications.",
    details: [
      {
        title: "Hand-Built Craftsmanship",
        description: "Each Zonda R required approximately 6,000 man-hours to complete, with master craftsmen hand-laying carbon fiber and assembling each component."
      },
      {
        title: "Bespoke Configuration",
        description: "Owners work directly with Pagani's design team to specify every detail, from carbon weave pattern to interior stitching color."
      },
      {
        title: "Delivery Experience",
        description: "New owners receive factory delivery in Modena, including a tour of the production facility and private track session."
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
    copyright: "© 2024 Pagani Automobili S.p.A. All rights reserved.",
    links: [
      { label: "About", href: "#about" },
      { label: "Models", href: "#models" },
      { label: "Heritage", href: "#heritage" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" }
    ],
    contact: {
      email: "info@pagani.com",
      phone: "+39 059 4739201",
      address: "Via dell'Artigianato, 5, 41018 San Cesario sul Panaro, Modena, Italy"
    }
  },
};

export type CarData = typeof carData;