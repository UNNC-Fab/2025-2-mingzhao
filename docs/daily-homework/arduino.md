# **Arduino**

---

## **1. 开源硬件生态介绍**

在现代电子与智能系统学习中，**开源硬件（Open-Source Hardware）** 已成为创客教育、IoT开发和电子原型设计中最常见的基础工具。  
所谓“开源”，指的是电路图、原理图、程序代码都对外开放，任何人都可以学习、修改、再创造。  
目前最常被使用的几种开源硬件平台如下：

---

### **Raspberry Pi（树莓派）**

树莓派是一款**微型单板计算机（SBC）**，只有巴掌大小，却能运行完整的Linux系统。  
它支持Python、C/C++、Java等编程语言，可连接显示器、键盘和鼠标使用。  

- **主要特点：**  
  - 搭载ARM处理器，支持HDMI输出、USB接口和WiFi/蓝牙通信。  
  - 可外接摄像头、传感器等模块，实现图像识别、语音控制等复杂功能。  
- **常见用途：**  
  - 智能家居主控中心  
  - 小型AI推理服务器（可运行TensorFlow Lite）  
  - 教学与科研中的嵌入式系统实验  

树莓派常被称为“**会编程的迷你电脑**”，在教育和科研中非常普及。

---

### **LilyPad Arduino**

LilyPad 是 Arduino 系列中专为**可穿戴电子项目**设计的一种柔性主板。  
它的外形是圆形的，带有可缝制的接点，能直接用导电线缝到衣物上。

- **主要特点：**  
  - 采用ATmega328V芯片，与Arduino Uno兼容。  
  - 支持电池供电，可连接LED、传感器等模块。  
  - 所有引脚设计为大圆孔，方便缝合。  
- **典型应用：**  
  - 智能发光衣服  
  - 舞蹈服装中的动作捕捉  
  - 艺术交互装置  

LilyPad 的理念是“**让电子设计融入日常生活**”，特别适合艺术与设计类创作。

---

### **ESP32 / ESP8266 系列**

ESP 系列是由乐鑫科技（Espressif）推出的高性价比无线微控制器芯片。  
相较于Arduino，它内置了WiFi和蓝牙模块，更适合做联网设备。

- **主要特点：**  
  - 支持Arduino IDE、MicroPython等多种开发环境。  
  - 双核CPU，主频最高可达240MHz。  
  - 内置无线模块，支持HTTP、MQTT通信。  
- **典型应用：**  
  - 智能家居设备（如智能插座、温湿度监控）  
  - 物联网节点采集终端  
  - 无线传感器网络  

ESP32 已成为IoT项目中最常用的核心板之一。

---

### **Micro:bit（BBC教育板）**

Micro:bit 是由英国BBC为青少年编程教育推出的**入门级微控制器**。  
它内置多种传感器和LED矩阵，适合初学者体验编程与交互。

- **主要特点：**  
  - 自带LED点阵、加速度计、磁力计、蓝牙模块。  
  - 可通过网页图形化编程（MakeCode）或Python进行开发。  
- **常见用途：**  
  - 教学实验、互动游戏、智能小车控制。  

它的口号是“**让每个孩子都能学会编程**”，非常适合课堂教学和创客初学。

---


## **2. Learn Open Source Hardware**

**Arduino** 是一个基于开源硬件与软件的电子原型平台。  
它让没有电子背景的学习者也能快速上手，通过图形化或简单的C语言程序控制传感器、马达、灯光等设备。  

![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104133639111.png)

Arduino 的最大魅力在于“**所见即所得**”：  
无论是做一个小夜灯、温度记录仪，还是一个自动浇花系统，只需几行代码就能实现。

---

## **3. About Arduino Uno R4 WIFI**

**Arduino Uno R4 WIFI** 是 Arduino 系列中最新的一款开发板，增加了WiFi模块，使其在物联网应用中更加灵活。  
它继承了Arduino Uno的设计理念，但在处理能力和无线通信上得到了显著提升。

### 核心配置

- **主控芯片：** Renesas RA4M1（32位 ARM Cortex-M4）  
  - Flash 存储：32KB  
  - SRAM：16KB  
  - EEPROM：4KB  

- **工作频率：** 48 MHz  
- **工作电压：** 5V  
- **输入电压范围：** 7V–12V（可通过 USB 或外部供电）

- **内置 WiFi：** 2.4GHz WiFi模块（适用于IoT应用）

---

### 引脚分布

- **数字引脚（D0–D13）：** 可用于开关信号输出或输入。  
  其中 D0、D1 用于串口通信。  
- **模拟引脚（A0–A5）：** 可读取0–5V的模拟信号，如温度、电位器等。  
- **PWM 输出：** D3、D5、D6、D9、D10、D11 支持模拟调光、舵机控制等功能。  

---

### 通信与接口

- **USB 接口：** 用于上传程序和与电脑通信。  
- **串口通信（UART）：** 可连接蓝牙模块、GPS、串口屏等设备。  
- **I2C / SPI 接口：** 可与传感器、显示屏、存储模块连接。  
- **内置 WiFi：** 用于物联网通信，适合远程数据采集与控制。

---

### 其他功能

- 板载 **Reset 按钮** 可重新启动程序。  
- 支持 **Arduino IDE** 开发环境，简单直观。  
- 可扩展 **各类传感器模块与电机驱动板**。  

---

## **3. Case Study: 使用 Arduino Uno R4 WIFI 控制舵机**
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/5861c65b0fd3b9bac92701d2eb0466ee.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/7d1408ce2e783ff0860076f82812905c.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/8d17b8e70547fdf6207bec13aa0197b8.jpg)

```cpp
/*
  项目名称: 电位器控制舵机角度
  功能说明:
    - 电位器连接A0引脚，舵机连接D10引脚。
    - 通过电位器的转动控制舵机的角度。
    - 在串口监视器中实时输出角度变化。
*/

#include <Servo.h>  

#define PIN_SERVO 10  
Servo myservo;      

void setup() {
  Serial.begin(115200);       // 打开串口监视器
  myservo.attach(PIN_SERVO);  // 连接舵机
}

void loop() {
  int sensorValue = analogRead(A0);             // 读取电位器的模拟值
  int angle = map(sensorValue, 0, 1023, 0, 180); // 映射到舵机角度范围

  Serial.print("电位器值: ");
  Serial.print(sensorValue);
  Serial.print("  ->  舵机角度: ");
  Serial.println(angle);

  myservo.write(angle); // 控制舵机
  delay(200);
}


