import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Survey from '../views/Survey.vue'
import Result from '../views/Result.vue'
import Industry from '../views/Industry.vue'
import Metric from '../views/Metric.vue'
import Stock from '../views/Stock.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/result/:id',
    name: 'Result',
    component: Result
  },
  {
    path: '/industry/:id',
    name: 'Industry',
    component: Industry
  },
  {
    path: '/metric/:id',
    name: 'Metric',
    component: Metric
  },
  {
    path: '/stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/',
    name: 'Broker',
    component: Home
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
  history: createWebHistory(),
  routes
})

export default router
