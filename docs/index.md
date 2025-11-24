# 🚀 正在进入 UNNC-FABLAB...

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 立即跳转到 dashboard.html
  // 注意：dashboard.html 必须放在 docs/public/ 文件夹里
  window.location.replace('dashboard.html')
})
</script>

<style>
/* 让跳转前的瞬间也是黑色的，避免白屏闪烁 */
html, body {
    background-color: #050505;
    color: #333;
}
</style>