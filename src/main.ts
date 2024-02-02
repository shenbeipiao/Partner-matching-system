import { createApp } from 'vue';
import App from './App.vue';

import Vant from 'vant';
import 'vant/es/toast/style';
import 'vant/lib/index.css';

import * as VueRouter from 'vue-router'

import routes from "./config/route";

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)
// 注册组件
app.use(Vant)
app.use(router)
//挂载
app.mount('#app')




