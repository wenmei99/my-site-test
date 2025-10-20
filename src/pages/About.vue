<template>
  <div class="about">
    <h2>👋 关于我</h2>
    <p>这是一个使用 Vant4 搭建的 Vue H5 示例页面。</p>
    <van-button type="default" @click="backHome">返回首页</van-button>
  </div>
</template>

<script setup>
const backHome = () => {
  window.location.href = '/'
}
</script>

<style scoped>
.about {
  text-align: center;
  padding: 40px 10px;
}
</style>
