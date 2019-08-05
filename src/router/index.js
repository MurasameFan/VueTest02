import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history', // 必须增加这个模式，否则页面不出
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('../views/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('../views/Add.vue')
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('../views/Info.vue')
    },
    {
      path: '/axiostest',
      name: 'AxiosTest',
      component: () => import('../views/AxiosTest.vue')
    }
  ]
})
