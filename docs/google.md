GNU General Public License 3.0 (GPL 3.0) was released by the Free Software Foundation (FSF) in 2007, aiming to make necessary updates to GPL 2.0, especially in response to the rapid development of modern open-source software and technologies. It introduced provisions regarding patents, Digital Rights Management (DRM), and "Tivoization." Compared to its predecessor, GPL 3.0 places greater emphasis on protecting the freedom of open-source software in a global context, while also strengthening legal protections for developers.

One of the key updates in GPL 3.0 is the patent licensing clause. In GPL 2.0, while software developers could freely distribute and modify code, there was no clear provision regarding patent licensing, which could result in developers facing patent infringement risks when modifying or using an open-source project. To address this, GPL 3.0 explicitly requires that if developers distribute software licensed under GPL and hold relevant patents, they must grant a license for those patents to other users to prevent patent infringement lawsuits. This clause not only strengthens the freedom of open-source software but also allows members of the open-source community to use, modify, and distribute code with greater confidence, without worrying about future legal disputes related to patents.

In addition to the patent clause, GPL 3.0 also introduces provisions concerning Digital Rights Management (DRM). As digital media became more widespread, many commercial companies adopted DRM technology to restrict users' freedom to use digital content. In the past, GPL 2.0 did not address DRM issues, leading to some open-source projects being embedded in commercial products with DRM restrictions that limited users' ability to modify and use the software. To prevent this "Tivoization" phenomenon, GPL 3.0 added provisions against DRM, explicitly stating that any hardware using GPL software must not employ DRM to prevent users from modifying and using the software. This clause greatly ensures users' freedom to modify open-source software and prevents hardware manufacturers from using software to disable or restrict users' ability to customize the software.

Moreover, GPL 3.0 also made improvements in license compatibility. Many open-source projects use different licenses, which can present challenges for integrating and collaborating across different software. GPL 3.0 updates this by offering more flexible license compatibility, making it easier to share code between different open-source licenses. However, due to the inclusion of stricter patent and DRM clauses, GPL 3.0's compatibility with some older open-source licenses (such as GPL 2.0 and Apache 2.0) may be affected. Nonetheless, GPL 3.0 remains a highly protective license for developers who wish to maintain software freedom.

However, GPL 3.0 also has its points of contention, particularly regarding its acceptance by commercial companies. Due to its explicit provisions on patent licensing, DRM restrictions, and Tivoization, commercial companies may choose to avoid GPL 3.0 because it restricts them from integrating GPL-licensed software into closed-source products. Compared to more permissive licenses like the MIT or BSD licenses, the stringent requirements of GPL 3.0 may seem restrictive to some companies, especially for closed-source software developers, as it may impose additional legal burdens and operational obstacles.

Nevertheless, the primary purpose of GPL 3.0 is undoubtedly to better protect the freedom of the open-source community and ensure that the use, modification, and distribution of software are not subject to unfair legal constraints. As open-source software continues to evolve into mainstream technology, GPL 3.0 not only provides legal safeguards for developers but also grants users broader freedoms, especially when facing patent disputes and DRM technologies. The updates in GPL 3.0 enable open-source software to continue to thrive in the modern technological environment, especially in protecting users' freedoms, providing a stronger legal foundation for the open-source movement.

In summary, GPL 3.0 is a comprehensive upgrade to GPL 2.0, enhancing the protection of modern open-source software freedoms, particularly regarding patents, DRM, and Tivoization. While it faces certain challenges in commercial applications, GPL 3.0 provides a more robust legal framework for the continued development of open-source and free software in the long term.










Google's self-developed programming language and its development and compilation environment
Go (Golang)
Overview: Go is a programming language launched by Google in 2007, specifically designed to address issues related to large-scale distributed systems and concurrent programming. The Go language is concise and efficient, supporting concurrency and garbage collection. It also features fast compilation speed and optimized memory usage.
Application scenarios: Go language is widely used in cloud computing services, microservice architectures, network services and other fields. Many of Google's internal services (such as Google Cloud) and open-source projects (such as Kubernetes and Docker) are written in Go.
Compilation environment
Compiler: Go code is compiled through the Go compiler (go build).
Development environment: Developers often use VS Code or GoLand (the Go-specific IDE provided by JetBrains) for development. Go also supports development in other Text editors (such as Sublime Text).
build tools: Go uses the go build command to build applications, and Go Modules is used to manage dependencies.
The runtime environment: After the Go program is compiled, a local binary file is generated, which can run on platforms such as Linux, Windows, and macOS without relying on virtual machines or other runtimes.
Dart
Overview: Dart is a programming language launched by Google in 2011, mainly used for Web development and mobile development. The Dart language is particularly suitable for building cross-platform applications. Applications developed through the Flutter framework can run on multiple platforms such as iOS, Android, and the Web.
Application scenarios: Dart is mainly used for mobile application development (via Flutter) and Web front-end development. Google's Google Ads, Google Pay and other applications are widely developed using Dart and Flutter.
Compilation environment
Compiler: Dart uses the compiler in the Dart SDK to compile Dart code into native code (such as for Android and iOS applications) or into JavaScript (for Web development).
Development environment: Developers use Android Studio or VS Code (in conjunction with the Dart plugin) to develop Dart applications, especially when using the Flutter framework.
build tools: Use the Flutter CLI (such as the flutter build command) to build and package applications.
Runtime environment: Dart code can run on a Dart VM (virtual machine) or be compiled into native code and used for cross-platform applications through Flutter.

2. The programming languages used by Google and their development and compilation environments
C++
Overview: C++ is a high-performance programming language that is widely used in system programming, high-performance computing, network services, and other fields. Google uses C++ in core systems such as its search engine, distributed systems, and data processing.
The core of Google's search engine, many underlying infrastructures and efficient data processing systems are developed using C++.
Compilation environment
Compiler: Google uses GCC (GNU Compiler Collection) and Clang compiler to compile C++ code.
Development environment: Developers use ides such as Visual Studio, CLion or Sublime Text and text editors for C++ development. Google also uses Bazel internally to build and manage C++ projects.
Build tool: Google mainly uses the Bazel build tool internally for large-scale building.
The operating environment: C++ programs can run on platforms such as Linux, Windows, and macOS. Google uses the Linux environment more frequently.
Java
Overview: Java is a cross-platform programming language that is widely used in Android development, back-end services, and enterprise-level applications. Google uses Java to develop Android applications and also to build some background services.
Application scenarios: Mainly used for Android application development and large-scale enterprise-level applications. Android applications are almost entirely developed in Java, although Kotlin has now also become an officially supported language.
Compilation environment
Compiler: Java code is compiled through the Javac compiler.
Development environment: Developers use Android Studio (based on IntelliJ IDEA) to develop Android applications.
Build tool: Use the Gradle build tool to manage the dependencies and build process of Android projects.
Operating environment: Java programs run through the Java Virtual Machine (JVM), and Android uses ART (Android Runtime) to execute Java code.
Python
Overview: Python is a general-purpose interpreted programming language that is widely used in fields such as data analysis, machine learning, and automation scripting. Google uses Python to develop machine learning systems, data processing tools and automated tasks.
Application scenarios: Mainly used in machine learning, data analysis, automation scripts and cloud computing services (such as TensorFlow).
Compilation environment
Interpreter: Python uses CPython as its default interpreter.
Development environment: Python development typically uses PyCharm, VS Code, or Jupyter Notebooks (for data analysis).
Build tools: Python projects typically use pip to manage dependencies, and Bazel can also be used to manage large-scale Python projects.
Operating environment: Python programs typically run in a Linux environment, and many of Google's services also run on Linux.
JavaScript
Overview: JavaScript is the core programming language for Web development and is widely used in front-end development and Web application development. Google uses JavaScript to develop Web applications and the Chrome browser.
Application scenarios: Google uses JavaScript to develop Chrome browsers and Web applications based on Angular.
Compilation environment

Compiler: JavaScript code is executed through the V8 engine (the engine used by Chrome and Node.js).
Development environment: Developers use VS Code or WebStorm for JavaScript development.
Build tools: Google uses build tools such as Webpack and Bazel for front-end development.
The operating environment: JavaScript code runs in the Chrome browser or Node.js environment through the V8 engine.