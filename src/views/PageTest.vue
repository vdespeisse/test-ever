<template lang="pug">
section.test(column center)
  .box Preimiere page de test
  button(@click="$router.push('/test')") Page Test 1
  button(@click="$router.push('/test/test2')") Page Test 2
</template>
<script>
export default {
}
</script>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: white;
}
</style>
