import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/UserPage.vue";
import Search from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/Team', component: Team },
    { path: '/User', component: User },
    { path: '/Search', component: Search },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/user/login', component: LoginPage },
    { path: '/team/add', component: TeamAddPage },
    { path: '/team/update', component: TeamUpdatePage },
    { path: '/team/create', component: UserTeamCreatePage },
    { path: '/team/join', component: UserTeamJoinPage },

]

export default routes;