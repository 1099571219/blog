import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/template.vue'
// import Detail from '@/views/detail/template.vue'
// import Create from '@/views/create/template.vue'
// import Edit from '@/views/edit/template.vue'
// import Index from '@/views/index/template.vue'
// import My from '@/views/my/template.vue'
// import Register from '@/views/register/template.vue'
// import User from '@/views/user/template.vue'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import('../views/index/template.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: ()=>import('../views/login/template.vue')

    },
    {
      path: '/Register',
      name: 'Register',
      component: ()=>import('../views/register/template.vue')

    },
    {
      path: '/Detail/:blogId',
      name: 'Detail',
      component: ()=>import('../views/detail/template.vue')

    },
    {
      path: '/Create',
      name: 'Create',
      component: ()=>import('../views/create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/Edit/:blogId',
      name: 'Edit',
      component: ()=>import('../views/edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/My',
      name: 'My',
      component: ()=>import('../views/my/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/User/:userId',
      name: 'User',
      component: ()=>import('../views/user/template.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: "/login",
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router