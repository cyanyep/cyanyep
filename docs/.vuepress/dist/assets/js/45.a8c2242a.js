(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{409:function(t,a,_){"use strict";_.r(a);var s=_(0),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git分布式版本控制工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git分布式版本控制工具"}},[t._v("#")]),t._v(" Git分布式版本控制工具")]),t._v(" "),a("h1",{attrs:{id:"_1、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、目标"}},[t._v("#")]),t._v(" 1、目标")]),t._v(" "),a("p",[t._v("了解Git基本概念")]),t._v(" "),a("p",[t._v("能够概述git工作流程")]),t._v(" "),a("p",[t._v("能够使用Git常用命令")]),t._v(" "),a("p",[t._v("熟悉Git代码托管服务")]),t._v(" "),a("p",[t._v("能够使用idea操作git")]),t._v(" "),a("h1",{attrs:{id:"_2、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、概述"}},[t._v("#")]),t._v(" 2、概述")]),t._v(" "),a("h2",{attrs:{id:"_2-1、开发中的实际场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、开发中的实际场景"}},[t._v("#")]),t._v(" 2.1、开发中的实际场景")]),t._v(" "),a("p",[t._v("场景一：备份小明负责的模块就要完成了，就在即将Release之前的一瞬间，电脑突然蓝屏，硬盘光荣牺牲！几个月来的努力付之东流")]),t._v(" "),a("p",[t._v("场景二：代码还原这个项目中需要一个很复杂的功能，老王摸索了一个星期终于有眉目了，可是这被改得面目全非的代码已经回不到从前了。什么地方能买到哆啦A梦的时光机啊？")]),t._v(" "),a("p",[t._v("场景三：协同开发小刚和小强先后从文件服务器上下载了同一个文件：Analysis.java。小刚在Analysis.java文件中的第30行声明了一个方法，叫count()，先保存到了文件服务器上；小强在Analysis.java文件中的第50行声明了一个方法，叫sum()，也随后保存到了文件服务器上，于是，count()方法就只存在于小刚的记忆中了")]),t._v(" "),a("p",[t._v("场景四：追溯问题代码的编写人和编写时间！老王是另一位项目经理，每次因为项目进度挨骂之后，他都不知道该扣哪个程序员的工资！就拿这次来说吧，有个Bug调试了30多个小时才知道是因为相关属性没有在应用初始化时赋值！可是二胖、王东、刘流和正经牛都不承认是自己干的！")]),t._v(" "),a("h2",{attrs:{id:"_2-2、版本控制器的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、版本控制器的方式"}},[t._v("#")]),t._v(" 2.2、版本控制器的方式*")]),t._v(" "),a("p",[t._v("a、集中式版本控制工具")]),t._v(" "),a("p",[t._v("​\t集中式版本控制工具，版本库是集中存放在中央服务器的，team里每个人work时从中央服务器下载代码，是必须联网才能工作，局域网或互联网。个人修改后然后提交到中央版本库。")]),t._v(" "),a("p",[t._v("​\t举例："),a("strong",[t._v("SVN和CVS")])]),t._v(" "),a("p",[t._v("b、"),a("strong",[t._v("分布式版本控制工具")]),t._v(" *")]),t._v(" "),a("p",[t._v("​\t分布式版本控制系统没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样工作的时候，无需要联网了，因为版本库就在你自己的电脑上。多人协作只需要各自的修改推送给对方，就能互相看到对方的修改了。")]),t._v(" "),a("p",[t._v("​\t举例："),a("strong",[t._v("Git")])]),t._v(" "),a("h2",{attrs:{id:"_2-3、svn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、svn"}},[t._v("#")]),t._v(" 2.3、SVN")]),t._v(" "),a("h2",{attrs:{id:"_2-4、git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、git"}},[t._v("#")]),t._v(" 2.4、Git")]),t._v(" "),a("p",[t._v("Git是分布式的,Git不需要有中心服务器，我们每台电脑拥有的东西都是一样的。我们使用Git并且有个中心服务器，仅仅是为了方便交换大家的修改，但是这个服务器的地位和我们每个人的PC是一样的。我们可以把它当做一个开发者的pc就可以就是为了大家代码容易交流不关机用的。没有它大家一样可以工作，只不过“交换”修改不方便而已。")]),t._v(" "),a("p",[t._v("git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。Git是LinusTorvalds为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),a("p",[t._v("同生活中的许多伟大事物一样，Git诞生于一个极富纷争大举创新的年代。Linux内核开源项目有着为数众多的参与者。绝大多数的Linux内核维护工作都花在了提交补丁和保存归档的繁琐事务上（1991－2002年间）。到2002年，整个项目组开始启用一个专有的分布式版本控制系统BitKeeper来管理和维护代码。")]),t._v(" "),a("p",[t._v("到了2005年，开发BitKeeper的商业公司同Linux内核开源社区的合作关系结束，他们收回了Linux内核社区免费使用BitKeeper的权力。这就迫使Linux开源社区（特别是Linux的缔造者LinusTorvalds）基于使用BitKeeper时的经验教训，开发出自己的版本系统。他们对新的系统制订了若干目标：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("速度")])]),t._v(" "),a("li",[a("p",[t._v("简单的设计")])]),t._v(" "),a("li",[a("p",[t._v("对非线性开发模式的强力支持（允许成千上万个并行开发的分支）")])]),t._v(" "),a("li",[a("p",[t._v("完全分布式")])]),t._v(" "),a("li",[a("p",[t._v("有能力高效管理类似Linux内核一样的超大规模项目（速度和数据量）")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121000225046.png",alt:"image-20250121000225046"}})]),t._v(" "),a("h2",{attrs:{id:"_2-5、git工作流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、git工作流程图"}},[t._v("#")]),t._v(" 2.5、Git工作流程图**")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121000308761.png",alt:"image-20250121000308761"}})]),t._v(" "),a("p",[t._v("命令如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("clone（克隆）:从远程仓库中克隆代码到本地仓库")])]),t._v(" "),a("li",[a("p",[t._v("checkout（检出）:从本地仓库中检出一个仓库分支然后进行修订")])]),t._v(" "),a("li",[a("p",[t._v("add（添加）:在提交前先将代码提交到暂存区")])]),t._v(" "),a("li",[a("p",[t._v("commit（提交）:提交到本地仓库。本地仓库中保存修改的各个历史版本")])]),t._v(" "),a("li",[a("p",[t._v("fetch (抓取)：从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。")])]),t._v(" "),a("li",[a("p",[t._v("pull (拉取)：从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge")])]),t._v(" "),a("li",[a("p",[t._v("push（推送）:修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库")])])]),t._v(" "),a("h1",{attrs:{id:"_3、git安装与常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、git安装与常用命令"}},[t._v("#")]),t._v(" 3、Git安装与常用命令")]),t._v(" "),a("p",[t._v("本教程里的git命令例子都是在Git Bash中演示的，会用到一些基本的linux命令，在此为大家提前列举：")]),t._v(" "),a("p",[t._v("ls/ll查看当前目录")]),t._v(" "),a("p",[t._v("cat查看文件内容")]),t._v(" "),a("p",[t._v("touch创建文件")]),t._v(" "),a("p",[t._v("vi vi编辑器（使用vi编辑器是为了方便展示效果，学员可以记事本、editPlus、notPad++等其它编辑器）")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("h2",{attrs:{id:"_3-1、git环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、git环境配置"}},[t._v("#")]),t._v(" 3.1、Git环境配置")]),t._v(" "),a("h3",{attrs:{id:"_3-1-1下载与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1下载与安装"}},[t._v("#")]),t._v(" 3.1.1下载与安装")]),t._v(" "),a("p",[t._v("下载地址：https://git-scm.com/download")]),t._v(" "),a("p",[t._v("​\t备注：Git GUI：Git提供的图形界面工具")]),t._v(" "),a("p",[t._v("​\tGit Bash：Git提供的命令行工具")]),t._v(" "),a("p",[t._v("当安装Git后首先要做的事情是设置用户名称和email地址。这是非常重要的，因为每次Git提交都会使用该用户信息")]),t._v(" "),a("h3",{attrs:{id:"_3-1-2基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2基本配置"}},[t._v("#")]),t._v(" 3.1.2基本配置")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开Git Bash")])]),t._v(" "),a("li",[a("p",[t._v("设置用户信息")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name “itcast”\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email “hello@itcast.cn”\n")])])]),a("p",[t._v("​\t查看配置信息")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email\n")])])]),a("h3",{attrs:{id:"_3-1-3为常用指令配置别名-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3为常用指令配置别名-可选"}},[t._v("#")]),t._v(" 3.1.3为常用指令配置别名（可选）")]),t._v(" "),a("p",[t._v("有些常用的指令参数非常多，每次都要输入好多参数，我们可以使用别名。")]),t._v(" "),a("ol",[a("li",[t._v("打开用户目录，")])]),t._v(" "),a("p",[t._v("​\t\t创建.bashrc文件")]),t._v(" "),a("p",[t._v("​\t\t部分windows系统不允许用户创建点号开头的文件，可以打开gitBash,执行touch~/.bashrc")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在.bashrc文件中输入如下内容：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用于输出git提交日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" git-log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --pretty=oneline --all --graph --abbrev-commit'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用于输出当前目录所有文件及基本信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ls -al'")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("打开gitBash，执行"),a("code",[t._v("source~/.bashrc")])])]),t._v(" "),a("h3",{attrs:{id:"_3-1-4解决gitbash乱码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4解决gitbash乱码问题"}},[t._v("#")]),t._v(" 3.1.4解决GitBash乱码问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开GitBash执行下面命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --global core.quotepath false\n")])])])]),t._v(" "),a("li",[a("p",[t._v("${git_home}/etc/bash.bashrc文件最后加入下面两行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('export LANG="zh_CN.UTF-8"\nexport LC_ALL="zh_CN.UTF-8"\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-2、获取本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、获取本地仓库"}},[t._v("#")]),t._v(" 3.2、获取本地仓库")]),t._v(" "),a("p",[t._v("要使用Git对我们的代码进行版本控制，首先需要获得本地仓库")]),t._v(" "),a("p",[t._v("1）在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库")]),t._v(" "),a("p",[t._v("2）进入这个目录中，点击右键打开Git bash窗口")]),t._v(" "),a("p",[t._v("3）执行命令git init")]),t._v(" "),a("p",[t._v("4）如果创建成功后可在文件夹下看到隐藏的.git目录。")]),t._v(" "),a("h2",{attrs:{id:"_3-3、基础操作指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、基础操作指令"}},[t._v("#")]),t._v(" 3.3、基础操作指令**")]),t._v(" "),a("p",[a("strong",[t._v("Git工作目录")]),t._v("下对于文件的"),a("strong",[t._v("修改")]),t._v("(增加、删除、更新)会存在几个状态，这些"),a("strong",[t._v("修改")]),t._v("的状态会随着我们执行Git的命令而发生变化。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121114450702.png",alt:"image-20250121114450702"}})]),t._v(" "),a("p",[t._v("本章节主要讲解如何使用命令来控制这些状态之间的转换：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("git add (工作区--\x3e暂存区)")])]),t._v(" "),a("li",[a("p",[t._v("git commit (暂存区--\x3e本地仓库)")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-1、查看修改的状态-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1、查看修改的状态-status"}},[t._v("#")]),t._v(" 3.3.1、查看修改的状态（status）*")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("作用：查看的修改的状态（暂存区、工作区）")])]),t._v(" "),a("li",[a("p",[t._v("命令形式："),a("code",[t._v("git status")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-2、添加工作区到暂存区-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2、添加工作区到暂存区-add"}},[t._v("#")]),t._v(" 3.3.2、添加工作区到暂存区(add)*")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("作用：添加工作区一个或多个文件的修改到暂存区")])]),t._v(" "),a("li",[a("p",[t._v("命令形式：git add单个文件名|通配符")]),t._v(" "),a("ul",[a("li",[t._v("将所有修改加入暂存区："),a("code",[t._v("git add .")])])])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-3、提交暂存区到本地仓库-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3、提交暂存区到本地仓库-commit"}},[t._v("#")]),t._v(" 3.3.3、提交暂存区到本地仓库(commit)*")]),t._v(" "),a("p",[t._v("作用：提交暂存区内容到本地仓库的当前分支")]),t._v(" "),a("p",[t._v("命令形式："),a("code",[t._v("git commit -m '注释内容'")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-4、查看提交日志-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4、查看提交日志-log"}},[t._v("#")]),t._v(" 3.3.4、查看提交日志(log)*")]),t._v(" "),a("p",[a("strong",[t._v("在3.1.3中配置的别名git -log就包含了这些参数，所以后续可以直接使用指令git-log")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("作用:查看提交记录")])]),t._v(" "),a("li",[a("p",[t._v("命令形式：git log [option]")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("options")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("--all 显示所有分支")])]),t._v(" "),a("li",[a("p",[t._v("--pretty=oneline 将提交信息显示为一行")])]),t._v(" "),a("li",[a("p",[t._v("--abbrev-commit 使得输出的commitId更简短")])]),t._v(" "),a("li",[a("p",[t._v("--graph 以图的形式显示")])])])])])]),t._v(" "),a("li",[a("p",[t._v("可以使用别名")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-5、版本回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-5、版本回退"}},[t._v("#")]),t._v(" 3.3.5、版本回退**")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("作用：版本切换")])]),t._v(" "),a("li",[a("p",[t._v("命令形式："),a("code",[t._v("git reset --hard commitID")])]),t._v(" "),a("ul",[a("li",[t._v("commitID可以使用git-log或git log指令查看")])])]),t._v(" "),a("li",[a("p",[t._v("如何查看已经删除的记录？("),a("strong",[t._v("可以通过reset再回退到删除的版本")]),t._v(")")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("git reflog")])]),t._v(" "),a("li",[a("p",[t._v("这个指令可以看到已经删除的提交记录")])])])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-6、添加文件至忽略列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-6、添加文件至忽略列表"}},[t._v("#")]),t._v(" 3.3.6、添加文件至忽略列表**")]),t._v(" "),a("p",[t._v("一般我们总会有些文件无需纳入Git的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。在这种情况下，我们可以在工作目录中创建一个名为**.gitignore**的文件（文件名称固定），列出要忽略的文件模式。下面是一个示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".gitignore\n#no .a files,不git .a文件 \n*.a\n#but do track lib.a, even though you're ignoring .a files above，但是lib.a是例外，要git\n!lib.a \n#only ignore the TODO file in the current directory, not subdir/TODO，忽略当前文件夹的TODO文件，但子文件夹例外\n/TODO\n#ignore all files in the build/directory，忽略文件夹build下的文件\nbuild/ \n#ignore doc/notes.txt,but not doc/server/arch.txt，忽略doc文件夹下.txt文件，子文件夹下的例外\ndoc/*.txt\n#ignore all.pdf files in the doc/directory，忽略doc文件夹下所有.pdf文件\ndoc/**/*.pdf\n")])])]),a("h3",{attrs:{id:"练习-基础操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习-基础操作"}},[t._v("#")]),t._v(" 练习:基础操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#####################仓库初始化######################\n#创建目录（git_test01）并在目录下打开gitbash\n略\n#初始化git仓库\ngit init\n#####################创建文件并提交#####################\n#目录下创建文件\nfile01.txt\n略\n#将修改加入暂存区\ngit add .\n#将修改提交到本地仓库，提交记录内容为：commit 001\ngit commit -m 'commit 001'\n#查看日志\ngit log\n####################修改文件并提交######################\n#修改file01的内容为：count=1\n略\n#将修改加入暂存区\ngit add .\n# # 将修改提交到本地仓库，提交记录内容为：update file01\ngit commit -m 'update file01'\n#查看日志\ngit log\n#\n以精简的方式显示提交记录\ngit-log\n####################将最后一次修改还原##################\n#\n查看提交记录\ngit-log\n#找到倒数第2次提交的commitID\n略\n#版本回退\ngit reset commitID --hard\n")])])]),a("h2",{attrs:{id:"_3-4、分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、分支"}},[t._v("#")]),t._v(" 3.4、分支")]),t._v(" "),a("p",[t._v("几乎所有的版本控制系统都以某种形式支持分支。使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。")]),t._v(" "),a("h3",{attrs:{id:"_3-4-1、查看本地分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1、查看本地分支"}},[t._v("#")]),t._v(" 3.4.1、查看本地分支")]),t._v(" "),a("ul",[a("li",[t._v("命令："),a("code",[t._v("git branch")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-2、创建本地分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2、创建本地分支"}},[t._v("#")]),t._v(" 3.4.2、创建本地分支")]),t._v(" "),a("ul",[a("li",[t._v("命令："),a("code",[t._v("git branch 分支名")])]),t._v(" "),a("li",[t._v("创建的分支会继承当前分支的提交记录")])]),t._v(" "),a("h3",{attrs:{id:"_3-4-4、切换分支-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-4、切换分支-checkout"}},[t._v("#")]),t._v(" 3.4.4、切换分支(checkout)*")]),t._v(" "),a("ul",[a("li",[t._v("命令："),a("code",[t._v("git checkout 分支名")])]),t._v(" "),a("li",[t._v("在git-bash中git-log中head指向的就是当前分支")])]),t._v(" "),a("p",[t._v("我们还可以直接切换到一个不存在的分支（创建并切换）")]),t._v(" "),a("ul",[a("li",[t._v("命令："),a("code",[t._v("git checkout -b 分支名")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-6、合并分支-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-6、合并分支-merge"}},[t._v("#")]),t._v(" 3.4.6、合并分支(merge)*")]),t._v(" "),a("p",[t._v("一个分支上的提交可以合并到另一个分支")]),t._v(" "),a("p",[t._v("命令："),a("code",[t._v("git merge 分支名称")])]),t._v(" "),a("h3",{attrs:{id:"_3-4-7、删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-7、删除分支"}},[t._v("#")]),t._v(" 3.4.7、删除分支*")]),t._v(" "),a("p",[a("strong",[t._v("不能删除当前分支，只能删除其他分支")])]),t._v(" "),a("p",[a("code",[t._v("git branch -d b1")]),t._v("删除分支时，需要做各种检查")]),t._v(" "),a("p",[a("code",[t._v("git branch -D b1")]),t._v("不做任何检查，强制删除")]),t._v(" "),a("h3",{attrs:{id:"_3-4-8、解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-8、解决冲突"}},[t._v("#")]),t._v(" 3.4.8、解决冲突")]),t._v(" "),a("p",[t._v("当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解决冲突，解决冲突步骤如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("处理文件中冲突的地方")])]),t._v(" "),a("li",[a("p",[t._v("将解决完冲突的文件加入暂存区(add)")])]),t._v(" "),a("li",[a("p",[t._v("提交到仓库(commit)")])])]),t._v(" "),a("p",[t._v("冲突部分的内容处理如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121133032490.png",alt:"image-20250121133032490"}})]),t._v(" "),a("h3",{attrs:{id:"_3-4-9、开发中分支使用原则与流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-9、开发中分支使用原则与流程"}},[t._v("#")]),t._v(" 3.4.9、开发中分支使用原则与流程")]),t._v(" "),a("p",[t._v("几乎所有的版本控制系统都以某种形式支持分支。使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。")]),t._v(" "),a("p",[t._v("在开发中，一般有如下分支使用原则与流程：")]),t._v(" "),a("ul",[a("li",[t._v("master（生产）分支")])]),t._v(" "),a("p",[t._v("​\t线上分支，主分支，中小规模项目作为线上运行的应用对应的分支；")]),t._v(" "),a("ul",[a("li",[t._v("develop（开发）分支")])]),t._v(" "),a("p",[t._v("​\t是从master创建的分支，一般作为开发部门的"),a("strong",[t._v("主要开发分支")]),t._v("，如果没有其他并行开发不同期上线要求，都可以在此版本进行开发，阶\t段开发完成后，需要是"),a("strong",[t._v("合并到master")]),t._v("分支,准备上线。")]),t._v(" "),a("ul",[a("li",[t._v("feature/xxxx分支")])]),t._v(" "),a("p",[t._v("​\t从develop创建的分支，一般是同期并行开发，但不同期上线时创建的分支，分支上的"),a("strong",[t._v("研发任务")]),t._v("完成后"),a("strong",[t._v("合并到develop")]),t._v("分支。")]),t._v(" "),a("ul",[a("li",[t._v("hotfix/xxxx分支，")])]),t._v(" "),a("p",[t._v("​\t从master派生的分支，一般作为线上"),a("strong",[t._v("bug修复")]),t._v("使用，修复完成后需要合并到master、test、develop分支。")]),t._v(" "),a("ul",[a("li",[t._v("还有一些其他分支，在此不再详述，例如test分支（用于代码测试）、pre分支（预上线分支）等等。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121133449781.png",alt:"image-20250121133449781"}})]),t._v(" "),a("h3",{attrs:{id:"练习-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习-分支操作"}},[t._v("#")]),t._v(" 练习:分支操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("###########################创建并切换到dev01分支，在dev01分支提交\n# [master]创建分支dev01\ngit branch dev01\n# [master]切换到dev01\ngit checkout dev01\n# [dev01]创建文件 file02.txt\n略\n# [dev01]将修改加入暂存区并提交到仓库,提交记录内容为： add file02 on dev\ngit add .\ngit commit -m 'add file02 on dev'\n# [dev01]以精简的方式显示提交记录\ngit-log\n###########################切换到master分支，将dev01合并到master分支\n# [dev01]切换到master分支\ngit checkout master\n# [master]合并dev01到master分支\ngit merge dev01\n# [master]以精简的方式显示提交记录\ngit-log\n# [master]查看文件变化(目录下也出现了file02.txt)\n略\n##########################删除dev01分支\n# [master]删除dev01分支\ngit branch -d dev01 \n# [master]以精简的方式显示提交记录\ngit-log\n")])])]),a("h1",{attrs:{id:"_4、git远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、git远程仓库"}},[t._v("#")]),t._v(" 4、Git远程仓库")]),t._v(" "),a("h2",{attrs:{id:"_4-1、常用的托管服务-远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、常用的托管服务-远程仓库"}},[t._v("#")]),t._v(" 4.1、常用的托管服务[远程仓库]")]),t._v(" "),a("p",[t._v("前面我们已经知道了Git中存在两种类型的仓库，即本地仓库和远程仓库。那么我们如何搭建Git远程仓库呢？我们可以借助互联网上提供的一些代码托管服务来实现，其中比较常用的有GitHub、码云、GitLab等。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("gitHub（地址：https://github.com/）是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名gitHub")])]),t._v(" "),a("li",[a("p",[t._v("码云（地址：https://gitee.com/）是国内的一个代码托管平台，由于服务器在国内，所以相比于GitHub，码云速度会更快")])]),t._v(" "),a("li",[a("p",[t._v("GitLab（地址：https://about.gitlab.com/）是一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务,一般用于在企业、学校等内部网络搭建git私服。")])])]),t._v(" "),a("h2",{attrs:{id:"_4-2、注册码云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、注册码云"}},[t._v("#")]),t._v(" 4.2、注册码云")]),t._v(" "),a("p",[t._v("要想使用码云的相关服务，需要注册账号（地址：https://gitee.com/signup）")]),t._v(" "),a("h2",{attrs:{id:"_4-3、创建远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、创建远程仓库"}},[t._v("#")]),t._v(" 4.3、创建远程仓库")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121135234541.png",alt:"image-20250121135234541"}}),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121135906808.png",alt:"image-20250121135906808"}}),t._v(" "),a("h2",{attrs:{id:"_4-4、配置ssh公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4、配置ssh公钥"}},[t._v("#")]),t._v(" 4.4、配置SSH公钥")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("生成SSH公钥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh-keygen -t rsa\n")])])]),a("ul",[a("li",[t._v("不断回车\n"),a("ul",[a("li",[t._v("如果公钥已经存在，则自动覆盖")])])])])]),t._v(" "),a("li",[a("p",[t._v("Gitee设置账户共公钥")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("获取公钥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cat ~/.ssh/id_rsa.pub\n")])])])])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121135927924.png",alt:"image-20250121135927924"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("验证是否配置成功")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh -T git@gitee.com\n")])])])])]),t._v(" "),a("h1",{attrs:{id:"_4-5、操作远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5、操作远程仓库"}},[t._v("#")]),t._v(" 4.5、操作远程仓库")]),t._v(" "),a("h2",{attrs:{id:"_4-5-1、添加远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1、添加远程仓库"}},[t._v("#")]),t._v(" 4.5.1、添加远程仓库")]),t._v(" "),a("p",[a("strong",[t._v("此操作是先初始化本地库，然后与已创建的远程库进行对接。")])])]),t._v(" "),a("li",[a("p",[t._v("命令："),a("code",[t._v("git remote add <远端名称> <仓库路径>")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("远端名称，默认是origin，取决于远端服务器设置")])]),t._v(" "),a("li",[a("p",[t._v("仓库路径，从远端服务器获取此URL")])]),t._v(" "),a("li",[a("p",[t._v("例如:"),a("code",[t._v("git remote add origin git@gitee.com:ciian/git_test.git")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-5-2、查看远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2、查看远程仓库"}},[t._v("#")]),t._v(" 4.5.2、查看远程仓库")]),t._v(" "),a("p",[t._v("命令："),a("code",[t._v("git remote")])]),t._v(" "),a("h2",{attrs:{id:"_4-5-3、推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-3、推送到远程仓库"}},[t._v("#")]),t._v(" 4.5.3、推送到远程仓库**")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命令："),a("code",[t._v("git push [-f] [--set-upstream] [远端名称 [本地分支名][:远端分支名] ]")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果远程分支名和本地分支名称相同，则可以只写本地分支")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git push origin master")])])])]),t._v(" "),a("li",[a("p",[t._v("-f 表示强制覆盖")])]),t._v(" "),a("li",[a("p",[t._v("--set-upstream推送到远端的同时并且建立起和远端分支的关联关系。**")]),t._v(" "),a("ul",[a("li",[t._v("`git push --set-upstream origin master")])])]),t._v(" "),a("li",[a("p",[t._v("如果"),a("strong",[t._v("当前分支已经和远端分支关联")]),t._v("，则可以省略分支名和远端名。**")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git push")]),t._v(" 将master分支推送到已关联的远端分支。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-5-4、本地分支与远程分支的关联关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-4、本地分支与远程分支的关联关系"}},[t._v("#")]),t._v(" 4.5.4、本地分支与远程分支的关联关系**")]),t._v(" "),a("ul",[a("li",[t._v("查看关联关系我们可以使用"),a("code",[t._v("git branch -vv")]),t._v("命令")])]),t._v(" "),a("h2",{attrs:{id:"_4-5-5、从远程仓库克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-5、从远程仓库克隆"}},[t._v("#")]),t._v(" 4.5.5、从远程仓库克隆*")]),t._v(" "),a("p",[t._v("如果已经有一个远端仓库，我们可以直接clone到本地。")]),t._v(" "),a("p",[t._v("(克隆的仓库master分支会自动与远程仓库的master分支关联，其他的分支需要自己手动关联)")]),t._v(" "),a("ul",[a("li",[t._v("命令: "),a("code",[t._v("git clone <仓库路径> [本地目录]")]),t._v(" "),a("ul",[a("li",[t._v("本地目录可以省略，会自动生成一个目录")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-5-6、从远程仓库中抓取和拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-6、从远程仓库中抓取和拉取"}},[t._v("#")]),t._v(" 4.5.6、从远程仓库中抓取和拉取*")]),t._v(" "),a("p",[t._v("远程分支和本地的分支一样，我们可以进行merge操作，只是需要先把远端仓库里的更新都下载到本地，再进行操作。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("抓取命令："),a("code",[t._v("git fetch [remote name] [branch name]")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("抓取指令就是将仓库里的更新都抓取到本地，不会进行合并")]),t._v("**")])]),t._v(" "),a("li",[a("p",[t._v("如果不指定远端名称和分支名，则抓取所有分支。")])])])]),t._v(" "),a("li",[a("p",[t._v("拉取命令：git pull [remote name] [branch name]")]),t._v(" "),a("ul",[a("li",[t._v("拉取指令就是将远端仓库的修改拉到本地并自动进行合并，等同于"),a("strong",[t._v("fetch+merge")])]),t._v(" "),a("li",[t._v("如果不指定远端名称和分支名，则抓取所有并更新当前分支。")])])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在test01这个本地仓库进行一次提交并推送到远程仓库")])]),t._v(" "),a("li",[a("p",[t._v("在另一个仓库将远程提交的代码拉取到本地仓库")])])]),t._v(" "),a("h2",{attrs:{id:"_4-5-7、解决合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-7、解决合并冲突"}},[t._v("#")]),t._v(" 4.5.7、解决合并冲突")]),t._v(" "),a("p",[t._v("在一段时间，A、B用户修改了同一个文件，且修改了同一行位置的代码，此时会发生"),a("strong",[t._v("合并冲突")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("A用户")]),t._v("在本地修改代码后"),a("strong",[t._v("优先推送到远程仓库")]),t._v("，此时B用户在本地修订代码，提交到本地仓库后，也需要推送到远程仓库，此时"),a("strong",[t._v("B用户晚于A用户，故需要先拉取远程仓库的提交（pull/fetch+merge）")]),t._v("，经过"),a("strong",[t._v("合并后才能推送到远端分支")]),t._v("(push),如下图所示。")]),t._v(" "),a("p",[t._v("在B用户拉取代码时，因为A、B用户同一段时间修改了同一个文件的相同位置代码，故会发生合并冲突。")]),t._v(" "),a("p",[t._v("远程分支也是分支，所以"),a("strong",[t._v("合并时冲突的解决方式也和解决本地分支冲突相同相同")]),t._v("，在此不再赘述，需要学员自己练习。")]),t._v(" "),a("h2",{attrs:{id:"练习-远程仓库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习-远程仓库操作"}},[t._v("#")]),t._v(" 练习:远程仓库操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("##########################1-将本地仓库推送到远程仓库\n# 完成4.1、 4.2、4.3、4.4的操作\n略\n# [git_test01]添加远程仓库\ngit remote add origin git@gitee.com/**/**.git\n# [git_test01]将master分支推送到远程仓库,并与远程仓库的master分支绑定关联关系\ngit push --set-upstream origin master\n###########################2-将远程仓库克隆到本地\n# 将远程仓库克隆到本地git_test02目录下\ngit clone git@gitee.com:**/**.git git_test02\n#[git_test02]以精简的方式显示提交记录git-log\n###########################3-将本地修改推送到远程仓库\n# [git_test01]创建文件file03.txt\n略\n# [git_test01]将修改加入暂存区并提交到仓库,提交记录内容为：\nadd file03 git add .\ngit commit -m 'add file03'\n# [git_test01]将master分支的修改推送到远程仓库\ngit push origin master\n###########################4-将远程仓库的修改更新到本地\n# [git_test02]将远程仓库修改再拉取到本地\ngit pull\n# 以精简的方式显示提交记录\ngit-log\n# 查看文件变化(目录下也出现了file03.txt)\n略\n")])])]),a("h1",{attrs:{id:"_5、在idea中使用git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、在idea中使用git"}},[t._v("#")]),t._v(" 5、在Idea中使用Git")]),t._v(" "),a("h2",{attrs:{id:"_5-1、在idea中配置git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、在idea中配置git"}},[t._v("#")]),t._v(" 5.1、在Idea中配置Git")]),t._v(" "),a("p",[t._v("安装好IntelliJ IDEA后，如果Git安装在默认路径下，那么idea会自动找到git的位置，"),a("strong",[t._v("如果更改了Git的安装位置则需要手动配置下Git的路径。选择File→Settings打开设置窗口，找到Version Control下的git选项")]),t._v("：")]),t._v(" "),a("p",[t._v("配置完成后点击Test按钮，测试成功表示配置完成")]),t._v(" "),a("h2",{attrs:{id:"_5-2、在idea中操作git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、在idea中操作git"}},[t._v("#")]),t._v(" 5.2、在Idea中操作Git")]),t._v(" "),a("p",[t._v("场景：本地已经有一个项目，但是并不是git项目，我们需要将这个放到码云的仓库里，和其他开发人员继续一起协作开发。")]),t._v(" "),a("h3",{attrs:{id:"_5-2-1、创建项目远程仓库-参照4-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1、创建项目远程仓库-参照4-3"}},[t._v("#")]),t._v(" 5.2.1、创建项目远程仓库（参照4.3）")]),t._v(" "),a("h3",{attrs:{id:"_5-2-2、初始化本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2、初始化本地仓库"}},[t._v("#")]),t._v(" 5.2.2、初始化本地仓库")]),t._v(" "),a("p",[t._v(".gitignore文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("**/target/\n.idea\n*.iml\n*.class\n*Test.java\n**/test/\n")])])]),a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121145904062.png",alt:"image-20250121145904062"}}),t._v(" "),a("h3",{attrs:{id:"_5-2-3、设置远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3、设置远程仓库"}},[t._v("#")]),t._v(" 5.2.3、设置远程仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250209174909404.png",alt:"image-20250209174909404"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-4、提交到本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-4、提交到本地仓库"}},[t._v("#")]),t._v(" 5.2.4、提交到本地仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121152327662.png",alt:"image-20250121152327662"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-6、推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-6、推送到远程仓库"}},[t._v("#")]),t._v(" 5.2.6、推送到远程仓库")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121152721788.png",alt:"image-20250121152721788"}}),t._v(" "),a("h3",{attrs:{id:"_5-2-7、克隆远程仓库到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-7、克隆远程仓库到本地"}},[t._v("#")]),t._v(" 5.2.7、克隆远程仓库到本地")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121153026338.png",alt:"image-20250121153026338"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-8、创建分支-强大的方式2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-8、创建分支-强大的方式2"}},[t._v("#")]),t._v(" 5.2.8、创建分支(强大的方式2)")]),t._v(" "),a("ul",[a("li",[t._v("最常规的方式")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121153249762.png",alt:"image-20250121153249762"}}),t._v(" "),a("ul",[a("li",[t._v("最强大的的方式**")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121153904340.png",alt:"image-20250121153904340"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-9、切换分支及其他分支相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-9、切换分支及其他分支相关操作"}},[t._v("#")]),t._v(" 5.2.9、切换分支及其他分支相关操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121160359715.png",alt:"image-20250121160359715"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-11、解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-11、解决冲突"}},[t._v("#")]),t._v(" 5.2.11、解决冲突")]),t._v(" "),a("p",[t._v("1.执行merge或pull操作时，可能发生冲突")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121155153035.png",alt:"image-20250121155153035"}})]),t._v(" "),a("p",[t._v("也可以双击冲突项进入，选择想要接受（》）/拒接（X）的版本，或者直接在中间进行修改后拒接两边的版本。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121155002902.png",alt:"image-20250121155002902"}})]),t._v(" "),a("p",[t._v("2.冲突解决后加入暂存区")]),t._v(" "),a("p",[t._v("略")]),t._v(" "),a("p",[t._v("3.提交到本地仓库")]),t._v(" "),a("p",[t._v("略")]),t._v(" "),a("p",[t._v("4.推送到远程仓库略")]),t._v(" "),a("h2",{attrs:{id:"_5-3、idea常用git操作入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3、idea常用git操作入口"}},[t._v("#")]),t._v(" 5.3、IDEA常用GIT操作入口")]),t._v(" "),a("ol",[a("li",[t._v("第一张图上的快捷入口可以基本满足开发的需求。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121155737521.png",alt:"image-20250121155737521"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("第二张图是更多在IDEA操作git的入口。（具体操作需要查看自己的idea版本）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121155850283.png",alt:"image-20250121155850283"}})]),t._v(" "),a("h2",{attrs:{id:"_5-4、场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4、场景分析"}},[t._v("#")]),t._v(" 5.4、场景分析")]),t._v(" "),a("p",[t._v("基于我们后面的实战模式，我们做一个综合练习")]),t._v(" "),a("p",[t._v("当前的开发环境如下，我们每个人都对这个项目已经开发一段时间，接下来我们要切换成团队开发模式。")]),t._v(" "),a("p",[t._v("也就是我们由一个团队来完成这个项目实战的内容。团队有组长和若干组员组成（组长就是开发中的项目经理）。")]),t._v(" "),a("p",[t._v("所有操作都在idea中完成。")]),t._v(" "),a("p",[t._v("练习场景如下：")]),t._v(" "),a("p",[t._v("1、由组长，基于本项目创建本地仓库；创建远程仓库，推送项目到远程仓库。")]),t._v(" "),a("p",[t._v("2、每一位组员从远程仓库克隆项目到idea中,这样每位同学在自己电脑上就有了一个工作副本，可以正式的开始开发了。我们模拟两个组员(组员A、组员B)，克隆两个工作区。")]),t._v(" "),a("p",[t._v("3、组员A修改工作区,提交到本地仓库，再推送push到远程仓库。组员B可以直接从远程仓库获取pull最新的代码。")]),t._v(" "),a("p",[t._v("4、组员A和组员B修改了同一个文件的同一行，提交到本地没有问题，但是推送到远程仓库时，后一个推送操作就会失败。")]),t._v(" "),a("p",[t._v("解决方法：需要先获取"),a("strong",[t._v("pull")]),t._v("远程仓库的代码到本地仓库，"),a("strong",[t._v("编辑冲突")]),t._v("，提交并推送"),a("strong",[t._v("push")]),t._v("代码。")]),t._v(" "),a("h1",{attrs:{id:"附-几条铁令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附-几条铁令"}},[t._v("#")]),t._v(" 附:几条铁令")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("切换分支前先提交本地的修改")])]),t._v(" "),a("li",[a("p",[t._v("代码及时提交，提交过了就不会丢")])]),t._v(" "),a("li",[a("p",[t._v("遇到任何问题都不要删除文件目录，第1时间找老师")])])]),t._v(" "),a("h1",{attrs:{id:"将idea中的terminal改为gitbash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将idea中的terminal改为gitbash"}},[t._v("#")]),t._v(" 将idea中的Terminal改为GitBash")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250121160826563.png",alt:"image-20250121160826563"}})]),t._v(" "),a("h1",{attrs:{id:"git-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令"}},[t._v("#")]),t._v(" Git 常用命令")]),t._v(" "),a("p",[t._v("重要指令：工作流程图上的7个指令(clone+fetch+pul+checkout+add+commit+push)和2个常用指令(log+merge)\n常用指令速查：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("基本操作类：\n"),a("code",[t._v("git init")]),t._v("\n初始化仓库\n"),a("code",[t._v("git-log")]),t._v("\n查看日志，这个命令很重要！！！！！！！！！！！！！！！！！！！")]),t._v(" "),a("p",[a("code",[t._v("git status")]),t._v(" ！！")]),t._v(" "),a("p",[t._v("​\t查看本地仓库状态，可以查看是否add、commit")]),t._v(" "),a("p",[a("code",[t._v("git add <文件名 | .>")]),t._v(" ！！\n添加到暂存区\n"),a("code",[t._v("git commit -m '注释'")]),t._v(" ！！\n提交到仓库")]),t._v(" "),a("p",[a("code",[t._v("git reset --hard <commitID>")])]),t._v(" "),a("p",[t._v("​\t版本回退")])]),t._v(" "),a("li",[a("p",[t._v("分支类：\n"),a("code",[t._v("git branch [-vv]")]),t._v(" ！！")]),t._v(" "),a("p",[t._v("​\t查看分支")]),t._v(" "),a("p",[a("code",[t._v("git checkout <分支名>")]),t._v("  ！！\n切换到某个分支\n"),a("code",[t._v("git checkout -b <分支名>")]),t._v("\n创建并切换到某个分支（分支原来不存在）")]),t._v(" "),a("p",[a("code",[t._v("git merge <分支名>")]),t._v("\n合并指定分支到当前活跃分支")])]),t._v(" "),a("li",[a("p",[t._v("远程操作\n"),a("code",[t._v("remote add")])]),t._v(" "),a("p",[a("code",[t._v("git fetch")])]),t._v(" "),a("p",[a("code",[t._v("git clone <远程地址> [本地文件夹]")]),t._v(" ！！\nclone远程仓库到本地\n"),a("code",[t._v("git pull")]),t._v(" ！！\n拉取远端仓库的修改并合并\n"),a("code",[t._v("git push [--set-upstream] origin 本地分支名[:远程分支名]")]),t._v(" ！！\n推送本地修改到远端分支\n--set-upstream表示和远端分支绑定关联关系，只有第一次推送时才需要此参数")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);