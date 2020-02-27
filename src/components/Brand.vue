<template>
  <div>
    <div id="banner_line1">
      <div id="xinshougroup">
        <img id="xinshou_logo" class="sameline" src="../assets/home-8a8a8a.png" alt="返回主页" height="25px" @click="goto_Home">
        <table class="sameline" @click="goto_Home">返回主页</table>
      </div>
      <img id="perfumebox_logo" src="../assets/perfumebox-logo-18.png" alt="logo图片" width="135px" >
      <div id="logingroup">
        <img v-show="!isLogin" id="yonghu_logo" class="sameline" src="../assets/yonghu.png" alt="未登录" height="27px" @click="goto_Login">
        <img v-show="isLogin" class="sameline" src="../assets/logined-8a8a8a.png" alt="已登录" height="27px">
        <table class="sameline" v-show="!isLogin" @click="goto_Login">登录/注册</table>
        <table class="sameline" v-show="isLogin">用户中心</table>
      </div>
    </div>
    <h1 class="heading">商业香品牌入门</h1>
    <iframe class="fragrance-frame" ref="mainIframe" src="../../static/pic_shade/index.html" frameborder="no" scrolling="auto" width="90%" height="670px" @load="loaded"></iframe>
    <h1 class="heading">沙龙香品牌入门</h1>
    <iframe class="fragrance-frame" ref="mainIframe" src="../../static/pic_shade/index.html" frameborder="no" scrolling="auto" width="90%" height="670px" @load="loaded"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data(){
    return{
      isLogin:false
    }
  },
  methods:{
    goto_Login () {
      this.$router.push({path: '/LoginRegister'})
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    }
  }
}
</script>

<style scoped>
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
    margin-left: 5%;
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
    margin-left: 5%;
    margin-right: 5%;
    border:3px solid #DFF7FD;
  }
</style>
