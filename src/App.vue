<template>
  <main id="app">
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
