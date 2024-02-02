<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<script>
export default {
  name: "SearchResultPage"
}
</script>

<style scoped>

</style>