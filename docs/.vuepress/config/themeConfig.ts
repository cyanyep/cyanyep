import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
export default <VdoingThemeConfig>{
    logo: 'https://img.cyanyep.top/Blog/Snipaste_2025-02-11_20-04-18.png',
    lastUpdated: '上次更新', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      { 
          text: '西螈的 JavaScript 博客', 
          items: [
              { text: 'Github', link: 'https://github.com/cyanyep' },
              { text: 'CSDN', link: 'https://blog.csdn.net/rc4gyyc' } 
          ]
      },
      { 
          text: 'Java', 
          items: [
              { text: 'Java', link: 'https://github.com/cyanyep' },
              { text: 'Spring', link: 'https://blog.csdn.net/rc4gyyc' } 
          ]
      }
    ],
    sidebar: 'structuring',

    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    // 默认为 "Edit this page"
    editLinkText: '在GitHub编辑此页',

    // 页脚
    footer:{
      createYear: 2022
    }
}