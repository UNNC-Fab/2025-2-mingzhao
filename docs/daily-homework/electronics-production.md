# Electronics Production: PCB Milling

---

## 1. Core Machine Analysis

### 1.1 The Machine: Roland SRM-20
The **Roland SRM-20** is a compact desktop CNC milling machine specifically designed for offices, laboratories, and educational environments. It is the standard equipment in FabLabs for fabricating high-precision Printed Circuit Boards (PCBs).

* **Process Type**: **Subtractive Manufacturing**. Unlike 3D printing (additive), it removes material from a solid block. In PCB production, it mills away the excess copper layer to isolate conductive traces.
* **Key Specifications**:
    * **Work Area**: 203.2 (X) x 152.4 (Y) x 60.5 (Z) mm.
    * **Spindle Speed**: Up to **7000 RPM**, ideal for fine detail work.
    * **Resolution**: 0.01 mm / step (mechanical resolution), ensuring precision for Surface Mount Device (SMD) components.
* **Design Features**:
    * **Full Enclosure**: Prevents dust from spreading and reduces noise, ensuring safety.
    * **Dust Collection**: A slide-out tray at the bottom collects copper and substrate debris for easy cleaning.



### 1.2 The Software: VPanel for SRM-20
**VPanel** is the dedicated control software for the SRM-20. It acts as the "cockpit" between your computer and the machine. It does not generate toolpaths (CAM software does that); it only executes them.

* **Coordinate Systems**:
    * **Machine Coordinates**: The absolute, fixed position of the machine spindle (cannot be changed).
    * **User Coordinates**: **The most important system!** We use "Set Origin" to define the starting point (X/Y/Z Zero) for our specific job.
* **Key Functions**:
    * **Move**: Controls the spindle movement along X, Y, and Z axes (supports continuous or step movement).
    * **Set Origin**:
        * **XY Origin**: Defines the bottom-left corner of your PCB design on the material.
        * **Z Origin (Critical!)**: Defines the exact height of the tool tip relative to the material surface. Setting this too low breaks the bit; too high results in no cut.
    * **Override**: Adjusts spindle speed and feed rate percentages in real-time during operation to fine-tune cutting quality.



---

## 2. Market Landscape: Comparable Devices

Besides the Roland SRM-20, there are several other common desktop CNC machines used for PCB production.

### 2.1 Bantam Tools (Othermill)
* **Origin**: USA.
* **Features**: Excellent software experience with automatic conductive probing for material location and tool length detection.
* **Pros**: Faster than SRM-20, very easy tool changes, high software integration.
* **Target**: High-budget labs requiring premium user experience.

### 2.2 LPKF ProtoMat (Industrial Grade)
* **Origin**: Germany.
* **Features**: Industrial-grade PCB prototyping.
* **Pros**: Extremely high precision, chemical-free process, integrated vacuum, capable of through-hole plating for multilayer boards.
* **Cons**: Extremely expensive (5-10x the price of SRM-20), high maintenance.

### 2.3 Genmitsu 3018-PRO (Entry Level)
* **Origin**: China.
* **Features**: Open-source architecture (GRBL), extremely affordable.
* **Cons**: Poor rigidity, high spindle runout, difficult to mill fine traces (< 0.2mm), requires significant modification.
* **Target**: DIY hobbyists and makers on a strict budget.

---

## 3. Comparison Matrix

| Feature | Roland SRM-20 | Bantam Tools | Genmitsu 3018 |
| :--- | :--- | :--- | :--- |
| **Price** | Mid-Range ($$) | High ($$$) | Very Low ($) |
| **Precision** | **High** | Very High | Low/Mid |
| **Ease of Use** | Good | **Excellent** | Hard (Steep learning curve) |
| **Software** | VPanel (Simple Control) | Bantam SW (Full Feature) | Candle/GRBL (Open Source) |
| **Target User** | **FabLabs / Schools** | Pro Engineers | DIY Hobbyists |

> **Conclusion**: The Roland SRM-20 is the standard for FabLabs globally due to its **balance of stability, precision, and cost**.

---

## 4. Operation Workflow

1.  **校准**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/b92400286d460ac581406c61a25b3e39.jpg)

2.  **固定木板**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/f66d776d5f71a1ed734102ddfe354b32.jpg)
 **打开系统设置**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/fe5798d32e4d752165986a93ddeec38b.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/c01246bb8a32ae6939080c0e5a5b5854.jpg)

3.  **调0**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/33fdcd67a4adc87be508d510976148c5.jpg)

4.  **俯下身慢慢调Z轴**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/19cba4509eab57c867884f0a05735087.jpg)

5.  **选择实体形式**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/58b1ae52651c5d288ae7dcce5fb73acf.jpg)

6.  **设置原点**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/b81a7266c50432ef02adb74c44a758b1.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/550329e2283c26529ff39352f4549fc6.jpg)

7.  **添加工具**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/990c6481f82fd3fb4060ca289c73571d.jpg)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/e59fd0808a305139865147fa4b4e507b.jpg)

8.  **选择精细化**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/cb6c41f315fde863f61f7c8456362fdd.jpg)

9.  **选择刀头**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/d43d8dfacfb885c3e549971b63118844.jpg)

10.  **调节深度**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/6133bdffca9e16121885c2d347298134.jpg)

11.  **选择切削类型**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/4be2d3a15111485db7db7b84f093c929.jpg)

12.  **预览**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/f7ed693a2974423f98c6b61e81f83443.jpg)

13.  **查看加工时长**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/792013926caae17b59ef799d043b8976.jpg)

14.  **开始加工**:
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/f4b1ec2c033d3cf17a884f875f38accd.jpg)