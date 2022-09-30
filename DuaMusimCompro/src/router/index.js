import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Godong from '../views/Godong.vue'
import Segara from '../views/Segara.vue'
import Dukungan from '../views/Dukungan.vue'
import Login from '../views/Login.vue'

const routes =  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/godong',
    name: 'Godong',
    component: Godong
  },
  {
    path: '/segara',
    name: 'Segara',
    component: Segara
  },
  {
    path: '/dukungan',
    name: 'dukungan',
    component: Dukungan
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
