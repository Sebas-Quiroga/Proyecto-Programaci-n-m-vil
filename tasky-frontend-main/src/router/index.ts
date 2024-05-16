import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/pie.vue';
import HomePage from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/tasky/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tasky/login'
      },
      {
        path: 'evento',
        component: () => import('@/views/Evento.vue')
      },
      {
        path: 'panel',
        component: () => import('@/views/Panel.vue')
      },
      {
        path: 'realizado',
        component: () => import('@/views/Realizado.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
