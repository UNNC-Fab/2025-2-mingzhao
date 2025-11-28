# <span style="background:none; -webkit-text-fill-color: initial; color: #a855f7;">National and Regional Standards Regarding Laser Cutting</span>
# <span style="background:none; -webkit-text-fill-color: initial; color: #00f3ff;">激光切割相关的国家与地区标准及切缝分析</span>

---

## <span style="background:none; -webkit-text-fill-color: initial; color: #00f3ff;">一、标准体系 (Standards Overview)</span>

激光加工设备属于高风险机械，全球主要工业国家都制定了严格的标准。

* **国际标准 (ISO/IEC)**:
    * **核心安全**: <span style="color: #00f3ff; font-weight: bold;">IEC 60825-1</span> (Safety of laser products) - 定义激光等级 (Class 1-4)。
    * **机械安全**: <span style="color: #00f3ff; font-weight: bold;">ISO 11553</span> - 针对激光加工机的防护罩与联锁装置。

* **中国 (China - GB)**:
    * **强制标准**: <span style="color: #4ade80; font-weight: bold;">GB 7247.1</span> (等同 IEC 60825-1)。
    * **加工机**: <span style="color: #4ade80; font-weight: bold;">GB/T 18490</span>。

* **美国 (USA - ANSI/FDA)**:
    * **制造监管 (FDA)**: <span style="color: #f472b6; font-weight: bold;">21 CFR 1040.10</span> (联邦法律强制)。
    * **使用指南 (ANSI)**: <span style="color: #f472b6; font-weight: bold;">ANSI Z136.1</span> (FabLab/学校必须遵守的操作规范)。

* **欧盟 (Europe - EN)**:
    * **准入认证**: <span style="color: #fbbf24; font-weight: bold;">CE Certification</span> (基于 EN 60825-1)。

![Laser Safety Class Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Warning_laser_en.svg/320px-Warning_laser_en.svg.png)
*(图示：常见的激光辐射警告标识)*

---

## <span style="background:none; -webkit-text-fill-color: initial; color: #00f3ff;">二、激光安全分级 (Laser Classification)</span>

* **Class 1 (一类)**: <span style="color: #4ade80;">安全无害</span>。通常指全封闭、带有联锁装置的激光切割机（正常工作时）。
* **Class 4 (四类)**: <span style="color: #ef4444;">极度危险</span>。高功率激光，直射或漫反射均可致盲、灼伤皮肤或引发火灾（激光管本身属于此类）。

---

## <span style="background:none; -webkit-text-fill-color: initial; color: #00f3ff;">三、切缝分析 (Understanding Kerf)</span>

**Kerf (切缝)** 指激光在切割过程中烧蚀掉的材料宽度（类似于锯路）。

* **典型值 (Typical Value)**: <span style="color: #00f3ff; font-weight: bold;">0.08mm - 0.25mm</span> (取决于材料与聚焦)。
* **影响因素 (Factors)**:
    * <span style="color: #c084fc;">Focus Lens</span>: 焦距越短，光斑越小，Kerf 越小。
    * <span style="color: #c084fc;">Material Thickness</span>: 材料越厚，切缝通常越宽（呈沙漏状）。
    * <span style="color: #c084fc;">Cutting Speed</span>: 速度越慢，热影响区越大，切缝越宽。

### <span style="color: #00f3ff;">切缝补偿 (Compensation)</span>

为了保证榫卯结构严丝合缝，必须在 CAD 设计阶段进行补偿：

* **计算公式**: `Offset Value = Kerf / 2`
* **操作方法**: 在 CAD 软件中使用 <span style="color: #f472b6;">Offset (偏移)</span> 命令。
    * **外轮廓**: 向 <span style="color: #4ade80;">外</span> 偏移。
    * **内孔**: 向 <span style="color: #ef4444;">内</span> 偏移。

![Kerf Illustration](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Laser_cutting_kerf.svg/320px-Laser_cutting_kerf.svg.png)
*(图示：激光束宽度导致的材料损耗)*