import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    id: "technician-maju-selaras",
    role: "Technician",
    company: "PT Maju Selaras Instrumindo",
    period: "Dec 2023 – Present",
    current: true,
    technologies: ["ESP32", "Laravel", "Flutter", "Supabase", "PostgreSQL", "Arduino IDE", "Blynk", "MQTT", "IoT Sensors"],
    responsibilities: [
      "Contributed to the development and digitalization of ambient air quality monitoring equipment, including the High Volume Air Sampler (HVAS) for TSP, PM10, and PM2.5, to improve measurement efficiency and accuracy.",
      "Designed and developed a Water Quality Monitoring System end-to-end, integrating sensors, microcontroller, database, and a web-based monitoring dashboard — covering hardware selection, software development, database design, electrical system, mechanical design, and installation foundation.",
      "Performed assembly, testing, and quality control of ambient air quality monitoring equipment and ensured all device functions operate according to specification.",
      "Assembled stationary source emission measurement equipment in accordance with USEPA Method 17, Method 5 & 29, and Method 26.",
      "Performed preventive and corrective maintenance, troubleshooting, and repair of laboratory equipment and environmental measurement instruments.",
      "Performed functional testing and internal calibration prior to calibration by a KAN-accredited laboratory.",
      "Delivered operation and maintenance training for environmental monitoring equipment to customers as part of the handover and system implementation process.",
      "Carried out installation, commissioning, maintenance, and technical support across various regions of Indonesia and Malaysia, including at Airwaswater Management Sdn. Bhd. (AWWAM), Seremban, Negeri Sembilan, Malaysia.",
    ],
  },
  {
    id: "lab-assistant-mercu-buana",
    role: "Laboratory Assistant",
    company: "Electrical Engineering Laboratory, Universitas Mercu Buana",
    period: "Feb 2021 – Feb 2023",
    technologies: ["Arduino IDE", "MATLAB", "Electrical Instruments", "PLC", "Embedded Systems"],
    responsibilities: [
      "Assisted and guided students in Electrical Engineering practical work according to modules and laboratory procedures.",
      "Prepared equipment, instruments, and practical materials to ensure laboratory activities ran smoothly.",
      "Performed inspection, testing, and maintenance of laboratory equipment to keep it in ready-to-use condition.",
      "Explained the use of measuring instruments, electrical circuits, and safety procedures during practical work.",
      "Assisted lecturers in conducting practical work, evaluating practical results, and resolving technical constraints in the laboratory.",
      "Maintained order, work safety, and the fitness of laboratory facilities according to applicable procedures.",
    ],
  },
  {
    id: "assistant-technician-bilq",
    role: "Assistant Technician",
    company: "Bil-Q Teknik Cool",
    period: "2018 – 2021",
    technologies: ["Electrical Systems", "HVAC", "Preventive Maintenance", "Troubleshooting"],
    responsibilities: [
      "Installed air conditioning (AC) cooling systems in residential buildings and offices.",
      "Installed refrigerant piping, electrical wiring, and condensate drainage systems.",
      "Performed preventive and corrective maintenance on AC units and refrigerators.",
      "Troubleshot faults in cooling and electrical systems.",
      "Performed functional testing after installation or repair to ensure equipment operated properly.",
    ],
  },
];
