import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/home'
import Login from '@/components/login'
import Registered from '@/components/registered'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    }

  ]
})
