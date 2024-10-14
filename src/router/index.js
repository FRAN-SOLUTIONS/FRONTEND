import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BemVindo from '@/views/BemVindo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bemVindo',
      component: BemVindo,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    }
  ],
})

export default router
