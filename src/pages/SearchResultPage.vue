<template>
  <van-card
      v-if="mockUser"
      :desc="mockUser.profile"
      :title="mockUser.username"
      :thumb="mockUser.avatarUrl"
  >
    <template #tags>
      <van-tag
          v-for="(tag, index) in mockUser.tags"
          :key="index"
          plain
          type="primary"
      >
        {{ tag }}
      </van-tag>
      <van-tag plain type="primary" v-if="mockUser.tags === null
       || mockUser.tags.length === 0"
               style="margin-left: 40px">
        暂无标签
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-description="搜索结果为空" />

</template>

<script>
//import {onMounted, ref} from 'vue';
//import {useRoute} from "vue-router";
//import myAxios from "../plugins/myAxios";
//import {showToast} from "vant";
import qs from 'qs';
//import UserCardList from "../components/UserCardList.vue";

//const route = useRoute();
//const {tags} = route.query;

// const userList = ref([]);
//
// onMounted(async () => {
//   const userListData = await myAxios.get('/user/search/tags', {
//     params: {
//       tagNameList: tags
//     },
//     paramsSerializer: params => {
//       return qs.stringify(params, {indices: false})
//     }
//   })
//       .then(function (response) {
//         console.log('/user/search/tags succeed', response);
//         return response?.data;
//       })
//       .catch(function (error) {
//         console.error('/user/search/tags error', error);
//         showToast.fail('请求失败');
//       })
//   console.log(userListData)
//   if (userListData) {
//     userListData.forEach(user => {
//       if (user.tags) {
//         user.tags = JSON.parse(user.tags);
//       }
//     })
//     userList.value = userListData;
//   }
// })
//

const mockUser = {
  id: 12345,
  username: '鱼皮',
  userAccount: '12314',
  profile: '一名精神小伙，目前还有头发，谢谢大家，阿爸爸阿爸爸阿巴阿巴阿巴',
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
  gender: 0,
  phone: '13113113111',
  email: '592342843721987@xzcxzczxcz.com',
  userRole: 0,
  planetCode: '1234',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
}

export default {
 // name: SearchResultPage,
  data() {
    return {
      mockUser : {
        id: 12345,
        username: '鱼皮',
        userAccount: '12314',
        profile: '一名精神小伙，目前还有头发，谢谢大家，阿爸爸阿爸爸阿巴阿巴阿巴',
        avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
        gender: 0,
        phone: '13113113111',
        email: '592342843721987@xzcxzczxcz.com',
        userRole: 0,
        planetCode: '1234',
        tags: ['java', 'emo', '打工中', 'emo', '打工中'],
        createTime: new Date(),
      }
    }
  }
}

</script>

<style scoped>

</style>