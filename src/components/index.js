// Example
// import commponent from './vueComponent.vue'
// import directive from './v-directive'

const components = {
  // component goes here
}

const directives = {
  // directive goes here
}

export default {
  install(Vue) {
    Object.keys(components).map(name => Vue.component(name, components[name]))
    Object.keys(directives).map(name => Vue.directive(name, directives[name]))
  },
}
