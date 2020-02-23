import Vue from 'vue'
import VueRouter from 'vue-router'
import {constantRoutes,menuRoutes} from './routeList'

Vue.use(VueRouter)

const routes = [
  ...constantRoutes,
  ...menuRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
