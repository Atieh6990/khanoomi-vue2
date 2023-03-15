import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import detail from '../views/detail'
import login from '../views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/detail/:data',
    name: 'detail',
    component: detail
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
