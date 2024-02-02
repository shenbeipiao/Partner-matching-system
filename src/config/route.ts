import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/UserPage.vue";
import Search from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/Team', component: Team },
    { path: '/User', component: User },
    { path: '/Search', component: Search },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
]

export default routes;