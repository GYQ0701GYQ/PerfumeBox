<template>
  <div class="top5">
    <div id="banner_line1">
      <div id="xinshougroup">
        <img id="xinshou_logo" class="sameline" src="../assets/home-8a8a8a.png" alt="返回主页" height="25px" @click="goto_Home">
        <table class="sameline" @click="goto_Home">返回主页</table>
      </div>
      <img id="perfumebox_logo" src="../assets/perfumebox-logo-18.png" alt="logo图片" width="135px" >
      <div id="logingroup">
        <img id="yonghu_logo" class="sameline" src="../assets/yonghu.png" alt="个人中心" height="27px" @click="goto_Login">
        <table class="sameline" v-show="!isLogin" @click="goto_Login">登录/注册</table>
        <table class="sameline" v-show="isLogin">用户中心</table>
      </div>
    </div>
    <iframe ref="mainIframe" src="../../static/card-flip/demo.html" frameborder="0" scrolling="no" width="100%" height="510px" @load="loaded" />
    <div class="link">
      <el-link class="top200href"> > 点击查看商业香Top200</el-link>
      <div class="clear"></div>
    </div>
    <iframe ref="mainIframe" src="../../static/card-flip/demo.2.html" frameborder="0" scrolling="no" width="100%" height="510px" @load="loaded" />
    <div class="link">
      <el-link class="top200href"> > 点击查看沙龙香Top200</el-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankingList',
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
.top5{
  background-color: #F0FDFD;
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
.top200href{
  font-family: "Nunito Sans", sans-serif;
  margin-right: 85px;
  float: right;
}
.clear{clear:both;height:30px;}
</style>
