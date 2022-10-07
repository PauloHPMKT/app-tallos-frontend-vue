import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/user/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/app',
      children: [
        {  
          path: 'admin',
          name: 'Dashboard',
          component: Dashboard,
        }
      ]
    }
  ]
})

export default router
