# 🌫️ Monitoring System Instrument Environment Ambient Particulate

![IoT](https://img.shields.io/badge/IoT-ESP8266-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Blynk-success?style=for-the-badge)
![Sensor](https://img.shields.io/badge/Sensor-PM2.5%20%7C%20Temperature-orange?style=for-the-badge)
![Project](https://img.shields.io/badge/University-Mercu%20Buana-red?style=for-the-badge)

## 📖 Overview

Monitoring System Instrument Environment Ambient Particulate is an Internet of Things (IoT)-based environmental monitoring system developed to measure ambient air quality by monitoring PM2.5 particulate concentration and ambient temperature in real time.

The system integrates environmental sensors, a vacuum sampling mechanism, ESP8266 microcontroller, and the Blynk IoT platform to provide remote monitoring through smartphones.

This project was developed as part of the **Perancangan Aplikasi dan Sistem Teknik Elektro (PASTEL)** course at **Universitas Mercu Buana**.

---

# 🎯 Objectives

- Monitor PM2.5 concentration in ambient air.
- Measure surrounding air temperature.
- Display environmental data remotely via IoT.
- Develop a low-cost ambient air monitoring prototype.
- Improve environmental awareness through real-time monitoring.

---

# 🚀 Features

- 📡 Real-time PM2.5 monitoring
- 🌡 Ambient temperature monitoring
- ☁️ IoT cloud monitoring
- 📱 Smartphone dashboard using Blynk
- 💨 Vacuum air sampling
- ⚡ ESP8266 Wi-Fi communication
- 🔄 Continuous sensor monitoring
- 📊 Live environmental data visualization

---

# 🛠 Hardware

| Component | Function |
|-----------|----------|
| NodeMCU ESP8266 | Main Controller |
| Sharp GP2Y1014AU0F | PM2.5 Dust Sensor |
| DS18B20 | Temperature Sensor |
| Vacuum Pump | Ambient Air Sampling |
| DC Dimmer | Vacuum Speed Controller |
| Power Supply 12V DC | System Power |
| PCB | Circuit Board |
| Enclosure | Mechanical Protection |

---

# 💻 Software

- Arduino IDE
- ESP8266 Framework
- Blynk IoT Platform
- Fritzing
- SketchUp
- Canva

---

# 📡 System Architecture

```
 Ambient Air
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
          Mobile Dashboard
```

---

# ⚙️ Workflow

1. Ambient air is drawn into the system using a vacuum pump.
2. The PM2.5 sensor measures dust concentration.
3. The DS18B20 measures ambient temperature.
4. ESP8266 processes sensor data.
5. Data is transmitted over Wi-Fi.
6. Blynk displays live monitoring results.

---

# 📱 Dashboard

The monitoring dashboard displays:

- PM2.5 Concentration (µg/m³)
- Ambient Temperature (°C)

allowing users to remotely monitor environmental conditions from anywhere with internet access.

---

# 🧪 Development Process

- Requirement Analysis
- Mechanical Design
- Electrical Design
- Wiring Design
- PCB Assembly
- Arduino Programming
- IoT Integration
- Sensor Calibration
- System Testing
- Performance Evaluation

---

# 🔬 Testing

The prototype was tested through:

- PM2.5 sensor validation
- Temperature sensor testing
- Vacuum pump performance
- Electrical voltage measurement
- Real-time IoT communication
- End-to-end system verification

---

# 📊 Technologies

- Internet of Things (IoT)
- Embedded Systems
- Environmental Monitoring
- Air Quality Monitoring
- Wireless Communication
- Sensor Integration
- Arduino Programming
- Cloud Monitoring

---

# 👨‍💻 My Contributions

As a member of the development team, I contributed to:

- IoT system development
- Embedded programming
- Hardware assembly
- Sensor integration
- Wiring and electrical implementation
- Mechanical assembly
- Testing and validation
- Technical documentation

---

# 📁 Repository Structure

```
Monitoring-System-Instrument-Environment-Ambient-Particulate/
│
├── README.md
├── Documentation/
├── Hardware/
├── Software/
├── Images/
├── Wiring/
├── 3D Design/
├── Report/
│   └── Laporan_PASTEL_AGIF TEAM_FIX.pdf
└── Assets/
```

---

# 🎓 Academic Information

**Course**

Perancangan Aplikasi dan Sistem Teknik Elektro (PASTEL)

**Institution**

Universitas Mercu Buana

**Faculty**

Faculty of Engineering

**Department**

Bachelor of Electrical Engineering

**Year**

2023

---

# 🚀 Future Improvements

- Upgrade to ESP32
- Replace Blynk with a custom web dashboard
- Add PM10 and PM1.0 monitoring
- Integrate humidity and air pressure sensors
- Cloud database integration
- AI-based air quality prediction
- Historical data analytics
- Automatic alert notifications

---

# 📜 Documentation

This repository includes:

- Project Report
- System Design
- Wiring Diagram
- Flowchart
- Mechanical Design
- 3D Model
- Implementation Photos
- Testing Results

---

# 👥 Development Team

- Rianza Agiftian
- **Billy Shultan Al Hadiy**
- Muhammad Riski Yusdi Alganiy

---

# 👤 Author

**Billy Shultan Al Hadiy**

Electrical Engineer • IoT Developer • Embedded Systems • Environmental Monitoring

> *"Engineering intelligent environmental monitoring systems through IoT, embedded technology, and real-time data acquisition."*