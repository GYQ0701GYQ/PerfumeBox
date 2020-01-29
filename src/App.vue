<!--展示模板-->
<template>
  <div id="app" >
    <div id="top" :style="backgroundDiv">
    <img id="xiangshui_logo" src="./assets/xiangshui_icon.png" alt="logo图片" width="80px" >
    <div id="searchbox" >
      <input type="text" name="search" placeholder="请输入关键字">
      <div id="search">搜索</div>
    </div>
    </div>
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
        backgroundImage: 'url(' + require('./assets/banner2.jpg') + ')'
      }
    }
  }
}
</script>
<!--样式代码-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#top{
  height: 300px;
  /*width: 1920px;*/
  background: center;
  background-size: 100% 100%;
}
#xiangshui_logo{
  padding:15px ;
}
#searchbox{
  width: 380px;
  margin:auto;
  font-family: 'Microsoft YaHei';
  font-size: 14px;
  padding:40px ;
}
input{
  width: 260px;
  border: 1px solid #e2e2e2;
  height: 30px;
  float: left;
  background-image: url(./assets/search.png);
  background-repeat: no-repeat;
  background-size: 25px;
  background-position:5px center;
  padding:0 0 0 40px;
}
#search{
  width: 78px;
  height: 32px;
  float: right;
  background: darkgray;
  color: white;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  font-family: 'Microsoft YaHei';
}
</style>
