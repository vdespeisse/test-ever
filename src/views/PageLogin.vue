<template lang="pug">
section.login(column center)
  div Hi!
  button(@click="$router.push('/test')") Page Test 1
  button(@click="$router.push('/test/test2')") Page Test 2
</template>
<script>
export default {
}
</script>
<style scoped>
</style>
