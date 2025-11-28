import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UNNC-FABLAB 2025', 
  description: 'MingZhao Portfolio',

  // 你的 GitHub Pages 路径
  base: '/2025-2-mingzhao/',
  
  // 🔥 关键修改：强制默认深色模式 (Dark Mode)
  // 这会解决字看不清的问题
  appearance: 'dark', 

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'UNNC-FAB 2025', // 我稍微打开了标题显示，方便辨识

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
            { text: 'Arduino', link: '/daily-homework/arduino' },
            { text: 'CAD design', link: '/daily-homework/cad-design' }, 
            { text: '3D Printer', link: '/daily-homework/3d-printer' },
            { text: 'Laser Cutting', link: '/daily-homework/laser-cutting' } 
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
            // 注意：下面这一行末尾必须加逗号
            { text: "Google's development language", link: '/small-homework-in-class/google-development-language' },
            // 这是新加的一行
            { text: 'National and regional standards', link: '/small-homework-in-class/laser-standards' }
          ]
        }
      ]
    }, // <--- 之前这里少了这个大括号和逗号，现在补上了！

    socialLinks: [
        // 我帮你改成了你自己的仓库地址
        { icon: 'github', link: 'https://github.com/UNNC-Fab/2025-2-mingzhao' }
    ]
  }
})