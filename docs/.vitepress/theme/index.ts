// @ts-nocheck
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import GoogleSearch from '../components/GoogleSearch.vue' 

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(GoogleSearch)
    })
  },
  enhanceApp({ app }) {
  }
}