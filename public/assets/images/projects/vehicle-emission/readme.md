# 🚗 IoT-Based Vehicle Exhaust Emission Monitoring System Using Fuzzy Mamdani

![ESP32](https://img.shields.io/badge/ESP32-Wemos%20D1%20R32-blue?style=for-the-badge)
![IoT](https://img.shields.io/badge/IoT-Blynk-success?style=for-the-badge)
![Fuzzy](https://img.shields.io/badge/AI-Fuzzy%20Mamdani-orange?style=for-the-badge)
![University](https://img.shields.io/badge/Universitas-Mercu%20Buana-red?style=for-the-badge)

---

# 📖 Overview

Vehicle exhaust emissions are one of the major contributors to air pollution. This project presents a portable **IoT-based Vehicle Exhaust Emission Monitoring System** capable of measuring Carbon Monoxide (CO) and Hydrocarbon (HC) concentrations in real time.

The system integrates gas sensors, an ESP32 microcontroller, Internet of Things (IoT) technology, and the **Fuzzy Mamdani** algorithm to classify emission levels based on the Air Quality Index (AQI). Measurement results are displayed remotely through the **Blynk** mobile application.

This project was developed as my **Bachelor Final Project (Undergraduate Thesis)** in the Electrical Engineering Department at **Universitas Mercu Buana**.

---

# 🎯 Objectives

- Design a portable vehicle exhaust emission monitoring system.
- Measure Carbon Monoxide (CO) concentration.
- Measure Hydrocarbon (HC) concentration.
- Implement IoT-based remote monitoring.
- Classify emission quality using the Fuzzy Mamdani method.
- Provide a low-cost alternative to commercial emission analyzers.

---

# 🚀 Features

- 🌫️ Carbon Monoxide (CO) Monitoring
- 💨 Hydrocarbon (HC) Monitoring
- 📱 Real-Time Monitoring using Blynk
- ☁️ IoT-Based Data Transmission
- 🧠 Fuzzy Mamdani Decision System
- 🎨 Air Quality Classification
- 📊 Portable Emission Analyzer
- 🔋 Rechargeable Battery Powered
- 📡 Wi-Fi Connectivity

---

# ⚙️ Hardware

| Component | Description |
|-----------|-------------|
| Wemos D1 R32 (ESP32) | Main Controller |
| MQ-7 | Carbon Monoxide Sensor |
| MQ-2 | Hydrocarbon Sensor |
| Mini Air Vacuum Pump | Exhaust Gas Sampling |
| 18650 Lithium Battery | Power Supply |
| Battery Management System | Charging Protection |
| OLED / Display | Local Information |
| Project Box | Portable Enclosure |

---

# 💻 Software

- Arduino IDE
- Blynk IoT Platform
- MATLAB (Fuzzy Design)
- Fuzzy Logic (Mamdani)
- ESP32 Framework

---

# 🧠 Fuzzy Mamdani

The project implements the **Mamdani Fuzzy Inference System** to classify exhaust emission quality.

### Input Variables

- Carbon Monoxide (CO)
- Hydrocarbon (HC)

### Output

- Air Quality Index (AQI)
- Emission Status
- Color Indicator

### Fuzzy Process

1. Fuzzification
2. Rule Evaluation
3. Inference
4. Defuzzification
5. AQI Classification

---

# 🌐 System Architecture

```
Vehicle Exhaust
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
 Smartphone Dashboard
```

---

# 📱 Mobile Dashboard

The Blynk application displays:

- Carbon Monoxide (CO)
- Hydrocarbon (HC)
- AQI Category
- Air Quality Status
- Device Connection Status
- Real-Time Monitoring

---

# 📊 Testing

The prototype was evaluated through:

- Sensor Calibration
- Hardware Testing
- IoT Communication Testing
- Fuzzy Rule Validation
- Comparison with KOENG KEG-500 Standard Emission Analyzer
- Three Motorcycle Testing Scenarios

---

# 📈 Results

The developed system successfully:

- Measures CO and HC emissions.
- Displays real-time monitoring data through Blynk.
- Classifies emission quality using Fuzzy Mamdani.
- Produces calibration results with relatively small correction values when compared to a commercial emission analyzer.

---

# 🔬 Technologies

- Internet of Things (IoT)
- Embedded Systems
- ESP32
- Environmental Monitoring
- Fuzzy Logic
- Wireless Communication
- Sensor Integration
- Arduino Programming

---

# 👨‍💻 My Contributions

- Research and literature review
- Hardware design
- Electrical circuit design
- Embedded software development
- IoT implementation
- Fuzzy Mamdani implementation
- Sensor calibration
- System testing
- Data analysis
- Technical documentation

---

# 📁 Repository Structure

```
Vehicle-Emission-Monitoring-System/
│
├── README.md
├── Documentation/
├── Hardware/
├── Software/
├── Arduino/
├── MATLAB/
├── Images/
├── Wiring/
├── 3D Design/
├── Report/
│   └── Final_Thesis.pdf
└── Assets/
```

---

# 🎓 Academic Information

**Final Project**

Bachelor of Electrical Engineering

**University**

Universitas Mercu Buana

**Faculty**

Faculty of Engineering

**Year**

2024

---

# 🚀 Future Improvements

- ESP32-S3 Upgrade
- Web Dashboard
- Laravel + Filament Monitoring
- Supabase Database Integration
- AI-Based Emission Prediction
- Machine Learning Classification
- GPS Tracking
- OTA Firmware Update
- Historical Data Analytics
- PDF Report Generator
- Multi-Vehicle Monitoring

---

# 📚 Documentation

This repository contains:

- Final Thesis Report
- Literature Review
- System Design
- Block Diagram
- Flowchart
- Wiring Diagram
- 3D Mechanical Design
- Arduino Source Code
- Fuzzy Design
- Testing Results
- Calibration Results

---

# 📜 Research Highlights

- Bachelor's Final Project (2024)
- Portable Vehicle Emission Analyzer
- IoT-Based Monitoring System
- Fuzzy Mamdani Classification
- Comparison with Commercial Emission Analyzer
- Real-Time Mobile Monitoring
- Low-Cost Engineering Solution

---

# 👤 Author

**Billy Shultan Al Hadiy**

Electrical Engineer • IoT Developer • Embedded Systems • Environmental Monitoring • AI-Integrated IoT

📧 Email: your-email@example.com

🌐 Portfolio: https://your-portfolio.com

> *"Developing intelligent environmental monitoring systems through embedded technology, IoT, and artificial intelligence."*

---

## ⭐ Support

If you find this project useful, consider giving this repository a **⭐ Star**.