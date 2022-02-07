import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pare from '../views/pare.vue'
import PixivDown from '../views/pixivdown.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pare',
    name: 'pare',
    component: Pare
  },
  {
    path: '/pixiv/down',
    name: 'PixivDown',
    component: PixivDown
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
