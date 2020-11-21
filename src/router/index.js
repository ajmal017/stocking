import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Survey from '../views/Survey.vue'
import Result from '../views/Result.vue'
import Industry from '../views/Industry.vue'
import Metric from '../views/Metric.vue'
import Stock from '../views/Stock.vue'
import Broker from '../views/Broker.vue'
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
    path: '/broker',
    name: 'Broker',
    component: Broker
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
