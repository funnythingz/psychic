<template lang="pug">
.container
  h1.hello
    | hello
  p
    | {{greeting}}
</template>

<style lang="sass">
.hello
  color: #789
</style>

<script>
export default {
  data() {
    return {
      greeting: 'hello!'
    }
  }
}
</script>
