import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/setup',
      name: 'game setup',
      component: () => import('../views/GameSetup.vue')
    },
    {
      path: '/first-serve',
      name: 'first serve',
      component: () => import('../views/FirstServe.vue')
    },
    {
      path: '/game',
      name: 'game page',
      component: () => import('../views/Game.vue')
    },
    {
      path: '/win',
      name: 'win page',
      component: () => import('../views/Win.vue')
    }
  ]
})

export default router
