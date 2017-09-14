// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'normalize.css'
import './assets/app.css'
import 'babel-polyfill'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://118.190.130.223:8000'
// axios.defaults.baseURL = 'http://192.168.0.203:8000'

axios.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处
  return res
}, function (err) {
  // Do something with response error
  return Promise.reject(err)
})

const browser = {
  versions: (function () {
    let u = navigator.userAgent
    return {   // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
    }
  }()),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

let showTitle = true

if (browser.versions.mobile) { // 判断是否是移动设备打开。browser代码在下面
  let ua = navigator.userAgent.toLowerCase() // 获取判断用的对象
  if (ua.match(/MicroMessenger/i)) {
    // 在微信中打开
  }
  if (ua.match(/WeiBo/i)) {
    // 在新浪微博客户端打开
  }
  if (ua.match(/mobile mqqbrowser/i)) {
    // 在QQ打开
    showTitle = false
  }
  if (browser.versions.ios) {
    // 是否在IOS浏览器打开
  }
  if (browser.versions.android) {
    // 是否在安卓浏览器打开
  }
} else {
  // 否则就是PC浏览器打开
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data () {
    return {
      showTitle: showTitle
    }
  },
  components: {App}
})
