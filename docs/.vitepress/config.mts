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
      { text: 'Daily homework', link: '/daily-homework/project-management' },
      { text: 'Finalwork', link: '/finalwork/psychological-sand-table' },
      { text: 'Small homework in class', link: '/small-homework-in-class/' }
    ],

    search: { provider: 'local' },

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
      ],
      '/small-homework-in-class/': [
        {
          text: 'Small homework in class',
          items: [
            { text: 'GPL 3.0', link: '/small-homework-in-class/gpl-3-0' },
            { text: "Google's development language", link: '/small-homework-in-class/google-development-language' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})