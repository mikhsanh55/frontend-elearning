// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import JQuery from 'jquery'

window.$ = JQuery

import  '@/styles/style.css'
import  '@/styles/night-mode.css'
import  '@/styles/framework.css'
import  '@/styles/bootstrap.css'
import  '@/styles/icons.css'

import 	'@/js/framework.js'
import 	'@/js/jquery-3.3.1.min.js'
import 	'@/js/simplebar.js'
import 	'@/js/main.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})