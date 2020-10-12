// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

import JQuery from 'jquery'

window.$ = JQuery
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import  '@/styles/style.css'
import  '@/styles/night-mode.css'
import  '@/styles/framework.css'
import  '@/styles/bootstrap.css'
import  '@/styles/icons.css'

import 	'@/js/framework.js'
import 	'@/js/jquery-3.3.1.min.js'
import 	'@/js/simplebar.js'
import 	'@/js/main.js'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

// Import Swal
import VueSwal from 'vue-swal'

import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(VueSwal)
Vue.use(VModal)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Set localStorage API URL
localStorage.setItem('API_URL', 'https://api.lms-sman5bdg.online/');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})