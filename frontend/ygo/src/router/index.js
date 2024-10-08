import { createRouter, createWebHistory } from 'vue-router'
import.meta.env.BASE_UR

import Search from '../views/Search.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router