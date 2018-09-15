import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '../views/PageLogin.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Vue.component('PageLogin', PageLogin), meta: {} },
    { path: '*', redirect: '/login' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
})
