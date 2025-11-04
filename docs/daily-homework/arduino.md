# **Arduino**

---

## **1.  Learn Open Source Hardware**

**Arduino** is an open-source hardware platform widely used for **electronics prototyping**, **IoT projects**, and **embedded system education**.
It provides an **easy-to-use programming environment** and supports various **microcontrollers** for creating interactive projects.
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104133639111.png)

---

## **2.  About Arduino Uno**

**Arduino Uno** is the most commonly used development board in the Arduino family.
Below are its **main features and functions**:


- **Microcontroller:** Uses the **ATmega328P**, an **8-bit AVR microcontroller** with **32KB Flash memory**, **2KB SRAM**, and **1KB EEPROM**.


- **Clock Frequency:** Operates at a master clock speed of **16 MHz**, which ensures stable performance in most small-scale embedded applications.


- **Pin Configuration:**
- **14 digital pins** (D0–D13), among which **D0** and **D1** are used for **serial communication**.
- **6 analog pins** (A0–A5) for analog input.
- **6 pins** support **PWM (Pulse Width Modulation)** output.


- **Power Options:**
- Can be powered via **USB port** or **external power supply**.
- **Input voltage range:** 7V–12V, or via **VIN pin** for flexible input.


- **Communication Interface:**
- Has a **USB interface** for code uploading and PC communication.
- Supports **serial communication** for connecting with other devices.


- **Other Features:**
- Equipped with a **reset button** to restart the running program easily.
- Fully compatible with the **Arduino IDE** software environment, enabling convenient **code writing, compiling, and uploading**.

---

## **3.  Case Study: Using Arduino Uno R4 WIFI**
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/5861c65b0fd3b9bac92701d2eb0466ee.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/7d1408ce2e783ff0860076f82812905c.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/8d17b8e70547fdf6207bec13aa0197b8.jpg)
```cpp
/*
  项目名称: 基于电位器控制舵机角度的 Arduino 项目
  目的: 通过读取电位器的模拟值（0-1023），将其映射到舵机的角度范围（0-180°），并根据电位器的变化控制舵机的转动。
  硬件:
    - 使用电位器控制舵机转动，电位器连接到 Arduino 的 A0 引脚。
    - 舵机连接到 Arduino 的 10 号引脚。
  代码功能:
    - 读取电位器的值，将其映射到舵机角度范围。
    - 通过串口输出电位器的原始值和映射后的舵机角度。
    - 控制舵机角度，并通过串口监视器查看实时数据。
  作者: [ximingzhao]
  日期: [11.4]
*/

#include <Servo.h>  // 引入舵机控制库，用于控制舵机的角度

#define PIN_SERVO 10  // 定义舵机连接的引脚
Servo myservo;      // 创建舵机对象，用于控制舵机

void setup() {
  Serial.begin(115200);  // 启动串口监视器，波特率115200，便于调试时查看数据
  myservo.attach(PIN_SERVO);  // 将舵机对象与指定的引脚连接
}

void loop() {
  int sensorValue = analogRead(A0);  // 从 A0 引脚读取电位器的模拟值（范围 0-1023）
  int angle = map(sensorValue, 0, 1023, 0, 180);  // 将电位器的值映射到舵机的角度范围（0-180）

  // 打印电位器的原始值和映射后的舵机角度值到串口监视器
  Serial.print("原始值: ");
  Serial.print(sensorValue);
  Serial.print(" -> 映射角度: ");
  Serial.println(angle);

  // 设置舵机的角度
  myservo.write(angle);
  
  // 延时5毫秒，用于平滑转动过程，加速舵机的转动
  delay(5);  // 减少延时使舵机转动更快

  // 200毫秒延时，便于串口输出的可读性，避免频繁更新
  delay(200);  
}
``` 

---



## **4.  Arduino Output**



---


