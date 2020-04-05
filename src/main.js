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
import NewMemberGuide from './components/NewMemberGuide.vue'
import LoginRegister from './components/Login.vue'
import RankingList from './components/RankingList.vue'
import Fragrance from './components/Fragrance.vue'
import Smell from './components/Smell.vue'
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
        title: 'PerfumeBox香水盒子-首页'
      }
    },
    {
      path: '/NewMemberGuide',
      component: NewMemberGuide,
      meta: {
        title: 'PerfumeBox香水盒子-新手入门'
      }
    },
    {
      path: '/LoginRegister',
      component: LoginRegister,
      meta: {
        title: 'PerfumeBox香水盒子-登录&注册'
      }
    },
    {
      path: '/RankingList',
      component: RankingList,
      meta: {
        title: 'PerfumeBox香水盒子-排行榜'
      }
    },
    {
      path: '/Fragrance',
      component: Fragrance,
      meta: {
        title: 'PerfumeBox香水盒子-香调'
      }
    },
    {
      path: '/Smell',
      component: Smell,
      meta: {
        title: 'PerfumeBox香水盒子-气味'
      }
    },
    {
      path: '/Brand',
      component: Brand,
      meta: {
        title: 'PerfumeBox香水盒子-品牌'
      }
    },
    {
      path: '/Top100/:type',
      name:'Top100',
      component: Top100,
      meta: {
        title: 'PerfumeBox香水盒子-排行榜Top100'
      }
    },
    {
      path: '/Three',
      component: Three,
      meta: {
        title: 'PerfumeBox香水盒子-3D盒子效果测试'
      }
    },
    {
      path: '/Collect',
      component: Collect,
      meta: {
        title: 'PerfumeBox用户中心-收藏夹'
      }
    },
    {
      path: '/PerfumeDetail/:perfume_name',
      name:'PerfumeDetail',
      component: PerfumeDetail,
      meta: {
        title: 'PerfumeBox香水盒子-商品详情'
      }
    },
    {
      path: '/SearchDetail/:search_type/:search_name',
      name:'SearchDetail',
      component: SearchDetail,
      meta: {
        title: 'PerfumeBox香水盒子-搜索结果'
      }
    }
  ]
})
// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
