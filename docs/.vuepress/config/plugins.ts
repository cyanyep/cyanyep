import { UserPlugins } from 'vuepress/config'

export default <UserPlugins>[
  // 复制代码块的插件
  ['vuepress-plugin-code-copy', true],

  // 阅读进度条的插件
  'reading-progress',

  //光标效果的插件
  [
    'cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }
  ],

  //网站动态标题
  ['dynamic-title', {
    // showIcon: '',
    showText: '(/≧∇≦/)咦!又好了!',
    // hideIcon: '',
    hideText: '(●——●)喔哟，崩溃啦!',
    recoverTime: 2000,
  }]
]