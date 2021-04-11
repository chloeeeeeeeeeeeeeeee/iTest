import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home.vue')
const login = () => import('../views/login.vue')
const test = () => import('../views/test.vue')
const marking = () => import('../views/marking.vue')
const play = () => import('../views/play.vue')
const error = () => import('../components/error/error.vue')
const search = () => import('../views/search.vue')
const products = () => import('../views/products.vue')
const partition = () => import('../views/partition.vue')
const person = () => import('../views/person.vue')
const info = () => import('../views/info.vue')
const changeInfo = () => import('../views/changeInfo.vue')
const articles = () => import('../views/articles.vue')
const fishHome = () => import('../views/fishHome.vue')
const fishVideo = () => import('../views/fishVideo.vue')
const fishArticle = () => import('../views/fishArticle.vue')
const fishPhotoWall = () => import('../views/fishPhotoWall.vue')
const fishText = () => ('../views/fishText.vue')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/marking',
      name: 'marking',
      component: marking
    },
    {
      path: '/play',
      name: 'play',
      component: play
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/partition',
      name: 'partition',
      component: partition
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/changeInfo',
      name: '/changeInfo',
      component: changeInfo
    },
    {
      path: '/articles',
      name: '/articles',
      component: articles
    },
    {
      path: '/fishHome',
      name: '/fishHome',
      component: fishHome
    },
    {
      path: '/fishVideo',
      name: '/fishVideo',
      component: fishVideo
    },
    {
      path: '/fishArticle',
      name: '/fishArticle',
      component: fishArticle
    },
    {
      path: '/fishPhotoWall',
      name: '/fishPhotoWall',
      component: fishPhotoWall
    },
    {
      path: '/fishText',
      name: '/fishText',
      component: fishText
    },
    {
      path: '/*',
      name: 'error',
      component: error
    }

  ],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // to:要去的地方；from:来的地方；next:函数，表示放行；
  if (to.path === '/login') { return next() }

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) { return next('/login') }
  next()
})

export default router
