import './globals'
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
})

function ready(loadApp) {
   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
     loadApp();
   } else {
     document.addEventListener('DOMContentLoaded', loadApp);
   }
 }

ready(function loadApp() {
 window.vm.$mount('#app')
});


export default window.vm
