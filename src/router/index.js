import { createRouter, createWebHistory } from 'vue-router'
import Mission from '../views/Mission.vue'
import Login from '../views/Signin.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {

  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard

  },

  {
    path: '/mission',
    name: 'Mission',
    component: Mission

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
