import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',

  // IMPORTANT: set base to your exact repo name (case-sensitive)
  // e.g. '/2025-2-MINGZHAO/' if your repo is 2025-2-MINGZHAO
  base: '/2025-2-MINGZHAO/',

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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