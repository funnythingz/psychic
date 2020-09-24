<template lang="pug">
.container
  section(v-if="next")
    p.description
      | 1日1回限定! 感覚を研ぎ澄ませ!
    h1
      | サイキック
    p.stage-count
      | Stage {{stage}}
    p.stage-title
      | {{content}}の画像が入っている箱を選べ!
    .box-container
      .box(@click="lottery(0)")
      .box(@click="lottery(1)")
  section(v-else)
    p.goodbye
      | おわりだよ！またね！
    p.reset(@click="reset()")
      | 最初からやりなおす
</template>

<script>
import shuffle from '../lib/shuffle.js'

export default {
  data() {
    return {
      next: true,
      stage: 1,
      content: '犬',
    }
  },
  methods: {
    lottery(selectNum){
      if (shuffle([0, 1])[0] === selectNum) {
        this.stage += 1;
        alert('Win!')
      } else {
        alert('Lose!')
        this.next = false
      }
    },
    reset(){
      this.next = true
      this.stage = 1
      this.content = '犬'
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
.stage-count
  font-size: 16px
  font-weight: bold
.stage-title
  font-size: 16px
  font-weight: bold
.box-container
  display: flex
  justify-content: center
.box
  width: 136px
  height: 123px
  display: block
  margin: 10px 20px
  background-image: url('~/assets/images/box.png')
.goodbye
  font-size: 18px
.reset
  font-weight: bold
  text-decoration: underline
</style>
