<template>
  <div>
<!--    <div id="banner_line1">-->
<!--      <div id="xinshougroup">-->
<!--        <img id="xinshou_logo" class="sameline" src="../assets/home-8a8a8a.png" alt="返回主页" height="25px" @click="goto_Home">-->
<!--        <table class="sameline" @click="goto_Home">返回主页</table>-->
<!--      </div>-->
<!--      <img id="perfumebox_logo" src="../assets/perfumebox-logo-18.png" alt="logo图片" width="135px" >-->
<!--      <div id="logingroup">-->
<!--        <img v-show="!isLogin" id="yonghu_logo" class="sameline" src="../assets/yonghu.png" alt="未登录" height="27px" @click="goto_Login">-->
<!--        <img v-show="isLogin" class="sameline" src="../assets/logined-8a8a8a.png" alt="已登录" height="27px">-->
<!--        <table class="sameline" v-show="!isLogin" @click="goto_Login">登录/注册</table>-->
<!--        <table class="sameline" v-show="isLogin">用户中心</table>-->
<!--      </div>-->
<!--    </div>-->
    <Banner/>
    <h1 class="heading">香调入门</h1>
    <iframe class="fragrance-frame" ref="mainIframe" src="../../static/fullpage-transitions-3/index.html" frameborder="no" scrolling="no" width="80%" height="550px"/>
<!--    <h1 class="heading">代表作品</h1>-->
<!--    <div class="box">-->
<!--      编写代表作品展示-->
<!--    </div>-->
  </div>
</template>

<script>
import Banner from './Banner'
export default {
  name: 'Fragrance',
  components:{
    Banner
  },
  data(){
    return{
      isLogin:false,
      linkdata:'',
    }
  },
  watch:{
    linkdata: {
      handler: function (linkdata) {
        if(linkdata) {
          this.$router.push({name: 'SearchDetail',params:{search_type:'香调',search_name:linkdata}})
        }
      },
      immediate: true
    }
  },
  mounted () {
    // 得到子页面传来的值，在子页面向父页面发送数据时会监听到
    window.addEventListener('message',this.handle_listen,false);
  },
  beforeDestroy () {
    window.removeEventListener('message',this.handle_listen,false)
  },
  methods:{
    goto_Login () {
      this.$router.push({path: '/LoginRegister'})
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    },
    handle_listen (e){
      this.linkdata=e.data.data
      console.log('子页面传出的数据',this.linkdata)
    }
  }
}
</script>

<style scoped>
html {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    color: #333;
    font-family: "Nunito Sans", sans-serif;
}
#banner_line1{
    height: 120px;
    background: center;
    background-size: 100% 100%;
    text-align: center;
    border-bottom: 1.5px solid #DFF7FD;
    background: linear-gradient(180deg, #DFF7FD, white);
  }
#xinshougroup{
    padding:45px 15px;
    width: 120px;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    float: left;
    color: #707070;
    cursor: pointer;
  }
.sameline{
    display: inline;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 200;
    color: dimgrey;
  }
#logingroup{
    padding:45px 15px;
    width: 120px;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    float: right;
    color: #707070;
    cursor: pointer;
  }
#perfumebox_logo{
    padding:0px ;
    display: inline;
  }
.heading {
  width: 100%;
  margin-left: 10%;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: .1ch;
  line-height: 1;
  padding-bottom: .5em;
  margin-bottom: 0;
  margin-top: 3%;
  position: relative;
}
.heading:after {
  display: block;
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #C4F6F6, #1a9be6);
  bottom: 0;
}
.fragrance-frame{
  margin-top: 1%;
  margin-left: 10%;
  margin-right: 10%;
  border:3px solid #DFF7FD;
}
</style>
