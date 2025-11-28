National and Regional Standards Regarding Laser Cutting

(激光切割相关的国家与地区标准及切缝分析)

1. Overview of Standards (标准概览)

激光加工设备属于高风险机械，全球主要工业国家都制定了严格的标准来规范其制造（制造商责任）和使用（用户责任）。以下是五个主要国家/地区的标准体系：

1.1 International (国际标准 - ISO/IEC)

所有国家标准的基础。

IEC 60825-1: Safety of laser products. 定义了激光的安全等级（Class 1 - Class 4）和辐射安全要求。

ISO 11553: Safety of machinery - Laser processing machines. 专门针对激光加工机械（如切割机）的机械安全、防护罩和联锁装置标准。

1.2 China (中国 - GB)

中国标准体系（Guobiao）很大程度上采纳了国际标准。

GB 7247.1: 激光产品的安全. (等同采用 IEC 60825-1)。

GB/T 18490: 激光加工机安全要求. (等同采用 ISO 11553)。

强制性: 在中国销售的激光设备必须符合 GB 强制性标准。

1.3 USA (美国 - ANSI/FDA)

美国拥有独特的双重监管体系：

FDA (21 CFR 1040.10): 联邦法律。针对制造商。所有在美国销售的激光产品必须向 FDA 注册并符合 CDRH 性能标准。

ANSI Z136.1: Safe Use of Lasers. 针对用户。这是美国各行业（如 FabLab、工厂、学校）必须遵守的激光安全操作指南，规定了激光安全官 (LSO) 的职责。

1.4 European Union (欧盟 - EN)

EN 60825-1: 欧盟协调标准。

CE 认证: 进入欧盟市场的激光切割机必须通过 CE 认证，这要求设备必须符合机械指令 (Machinery Directive) 和低电压指令。EN 60825 是核心参考标准。

1.5 Japan (日本 - JIS)

JIS C 6802: Safety of laser products. (基于 IEC 60825-1 修订)。

日本工业标准 (JIS) 对激光标签和警告标识有非常具体的日语本地化要求。

2. Comparison of Standards (标准对比)

Feature (特性)

🇪🇺 ISO/IEC / EN (国际/欧盟)

🇨🇳 GB (中国)

🇺🇸 ANSI / FDA (美国)

🇯🇵 JIS (日本)

核心安全标准

IEC 60825-1

GB 7247.1

ANSI Z136.1 (使用) 



 FDA 21 CFR (制造)

JIS C 6802

合规性质

强制 (CE认证)

强制 (CCC/GB)

联邦法律强制 (FDA) 



 行业标准 (ANSI)

工业自愿/强制结合

安全分级

Class 1, 1M, 2, 2M, 3R, 3B, 4

同 IEC

Class I, II, IIIa, IIIb, IV (罗马数字)

同 IEC

主要区别

强调设备本身的固有安全性 (如必须有安全联锁)

与 IEC 高度一致

强调管理控制 (如必须指定 LSO 激光安全官)

强调具体的标签和用户手册规范

总结:

IEC/EN/GB/JIS 体系非常相似，主要关注设备本身是否安全（如果不安全，就不给卖）。

美国体系 更加关注“人”的管理，要求每个使用激光的场所（如我们的 FabLab）都必须有完善的管理制度和专人负责。

3. Understanding Kerf (理解激光切缝)

在激光切割中，Kerf (切缝) 是指激光束在切割过程中烧蚀掉的材料宽度。这就像锯子的锯路一样，激光并不是一条无限细的线，它有物理宽度。

3.1 What is Kerf? (什么是切缝)

定义: 激光切割过程中材料损失的宽度。

典型值: 对于常用的 CO2 激光切割机（如切割 3mm 椴木或亚克力），Kerf 通常在 0.08mm - 0.25mm 之间。

3.2 Factors Influencing Kerf (影响因素)

Focus Lens (聚焦镜): 焦距越短，光斑越小，Kerf 越小。

Material Thickness (材料厚度): 材料越厚，激光需要聚焦得更深或发散，通常 Kerf 会变宽（呈沙漏状）。

Cutting Speed (切割速度): 速度越慢，热影响区越大，Kerf 越宽。

Air Assist (辅助气体): 气压过大可能会吹走更多熔融材料，增大切缝。

3.3 How to Measure Kerf (如何测量切缝)

最准确的方法是 "10-Piece Line Test" (十条线测试法)：

在 CAD 中画一个 100mm x 50mm 的矩形。

在矩形内部画 10 条垂直的切割线，将矩形分成 11 个小条。

进行切割。

将所有切下来的小条紧紧拼在一起，推向矩形框的一侧。

测量剩下的空隙宽度。

计算公式: Kerf = 空隙总宽度 / 10

3.4 Kerf Compensation (切缝补偿)

为了保证零件尺寸精准（特别是做 榫卯结构/Press-fit 时），必须在设计时进行补偿。

原理: 激光应该沿着设计线的外侧（对于外轮廓）或内侧（对于内孔）行走，而不是中心。

操作:

如果你要切一个 10mm 的方块，你需要画一个 10mm + Kerf 的方块。

如果你要挖一个 10mm 的孔，你需要画一个 10mm - Kerf 的孔。

简便方法 (CAD Offset):

在 Fusion 360 / AutoCAD 中，使用 Offset (偏移) 命令。

偏移距离 = Kerf / 2。

Example: 如果测得 Kerf 为 0.2mm，则设计时应向外偏移 0.1mm。

4. Conclusion (总结)

了解标准能确保我们的操作合规且安全；而掌握 Kerf 则是从“切断”进阶到“精密制造”的关键。在制作 FabLab 的最终作业（如心理沙盘）时，考虑到 Kerf 补偿能让你的拼接结构严丝合缝，无需胶水也能稳固连接。