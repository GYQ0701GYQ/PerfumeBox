// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// 引入插件
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'
import VueResource from 'vue-resource'
import Api from'./api/index.js'
// 引入工程文件
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import NewMemberGuide from './components/NewMemberGuide.vue'
import LoginRegister from './components/Login.vue'
import RankingList from './components/RankingList.vue'
import Fragrance from './components/Fragrance.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Brand from './components/Brand.vue'
import Top100 from './components/Top100.vue'
import Three from './components/ThreeDimensionBox.vue'
import Collect from './components/Collect.vue'
import PerfumeDetail from './components/PerfumeDetail.vue'
import SearchDetail from './components/SearchDetail.vue'
Vue.config.productionTip = false
// 使用插件
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.use(VueResource)
Vue.prototype.$api = Api
/* eslint-disable no-new */
var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        title: 'PerfumeBox香水盒子-首页',
        isLogin: false
      }
    },
    {
      path: '/Article/:article_num/:article_title',
      name:'Article',
      component: Article,
      meta: {
        title: 'PerfumeBox香水盒子-文章',
        isLogin: false
      }
    },
    {
      path: '/NewMemberGuide',
      component: NewMemberGuide,
      meta: {
        title: 'PerfumeBox香水盒子-新手入门',
        isLogin: false
      }
    },
    {
      path: '/LoginRegister',
      component: LoginRegister,
      meta: {
        title: 'PerfumeBox香水盒子-登录&注册',
        isLogin: false
      }
    },
    {
      path: '/RankingList',
      component: RankingList,
      meta: {
        title: 'PerfumeBox香水盒子-排行榜',
        isLogin: true
      }
    },
    {
      path: '/Fragrance',
      component: Fragrance,
      meta: {
        title: 'PerfumeBox香水盒子-香调',
        isLogin: true
      }
    },
    {
      path: '/Brand',
      component: Brand,
      meta: {
        title: 'PerfumeBox香水盒子-品牌',
        isLogin: true
      }
    },
    {
      path: '/Top100/:type',
      name:'Top100',
      component: Top100,
      meta: {
        title: 'PerfumeBox香水盒子-排行榜Top100',
        isLogin: true
      }
    },
    {
      path: '/Three',
      component: Three,
      meta: {
        title: 'PerfumeBox香水盒子-3D盒子效果测试',
        isLogin: false
      }
    },
    {
      path: '/ShoppingCart',
      component: ShoppingCart,
      meta: {
        title: 'PerfumeBox香水盒子-购物车',
        isLogin: true
      }
    },
    {
      path: '/Collect',
      component: Collect,
      meta: {
        title: 'PerfumeBox用户中心-收藏夹',
        isLogin: true
      }
    },
    {
      path: '/PerfumeDetail/:perfume_name',
      name:'PerfumeDetail',
      component: PerfumeDetail,
      meta: {
        title: 'PerfumeBox香水盒子-商品详情',
        isLogin: true
      }
    },
    {
      path: '/SearchDetail/:search_type/:search_name',
      name:'SearchDetail',
      component: SearchDetail,
      meta: {
        title: 'PerfumeBox香水盒子-搜索结果',
        isLogin: true
      }
    }
  ]
})
// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
//路由守卫
router.beforeEach((to, from, next)=>{
  console.log('当前用户',window.sessionStorage.user)
  if(window.sessionStorage.data === '1'){
    if(to.path === '/'){
      //登录状态下 访问login.vue页面 会跳到index.vue
      next({path: '/Home'});
    }else{
      next();
    }
  }else{
    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      alert('检测到您未登录，请先登录')
      next({
        path: '/LoginRegister',
      })
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
