module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  head: [
    ['link', { rel: 'icon', href: 'https://img.cyanyep.top/picture/mmexport1689155413427.png' }]
  ],
  base: '/',
  theme: 'vdoing', 
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: 'https://img.cyanyep.top/picture/mmexport1689155413427.png',
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
  },

  plugins: [
    ['vuepress-plugin-code-copy', true],  //复制代码块的插件
  
    'reading-progress',

    'cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },

    //网站动态标题
    'dynamic-title', {
      // showIcon: '',
      showText: '欢迎回来  O(∩_∩)O~~',
      // hideIcon: '',
      hideText: '等等，你别走啊 ::>_<::',
      recoverTime: 2000,
    }
  ]

}