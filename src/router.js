import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      meta: {
        layout: 'main'
      },
      component: () => import('./views/main-page')
    },
    {
      path: '/comments',
      name: 'comments',
      meta: {
        layout: 'main'
      },
      component: () => import('./views/comments-all')
    },
    {
      path: '/comments/:id',
      name: 'comment',
      meta: {
        layout: 'main'
      },
      component: () => import('./views/comments-one')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router