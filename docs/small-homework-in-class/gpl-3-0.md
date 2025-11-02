# GPL 3.0


<!-- GPL 3.0 精要说明（Markdown + 少量内联 HTML 上色） -->

<h1 style="color:#2b6cb0;">GPL 3.0 精要说明（面向论文写作的简洁版）</h1>


<h2 style="color:#38a169;">一、简述（Overview）</h2>

**GNU General Public License v3.0（GPL-3.0）** 由自由软件基金会于 2007 年发布，用以在 GPL-2.0 基础上回应现代生态中的**专利诉讼风险**、**DRM 控制**与 **Tivoization（硬件限制用户安装修改版）**等问题。其核心宗旨是：**确保使用者与后续用户对软件的运行、学习、修改与再发布自由**得到**持续性的法律保障**（copyleft 传染性条款）。

- 官方文本：<https://www.gnu.org/licenses/gpl-3.0.en.html>  
- 官方 FAQ：<https://www.gnu.org/licenses/gpl-faq.html>

<h2 style="color:#d69e2e;">二、核心条款（Key Provisions）</h2>

1. **强 Copyleft：** 派生作品、静态/动态链接形成的整体分发，需在同一 GPL-3.0 协议下**开源发布**。  
2. **专利授权：** 分发方默认授予**免版税的专利许可**，防止“先贡献后起诉”的专利钓鱼。  
3. **反 Tivoization：** 禁止以硬件签名/锁定方式阻止用户安装**修改版固件/软件**。  
4. **DRM 相关条款：** 不得以 DRM 机制**剥夺修改与再发布自由**。  
5. **国际化与合规澄清：** 在术语与适用法域上更**清晰一致**，便于跨司法辖区执行。

<h2 style="color:#805ad5;">三、与 MIT / BSD / Apache-2.0 的对比（简表）</h2>

| 维度 | **GPL-3.0** | **MIT** | **BSD（2/3-Clause）** | **Apache-2.0** |
|---|---|---|---|---|
| 许可类型 | **强 Copyleft** | **宽松** | **宽松** | **宽松**（带专利条款） |
| 派生作品开源义务 | **需要（同 GPL）** | 不需要 | 不需要 | 不需要 |
| 专利授权/保护 | **显性、强** | **无显性** | **无显性** | **显性、清晰** |
| 与闭源合并 | **受限** | **友好** | **友好** | **友好** |
| 反 Tivoization/DRM | **明确限制** | 无规定 | 无规定 | 无规定 |
| 典型诉求 | **自由延续、反锁定** | **采用与商用便捷** | **采用与商用便捷** | **商用合规 + 专利明确** |

- MIT 官方页：<https://opensource.org/licenses/MIT>  
- BSD（2-Clause）官方页：<https://opensource.org/licenses/BSD-2-Clause>  
- Apache-2.0 官方页：<https://www.apache.org/licenses/LICENSE-2.0>

<h2 style="color:#e53e3e;">四、论文式总结（Concise Conclusion）</h2>

**结论：** GPL-3.0 通过**强 Copyleft、专利授予、反 Tivoization 与 DRM 约束**，在法律层面**最大化保障用户自由与社区可持续性**；其代价是对闭源整合与商用分发的**兼容性约束更强**。相对地，MIT、BSD 与 Apache-2.0 等**宽松许可**提供更高的**集成与商业采用弹性**（尤其 Apache-2.0 还具备清晰的专利条款），但**无法强制派生作品回流开源**。

<h2 style="color:#2b6cb0;">五、选型建议（Quick Guidance）</h2>

- **优先 GPL-3.0：** 若目标是**防止“闭源围墙”与专利威胁**、保障改造自由的**延续性**。  
- **优先 MIT / BSD：** 若目标是**最大化生态扩散**、鼓励**闭源或商业集成**，对回流要求不强。  
- **优先 Apache-2.0：** 若在宽松模型下仍**重视专利风险控制**与大规模企业采用。

---

**参考与官网链接（可直接引用）**  
- GPL-3.0 正文：<https://www.gnu.org/licenses/gpl-3.0.en.html>  
- GPL 官方 FAQ：<https://www.gnu.org/licenses/gpl-faq.html>  
- MIT：<https://opensource.org/licenses/MIT>  
- BSD（2-Clause）：<https://opensource.org/licenses/BSD-2-Clause>  
- Apache-2.0：<https://www.apache.org/licenses/LICENSE-2.0>
