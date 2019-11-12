<!--
 * splash-screen 飞溅屏幕（启动画面）
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 18:43:56
 * @LastEditTime: 2019-11-12 22:46:13
 * @FilePath: \my-home-page\src\components\SplashScreen.vue
 -->
<template>
<parallax-container id="splash-screen">
  <!-- 背景 -->
  <parallax-element :parallaxStrength="20">
    <img class="background-img" src="/img/splash-screen-bg.jpg">
  </parallax-element>

  <!-- 文字 -->
  <div class="introduction-text">
    <p>Hello,</p>
    <p>I am <span class="em">xurenda</span>!</p>
    <p class="big">A progressive learner</p>
    <p class="small">This is my website for <span class="em">recording</span> and <span class="em">sharing</span> knowledge</p>
    <div class="more">learn more</div>
  </div>
</parallax-container>
</template>

<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

export default {
  name: 'splash-screen',
  components: { ParallaxContainer, ParallaxElement }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variables'

#splash-screen
  width 100vw
  height 100vh
  overflow hidden
  position relative
  background-color #000
  &::after
    content ''
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(0, 0, 0, .5)
  img.background-img
    height 104vh
    user-select none
  .introduction-text
    position absolute
    right 100px
    top 50%
    transform translateY(-50%)
    z-index 1
    text-align right
    p
      font-size 32px
      color #fff
      &.big
        font-size 57px
      &.small
        font-size 20px
      .em
        font-size 1.1em
        color $main-fore-color
    .more
      cursor pointer
      display inline-block
      padding 12px 15px
      margin-top 26px
      background-color $main-fore-color
      border-radius 6px
      font-size 18px
      color #000
      font-weight 700
      text-transform uppercase
      transition all 0.5s ease-in-out
      &:hover
        background-color transparent
        color $font-color
</style>
