import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/List.vue')
  },
  {
    path: '/results',
    name: 'Results',
    props: route => ({ query: route.query.name }),
    component: () => import(/* webpackChunkName: "results" */ '../views/Results.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
