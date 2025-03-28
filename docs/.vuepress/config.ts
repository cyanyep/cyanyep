import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: 'TypeScript4 文档',
  // description: 'TypeScript4 最新官方文档翻译',
  theme: 'vdoing', 
  base: '/',
  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  head,
  themeConfig,
  plugins

}