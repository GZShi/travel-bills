import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Bills from '@/components/Bills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/bills',
      name: 'Bills',
      component: Bills
    }
  ]
})
