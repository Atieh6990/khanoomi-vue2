import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import detail from '../views/detail'
import login from '../views/login'
import myVideos from "@/views/myVideos";
import categories from "@/views/categories";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home/:time',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/detail/:time',
        name: 'detail',
        component: detail
    },
    {
        path: '/myVideos',
        name: 'myVideos',
        component: myVideos
    },
    {
        path: '/categories',
        name: 'categories',
        component: categories
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
