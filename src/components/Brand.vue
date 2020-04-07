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
    <h1 class="heading">品牌入门</h1>
    <iframe class="fragrance-frame" id="mainIframe" ref="mainIframe" src="../../static/pic_shade/index.html" frameborder="no" scrolling="auto" width="90%" height="670px"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data(){
    return{
      isLogin:false,
      letter:'A',
      letter_brands:[]
    }
  },
  watch:{
    letter: {
      handler: function (letter) {
        if(letter) {
          this.search_one_letter(letter)
        }
      },
      immediate: true
    }
  },
  mounted () {
    const mapFrame = this.$refs['mainIframe']
    if (mapFrame.attachEvent) { // 兼容浏览器判断
      var data_list = this.letter_brands
      mapFrame.attachEvent('onload', function() {
        const iframeWin = mapFrame.contentWindow
        iframeWin.postMessage({
          method: 'getBaseInfo',
          data:data_list
        }, '*')
        // data传递的参数   *写成子页面的域名或者是ip
      })
    } else {
      var data_list = this.letter_brands
      mapFrame.onload = function() {
        const iframeWin = mapFrame.contentWindow
        iframeWin.postMessage({
          method: 'getBaseInfo',
          data:data_list,
        }, '*')
      }
    }
    // 得到子页面传来的值，在子页面向父页面发送数据时会监听到
    window.addEventListener('message',this.handle_listen,false);
  },
  beforeDestroy () {
    window.removeEventListener('message',this.handle_listen,false)
  },
  methods:{
    search_one_letter(search_letter){
      var that = this
      this.$api.get('/url/api/search_one_letter', {
        search_letter: search_letter
      }, response => {
        if (response.status >= 200 && response.status < 300) {
          this.letter_brands = response.data['list']
          that.send_to_iframe() //搜索结束后将结果传递给iframe
          console.log('调用搜索成功');//请求成功，response为成功信息参数
        } else {
          console.log('失败', response);//请求失败，response为失败信息
          this.$message.error('未查询到相关内容')
        }
      });
    },
    handle_listen (e){
      if(e.data.data && e.data.method==='getBaseInfo') {
        this.letter = e.data.data
      }
      if(e.data.method==='getBrandInfo'){
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('b', { style: 'padding-left: 10px;padding-right: 12px;' }, e.data.title),
            h('p', { style: 'color: teal;font-size:15px;padding-left: 12px;padding-right: 12px;' }, e.data.content)
          ]),
          showClose: true,
          duration:3000
        });
      }
      if(e.data.method==='getBrandName'){
        this.$router.push({name: 'SearchDetail',params:{search_type:'品牌',search_name:e.data.brand_name}})
      }
    },
    goto_Login () {
      this.$router.push({path: '/LoginRegister'})
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    },
    send_to_iframe() {
      const mapFrame = this.$refs['mainIframe']
        var data_list = this.letter_brands
      if(this.letter === 'A') {  //首次加载和其他字母的筛选要区分开，否则会影响数据传递
        mapFrame.onload = function () {
          const iframeWin = mapFrame.contentWindow
          iframeWin.postMessage({
            method: 'getBaseInfo',
            data: data_list,
          }, '*')
        }
      }
      else{
        const iframeWin = mapFrame.contentWindow
        iframeWin.postMessage({
          method: 'getBaseInfo',
          data: data_list,
        }, '*')
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
