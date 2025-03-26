module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/cyanyep/',
  theme: 'reco', 
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
	subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '西螈的 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/rc4gyyc' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/rc4gyyc' }
                ]
            }
        ]
,        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "个人博客网站搭建",
              path: '/Blog/build',
              collapsable: false, // 不折叠
              children: [
                { title: "搭建个人博客网站", 
                  author: "西螈", 
		              date: "2024-12-12", 
                  path: "/Blog/build" }
              ],
            },
            {
              title: "spring项目",
              path: '/SpringBoot/big-event',
              collapsable: false, // 不折叠
              children: [
                { title: "大事件", path: "/SpringBoot/big-event" },
                { title: "苍穹外卖", path: "/SpringBoot/sky-take-out" },
                { title: "苍穹外卖", path: "/SpringBoot/sky-take-out2" },
                { title: "Spring注解", path: "/SpringBoot/Spring注解" }
              ],
            },
            {
              title: "Redis",
              path: '/Redis/Redis基础',
              collapsable: false, // 不折叠
              children: [
                { title: "Redis基础", path: "/Redis/Redis基础" },
                { title: "Redis安装说明", path: "/Redis/Redis安装说明" },
                { title: "Redis实战", path: "/Redis/Redis实战" }
              ],
            },
            {
              title: "面试题",
              path: '/InterviewQ/INTV',
              collapsable: false, // 不折叠
              children: [
                { title: "场景题", path: "/InterviewQ/INTV" },
                { title: "Java", path: "/InterviewQ/Java" },
                { title: "JUC", path: "/InterviewQ/JUC" }
              ],
            }
          ]
    }
}