(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{414:function(v,a,_){"use strict";_.r(a);var t=_(0),s=Object(t.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("JVM")]),v._v(" "),a("h1",{attrs:{id:"什么是jvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是jvm"}},[v._v("#")]),v._v(" 什么是JVM")]),v._v(" "),a("ol",[a("li",[v._v("jvm指的是java虚拟机，本质上是一个运行在计算机上的程序，他的职责就是运行java字节码文件，作用是为了支持跨平台特性")]),v._v(" "),a("li",[v._v("jvm的功能有三项：第一是解释执行字节码指令；第二是管理内存中对象的分配，完成自动的垃圾回收，第三是优化热点代码提升执行效率")]),v._v(" "),a("li",[v._v("jvm的组成分为类加载子系统、运行时数据区、执行引擎、本地方法接口")]),v._v(" "),a("li",[v._v("常用jvm是Oracle提供的hotspot虚拟机，还有graalVM、龙井、OpenJ9")])]),v._v(" "),a("h1",{attrs:{id:"字节码文件的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字节码文件的组成"}},[v._v("#")]),v._v(" 字节码文件的组成")]),v._v(" "),a("p",[v._v("https://blog.csdn.net/m0_71386740/article/details/140822318")]),v._v(" "),a("p",[v._v("字节码是java虚拟机执行的一种指令格式")]),v._v(" "),a("p",[v._v("字节码文件本质上是二进制文件，无法直接打开，需要用专业的工具")]),v._v(" "),a("ol",[a("li",[v._v("开发环境中用jclasslib插件")]),v._v(" "),a("li",[v._v("服务器环境使用javap -v命令")])]),v._v(" "),a("p",[v._v("五个组成部分")]),v._v(" "),a("ol",[a("li",[v._v("基本信息：魔数、字节码文件对应的java版本号、访问标识、父类和接口")]),v._v(" "),a("li",[v._v("字符串常量池：字符串常量、类和接口名、字段名，主要在字节码指令中使用")]),v._v(" "),a("li",[v._v("字段：当前类或接口声明的字段信息")]),v._v(" "),a("li",[v._v("方法：当前类或接口声明的方法信息，包含字节码指令")]),v._v(" "),a("li",[v._v("属性：类的")])]),v._v(" "),a("h1",{attrs:{id:"运行时数据区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区"}},[v._v("#")]),v._v(" 运行时数据区")]),v._v(" "),a("h2",{attrs:{id:"oom怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oom怎么解决"}},[v._v("#")]),v._v(" OOM怎么解决")]),v._v(" "),a("p",[v._v("当遇到 OOM 时，我会首先明确是哪种内存区域的 OOM。如果是堆内存 OOM，我会检查代码是否有内存泄漏，并使用工具分析堆转储文件。同时，我会调整 JVM 参数，增加堆内存大小。如果是元空间 OOM，我会检查是否有过多的类加载，并调整元空间大小。对于栈内存 OOM，我会优化线程使用，并调整线程栈大小。最后，我会通过监控工具实时监控 JVM 内存使用情况，确保问题不再发生。")]),v._v(" "),a("p",[a("strong",[v._v("加分项")])]),v._v(" "),a("ul",[a("li",[v._v("提到具体的工具（如 "),a("strong",[v._v("MAT")]),v._v("、"),a("strong",[v._v("VisualVM")]),v._v("、JProfiler）。")]),v._v(" "),a("li",[v._v("提到具体的 JVM 参数（如 "),a("code",[v._v("-Xmx")]),v._v("、-Xms、"),a("code",[v._v("-XX:PrintGCDetails")]),v._v("、"),a("code",[v._v("-XX:HeapDumpOnOutOfMomoryError")]),v._v("）。")]),v._v(" "),a("li",[v._v("提到如何预防 OOM（如代码优化、监控）。")])]),v._v(" "),a("h2",{attrs:{id:"jdk6-8内存区域的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk6-8内存区域的不同"}},[v._v("#")]),v._v(" jdk6-8内存区域的不同")]),v._v(" "),a("p",[v._v("jdk6堆中有方法区，方法区有永久代实现，字符串常量池在方法区中")]),v._v(" "),a("p",[v._v("jdk7字符串常量池移到堆中")]),v._v(" "),a("p",[v._v("jdk8去掉永久代，改用元空间，元空间在直接内存中，")]),v._v(" "),a("h1",{attrs:{id:"类的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的生命周期"}},[v._v("#")]),v._v(" 类的生命周期")]),v._v(" "),a("p",[v._v("加载")]),v._v(" "),a("p",[v._v("验证")]),v._v(" "),a("p",[v._v("准备：给静态变量默认值、final初始值")]),v._v(" "),a("p",[v._v("解析")]),v._v(" "),a("p",[v._v("初始化")]),v._v(" "),a("h1",{attrs:{id:"什么是类加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是类加载器"}},[v._v("#")]),v._v(" 什么是类加载器")]),v._v(" "),a("p",[v._v("启动类加载器（C++、jdk9后java）")]),v._v(" "),a("p",[v._v("扩展类加载器、平台类加载器（jdk9）")]),v._v(" "),a("p",[v._v("应用程序类加载器")]),v._v(" "),a("p",[v._v("自定义类加载器：重写findclass方法")]),v._v(" "),a("h1",{attrs:{id:"什么是双亲委派机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是双亲委派机制"}},[v._v("#")]),v._v(" 什么是双亲委派机制")]),v._v(" "),a("p",[v._v("每一个类加载器都有一个父类加载器，形成一个层级结构")]),v._v(" "),a("p",[v._v("当一个类加载器接收到加载类的任务后，会查找这个类是否被加载过，没有则向上投递，直到启动类加载器，这个就是向上查找的过程，")]),v._v(" "),a("p",[v._v("如果启动类加载器也没有加载过，就检查该类是否在自己的加载路径上，没有则向下投递给下一个加载器加载，这个就是向下加载。这两个过程就是双亲委派机制，如果没有加载器能够加载，就抛出ClassNotFoundException")]),v._v(" "),a("p",[v._v("双亲委派机制的作用")]),v._v(" "),a("p",[v._v("​\t保证类加载的安全，如果要加载一个同名的String类，都会交给启动类加载，发现被加载过了就不会再加载，")]),v._v(" "),a("p",[v._v("​\t避免类的重复加载")]),v._v(" "),a("h1",{attrs:{id:"打破双亲委派机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打破双亲委派机制"}},[v._v("#")]),v._v(" 打破双亲委派机制")]),v._v(" "),a("p",[v._v("打破双亲委派机制唯一方法是自定义类加载器中重写loadClass方法")]),v._v(" "),a("h1",{attrs:{id:"如何判断堆上的对象有没有被引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何判断堆上的对象有没有被引用"}},[v._v("#")]),v._v(" 如何判断堆上的对象有没有被引用")]),v._v(" "),a("p",[v._v("引用计数法")]),v._v(" "),a("ul",[a("li",[v._v("为每一个对象维护一个引用计数器，当对象被引用时加1，取消引用时减1，存在循环依赖问题，所以java没有使用这种方法")])]),v._v(" "),a("p",[v._v("可达性分析算法")]),v._v(" "),a("ul",[a("li",[v._v("java使用的可达性分析算法来判断对象是否可以被回收，可达性分析将对象分为两类：垃圾回收的根对象（GC Root）和普通对象")]),v._v(" "),a("li",[v._v("可达性分析算法指的是如果从某个到GC Root对象是可达的，对象就不可回收，最常见的GC Root对象会引用栈上的局部变量和静态变量导致对象不可回收。")]),v._v(" "),a("li",[v._v("哪些对象被称之为GC Root对象呢？\n"),a("strong",[v._v("线程Thread对象，引用线程栈帧中的方法参数、局部变量等。")]),v._v(" "),a("strong",[v._v("系统类加载器加载的java.lang.Class对象，引用类中的静态变量。")]),v._v("\n监视器对象，用来保存同步锁synchronized关键字持有的对象。\n本地方法调用时使用的全局对象。")])]),v._v(" "),a("h1",{attrs:{id:"jvm的内存模型及其分区-详细每个分区放什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm的内存模型及其分区-详细每个分区放什么"}},[v._v("#")]),v._v(" JVM的内存模型及其分区（详细每个分区放什么）")]),v._v(" "),a("h1",{attrs:{id:"堆里面的分区有什么-说说他们的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆里面的分区有什么-说说他们的特点"}},[v._v("#")]),v._v(" 堆里面的分区有什么，说说他们的特点")]),v._v(" "),a("p",[v._v("Eden、from、to")]),v._v(" "),a("h1",{attrs:{id:"gc算法有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc算法有哪些"}},[v._v("#")]),v._v(" GC算法有哪些")]),v._v(" "),a("p",[v._v("引用计算、标记清除、标记压缩、复制算法")]),v._v(" "),a("h1",{attrs:{id:"轻gc和重gc在什么时候发生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻gc和重gc在什么时候发生"}},[v._v("#")]),v._v(" 轻GC和重GC在什么时候发生")]),v._v(" "),a("h1",{attrs:{id:"jdk9将string底层实现char-改为byte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk9将string底层实现char-改为byte"}},[v._v("#")]),v._v(" JDK9将String底层实现char[]改为byte[]")]),v._v(" "),a("p",[v._v("并没有将String底层实现char[]改为byte[]，而是引入了compact string的优化，减少string的内存消耗")]),v._v(" "),a("p",[v._v("java字符串在内部是由char[]来表示，jdk内部使用UTF-16意味着每个char由两个字节组成，如果一个字符串只包含一个英文字符/ASCII字符，只需要一个字节就可以表示，意味着字符串实际存储空间比需要存储的空间多一倍，")]),v._v(" "),a("p",[v._v("因此，jdk9引入compact string的优化，将char[]改为byte[]，只有存储非ASCII字符才会使用char[]，纯ASCII字符会存储在byte[]，从而节省一半空间")]),v._v(" "),a("p",[v._v("这个优化是在编译器和运行时环境实现的。透明的，使用jvm参数-xx: UseCompressedStrings")]),v._v(" "),a("h1",{attrs:{id:"对象在堆中的-内存布局-⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象在堆中的-内存布局-⭐"}},[v._v("#")]),v._v(" 对象在堆中的=="),a("strong",[v._v("内存布局")]),v._v("==⭐")]),v._v(" "),a("h1",{attrs:{id:"jvm工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm工具"}},[v._v("#")]),v._v(" JVM工具")]),v._v(" "),a("h2",{attrs:{id:"jvis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvis"}},[v._v("#")]),v._v(" jvis")])])}),[],!1,null,null,null);a.default=s.exports}}]);