<!--
 * footer 页脚
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 23:15:04
 * @LastEditTime: 2019-11-12 20:49:30
 * @FilePath: \my-home-page\src\components\Footer.vue
 -->
<template>
<div id="footer">
  <div class="container">
    <!-- 版权信息 -->
    <div class="copyright">
      <p>{{ copyright }}</p>
      <p>{{ recordCode }}</p>
    </div>

    <!-- 底部导航 -->
    <div class="nav">
      <ul v-for="n in bottomNav" :key="n.title">
        <span class="title">{{ n.title }}</span>
        <li class="sub" v-for="s in n.sub" :key="s.title">
          <a v-if="s.url" :href="s.url" target="_blank">{{ s.title }}</a>
          <span v-else-if="s.content">{{ s.title }}: {{ s.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { bottomNav, copyright, recordCode } from '@/assets/js/data'

export default {
  name: 'app-footer',
  data () {
    return {
      bottomNav,
      copyright,
      recordCode
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variables'

#footer
  background-color $background-color-3
  .container
    display flex
    padding 46px 0
    align-items flex-start
    justify-content space-between
    text-align left
    color $placeholder-color
    .copyright > p
      margin-bottom 6px
    .nav
      flex 1
      margin-left 200px
      display flex
      justify-content space-between
      .title
        color #fff
        font-size $big-font-size
      .sub
        font-size $small-font-size
        a
          color $placeholder-color
          &:hover
            color $font-color
</style>
