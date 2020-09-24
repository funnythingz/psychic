<template lang="pug">
.container
  section
    p.description
      | 1日1回限定! 感覚を研ぎ澄ませ!
    h1
      | サイキック
    p.stage-count
      | Stage {{stage}}
    p.stage-title
      | {{content}}の画像が入っている箱を選べ!
</template>

<script>
export default {
  data() {
    return {
      stage: 1,
      content: '犬',
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  text-align: center
h1
  font-size: 48px
  margin: 0
.description
  font-size: 16px
</style>
