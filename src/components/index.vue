<template lang="pug">
.container
  section(v-if="next")
    .title
      p.description
        | 1日1回限定! 感覚を研ぎ澄ませ!
      h1.logo
        | サイキック
    p.stage-count
      | Stage {{stage}}
    p.stage-title
      | {{content}}の画像が入っている箱を選べ!
    .box-container
      .card1(@click="lottery(0)")
      .card2(@click="lottery(1)")
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

.title
  position: relative
  margin: 50px 0 0
  height: 160px

.description
  position: absolute
  top: 0
  left: 0
  right: 0
  width: 128px
  height: 56px
  margin: 0 auto
  background-image: url('~/assets/images/description.png')
  color: transparent

.logo
  position: absolute
  top: 20px
  left: 0
  right: 0
  width: 259px
  height: 135px
  margin: 0 auto
  background-image: url('~/assets/images/logo.png')
  color: transparent

.stage-count
  font-size: 16px
  font-weight: bold
.stage-title
  font-size: 16px
  font-weight: bold
.box-container
  display: flex
  justify-content: center
.card1,
.card2
  width: 136px
  height: 203px
  display: block
  margin: 10px 20px
.card1
  background-image: url('~/assets/images/card1.png')
.card2
  background-image: url('~/assets/images/card2.png')
.goodbye
  font-size: 18px
.reset
  font-weight: bold
  text-decoration: underline
</style>
