import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ambient-particulate-monitoring",
    title: "Ambient Environmental Particulate Monitoring System",
    year: "2023 – 2024",
    category: "IoT · Environmental Monitoring",
    role: "IoT & Embedded Developer — Team Project",
    summary:
      "An Internet of Things (IoT)-based environmental monitoring system that measures ambient air quality by monitoring PM2.5 particulate concentration and ambient temperature in real time.",
    overview:
      "The Ambient Environmental Particulate Monitoring System is an IoT-based environmental monitoring system developed to measure ambient air quality by monitoring PM2.5 particulate concentration and ambient temperature in real time. The system integrates environmental sensors, a vacuum sampling mechanism, an ESP8266 microcontroller, and the Blynk IoT platform to provide remote monitoring through smartphones. This project was developed as part of the Perancangan Aplikasi dan Sistem Teknik Elektro (PASTEL) course at Universitas Mercu Buana.",
    problem:
      "There is a need for a low-cost, real-time ambient air monitoring solution that allows environmental conditions to be observed remotely rather than through periodic manual measurement.",
    solution:
      "A portable prototype was built that draws ambient air with a vacuum pump, measures PM2.5 and temperature with dedicated sensors, processes the data on an ESP8266, and transmits it over Wi-Fi to the Blynk cloud for live visualization on a smartphone dashboard.",
    features: [
      "Real-time PM2.5 monitoring",
      "Ambient temperature monitoring",
      "IoT cloud monitoring",
      "Smartphone dashboard using Blynk",
      "Vacuum air sampling",
      "ESP8266 Wi-Fi communication",
      "Continuous sensor monitoring",
      "Live environmental data visualization",
    ],
    technologies: [
      "Internet of Things (IoT)",
      "Embedded Systems",
      "Environmental Monitoring",
      "Air Quality Monitoring",
      "Wireless Communication",
      "Sensor Integration",
      "Arduino",
      "Cloud Monitoring",
    ],
    hardware: [
      { name: "NodeMCU ESP8266", description: "Main Controller" },
      { name: "Sharp GP2Y1014AU0F", description: "PM2.5 Dust Sensor" },
      { name: "DS18B20", description: "Temperature Sensor" },
      { name: "Vacuum Pump", description: "Ambient Air Sampling" },
      { name: "DC Dimmer", description: "Vacuum Speed Controller" },
      { name: "Power Supply 12V DC", description: "System Power" },
      { name: "PCB", description: "Circuit Board" },
      { name: "Enclosure", description: "Mechanical Protection" },
    ],
    software: ["Arduino IDE", "ESP8266 Framework", "Blynk IoT Platform", "Fritzing", "SketchUp", "Canva"],
    architectureText: `Ambient Air
   │
   ▼
Vacuum Pump
   │
   ▼
PM2.5 Sensor (Sharp GP2Y1014AU0F)
   │
   ├──────────────┐
   ▼              ▼
Temperature      ESP8266 NodeMCU
 Sensor              │
                  │ WiFi
                  ▼
            Blynk Cloud
                  │
                  ▼
       Mobile Dashboard`,
    architectureImage: "/assets/images/projects/ambient-particulate/System-Architecture.png",
    gallery: [
      "/assets/images/projects/ambient-particulate/Thumbnail.png",
      "/assets/images/projects/ambient-particulate/X-Banner_AGIF-Team.png",
      "/assets/images/projects/ambient-particulate/3D-Design-Tampak-Dalam.png",
      "/assets/images/projects/ambient-particulate/3D-Design-Tampak-Luar.png",
      "/assets/images/projects/ambient-particulate/System-Architecture.png",
      "/assets/images/projects/ambient-particulate/Screenshot_20231205_230018_cloud.blynk.jpg",
      "/assets/images/projects/ambient-particulate/WhatsApp-Image-2024-01-20-at-22.44.40_38e1d0a0.jpg",
      "/assets/images/projects/ambient-particulate/WhatsApp-Image-2026-07-12-at-07.33.28.jpeg",
    ],
    contributions: [
      "IoT system development",
      "Embedded programming",
      "Hardware assembly",
      "Sensor integration",
      "Wiring and electrical implementation",
      "Mechanical assembly",
      "Testing and validation",
      "Technical documentation",
    ],
    improvements: [
      "Upgrade to ESP32",
      "Replace Blynk with a custom web dashboard",
      "Add PM10 and PM1.0 monitoring",
      "Integrate humidity and air pressure sensors",
      "Cloud database integration",
      "AI-based air quality prediction",
      "Historical data analytics",
      "Automatic alert notifications",
    ],
    academic: "Perancangan Aplikasi dan Sistem Teknik Elektro (PASTEL) — Universitas Mercu Buana, Faculty of Engineering, 2023.",
    documents: [
      { label: "Project Report (PASTEL)", file: "/assets/images/projects/ambient-particulate/Laporan_PASTEL_AGIF-TEAM_FIX.pdf" },
    ],
  },
  {
    slug: "dimsio-smart-pos",
    title: "Dimsio Web-Based Cashier Application with AI Assistant",
    year: "2026",
    category: "Web Application · Full Stack",
    role: "Full Stack Developer",
    summary:
      "A web-based cashier application designed to support business operations, integrated with an AI Assistant to help users with information and daily management.",
    overview:
      "Dimsio is a web-based cashier (Point of Sale) application developed to help manage the sales process, products, cash, expenses, transaction reports, and business analysis in a digital way. The application integrates an AI Assistant as a supporting feature that provides information and helps users during operation.",
    problem:
      "Small businesses need a structured, accessible way to record sales, manage products and expenses, and produce reports without relying on manual bookkeeping.",
    solution:
      "A web-based application was built with a structured database, providing menu management, sales transaction handling, and expense recording, alongside an AI Assistant that supports users with information and business insights.",
    features: [
      "Menu management",
      "Sales transactions",
      "Expense recording",
      "Structured database management",
      "AI Assistant support feature",
      "Business operation support for UMKM",
    ],
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "AI Assistant"],
    gallery: [
      "/assets/images/projects/dimsio-pos/thumbnail.jpg",
      "/assets/images/projects/dimsio-pos/Poster.jpeg",
      "/assets/images/projects/dimsio-pos/Dashboard.jpeg",
      "/assets/images/projects/dimsio-pos/Kasir.jpeg",
      "/assets/images/projects/dimsio-pos/Menu.jpeg",
      "/assets/images/projects/dimsio-pos/Detail-Transaksi.jpeg",
      "/assets/images/projects/dimsio-pos/Pengeluaran.jpeg",
      "/assets/images/projects/dimsio-pos/Detail-Pengeluaran.jpeg",
      "/assets/images/projects/dimsio-pos/Ai-Assistent.jpeg",
      "/assets/images/projects/dimsio-pos/Ai-Grafik-dan-Analisis.jpeg",
      "/assets/images/projects/dimsio-pos/Laporan.jpeg",
      "/assets/images/projects/dimsio-pos/Struk.jpeg",
      "/assets/images/projects/dimsio-pos/System-Architecture.jpeg",
    ],
    documents: [
      { label: "Project Documentation (PDF)", file: "/assets/images/projects/dimsio-pos/dimsio-.pdf" },
    ],
  },
  {
    slug: "vehicle-emission-fuzzy-mamdani",
    title: "IoT-Based Vehicle Exhaust Emission Monitoring System Using Fuzzy Mamdani",
    year: "2024",
    category: "IoT · AI · Embedded Systems",
    role: "Embedded & AI Developer (Thesis)",
    summary:
      "A portable IoT-based vehicle exhaust emission monitoring system that measures Carbon Monoxide (CO) and Hydrocarbon (HC) in real time and classifies emission levels using the Fuzzy Mamdani method via the Blynk application.",
    overview:
      "Vehicle exhaust emissions are one of the major contributors to air pollution. This project presents a portable IoT-based Vehicle Exhaust Emission Monitoring System capable of measuring Carbon Monoxide (CO) and Hydrocarbon (HC) concentrations in real time. The system integrates gas sensors, an ESP32 microcontroller, IoT technology, and the Fuzzy Mamdani algorithm to classify emission levels based on the Air Quality Index (AQI). Measurement results are displayed remotely through the Blynk mobile application. This project was developed as the Bachelor Final Project (Undergraduate Thesis) in the Electrical Engineering Department at Universitas Mercu Buana.",
    problem:
      "Commercial vehicle emission analyzers are expensive. A low-cost, portable alternative is needed to measure CO and HC emissions and classify air quality in real time.",
    solution:
      "A portable analyzer was built using an ESP32 with MQ-7 (CO) and MQ-2 (HC) sensors and a vacuum sampling pump. Sensor data is transmitted over Wi-Fi to Blynk, while a Fuzzy Mamdani inference system classifies the emission quality into AQI categories.",
    features: [
      "Carbon Monoxide (CO) Monitoring",
      "Hydrocarbon (HC) Monitoring",
      "Real-time monitoring using Blynk",
      "IoT-based data transmission",
      "Fuzzy Mamdani decision system",
      "Air quality classification",
      "Portable emission analyzer",
      "Rechargeable battery powered",
      "Wi-Fi connectivity",
    ],
    technologies: [
      "Internet of Things (IoT)",
      "Embedded Systems",
      "ESP32",
      "Environmental Monitoring",
      "Fuzzy Logic",
      "Wireless Communication",
      "Sensor Integration",
      "Arduino",
    ],
    hardware: [
      { name: "Wemos D1 R32 (ESP32)", description: "Main Controller" },
      { name: "MQ-7", description: "Carbon Monoxide Sensor" },
      { name: "MQ-2", description: "Hydrocarbon Sensor" },
      { name: "Mini Air Vacuum Pump", description: "Exhaust Gas Sampling" },
      { name: "18650 Lithium Battery", description: "Power Supply" },
      { name: "Battery Management System", description: "Charging Protection" },
      { name: "OLED / Display", description: "Local Information" },
      { name: "Project Box", description: "Portable Enclosure" },
    ],
    software: ["Arduino IDE", "Blynk IoT Platform", "MATLAB (Fuzzy Design)", "Fuzzy Logic (Mamdani)", "ESP32 Framework"],
    architectureText: `Vehicle Exhaust
      │
      ▼
 Vacuum Pump
      │
      ▼
┌──────────────┐
│ MQ-7 (CO)    │
│ MQ-2 (HC)    │
└──────────────┘
      │
      ▼
 Wemos D1 R32 (ESP32)
      │
  Wi-Fi Connection
      │
      ▼
  Blynk Cloud
      │
      ▼
Smartphone Dashboard`,
    architectureImage: "/assets/images/projects/vehicle-emission/System-Architecture.png",
    gallery: [
      "/assets/images/projects/vehicle-emission/thumbnail.jpg",
      "/assets/images/projects/vehicle-emission/Cuplikan-layar-2026-07-12-125114.png",
      "/assets/images/projects/vehicle-emission/WhatsApp-Image-2026-07-12-at-12.48.49.jpeg",
      "/assets/images/projects/vehicle-emission/WhatsApp-Image-2026-07-12-at-12.49.19.jpeg",
      "/assets/images/projects/vehicle-emission/WhatsApp-Image-2026-07-12-at-12.49.19-1-.jpeg",
    ],
    contributions: [
      "Research and literature review",
      "Hardware design",
      "Electrical circuit design",
      "Embedded software development",
      "IoT implementation",
      "Fuzzy Mamdani implementation",
      "Sensor calibration",
      "System testing",
      "Data analysis",
      "Technical documentation",
    ],
    challenges: [
      "Sensor calibration against a commercial reference analyzer",
      "Stable Wi-Fi communication for real-time transmission",
      "Designing an accurate Fuzzy rule base for emission classification",
    ],
    lessons: [
      "The developed system successfully measures CO and HC emissions",
      "Displays real-time monitoring data through Blynk",
      "Classifies emission quality using Fuzzy Mamdani",
      "Produced calibration results with relatively small correction values when compared to a commercial emission analyzer (KOENG KEG-500)",
    ],
    improvements: [
      "ESP32-S3 upgrade",
      "Web dashboard",
      "Laravel + Filament monitoring",
      "Supabase database integration",
      "AI-based emission prediction",
      "Machine learning classification",
      "GPS tracking",
      "OTA firmware update",
      "Historical data analytics",
      "PDF report generator",
      "Multi-vehicle monitoring",
    ],
    academic: "Bachelor Final Project (Thesis) — Universitas Mercu Buana, Faculty of Engineering, 2024.",
    documents: [
      { label: "Final Thesis Poster", file: "/assets/images/projects/vehicle-emission/Poster-Tugas-Akhir-Billy.pdf" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
