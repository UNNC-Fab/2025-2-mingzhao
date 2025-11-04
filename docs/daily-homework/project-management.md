# **Project Management**

---

## **1. Create a Repository**

To start, we need to **create a repository** on **GitHub** at [github.com](https://github.com).
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104130948549.png)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104131118958.png)
Set the **repository name** first.
As we continue to create our repository, we need to set our **visibility** to **Public**, allowing Internet users to access it.
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104131212550.png)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104131542106.png)
Be sure to include a **README file** in the repository, as this is where we can provide a comprehensive **project description**.

  
 *Complete creation.*

---

## **2. Member Invitation**
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104131901456.png)
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132245762.png)
You can **invite team members** to your repository.
After inviting, you can **view the list of invited members** in the repository settings.

---

## **3. GitHub Settings**
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132457766.png)
Once members are invited, go to **Settings** to configure project permissions and collaboration options.

  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132503417.png)
  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104151759443.png)
 *Set the token*
  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104153441440.png)
  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104152111054.png)
 *Complete the setup.*

  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132512364.png)
 *Upload pictures here.*

  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132523147.png)
 *View and manage images here.*

---

## **4. Upload Web Page**

Use **Clone**, **Pull**, and **Push** commands to manage your code locally and synchronize with GitHub.

  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104132823156.png)
  ![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104133039814.png)

  
After confirming, **click to upload** your project.
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104133409442.png)
  
Then you can **view it on your GitHub webpage**.
![](https://raw.githubusercontent.com/jasperxi0218/imageuploadservice/main/img/20251104152911772.png)
---

## **5. Home Page Code**

Here is the **code for the home page**, including the VitePress home file, sample page, site configuration, and GitHub Actions deployment.

---

## **5.1 docs/index.md (Home page)**

```md
---
layout: home
hero:
  name: My project
  text: UNNC-Fab/2025-2-xi mingzhao
sidebar: false
aside: false
outline: false
---

<style>
.VPHomeHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 0;
}
.VPHomeHero .name {
  font-size: 110px;
  line-height: 1;
  font-weight: 900;
  margin-bottom: 50px;
  background: linear-gradient(90deg,#4facfe,#00f2fe,#a78bfa,#f472b6,#f59e0b,#4facfe);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(79,172,254,0.4),
               0 0 40px rgba(244,114,182,0.25);
  animation: glowShift 6s ease-in-out infinite;
}
@keyframes glowShift {
  0%   { background-position: 0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
  50%  { background-position: 100% 50%; text-shadow:0 0 40px rgba(244,114,182,0.4); }
  100% { background-position: 0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
}
@media (min-width: 960px) {
  .VPHomeHero .name { font-size: 160px; }
}
.VPHomeHero .text {
  font-size: 34px;
  line-height: 1.4;
  font-weight: 500;
  opacity: 0.95;
  color: #d1d5db;
  letter-spacing: 1px;
}
@media (min-width: 960px) {
  .VPHomeHero .text { font-size: 46px; }
}
@media (prefers-reduced-motion: reduce) {
  .VPHomeHero .name { animation: none; }
}
</style>
``` 

---


## **5.2 docs/.vitepress/config.mts (Site Configuration)**

```md
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
``` 

---

## **5.3 .github/workflows/deploy.yml (GitHub Pages Auto Deployment)**

```md
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22.14.0
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4