<!--
 * about-me 关于我
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 21:47:59
 * @LastEditTime: 2019-11-13 11:39:08
 * @FilePath: \my-home-page\src\components\AboutMe.vue
 -->
<template>
<div id="about-me">
  <div class="container">
    <h2>关于我</h2>
    <span class="cut-line"></span>
    <div class="tag">
      <span v-for="t in data.tags" :key="t">{{ t }}</span>
    </div>
    <div class="presentation">
      <p v-for="p in data.presentation" :key="p">{{ p }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { aboutMe } from '@/assets/js/data'

export default {
  name: 'about-me',
  data () {
    return {
      data: aboutMe
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variables'

#about-me
  background-color $background-color-1
  .tag
    margin-bottom 26px
    span
      display inline-block
      background-color #f0f0f0
      margin 0 5px
      padding 6px 14px
      font-size $small-font-size
      transition all 0.25s
      &:hover
        background-color #e5e5e5
        box-shadow 0 5px 10px rgba(0, 0, 0, .1)
  .presentation > p
    margin 14px 0
</style>
