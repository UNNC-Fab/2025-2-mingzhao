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
      { text: 'Daily homework', link: '/daily-homework' },
      { text: 'Finalwork', link: '/finalwork' }
    ],
    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Daily homework', link: '/daily-homework' },
          { text: 'Finalwork', link: '/finalwork' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})