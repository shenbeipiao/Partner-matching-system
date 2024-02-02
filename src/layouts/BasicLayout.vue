<template>
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>


  <div id="content">
    <router-view/>
  </div>

<!--  底部按钮  以及搜索返回 跳转页面 路由-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const onClickRight = () => {
  router.push('/Search')
}
const onClickLeft = () => {
  router.back()
}

</script>

<style>

</style>