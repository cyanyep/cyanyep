(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{406:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("我们成功的用 VuePress 搭建了博客并部署到 Github Pages，但由于 Github 的访问问题，我们可以选择把仓库部署到 Gitee 一份，利用 Gitee 的 Pages 服务再生成一份静态网站用于备用（"),s("strong",[t._v("gitee Pages目前停止服务")]),t._v("），不过也可以作为一个备份")]),t._v(" "),s("h2",{attrs:{id:"手动同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动同步"}},[t._v("#")]),t._v(" 手动同步")]),t._v(" "),s("p",[t._v("在 Gitee 绑定 Github 账号后，选择仓库导入：")]),t._v(" "),s("p",[t._v("在 Gitee 的项目主页，提供了同步的按钮，你只用点一下，即可与 Github 同步更新，但是注意这里的同步功能默认是强制同步。")]),t._v(" "),s("h2",{attrs:{id:"推送两个仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送两个仓库"}},[t._v("#")]),t._v(" 推送两个仓库")]),t._v(" "),s("p",[t._v("除此之外，我们也可以在 sh 脚本文件里，直接将项目同时推送到两个仓库地址上，具体操作参考"),s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/236",target:"_blank",rel:"noopener noreferrer"}},[t._v("《一篇教你代码同步 Github 和 Gitee》"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"github-actions-自动同步-推荐使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-自动同步-推荐使用"}},[t._v("#")]),t._v(" Github Actions 自动同步（推荐使用）")]),t._v(" "),s("p",[t._v("我们也可以利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 gh-pages 分支代码更新后，自动同步当前代码到 Gitee 上。")]),t._v(" "),s("p",[t._v("关于 Github Actions 的介绍，可以参考阮一峰老师的 "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GitHub Actions 入门教程》"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("为了实现 Gitee 和 Github 的同步，我们需要借助一个 action，还好业界已经有现成的实现了，这里我采用的是 "),s("a",{attrs:{href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hub Mirror Action"),s("OutboundLink")],1),t._v("，我们可以看到使用的示例代码：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirror the Github organization repos to Gitee.\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Yikun/hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" github/rc4gyyc\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitee/ciian\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PRIVATE_KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中有四个必填项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("src")]),t._v(" 表示需要被同步的源端账户名，即我们 Github 的账户名，因为我的 Github ID 是 rc4gyyc，所以这里我应该改成 "),s("code",[t._v("github/rc4gyyc")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("dst")]),t._v(" 表示需要同步到的目的端账户名，即我们 Gitee 的账户名，因为我的 Gitee ID 是 ciian，所以这里我应该改成 "),s("code",[t._v("gitee/ciian")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("dst_key")]),t._v(" 表示用于在目的端上传代码的私钥，然后将其保存在 Secrets 中。")])]),t._v(" "),s("h3",{attrs:{id:"同步仓库具体操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步仓库具体操作"}},[t._v("#")]),t._v(" 同步仓库具体操作")]),t._v(" "),s("ol",[s("li",[t._v("注意gitee上同时要配置好公钥，在setting->ssh公钥中配置")]),t._v(" "),s("li",[t._v("获取你电脑上的ssh私钥（在git命令行中执行、或者直接访问文件）："),s("code",[t._v("cat ~/.ssh/id_rsa")]),t._v(" "),s("ul",[s("li",[t._v("复制私钥内容（注意要全部复制包括")])])])]),t._v(" "),s("p",[t._v("​\t\t\t-----BEGIN OPENSSH PRIVATE KEY-----\n​\t\t\t-----END OPENSSH PRIVATE KEY-----")]),t._v(" "),s("p",[t._v("​\t\t\t），然后在要"),s("strong",[t._v("同步的 Github 仓库")]),t._v('中，选择 "Setting" -> "Secrets" ->"Action" -> "New repository secret"')]),t._v(" "),s("p",[t._v('​\t\t\t填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.cyanyep.top/Blog/image-20250327100809374.png",alt:"image-20250327100809374"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v('dst_token 创建仓库的API tokens， 用于自动创建不存在的仓库。这里我们从 Gitee 上获取，具体地址为 https://gitee.com/profile/personal_access_tokens。生成并复制 Token，然后同样的步骤，保存在 Github 的 Secrets 中，Name 为 "GITEE_TOKEN"')])]),t._v(" "),s("li",[s("p",[t._v("然后我们就可以在项目根目录(vuepress-starter)下建立目录 "),s("code",[t._v(".github/workflows")]),t._v(" ，然后创建一个名为"),s("code",[t._v("syncToGitee.yml")]),t._v(" 的文件：")])])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" syncToGitee\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo-sync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirror the Github organization repos to Gitee.\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Yikun/hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github/rc4gyyc'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitee/ciian'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PRIVATE_KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cyanyep"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("还有几个问题要注意：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("on: push: branches: 就是当cy-pages分支发生事件推送时，GitHub Actions 会检查该分支当前提交中是否存在对应的 YAML 文件。所以我们需要将syncToGitee.yml文件放在cy-pages分支下")])]),t._v(" "),s("li",[s("p",[t._v("观察我们的脚本代码，我们就会发现，每次我们 "),s("code",[t._v("sh deploy.sh")]),t._v(" 的时候，都是编译代码到 dist 目录，然后重新 git init ，最后强制提交。就是说dist目录才是要提交到分支上的，而且每次运行都会清空dist重新编译，本地仓库也会重新初始化后再强制推送上去覆盖原来的分支，也就是说不能直接把脚本放在git仓库的cy-pages分支中")])])])])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("为此，我们可以在脚本里添加代码，每次编译完后，再拷贝外层的 "),s("code",[t._v(".github/woorkflows/syncToGitee.yml")]),t._v(" 到 dist 目录里，再提交到 Github 上。")])]),t._v(" "),s("p",[t._v("所以我们依然在项目根目录添加目录和文件，此时的文件结构如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ .github\n│  └─ workflows\n│\t\t\t└─ syncToGitee.yml\n└─ package.json\n└─ deploy.sh\n")])])]),s("p",[t._v("脚本文件"),s("code",[t._v("deploy.sh")]),t._v("代码如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 将CNAME放入dist\ncp ../../../CNAME ./\n\n###添加###\n# 拷贝目录和文件\ncp -r ../../../.github ./\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\ngit push -f git@github.com:rc4gyyc/cyanyep.git master:cy-pages\n\ncd -\n")])])]),s("p",[t._v("此时我们再运行 "),s("code",[t._v("sh deploy.sh")]),t._v(" 代码提交到 Github，就可以在仓库的 Actions 中看到运行记录：")]),t._v(" "),s("h3",{attrs:{id:"gitee-自动部署-pages-gitee-pages目前停止服务-以下操作已无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitee-自动部署-pages-gitee-pages目前停止服务-以下操作已无效"}},[t._v("#")]),t._v(" Gitee 自动部署 Pages（！！Gitee Pages目前停止服务，以下操作已无效）")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/238",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee 如何自动部署 Pages？还是用 GitHub Actions!"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在syncToGitee文件中补充代码")]),t._v(" "),s("ul",[s("li",[t._v("可以在仓库的secret中设置gitee用户名")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" syncToGitee\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo-sync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirror the Github organization repos to Gitee.\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Yikun/hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github/rc4gyyc'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitee/ciian'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PRIVATE_KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cyanyep"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - name: Build Gitee Pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   uses: yanglbme/gitee-pages-action@main")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   with:")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # 注意替换为你的 Gitee 用户名")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     gitee-username: ${{ secrets.GITEE_USERNAME }}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # 注意在 Settings->Secrets 配置 GITEE_PASSWORD")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     gitee-password: ${{ secrets.GITEE_PASSWORD }}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     gitee-repo: Ciian/cyanyep")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     branch: cy-pages")]),t._v("\n")])])]),s("ul",[s("li",[t._v("注意"),s("strong",[t._v("用户名和仓库名")]),t._v("都区分大小写")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/236",target:"_blank",rel:"noopener noreferrer"}},[t._v("《一篇教你代码同步 Github 和 Gitee》"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GitHub Actions 入门教程》"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/238",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee 如何自动部署 Pages？还是用 GitHub Actions!"),s("OutboundLink")],1)]),t._v(" "),s("hr")])}),[],!1,null,null,null);s.default=n.exports}}]);