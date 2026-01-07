<script setup>
import { ref } from 'vue'

const query = ref('')

function search() {
  // 如果输入为空，则不执行
  if (!query.value.trim()) return
  
  // 🔥 核心修正：这里拼接了谷歌的搜索前缀
  // 这样无论你输入什么，都会跳转到谷歌去搜索该内容，而不是在站内搜
  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query.value)}`
  
  // 在新标签页打开搜索结果
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
  margin-left: 20px;
  gap: 8px;
}

.search-input {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 13px;
  width: 150px;
  transition: all 0.3s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  width: 180px;
  outline: none;
}

.search-btn {
  background-color: var(--vp-c-brand-1);
  color: #000;
  border: none;
  padding: 4px 8px;
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