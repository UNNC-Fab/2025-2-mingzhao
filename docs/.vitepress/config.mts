import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  
  base: '/2025-2-MINGZHAO/',

  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daily homework', link: '/daily-homework' },
      { text: 'Finalwork', link: '/finalwork' }
    ],
    sidebar: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
