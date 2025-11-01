import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  
  base: '/2025-2-mingzhao/',

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daily homework', link: '/daily-homework/' },
      { text: 'Finalwork', link: '/finalwork/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/daily-homework/': [
        {
          text: 'Daily homework',
          items: [
            { text: 'Project Management', link: '/daily-homework/project-management' },
            { text: 'Arduino', link: '/daily-homework/arduino' }
          ]
        }
      ],
      '/finalwork/': [
        {
          text: 'Finalwork',
          items: [
            { text: 'Psychological sand table', link: '/finalwork/psychological-sand-table' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})