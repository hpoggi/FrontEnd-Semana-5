import { createRouter, createWebHashHistory } from 'vue-router'
import ClientView from '../views/ClientView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ClientView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/order',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
