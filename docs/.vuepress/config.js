const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Sparrow',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/sparrow-vue-site/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      {
        text: '贡献',
        link: '/contribute/'
      },
      {
        text: 'github',
        link: 'https://github.com/sparrow-js/sparrow'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础',
          children: [
            '',
            'install',
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/guide/components/',
          ]
        },
        {
          title: '编辑区块',
          collapsable: false,
          children: [
            '/guide/editblock/',
          ]
        },
        {
          title: '搜索组件',
          collapsable: false,
          children: [
            '/guide/custom/',
          ]
        },
        {
          title: '静态区块',
          collapsable: false,
          children: [
            '/guide/block/',
          ]
        },
        {
          title: '贡献',
          collapsable: false,
          children: [
            '/guide/contribute/',
          ]
        }
        // {
        //   title: '功能',
        //   collapsable: true,
        //   children: [
        //     'form'
        //   ]
        // }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
