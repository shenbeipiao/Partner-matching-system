<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username', '昵称', user.username)"/>
  <van-cell title="账号" is-link to="/user/edit" :value:="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl">
    <img style="height: 40px" :src="user.avatarUrl" alt="头像">
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
  <Van-cell title="编号" :value="user.planetCode"/>
  <van-cell title="注册时间 " :value:="user.createTime"/>
</template>

<script setup lang="ts">
import {useRouter, useRoute } from "vue-router"


const user = {
  id: 1,
  username: '沈北漂',
  userAccount: 'shenbeipiao',
  avatarUrl: '',
  gender: '男',
  phone: '123112312',
  email: '123450qq.c0m',
  planetCode: '1234',
  createTime: new Date(),
};
const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>