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

axios.defaults.baseURL = ' http://192.168.0.203:8000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
