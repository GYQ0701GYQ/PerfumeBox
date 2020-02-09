// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
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
