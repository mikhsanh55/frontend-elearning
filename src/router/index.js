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
      path: '/',
      name: 'Dashboard',
      component: Kelas
    },
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loggedIn = localStorage.getItem('user');
  if (to.path != '/login' && !loggedIn) {
    return next('/login');
  }

  next();
})

export default router