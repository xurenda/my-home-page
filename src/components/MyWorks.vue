<!--
 * my-works 我的作品
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 22:57:28
 * @LastEditTime: 2019-11-12 22:38:47
 * @FilePath: \my-home-page\src\components\MyWorks.vue
 -->
<template>
<div id="my-works">
  <div class="container">
    <h2>我的作品</h2>
    <span class="cut-line"></span>
    <div class="works">
      <div
        class="work"
        v-for="w in myWorks"
        :key="w.title"
        @click="goto(w.url)"
      >
        <div class="work-img" :style="{ backgroundImage: `url(/img/${w.imgName})` }"></div>
        <div class="work-desc">
          <p class="title">{{ w.title }}</p>
          <p class="desc">{{ w.desc }}</p>
          <p>
            <span class="tag" v-for="(t, i) in w.tags" :key="i">{{ t }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { myWorks } from '@/assets/js/data'

export default {
  name: 'my-works',
  data () {
    return {
      myWorks
    }
  },
  methods: {
    /**
     * @description: 打开新标签页
     * @param {string} url 要跳转到的网址
     * @return {void}
     */
    goto (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variables'

#my-works
  background-color $background-color-2
  .works
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 32px
    .work
      background-color #fff
      cursor: pointer
      transition all 0.25s
      &:hover
        box-shadow 0 8px 10px rgba(0, 0, 0, .1)
      .work-img
        height 155px
        background-color rgb(230,230,230)
        background-repeat no-repeat
        background-size cover
      .work-desc
        text-align left
        box-sizing border-box
        padding 10px 20px 20px
        display flex
        flex-direction column
        justify-content flex-start
        .title
          color #000
          font-size $big-font-size
          font-weight 700
        .desc
          color rgba(0, 0, 0, .8)
          font-size $small-font-size
          margin-bottom 4px
        .tag
          color rgba(0, 0, 0, .5)
          font-size $mini-font-size
          margin-right 4px
</style>
