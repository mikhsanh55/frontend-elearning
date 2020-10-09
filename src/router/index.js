import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/views/auth/Login'
import Header from  '@/components/Header'
import Beranda from '@/components/Beranda'
import Footer from '@/components/Footer'
import Kelas from '@/views/kelas/index'
import Jadwal from '@/views/jadwal/index'

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
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/views/auth/lupa-password')
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
   },
   {
      path: '/jadwal/siswa',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '',
          name: 'Jadwal',
          component: Jadwal
        }
      ]
   },
   { // MATERI ROUTES
      path: '/materi/:kode_mapel',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '',
          name: 'Materi',
          component: () => import('@/views/materi/index')
        },
        {
          path: 'detail/:id',
          name: 'DetailMateri',
          component: () => import('@/views/materi/detail')
        },
        {
          path: 'diskusi/:id_kelas',
          name: 'DiskusiMateri',
          component: () => import('@/views/materi/diskusi')
        }
      ]
   },
   { // TUGAS ROUTES
      path: '/tugas',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '',
          name: 'Tugas',
          component: () => import('@/views/tugas/index')
        },
        {
          path: 'detail/:id',
          name: 'DetailTugas',
          component: () => import('@/views/tugas/detail')
        }
      ]
   }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/home']
  const loggedIn = localStorage.getItem('user')
  const authRequired = !publicPages.includes(to.path)
  if (authRequired && !loggedIn) {
    next('/login')
  }

  next()
})

export default router