import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login.vue'),
    },
    {
      path: '/app',
      component: () => import('../layout/TemplateDefault.vue'),
      children: [
        {  
          path: 'admin',
          name: 'Dashboard',
          component: () => import('../pages/user/Dashboard.vue'),
        }
      ]
    }
  ]
})

export default router
