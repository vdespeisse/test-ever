import './globals'
import './utils/sugar'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import Vue from 'vue'
import components from './components'
import './utils/vue'

Vue.use(components)
Vue.use(VueFire)


window.vm = new Vue({
  router,
  ...App,
}).$mount('#app')

export default window.vm
