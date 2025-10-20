<template>
  <div class="home">
    <h2>🌤️ 欢迎来到 Vue + Vant4 H5 页面</h2>
    <van-button type="primary" @click="goAbout">关于我</van-button>

    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)

const goAbout = () => {
  window.location.href = '/about.html'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px 10px;
}
</style>
