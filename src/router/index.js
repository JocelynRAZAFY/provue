import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'root',
   redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login'),
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../layout/back'),
    redirect: '/back/dashboard',
    children: [
      {
        path: '/back/dashboard',
        component: () => import('../views/back/user'),
        name: 'user',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/icons',
        component: () => import('../views/back/icons'),
        name: 'icons',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/google',
        component: () => import('../views/back/google'),
        name: 'google',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/profile',
        component: () => import('../views/back/profile'),
        name: 'profile',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/tables',
        component: () => import('../views/back/tables'),
        name: 'tables',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/login',
        component: () => import('../views/back/login'),
        name: 'login',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/register',
        component: () => import('../views/back/register'),
        name: 'register',
        meta: { requiresAuth: true }
      },
      {
        path: '/back/upgrade',
        component: () => import('../views/back/upgrade'),
        name: 'upgrade',
        meta: { requiresAuth: true }
      }
      ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
