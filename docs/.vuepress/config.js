module.exports = {
    title: 'XieJ`s Blog',
    description: 'a vergertable',
    head: [
        ['link', {
            rel: 'icon', href: '/teno.png'
        }]
    ],

    themeConfig: {
        logo: '/teno.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [{
                    text: '文章',
                    link: '/pages/test2.md'
                },{
                    text: '文章2',
                    link: '/pages/test3.md'
                }, {
                    text: '文章3',
                    link: 'http://www.baidu.com'
                    
                }]
            }
        ],
        sidebar: {
            '/pages/': [{
                title: '测试菜单1',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['test1.md', '子菜单1'],
                    ['test2.md', '子菜单2'],
                    ['test3.md', '子菜单3']
                ]
            }]
        }
    }
}