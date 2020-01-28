<!--展示模板-->
<template>
  <div id="app">
    <img src="./assets/demo1.jpg" width="1530px">
<!--    <router-view/>-->
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'App',
  components: {
    Hello
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
  margin-top: 20px;
}
</style>
