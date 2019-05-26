import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
import JoyReserve from './views/JoyReserve.vue'
import Blog from './views/Blog.vue'
import Vmall from './views/Vmall.vue'
import Ruishen from './views/Ruishen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/joyReserve',
      name: 'joyReserve',
      component: JoyReserve
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/vmall',
      name: 'vmall',
      component: Vmall
    },
    {
      path: '/ruishen',
      name: 'ruishen',
      component: Ruishen
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
