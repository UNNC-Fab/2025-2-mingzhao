<script setup>
import { ref } from 'vue'

const query = ref('')

function search() {
  if (!query.value.trim()) return
  
  const siteUrl = 'unnc-fab.github.io/2025-2-mingzhao' 
  
  const googleUrl = `https://www.google.com/search?q=site:${siteUrl} ${encodeURIComponent(query.value)}`
 
  window.open(googleUrl, '_blank')
}
</script>

<template>
  <div class="google-search-box">
    <input 
      type="text" 
      v-model="query" 
      @keyup.enter="search"
      placeholder="Google Search..." 
      class="search-input"
    />
    <button @click="search" class="search-btn">
      <i class="fa-solid fa-magnifying-glass"></i> GO
    </button>
  </div>
</template>

<style scoped>
.google-search-box {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  gap: 8px;
}

.search-input {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 13px;
  width: 140px;
  transition: all 0.3s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  width: 180px; /* 聚焦时变长，动效 */
  outline: none;
}

.search-btn {
  background-color: var(--vp-c-brand-1);
  color: #000;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: var(--vp-c-brand-2);
}
</style>