import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '../views/PageLogin.vue'
import PageTest from '../views/PageTest.vue'
import PageTest2 from '../views/PageTest2.vue'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Vue.component('PageLogin', PageLogin), meta: {} },
    { path: '/test', component: Vue.component('PageTest', PageTest), meta: {} },
    { path: '/test/test2', component: Vue.component('PageTest2', PageTest2), meta: {} },
    { path: '/', redirect: '/login' },
    { path: '*', redirect: '/login' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
})
