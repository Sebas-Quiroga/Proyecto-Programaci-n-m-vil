import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/pie.vue';
import HomePage from '../views/Home.vue';
<<<<<<< HEAD
=======
import BUsuarios from '../views/BUsuarios.vue';
import BTareas from '../views/BTareas.vue';
import BNotas from '../views/BNotas.vue';
>>>>>>> 3cb7da5 (Agregacion vistas bases de datos)

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
<<<<<<< HEAD
=======
    
    path: '/busuarios',
    name: 'BUsuarios',
    component: BUsuarios
  },
  {
    
    path: '/btareas',
    name: 'BTareas',
    component: BTareas
  },
  {
    
    path: '/bnotas',
    name: 'BNotas',
    component: BNotas
  },
  {
>>>>>>> 3cb7da5 (Agregacion vistas bases de datos)
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
