import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home',
        title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home')
    },
    {
      path: '/lista-gastos',
      name: 'lista-gastos',
      meta: {
        icon: 'list-ul',
        title: 'Lista Gastos'
      },
      component: () => import(/* webpackChunkName: "lista-gastos" */'../pages/expense-list/ExpenseList')
    },

    {
      path: '/login',
      name: 'login',
      meta: {title: 'Login'},

      component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses`

  if(!window.uid && to.name!='login') {
    next({ name: 'login'})
  }
  next()
})

export default router

