<template>
  <div class="top5">
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
        <table class="sameline" v-show="isLogin">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">用户中心</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-goods" command="a">购物车</el-dropdown-item>
              <el-dropdown-item icon="el-icon-star-off" command="b">收藏夹</el-dropdown-item>
              <el-dropdown-item icon="el-icon-user-solid" command="c" devided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </table>
      </div>
    </div>
    <iframe ref="mainIframe" src="../../static/card-flip/demo.html" frameborder="0" scrolling="no" width="100%" height="510px"/>
    <div class="link">
      <router-link  :to="{path:'/Flavorist'}"><el-link class="top200href" > > 点击查看商业香Top200</el-link></router-link>
      <div class="clear"></div>
    </div>
    <iframe ref="mainIframe" src="../../static/card-flip/demo.2.html" frameborder="0" scrolling="no" width="100%" height="510px"/>
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
      isLogin:true,
      linkdata:''
    }
  },
  watch:{
    linkdata: {
      handler: function (linkdata) {
        switch (linkdata) {
          case '大地':
            this.goto_Detail();
            break;
          default:
            console.log(linkdata);
            break;
        }
      },
      immediate: true
    }
  },
  mounted () {
    // 得到子页面传来的值，在子页面向父页面发送数据时会监听到
    var that=this
    window.addEventListener('message',function(e){
      console.log("VUE监听到的子页面值", e.data.data)
      that.linkdata=e.data.data
      console.log('改后的demodata',that.linkdata)
    },false);
  },
  methods:{
    goto_Login () {
      this.$router.push({path: '/LoginRegister'})
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    },
    goto_Detail(){
      this.$router.push({path:'/PerfumeDetail'})
    },
    test(){
      // this.$message('Test消息')
      this.isLogin=false
      console.log('触发函数')
    },
    logout () {
      var vm=this
      this.$confirm('是否确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.isLogin=false;
        console.log('test')
        this.$message({
          type: 'success',
          message: '成功退出登录!'
        });
      }).catch(() => {
        // debugger
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
    },
    handleCommand(command) {
      switch (command) {
        case 'a':
          this.$router.push({path: '/Collect'});
          break;
        case 'b':
          this.$router.push({path: '/Collect'});
          break;
        case 'c':
          this.logout();
          break;
        default:
          break;
      }
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
