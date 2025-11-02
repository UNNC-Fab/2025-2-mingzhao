# Google's development language

<!-- Google 研发语言与编译环境 -->

<h1 style="color:#2b6cb0;">Google 的开发语言与编译环境</h1>


<h2 style="color:#38a169;">一、语言与生态（Google）</h2>

- **Android 应用**：**Kotlin（首推）** 与 **Java**  
  - 官方：<https://developer.android.com/kotlin>｜<https://developer.android.com>  
  - 构建：**Gradle**（Android Gradle Plugin），IDE：**Android Studio**（基于 IntelliJ）  
  - 编译链：OpenJDK + **D8/R8**（dex/压缩混淆）+ **LLVM/Clang**（NDK 原生 C/C++）

- **系统/高性能**：**C/C++**（内核/多媒体/性能关键模块）  
  - NDK：<https://developer.android.com/ndk>  
  - 编译：**Clang/LLVM**，打包通过 Gradle 集成

- **后端/基础设施**：**Go（Golang）**、**Python**、**Java**、**C++**  
  - Go：<https://go.dev/>（自带 toolchain，静态编译）  
  - 构建编排：**Bazel**（Google 内部 Blaze 的开源版） <https://bazel.build/>

- **跨平台 UI**：**Dart + Flutter**  
  - Flutter：<https://flutter.dev/>｜Dart：<https://dart.dev/>  
  - 编译：JIT（开发热重载）+ **AOT**（发布，生成原生代码），移动端经 **Skia** 渲染

- **Web 前端**：**TypeScript/JavaScript**（Angular 等）  
  - Angular：<https://angular.io/>（构建使用 Angular CLI + Webpack/Vite）

<h2 style="color:#d69e2e;">二、典型编译与构建环境</h2>

- **Android Studio + Gradle**：应用/库多模块构建、单元测试、仪器化测试、ProGuard/R8 混淆  
- **Bazel**：多语言、超大仓规模构建与缓存；CI/CD 友好  
- **Go Toolchain**：`go build / test / mod` 一体化；交叉编译便捷  
- **Dart/Flutter**：`flutter build`（AOT 产物），`flutter run`（热重载）  
- **NDK/Clang**：原生库、JNI/FFI 连接

官方汇总入口：  
- Android 开发：<https://developer.android.com/>  
- Flutter：<https://flutter.dev/>  
- Bazel：<https://bazel.build/>  
- Go：<https://go.dev/>  

<h2 style="color:#805ad5;">三、与华为 / 苹果 / 微软 的对比</h2>

| 维度 | **Google** | **华为（HarmonyOS）** | **苹果（Apple）** | **微软（Microsoft）** |
|---|---|---|---|---|
| 主推语言 | **Kotlin/Java**（Android），**Dart**（Flutter），**Go/C++**（基础设施） | **ArkTS**（TypeScript 超集）/ **C/C++** /（历史兼容 Java/Kotlin） | **Swift / Objective-C** | **C# / .NET**，**C++**（系统/原生），**TypeScript**（前端） |
| 跨平台 UI | **Flutter（Dart）** | **ArkUI**（Declarative UI） | **SwiftUI / UIKit** | **.NET MAUI / WinUI / WPF** |
| IDE / 工具 | **Android Studio**，**Bazel**，**Go Toolchain** | **DevEco Studio**，**ArkCompiler** | **Xcode**，Swift/Clang（LLVM） | **Visual Studio / VS Code**，**MSBuild**，**dotnet CLI** |
| 编译链 | Gradle + D8/R8 + **LLVM/Clang**（NDK）；**AOT/JIT**（Dart） | **ArkCompiler**（AOT/BC），Clang/LLVM | **Swift 编译器** + **Clang/LLVM**，Bitcode（历史） | **Roslyn**（C#），**MSVC/Clang**（C++），**AOT/ReadyToRun**（.NET） |
| 系统分发 | **Google Play / 自有商店** | **华为应用市场 / 企业分发** | **App Store / TestFlight** | **Microsoft Store / 企业分发** |
| 生态定位 | 移动 + 云原生 + 跨平台 | 全场景设备（手机/IoT/车载） | 高度一体化软硬件 | 桌面/云/企业生产力为主 |
| 亮点 | **Flutter** 跨端一致性、**Bazel** 大仓构建、**Go** 简洁并发 | **ArkTS/ArkUI** 原生声明式、分布式能力 | **SwiftUI**、Metal、端到端调优 | **.NET** 成熟生态、企业级工具链 |
| 潜在限制 | Android 设备碎片化；Java/Kotlin/NDK 混合复杂度 | 国际化生态与第三方依赖适配 | 封闭生态、平台许可严格 | 跨平台 UI 在移动端一致性取舍 |

官方文档入口：  
- 华为 HarmonyOS：<https://developer.harmonyos.com/>  
- Apple Developer：<https://developer.apple.com/>  
- Microsoft .NET：<https://learn.microsoft.com/dotnet/>｜Visual Studio：<https://visualstudio.microsoft.com/>

<h2 style="color:#e53e3e;">四、结论</h2>

**Google** 以 **Kotlin/Java + Android Studio** 为移动主线，辅以 **Dart/Flutter** 实现跨平台一致体验，并用 **Bazel/Go** 支撑大规模后端与工程化；**华为** 以 **ArkTS/ArkUI + ArkCompiler** 提供全场景一体化；**苹果** 通过 **Swift/Xcode** 深度捆绑硬件实现端到端优化；**微软** 则以 **C#/.NET + Visual Studio** 夯实桌面与企业开发。四家在“语言—工具链—分发渠道”上各有侧重：**Google/华为** 倾向多设备与跨端框架，**苹果** 强调封闭内生优化，**微软** 突出企业级生产力与跨平台 .NET 生态。

<h2 style="color:#2b6cb0;">五、选型建议</h2>

- **移动跨端为先**：优先 **Flutter（Dart）** 或 **.NET MAUI（C#）**；iOS 体验要求极高则考虑 **SwiftUI** 分平台实现。  
- **大规模后端/基础设施**：**Go** 或 **Java/Kotlin**（配合 **Bazel**/**Gradle** + K8s）。  
- **原生性能**：图形/多媒体/底层库采用 **C/C++（Clang/LLVM）** 并通过 NDK/FFI 嵌入。

---
