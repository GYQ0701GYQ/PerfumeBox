<template>
  <div id="app" >
    <div id="banner" :style="backgroundDiv">
      <div id="banner_line1">
        <div id="xinshougroup">
         <img id="xinshou_logo" class="sameline" src="./assets/xinshou.png" alt="新手提示" height="30px">
         <table class="sameline">新手入门</table>
        </div>
        <img id="perfumebox_logo" src="./assets/perfumebox-logo-18.png" alt="logo图片" width="160px" >
        <div id="logingroup">
          <img id="yonghu_logo" class="sameline" src="./assets/yonghu.png" alt="个人中心" height="30px">
          <table class="sameline">用户中心</table>
        </div>
      </div>
      <div id="searchgroup" >
        <input type="text" id="search" name="search" placeholder="请输入关键字">
        <div id="searchbtn">搜索</div>
      </div>
    </div>
    <div id="navigation">
      <ul :class="isFixed?'navigationFixed':'navigationUnFixed'">
        <li class="navigation_li">首 页</li>
        <li class="navigation_li">排 行</li>
        <li class="navigation_li">香 调</li>
        <li class="navigation_li">气 味</li>
        <li class="navigation_li">调 香 师</li>
      </ul>
    </div>
    <div class="container">
<!--      <img src="https://img.xssdcdn.com/static/index/2.jpg" alt="">-->
      <a v-show="i===index" v-for="(item,i) in arr" :key="item.id" :href="item.url">
        <img :src="item.img" alt="">
      </a>
      <ul class="indexes">
        <li v-for="(item,i) in arr" :key="item.id" :class="{active:i===index}"></li>
      </ul>
    </div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <!--    <router-view/>-->
    <Hello>
    </Hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'App',
  components: {
    Hello
  },
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('./assets/banner3.png') + ')'
      },
      isFixed: false,
      index: 0,
      arr: [
        {
          url: 'https://www.nosetime.com/wenzhang/230.html',
          img: 'https://img.xssdcdn.com/static/index/2.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/355.html',
          img: 'https://img.xssdcdn.com/static/index/3.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/240.html',
          img: 'https://img.xssdcdn.com/static/index/4.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/283.html',
          img: 'https://img.xssdcdn.com/static/index/5.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/273.html',
          img: 'https://img.xssdcdn.com/static/index/6.jpg'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setInterval(() => {
      ++this.index
      if (this.index > this.arr.length - 1) this.index = 0
    }, 4000)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#navigation').offsetTop
      if (scrollTop >= offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style>
  @import "PerfumeBox-Home.css";
</style>
