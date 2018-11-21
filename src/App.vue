<style src="./assets/css/raw.css" />
<style src="./assets/css/layout.css" />
<template>
  <main id="app">
    <div>Always display this text</div>
    <div>Router path: {{ $route.path }} </div>
    <router-view class="page" :key="$route.path" ref="router" />
  </main>
</template>

<script>

export default {
  data() {
    return {
      size: size(),
      browser: browser(),
    }
  },
  computed: {
    mobile() {
      return !this.size.includes('tablet')
    },
  },
  mounted() {
    window.addEventListener('resize', () => this.size = size())
  }
}
</script>

<style>
</style>
