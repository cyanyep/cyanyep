import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
export default <VdoingThemeConfig>{
    logo: 'https://img.cyanyep.top/picture/mmexport1689155413427.png',
    lastUpdated: '上次更新', // string | boolean
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
    sidebar: 'structuring',
    
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    // 默认为 "Edit this page"
    editLinkText: '编辑此页',

    // 页脚
    footer:{
      createYear: 2022
    }
}