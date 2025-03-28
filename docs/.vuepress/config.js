module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/15/16aa54f3ee84602e.webp' }]
  ],
  base: '/',
  theme: 'vdoing', 
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
    nav: [
      { text: '首页', link: '/' },
      { 
          text: '西螈的 JavaScript 博客', 
          items: [
              { text: 'Github', link: 'https://github.com/rc4gyyc' },
              { text: 'CSDN', link: 'https://blog.csdn.net/rc4gyyc' }
          ]
      }
    ],
    sidebar: 'structuring'
  }
}