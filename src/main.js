// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
/* eslint-disable no-new */
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '主页面',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
