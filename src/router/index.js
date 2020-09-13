import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Header from  '@/components/Header'
import Beranda from '@/components/Beranda'
import Footer from '@/components/Footer'
import Kelas from '@/views/kelas/index'

Vue.use(Router)
let router = new Router({
  mode : 'history',
  routes: [
    {
      path: '/kelas',
      name: 'Kelas',
      component: Kelas
    },
  	{
  		path: '/home',
  		name: 'Home',
  		component :Home
  	},

   {
      path : '/login',
      name : 'Login',
      component :Login
   },

   {
      path : '/header',
      name : '/Header',
      component :Header
   },

   {
      path : '/beranda',
      name : '/Beranda',
      component :Beranda
   },
   {
      path : '/footer',
      name : '/Footer',
      component :Footer
   },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

export default router