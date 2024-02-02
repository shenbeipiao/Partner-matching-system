import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";
import UserEditPage from "../pages/UserEditPage.vue"
const routes = [
    { path: '/', component: Index },
    { path: '/Team', component: Team },
    { path: '/User', component: User },
    { path: '/Search', component: Search },
    { path: '/user/edit', component: UserEditPage },
]

export default routes;