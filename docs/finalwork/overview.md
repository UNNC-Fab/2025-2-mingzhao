# Overview

---
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20260131141630007.png)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20260131141619601.png)
## 1. Project Description

The **Psychological Sand Table** (心理沙盘) is an interactive installation designed to combine traditional sandplay therapy with modern digital fabrication and AI technologies. It aims to provide a more immersive and data-driven experience for emotional expression and psychological analysis.

## 2. Background Research & Inspiration

To build a professional and effective system, I conducted extensive research into sandplay therapy and existing maker projects.

### 2.1 Sandplay Therapy Fundamentals

* **Introductory Guide**: [Sandplay Therapy Introduction (Bilibili)](https://www.bilibili.com/video/BV13a4y1s71u/) - A comprehensive guide to understanding how sandplay works.

* **Clinical Process**: [Full Process & Case Interpretation](https://www.hanspub.org/journal/paperinformation?paperid=26932) - Analysis of therapeutic sessions and symbolic meanings.

* **Contextual Reference**: [Case Study & Background](https://alk.12348.gov.cn/Detail?dbID=25&dbName=JDJZ&sysID=202) - Legal and psychological context of sandplay.

### 2.2 Global Maker Inspiration

* **Fab Academy Projects**: [Fab Academy Graduation Projects](https://fabacademy.org/2026/) - Reference for high-level digital fabrication and integration.

* **Open Source Communities**:

  * [Instructables](https://www.instructables.com/) - Documentation for electronic hardware projects.

  * [Hackster.io](https://www.hackster.io/) - Intelligent device and IoT inspiration.

## 3. Technical Resources

The project integrates advanced AI capabilities including voice recognition and computer vision.

### 3.1 Artificial Intelligence & Audio

* **Voice Recognition**: [PaddleSpeech (GitHub)](https://github.com/PaddlePaddle/PaddleSpeech) - For processing user's verbal feedback during therapy.

### 3.2 Computer Vision & Deployment

* **Hardware Interface**: [OAK Camera Official Tutorials](https://docs.oakchina.cn/en/latest/) - Learning how to use the OAK camera for depth sensing and tracking.

* **Neural Networks**: [Neural Networks Deployment on OAK](https://docs.oakchina.cn/en/latest/pages/Advanced/Neural-networks.html) - Implementing AI models directly on the camera hardware.

* **Object Detection**: [YOLO Model Deployment via GitBlog](https://blog.csdn.net/gitblog_00659/article/details/156089687) - Using YOLO for sand table object (miniatures) recognition.

## 4. System Architecture

The project is divided into three main layers:

1. **Mechanical Layer**: The physical sand container and automated leveling mechanism.

2. **Electronic Layer**: Arduino and ESP32 controllers managing motors and sensor data.

3. **Intelligence Layer**: OAK Camera and Python-based AI for voice and vision analysis.
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20260131141544733.png)
