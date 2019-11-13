<!--
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 18:43:56
 * @LastEditTime: 2019-11-13 13:26:46
 * @FilePath: \my-home-page\src\App.vue
 -->
<template>
  <div id="app">
    <!-- 飞溅屏幕 -->
    <splash-screen />

    <!-- 关于我 -->
    <about-me />

    <!-- 我的作品 -->
    <my-works />

    <!-- 页脚 -->
    <app-footer />
  </div>
</template>

<script>
import { consoleText } from '@/assets/js/data'

import SplashScreen from './components/SplashScreen'
import AboutMe from './components/AboutMe'
import MyWorks from './components/MyWorks'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    SplashScreen,
    AboutMe,
    MyWorks,
    AppFooter: Footer
  },
  created () {
    window.console.log(consoleText)
  }
}
</script>
<style lang="stylus">
@import './assets/stylus/basic.styl'

#app
  min-width $container-width + 100px
</style>
