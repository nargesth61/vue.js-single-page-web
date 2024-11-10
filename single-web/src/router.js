import { createRouter,createWebHistory } from "vue-router";
import AppHome from "./pages/Home.vue";
import IndexUser from "./pages/IndexUser.vue";
import ShowUser from "./pages/ShowUser.vue";
import PostsShow from "./pages/Posts.vue";
import ShowPost from "./pages/ShowPost.vue";
import CreatePost from "./pages/CreatePost.vue";
import EditPost from "./pages/EditPost.vue";

const routes = [
    { path:'/' , name:'Home', component: AppHome },
    { path:'/users' , name:'IndexUser', component: IndexUser },
    { path:'/users/:id' , name:'ShowUser', component: ShowUser },
    { path:'/posts' , name:'PostsShow', component: PostsShow },
    { path:'/posts/:id' , name:'ShowPost', component: ShowPost },
    { path:'/posts/create' , name:'CreatePost', component: CreatePost },
    { path:'/posts/edite/:id' , name:'EditPost', component: EditPost },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;