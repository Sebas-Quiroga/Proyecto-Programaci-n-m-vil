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
        path: 'tareas/guardar',
        component: () => import('@/views/Guardar_tarea.vue')
      },
      {
        path: 'Tareas',
        component: () => import('@/views/Tareas.vue')
      },
      {
        path: 'realizado',
        component: () => import('@/views/Realizado.vue')
      },
      {
        path: 'notas',
        component: () => import('@/views/Notas.vue')
      }
      ,
      {
        path: 'notas/guardar',
        component: () => import('@/views/Guardar_nota.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
