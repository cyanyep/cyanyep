import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
export default <VdoingThemeConfig>{
    logo: 'https://img.cyanyep.top/Blog/Snipaste_2025-02-11_20-04-18.png',
    lastUpdated: '上次更新', // string | boolean
    nav: [
        { text: '首页', link: '/' },
        {
            text: 'Java',
            items: [
                { text: 'Java', link: 'https://cyanyep.top/Java/JavaSE' },
                { text: 'JUC', link: 'https://cyanyep.top/Java/JUC' },
                { text: 'JVM', link: 'https://cyanyep.top/Java/JVM' },
                {
                    text: '数据库',
                    items: [
                        { text: 'MySQL', link: 'https://cyanyep.top/MySQL' },
                        { text: 'NoSQL', link: 'https://cyanyep.top/NoSQL' },
                    ]
                },
                {
                    text: 'Redis',
                    items: [
                        { text: 'Redis安装', link: 'https://cyanyep.top/Redis/Redis安装/Win' },
                        { text: 'Redis基础', link: 'https://cyanyep.top/Redis/Redis基础' },
                        { text: 'Redis实战', link: 'https://cyanyep.top/Redis/Redis实战' },
                        { text: 'Redis集群安装', link: 'https://cyanyep.top/Redis/Redis集群安装' },
                        { text: 'Redis分布式缓存', link: 'https://cyanyep.top/Redis/Redis分布式缓存' },
                        { text: 'Redis多级缓存', link: 'https://cyanyep.top/Redis/Redis多级缓存' },
                        { text: 'Redis原理', link: 'https://cyanyep.top/Redis/Redis原理' },
                    ]
                },
                {
                    text: '管理工具',
                    items: [
                        { text: 'Maven', link: 'https://cyanyep.top/InterviewQ/INTV/' },
                        { text: 'Git', link: 'https://cyanyep.top/Git' },
                    ]
                },
                {
                    text: 'SSM',
                    items: [
                        { text: 'Spring', link: 'https://cyanyep.top/SSM/Spring/' },
                        { text: 'SpringBoot', link: 'https://cyanyep.top/SSM/SpringBoot/' },
                        { text: 'Mybatis', link: 'https://cyanyep.top/SSM/Mybatis/' },
                        { text: 'MybatisPlus', link: 'https://cyanyep.top/SSM/MybatisPlus/' },
                    ]
                },
                {
                    text: '微服务',
                    items: [
                        { text: 'Docker', link: 'https://cyanyep.top/MicroServices/Docker/' },
                        { text: 'RabbitMQ', link: 'https://cyanyep.top/MicroServices/RabbitMQ' },
                        { text: 'SpringCloud', link: 'https://cyanyep.top/MicroServices/SpringCloud' },
                        { text: 'Dubbo', link: 'https://cyanyep.top/MicroServices/Dubbo' },
                        { text: 'MongoDB', link: 'https://cyanyep.top/MicroServices/MongoDB' },
                        { text: 'Zookeeper', link: 'https://cyanyep.top/MicroServices/Zookeeper' },
                    ]
                },
                {
                    text: '面试题',
                    items: [
                        { text: 'Java面试题', link: 'https://cyanyep.top/InterviewQ/Java面试题/' },
                        { text: 'JUC面试题', link: 'https://cyanyep.top/InterviewQ/JUC面试题/' }
                    ]
                },
            ]
        },
        {
            text: '计算机',
            items: [
                { text: 'Linux', link: 'https://cyanyep.top/Computer/Linux' },
                { text: '软件测试', link: 'https://cyanyep.top/Computer/SoftwareTest' }
            ]
        },
        {
            text: '生活',
            items: [
                { text: '道理', link: 'https://cyanyep.top/Life/Learn' }
            ]
        },
        {
            text: '关于',
            items: [
                { text: 'Github', link: 'https://github.com/cyanyep' },
                { text: 'CSDN', link: 'https://blog.csdn.net/rc4gyyc' },
                {
                    text: '关于本站',
                    items: [
                        { text: '搭建博客', link: 'https://cyanyep.top/Blog/Introduce' }
                    ]
                }
            ]
        }
    ],
    sidebar: 'structuring',

    // repo: 'vuejs/vuepress',
    // editLinks: true,
    // docsDir: 'docs',
    // // 默认为 "Edit this page"
    // editLinkText: '在GitHub编辑此页',

    // 页脚
    footer: {
        createYear: 2022
    }
}