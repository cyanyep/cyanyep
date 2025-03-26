# 搭建个人博客网站



使用VuePress+GithubPage搭建自己的个人博客网站

环境准备

1. Node
2. Chrome浏览器或FireFox浏览器
3. 一台电脑（Windows）



# 本地搭建

1. 创建并进入一个新目录

​		在命令行中创建并进入新目录 `vuepress-starter`（可以自定义名字）：

```shell
cd vuepress-starter
```

2. 使用npm（node包管理器）进行初始化（-y可以自动确认问题）

```shell
npm init  -y
```

3. 将 VuePress 安装为本地依赖

```shell
 npm install -D vuepress
```

4. 创建你的第一篇文档

   VuePress 会以 docs 为文档根目录，所以README.md 相当于主页：

​		创建 `docs` 目录，并在其中创建 `README.md` 文件作为首页内容：

```shell
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

5. 修改 package.json 文件，添加一些启动命令：

```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

- 这样做的好处是你可以通过简单的命令来运行开发服务器或构建生产版本的静态文件，比如：

  - 启动本地开发服务器：`npm run docs:dev`

  - 构建用于部署的静态文件：`npm run docs:build`

6. 测试本地环境

```shell
npm run docs:dev
```

7. 运行编译成功后，会有提示：

![image-20250116215750272](http://stofu80ry.sabkt.gdipper.com/picture/image-20250116215750272.png)

8. 在浏览器打开这个shell窗口中的网址 `http://localhost:8081`（默认端口是8080，可能我的端口被占用了），可以看到如下内容：

![image-20250116220142153](http://stofu80ry.sabkt.gdipper.com/picture/image-20250116220142153.png)

# 优化页面

# 静态资源

有时候，一些图片是经常被用到的，我们可以将其放到一个公共文件夹里，这样就可以在不同的博客里都引用到了。

我们在 .vuepress 目录下新建 public 目录，然后放一个图片，例如 amiliya.jpg。此时文件夹目录结构如下：



# 部署到GitHub Page上





---

到这里你就可以使用自己最基本的个人博客网站。





# 图床

在七牛云中新建存储对象

新建空间

但是七牛云图床免费的使用的是http协议，不能用于https的网站（比如GitHub Page），会导致图片加载不出。需要购买域名和证书



## 图片上传工具

我的博客是基于 Markdown 的，如果我们每次上传图片都需要登录到七牛云控制台并上传，就太慢了。因此市面上出现了很多图片上传工具，能实现的效果是这样的：将图片拖拽到工具里，就能自动上传到对象存储里，并且获取图片链接，极大简化了我们的操作。

目前常见的工具有：

- [PicGo ](https://molunerfinn.com/PicGo/)：支持 Windows，Mac 和 Linux，基于 Electron 开发，支持多种图床上传

[将工具注册到右键中](https://www.bilibili.com/video/BV1S64y1G76f/)



# 同步GitHub和Gitee

参考：[一篇教你代码同步 Github 和 Gitee](https://github.com/mqyqingfeng/Blog/issues/236) 



我们成功的用 VuePress 搭建了博客并部署到 Github Pages，但由于 Github 的访问问题，我们可以选择把仓库部署到 Gitee 一份，利用 Gitee 的 Pages 服务再生成一份静态网站用于备用，也可以作为一个备份

## 1. 手动同步

在 Gitee 绑定 Github 账号后，选择仓库导入：

在 Gitee 的项目主页，提供了同步的按钮，你只用点一下，即可与 Github 同步更新，但是注意这里的同步功能默认是强制同步。

## 2. 推送两个仓库

除此之外，我们也可以在 sh 脚本文件里，直接推送到两个仓库地址上，具体操作参考[《一篇教你代码同步 Github 和 Gitee》](https://github.com/mqyqingfeng/Blog/issues/236) 

## 3. Github Actions 自动同步（推荐使用）

我们也可以利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 gh-pages 分支代码更新后，自动同步当前代码到 Gitee 上。

关于 Github Actions 的介绍，可以参考阮一峰老师的 [《GitHub Actions 入门教程》](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

还有几个问题要注意：

1. 因为我们是提交到 Github 的 gh-pages 分支上，这个文件和目录需要写在 gh-pages 分支
2. 观察我们的脚本代码，我们就会发现，每次我们 `sh deploy.sh` 的时候，都是编译代码到 dist 目录，然后重新 git init ，最后强制提交。所以我们在项目的根目录建立 `.github/woorkflows/syncToGitee.yml` 并没有什么用，一来提交的是 dist 目录里的代码，二是每次还都会清空重新编译生成代码提交。

为此，我们可以在脚本里添加代码，每次编译完后，再拷贝外层的 `.github/woorkflows/syncToGitee.yml` 到 dist 目录里，再提交到 Github 上。

所以我们依然在项目根目录添加目录和文件，此时的文件结构如下：

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ .github
│  └─ workflows
│			└─ syncToGitee.yml
└─ package.json
└─ deploy.sh
```

脚本文件`deploy.sh`代码如下：

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

###添加###
# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:rc4gyyc/cyanyep.git master:unf-pages

cd -
```



此时我们再运行 `sh deploy.sh` 代码提交到 Github，就可以在仓库的 Actions 中看到运行记录：



# 自动部署

每次修改博客后都需要执行脚本deploy.sh，重新构建才能上传的github。

了解到GitHub的Action后，我想是否可以直接把整个项目上传到github的一个分支`pages-code`上，再通过workflow自动将项目的代码构建并部署到指定GitHub Page的分支`cy-pages`上，(如果有自己的服务器也可以部署到服务器上，可以参考[这篇文章](https://www.peterjxl.com/Blog/Deploy/#%E4%BD%BF%E7%94%A8-github-action))

而且如果Action执行失败还会发qq邮箱通知。



```yml
name: Deploy VuePress to GitHub Pages
# 当 pages-code 分支有 push 事件时触发
on:
  push:
    branches:
      - pages-code
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 检出代码
      - uses: actions/checkout@v3

      # 使用action库，安装node
      - name: Set up Node.js  # 使用action库  actions/setup-node安装node
        uses: actions/setup-node@v3
        with:
          node-version: 16 # 根据你的项目需求选择 Node.js 版本

      # 安装依赖
      - name: npm install 
        run: npm install 
    
      # 构建 VuePress 项目，并将workflow拷贝到dist中用于仓库同步到gitee
      - name: Build VuePress
        run: |
          npm run docs:build
          cp -r .github ./docs/.vuepress/dist/  
        # 复制 .github 到 dist

      # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN  }} # 自动提供的 GitHub Token
          publish_dir: ./docs/.vuepress/dist # VuePress 默认的输出目录
          publish_branch: cy-pages # 部署到的目标分支


#      #部署到服务器
#      - name: Deploy to Staging My server
#        uses: easingthemes/ssh-deploy@v2.1.6
#        env:
#          # 使用GitHub仓库里的secret设置的值
#          SSH_PRIVATE_KEY: ${{ secrets.MY_SERVER_PRIVATE_KEY }} 
#          # 源目录，编译后生成的文件目录
#          SOURCE: './docs/.vuepress/dist/'
#          #服务器公网地址
#          REMOTE_HOST: ${{ secrets.MY_SERVER_IP }}
#          #服务器用户名-一般默认root
#          REMOTE_USER: 'root'
#          #服务器中，代码部署的位置
#          TARGET: '/opt/myblog'
#          #去除的文件
#          EXCLUDE: "/dist/, /node_modules/" 
```



![image-20250326151630094](http://stofu80ry.sabkt.gdipper.com/picture/image-20250326151630094.png)

这个错误表明 GitHub Actions 的 `github-actions[bot]` 没有足够的权限将更改推送到目标分支（`cy-pages`）。

**解决方法**

1. **生成个人访问令牌 (PAT)**：
   - 登录到 GitHub，进入 **Settings > Developer settings > Personal access tokens**。
   - 创建一个新的 PAT，确保选中了 `repo` 和 `workflow` 权限。
   - 复制生成的令牌。
2. **将 PAT 添加到 Secrets**：
   - 在你的 GitHub 仓库中，进入 **Settings > Secrets and variables > Actions**。
   - 添加一个新的 Repository Secret，名称为 `PERSONAL_ACCESS_TOKEN`，值为刚刚生成的 PAT。
3. **更新工作流配置**： 将 `github_token` 替换为 `PERSONAL_ACCESS_TOKEN`：



## 优化自动部署



每次等待构建并部署都需要等2分钟甚至更久，这是因为每次执行workflow都需要重新搭建环境`npm install`，GitHub Action 提供了缓存机制，可以不用每次都搭建环境。修改deploy.yml文件

```yml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # ...
      
      # 添加缓存 
      # 缓存 node_modules
      - name: Cache node_modules
        id: cache-node-modules
        uses: actions/cache@v3
        with:
          path: node_modules
          key: node-modules-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            node-modules-${{ runner.os }}-

      # 安装依赖（仅在缓存未命中时执行）
      - name: npm install 
        if: steps.cache-node-modules.outputs.cache-hit != 'true'
        run: npm install 
    
	  # ...
	  
```

- 

```
path: node_modules 
	表示要缓存项目的 node_modules 文件夹
key: node-modules-${{ runner.os }}-${{ hashFiles('\**/package-lock.json') }}
	node-modules-: 这是一个固定的前缀，用来标识缓存的内容是 `node_modules`。
	${{ runner.os }}`: 表示当前运行的操作系统（如 `ubuntu-latest`, `windows-latest`, `macos-latest`）。
	${{ hashFiles('**/package-lock.json') }}: 基于 `package-lock.json` 文件的内容生成一个哈希值。如果 `package-lock.json` 发生变化（例如添加或更新依赖），哈希值也会变化，从而触发新的缓存。
	
restore-keys: | node-modules-${{ runner.os }}-
	作用： 提供一组备用的缓存键（`restore-keys`），用于在主键（`key`）未命中时尝试部分匹配。
	分解解释：
		|：YAML 的多行字符串语法，表示后面的每一行是一个独立的 `restore-key`。
		node-modules-${{ runner.os }}-: 这是一个“模糊匹配”的键，只包含固定前缀和操作系统信息，而不包含 `package-lock.json` 的哈希值。如果主键（`key`）未命中，GitHub Actions 会依次尝试包含这些前缀的缓存：
```



可以看到workflow的运行时间，因为命中缓存跳过了执行`npm install`的40秒


