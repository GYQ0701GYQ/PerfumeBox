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
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        isLogin:false,
      }
    },
    beforeCreate () {
      if(window.sessionStorage.data === '1'){
        this.isLogin = true
      }
    },
    mounted () {
      if(window.sessionStorage.data === '1'){
        this.isLogin = true
      }
    },
    methods:{
      handle_listen (e){
        this.linkdata=e.data.data
        console.log('子页面传出的数据',this.linkdata)
      },
      goto_Login () {
        this.$router.push({path: '/LoginRegister'})
      },
      goto_Home () {
        this.$router.push({path: '/Home'})
      },
      logout () {
        this.$confirm('是否确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.isLogin=false;
          window.sessionStorage.removeItem('data');
          window.sessionStorage.removeItem('user');
          this.$message({
            type: 'success',
            message: '退出成功，已为您跳转至首页'
          });
          this.$router.push({path: '/Home'});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      handleCommand(command) {
        switch (command) {
          case 'a':
            this.$router.push({path: '/ShoppingCart'}, onComplete => { }, onAbort => { });
            break;
          case 'b':
            this.$router.push({path: '/Collect'}, onComplete => { }, onAbort => { });
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
</style>
