# **Project Management**

---

## **1. Create a Repository**

To start, we need to **create a repository** on **GitHub** at [github.com](https://github.com).

  
Set the **repository name** first.

  
As we continue to create our repository, we need to set our **visibility** to **Public**, allowing Internet users to access it.

  
Be sure to include a **README file** in the repository, as this is where we can provide a comprehensive **project description**.

  
 *Complete creation.*

---

## **2. Member Invitation**

You can **invite team members** to your repository.

  
After inviting, you can **view the list of invited members** in the repository settings.

---

## **3. GitHub Settings**

Once members are invited, go to **Settings** to configure project permissions and collaboration options.

  
 *Complete the setup.*

  
 *Upload pictures here.*

  
 *View and manage images here.*

---

## **4. Upload Web Page**

Use **Clone**, **Pull**, and **Push** commands to manage your code locally and synchronize with GitHub.

  
When uploading, remember to **enter the page version name** clearly.

  
After confirming, **click to upload** your project.

  
Then you can **view it on your GitHub webpage**.

---

## **5. Home Page Code**

Here is the code for the home page, including the VitePress home file, sample page, site configuration, and GitHub Actions deployment.

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
/* make hero area fill viewport and center everything */
.VPHomeHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 0;
}

/* slightly smaller hero title (compared to previous version) */
.VPHomeHero .name {
  font-size: 110px;           /* mobile size */
  line-height: 1;
  font-weight: 900;
  margin-bottom: 50px;        /* spacing below title */

  /* neon gradient */
  background: linear-gradient(90deg,#4facfe,#00f2fe,#a78bfa,#f472b6,#f59e0b,#4facfe);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  /* glow + animation */
  text-shadow: 0 0 20px rgba(79,172,254,0.4),
               0 0 40px rgba(244,114,182,0.25);
  animation: glowShift 6s ease-in-out infinite;
}

@keyframes glowShift {
  0%   { background-position:   0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
  50%  { background-position: 100% 50%; text-shadow:0 0 40px rgba(244,114,182,0.4); }
  100% { background-position:   0% 50%; text-shadow:0 0 20px rgba(79,172,254,0.4); }
}

/* desktop: smaller than before, still impressive */
@media (min-width: 960px) {
  .VPHomeHero .name { font-size: 160px; }
}

/* subtitle styling */
.VPHomeHero .text {
  font-size: 34px;            /* mobile */
  line-height: 1.4;
  font-weight: 500;
  opacity: 0.95;
  color: #d1d5db;
  letter-spacing: 1px;
}
@media (min-width: 960px) {
  .VPHomeHero .text { font-size: 46px; }
}

/* safety for reduced-motion users */
@media (prefers-reduced-motion: reduce) {
  .VPHomeHero .name { animation: none; }
}
</style>
---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

````md
<script setup>
import { useData } from 'vitepress'
const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>


---

## **5.3 docs/.vitepress/config.mts (Site Configuration)**

```ts
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
          fetch-depth: 0 # If lastUpdated is disabled, this can be omitted.

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
