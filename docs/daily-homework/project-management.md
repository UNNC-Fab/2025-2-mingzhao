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

##  Prerequisites: Environment Setup

Before creating a repository, we need to set up the local development environment.

### Git Installation

Windows: Download Git for Windows. Install with default settings.

macOS: Run brew install git in Terminal.

Linux: Run sudo apt install git.

Crucial Configuration:
Open terminal and run:

git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"


### VS Code Setup

Download: Visual Studio Code.

Extensions: Install Vue - Official and Prettier.

0.3 Project Directory Structure (Detailed)

This is the complete file structure of our VitePress project in VS Code.

2025-2-mingzhao/                # Root Project Directory (Project Name)
├── .git/                       # Git Version Control System (Hidden Folder)
├── .github/                    # GitHub Configuration
│   └── workflows/              # Automation Scripts
│       └── deploy.yml          # GitHub Actions CI/CD Script
├── docs/                       # Source Code for Documentation
│   ├── .vitepress/             # Core VitePress Configuration
│   │   ├── cache/              # Cache Files (Auto-generated)
│   │   ├── dist/               # Build Output (The actual website files)
│   │   ├── theme/              # Custom Theme Settings
│   │   │   ├── index.ts        # Theme Entry File
│   │   │   └── style.css       # Custom CSS (Cyberpunk Style)
│   │   └── config.mts          # Main Site Config (Nav, Sidebar, Search)
│   ├── daily-homework/         # Folder: Daily Homework Modules
│   │   ├── ai-bp.md
│   │   ├── arduino.md
│   │   ├── cad-design.md
│   │   ├── computer-control-cutting.md
│   │   ├── electronics-design.md
│   │   ├── electronics-production.md
│   │   ├── final-project-debug.md
│   │   ├── laser-cutting.md
│   │   ├── molding-and-casting.md
│   │   ├── networking-communications.md
│   │   ├── processing.md
│   │   └── project-management.md
│   ├── finalwork/              # Folder: Final Project
│   │   └── psychological-sand-table.md
│   ├── public/                 # Static Assets (Accessible from root)
│   │   ├── dashboard.html      # Custom Landing Page (Cyberpunk Dashboard)
│   │   └── [images...]         # Project Images
│   ├── small-homework-in-class/# Folder: Class Assignments
│   │   ├── google-development-language.md
│   │   ├── gpl-3-0.md
│   │   └── laser-standards.md
│   └── index.md                # Home Page Redirector
├── node_modules/               # Dependencies Libraries (Do NOT upload to GitHub)
├── .gitignore                  # List of files to ignore (e.g., node_modules)
├── package-lock.json           # Dependency Tree Lock File
└── package.json                # Project Manifest & Scripts


##  5. Advanced Features

### 5.1 Search Bar Setup

To enable the built-in local search, ensure your docs/.vitepress/config.mts includes the following setting inside themeConfig.

Configuration:

export default defineConfig({
  themeConfig: {
    // 👇 Enable local search provider
    search: { provider: 'local' },
    // ... other settings (nav, sidebar)
  }
})


### 5.2 AI Integration (OpenAI API)

Note: This is an example of how to integrate AI. Be careful not to expose your API Key in public repositories.

Installation:

npm install openai


Basic Usage Script (e.g., ai-test.js):

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY", // ⚠️ Never commit real keys to GitHub!
  dangerouslyAllowBrowser: true 
});

async function askAI(question) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message.content);
}


## 6. Project Code Reference

These are the critical configuration files for your project. You can refer to them if you need to restore settings.

### 6.1 Home Page (docs/index.md)

This file handles the redirect to your custom dashboard.

---
layout: home
hero:
  name: My project
  text: UNNC-Fab/2025-2-xi mingzhao
sidebar: false
aside: false
outline: false
---
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  // Redirect to the custom HTML dashboard in public folder
  window.location.replace('dashboard.html')
})
</script>
<style>
/* Prevent white flash during redirect */
html, body {
    background-color: #050505;
    color: #333;
}
</style>


### 6.2 Site Configuration (docs/.vitepress/config.mts)

This file controls the navigation bar, sidebar, and site title.

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UNNC-FAB 2025-2',
  description: 'MingZhao Portfolio',
  base: '/2025-2-mingzhao/',
  appearance: 'dark', 
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'UNNC-FAB 2025-2', 
    nav: [ /* Your Nav Items */ ],
    search: { provider: 'local' },
    sidebar: { /* Your Sidebar Items */ },
    socialLinks: [{ icon: 'github', link: '[https://github.com/UNNC-Fab/2025-2-mingzhao](https://github.com/UNNC-Fab/2025-2-mingzhao)' }]
  }
})


### 6.3 Auto Deployment (.github/workflows/deploy.yml)

This GitHub Actions script automatically builds and deploys your site when you push to the main branch.

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
