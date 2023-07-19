const navConf = require('./config/nav')

module.exports = {
    title: 'DreamRain',
    // base: '/cmty256/',
    description: '满招损，谦受益',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'vdoing',
      markdown: {
        lineNumbers: true, // 显示代码块的行号
        extractHeaders: ['h2','h3','h4', 'h5','h6']

    },
    base: '/',
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/logo/白云.38zbldnhh180.jpg' }], // 网页选项卡的logo
        [
            'meta',
            {
              name: 'keywords',
              content: '自定义网站关键词'
            }
       ],[
            'meta',
            {
              name: 'description',
              content: '自定义网站SEO描述信息。'
            }
       ]
    ],
    themeConfig: {
        updateBar:{showToArticle: false},
        logo: 'https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/logo/白云.38zbldnhh180.jpg',
        sidebar: 'structuring',
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: {
            mode: 'structuring',
            collapsable: false, // 侧边栏是否可折叠
        },
        pageStyle: 'line',
        category: false,
        tag: false,
        archive: false,
        author: {
            name: '沉梦听雨'//必需
        },
        footer: {
            //页脚信息
            createYear: 2023,
            //博客创建年份
            copyrightInfo: '沉梦听雨',
            //博客版权信息，支持a标签
        },
        // bodyBgImg: '/img/banner.jpg',
        // titleBadgeIcons: ['/img/2.png',],
    },
    plugins: [
        [
            'one-click-copy',  // 一键复制插件
            {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copied successfully!'
            toolTipMessage: '点击复制', // default is ''Copy to clipboard'
            duration: 300, // prompt message display time
            }
        ],
        ["cursor-effects"], // 星星点击特效
        [
            'vuepress-plugin-reading-time',
            {
                // 以下是插件的默认配置
                excludes: [],
                options: {}
            }
        ],
        ['fulltext-search'], // 全文搜索
        [
            'vuepress-baidu-tongji',
            {
            hm: 'abcdefghijklmnopqrstuvwxyz123456'
            }
        ]
    ],
}
