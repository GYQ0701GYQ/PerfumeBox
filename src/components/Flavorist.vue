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
    <h1 class="heading">排行榜top200测试页面</h1>
    <div class="ranking">
      <el-card v-for="topinf in toplist" class="topcard" :key="topinf.index">
        <img :src="topinf.img" class="image">
        <div style="padding: 14px;">
          <span>{{'Top'+topinf.id}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ topinf.name+'---'+topinf.detail }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Flavorist',
    data () {
      return {
        isLogin:false,
        currentDate: new Date(),
        toplist:[
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          },
          {
            id:'1',
            name:'爱马仕大地',
            img:'https://img.xssdcdn.com/perfume/449262.jpg',
            detail:'这里是香水描述信息的详细数据'
          }
        ]
      }
    },
    methods: {
      goto_Login () {
        this.$router.push({path: '/LoginRegister'})
      },
      goto_Home () {
        this.$router.push({path: '/Home'})
      }
    }
  }
</script>

<style lang="scss" scoped>
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

  .ranking{
    margin-left: 70px;
  }
  .topcard{
    width: 280px;
    height: 450px;
    float: left;
    margin: 2.2% 2.2% 2.2% 2.2%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    padding: 5px 5px 5px 5px;
  }

  .button {
    margin-top: 10px;
    padding: 10px;
    float: right;
  }

  .image {
    /*width: 100%;*/
    width: 200px;
    height: 300px;
    margin: 0px auto;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
