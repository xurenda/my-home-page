/*
 * @Author: xurenda <xurenda@qq.com>
 * @Github: https://github.com/xurenda
 * @Date: 2019-11-13 12:42:05
 * @LastEditTime: 2019-11-13 13:06:03
 * @FilePath: \my-home-page\src\assets\js\utils.js
 */

/**
 * @description: 平滑滚动到页面的指定位置
 * @param {number} positionX 滚动到的X轴位置
 * @return {void}
 */
export function scrollSmoothTo (positionX) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = callback => setTimeout(callback, 17)
  }

  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  _step()

  // 滚动 step 方法
  function _step () {
    // 距离目标滚动距离
    const distance = positionX - scrollTop

    // 目标滚动位置
    scrollTop = scrollTop + distance / 5
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, positionX)
    } else {
      window.scrollTo(0, scrollTop)
      requestAnimationFrame(_step)
    }
  }
}
