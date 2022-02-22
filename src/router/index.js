import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/template.vue'
import Detail from '@/views/detail/template.vue'
import Create from '@/views/create/template.vue'
import Edit from '@/views/edit/template.vue'
import Home from '@/views/home/template.vue'
import My from '@/views/my/template.vue'
import Register from '@/views/register/template.vue'
import User from '@/views/user/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
