<template lang="pug">
.container
  section(v-if="result")
    h1.result-title
      | Result!
    .heading
      | 道端の超能力者
    .status-wrapper
      p.status
        | サイキック合計数
        br
        span.psychic-count
          | {{psychicCount()}}
        |  回
    .sns-share
      p
        | 友達にあなたの結果を共有しよう！
      button.btn(@click="todo()")
        | Twitterでシェア
    .retry
      p.reset(@click="reset()")
        | 最初からやりなおす
  section(v-else)
    section
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
        .card1(@click="lottery(0)" :class="{'is-flipped': flip1}")
        .card2(@click="lottery(1)" :class="{'is-flipped': flip2}")
      .status-wrapper(v-if="psychicCount() >= 1")
        p.status
          | 現在のサイキック回数
          br
          span.psychic-count
            | {{psychicCount()}}
          | 回
    section.card-wrapper(v-if="openCard.flag")
      .text
        | {{openCard.message}}
      .card-answer
        img.photo-animal(:src="openCard.imagePath")
        .message(v-if="next")
          p.reset(@click="openCard.flag = false")
            | Next Challenge!
        .message(v-if="!next")
          p.next(@click="result = true")
            | 最終結果へ
</template>

<script>
import shuffle from '../lib/shuffle.js'

export default {
  data() {
    return {
      next: true,
      stage: 1,
      content: '犬',
      flip1: false,
      flip2: false,
      openCard: {
        flag: false,
        message: 'Bad...',
        imagePath: '/assets/images/cat.jpg'
      },
      result: false
    }
  },
  methods: {
    lottery(selectNum) {
      if(selectNum === 0) {
        this.flip1 = true
      } else {
        this.flip2 = true
      }
      (self => {
        setTimeout(() => {
          if (shuffle([0, 1])[0] === selectNum) {
            self.stage += 1;
            self.flipCard(true)
          } else {
            self.flipCard()
            self.next = false
          }
          this.flip1 = false
          this.flip2 = false
        }, 1000)
      })(this);
    },
    reset() {
      this.next = true
      this.stage = 1
      this.content = '犬'
      this.openCard.flag = false
      this.openCard.message = 'Bad...'
      this.openCard.imagePath = '/assets/images/cat.jpg'
      this.flip1 = false
      this.flip2 = false
      this.result = false
    },
    flipCard(status) {
      this.openCard.flag = true
      switch(status) {
        case true:
          this.openCard.message = 'Good!!'
          this.openCard.imagePath = '/assets/images/dog.jpg'
          break
        default:
          this.openCard.message = 'Bad...'
          this.openCard.imagePath = '/assets/images/cat.jpg'
      }
    },
    psychicCount() {
      return this.stage - 1
    },
    todo() {
      alert('TODO')
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  text-align: center
  position: relative

.result-title
  font-size: 48px
  margin: 20px 0 10px

.heading
  font-size: 28px

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

.btn
  background-color: #fff
  padding: 10px
  text-align: center
  border-radius: 24px
  width: 85%
  border: solid 1px transparent
  color: #1DA1F2
  font-weight: bold

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
  transition: transform 1s
  transform-style: preserve-3d
  &.is-flipped
    transform: rotateY(180deg)

.card1
  background-image: url('~/assets/images/card1.png')

.card2
  background-image: url('~/assets/images/card2.png')

.goodbye
  font-size: 18px


  font-weight: bold
  text-decoration: underline
  color: #345

.next
  font-weight: bold
  text-decoration: underline
  color: #345

.reset
  text-decoration: underline

.card-wrapper
  position: absolute
  top: 0
  left: 0
  right: 0
  > .text
    font-size: 48px
    font-weight: bold

.card-answer
  background-color: #fff
  padding: 100px 15px 50px
  margin: 15px
  border-radius: 16px

.photo-animal
  width: 100%
  height: 100%
  max-width: 480px
  max-height: 480px
  text-align: bottom

.status
  font-weight: bold

.psychic-count
  font-size: 24px

.sns-share
  margin: 40px 0 20px

</style>
