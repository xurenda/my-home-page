<!--
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-11 18:43:56
 * @LastEditTime: 2019-11-11 21:24:31
 * @FilePath: \my-home-page\src\App.vue
 -->
<template>
  <div id="app">
    <!-- 飞溅屏幕 -->
    <splash-screen />
  </div>
</template>

<script>
import SplashScreen from './components/SplashScreen'

export default {
  name: 'app',
  components: {
    SplashScreen
  }
}
</script>
<style lang="stylus">
@import './assets/stylus/basic.styl'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
