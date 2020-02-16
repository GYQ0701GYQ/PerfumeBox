<template>
  <div>
    <h1>这里是3D测试页面</h1>
    <!--  <iframe src="../../static/ThreeDimensionBox/index.html" frameborder="0" style="width: 80%;height: 650px"></iframe>-->
    <el-button @click="getData()">点击获取iframe数据</el-button>
    <el-button @click="setData('我是vue数据')">向iframe中发送数据</el-button>
    <i>{{demodata}}</i>
    <iframe id="mainIframe" ref="mainIframe" name="mainIframe" src="../../static/ThreeDimensionBox/index.html" frameborder="0" style="width: 100%" scrolling="auto" @load="loaded" />
  </div>
</template>

<script>
  export default {
    name: 'ThreeDimensionBox',
    props: {
    },
    data(){
      return{
        demodata:'here is demodata'//无效数据，会被刷新
      }
    },
    mounted() {
      const mapFrame = this.$refs['mainIframe']
      if (mapFrame.attachEvent) { // 兼容浏览器判断
        mapFrame.attachEvent('onload', function() {
          const iframeWin = mapFrame.contentWindow
          iframeWin.postMessage({
            method: 'getBaseInfo',
            data:'初始化值1'
          }, '*')
          // data传递的参数   *写成子页面的域名或者是ip
        })
      } else {
        mapFrame.onload = function() {
          const iframeWin = mapFrame.contentWindow
          iframeWin.postMessage({
            method: 'getBaseInfo',
            data:'初始化值2'
          }, '*')
        }
      }
      // 得到子页面传来的值
      var that=this
      window.addEventListener('message',function(e){
        console.log("VUE监听到的子页面值", e.data.data)
        that.demodata=e.data.data
        console.log('改后的demodata',that.demodata)
      },false);
    },
    methods: {
      loaded() {
        const vm = this.$refs.mainIframe.contentWindow.vm
        console.log('VUE页面加载',vm)
        // console.log(this.$refs.mainIframe.contentWindow)
        // vm.func1()
      },
      getData() {
        const obj1 = window.frames['mainIframe']// 获得对应iframe的window对象
        // alert(obj1.vm.aaaaa)
        console.log('VUE获取iframe数据',obj1.vm.aaaaa)
      },
      setData(data) {
        const obj1 = window.frames['mainIframe']// 获得对应iframe的window对象
        // console.log(data)
        obj1.vm.wpsData = data
        obj1.vm.aaaaa='99999'
        console.log('VUE向iframe发送数据',obj1.vm.wpsData)
      }
    }
  }
</script>

<style scoped>

</style>
