<template>
  <div class="top5">
    <Banner/>
    <iframe ref="mainIframe1" src="../../static/card-flip/demo.html" frameborder="0" scrolling="no" width="100%" height="510px"/>
    <div class="link">
      <router-link  :to="{name:'Top100', params: {type:'trade'}}"><el-link class="top200href" > > 点击查看商业香Top100</el-link></router-link>
      <div class="clear"></div>
    </div>
    <iframe ref="mainIframe2" src="../../static/card-flip/demo.html" frameborder="0" scrolling="no" width="100%" height="510px"/>
    <div class="link">
      <router-link  :to="{name:'Top100', params: {type:'salon'}}"><el-link class="top200href"> > 点击查看沙龙香Top100</el-link></router-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
export default {
  name: 'RankingList',
  components:{
    Banner
  },
  data(){
    return{
      isLogin:true,
      linkdata:'',
      trade_info:['商业香Top5','什么是商业香水：','香奈儿、迪奥、爱马仕无疑就是我们所熟知的大众品牌了，一般来说都是香水与时装品牌的结合。\n' +
      '    喜欢大众品牌的原因可能跟讨厌它们的原因一样，他们的Logo可以拿来晒朋友圈，他们的香味经常会被闻到，好穿、实用、接受度高是它们的特点。'],
      salon_info:['沙龙香Top5','什么是沙龙香水：','沙龙香水一般都是专业做香水的品牌，而且拥有一定的历史，不注重瓶身设计，很多都用统一的香水瓶。 由于它们不需要或者不屑与大众品牌去拼销量，\n' +
      '    这意味着他们不太会迎合大众消费者的口味，这样在创作方面就摆脱了很多束缚。个性、创意、与众不同是它们的特点。'],
      trade_top5:[
        ['大地','Hermes Terre d\'Hermes','2006','爱马仕','Jean-Claude Ellena','男香','辛辣木质调','background-image: url(https://img.xssdcdn.com/perfume/449262.jpg);',"爱马仕 大地 Hermes Terre d'Hermes"],
        ['灰色香根草','Tom Ford Grey Vetiver','2009','汤姆·福特','Harry Fremont','男香','辛辣木质调','background-image: url(https://img.xssdcdn.com/perfume/414474.jpg);',"汤姆·福特 灰色香根草 Tom Ford Grey Vetiver"],
        ['尼罗河花园','Hermes Un Jardin Sur Le Nil','2005','爱马仕','Jean-Claude Ellena','中性香','花香果香调','background-image: url(https://img.xssdcdn.com/perfume/251428.jpg);',"爱马仕 尼罗河花园 Hermes Un Jardin Sur Le Nil"],
        ['可可小姐','Chanel Coco Mademoiselle','2001','香奈儿','Jacques Polge','女香','花香甘苔调','background-image: url(https://img.xssdcdn.com/perfume/298678.jpg);',"香奈儿 可可小姐 Chanel Coco Mademoiselle"],
        ['大吉岭茶','Bvlgari Pour Homme','1996','宝格丽','Jacques Cavallier','男香','木质花香调','background-image: url(https://img.xssdcdn.com/perfume/102121.jpg);',"宝格丽 大吉岭茶 Bvlgari Pour Homme"]
      ],
      salon_top5:[
        ['一轮玫瑰','Frederic Malle Une Rose','2003','德瑞克·马尔','Edouard Flechier','女香','花香调','background-image: url(https://img.xssdcdn.com/perfume/200376.jpg);',"德瑞克·马尔 一轮玫瑰 Frederic Malle Une Rose"],
        ['史诗女士','Amouage Epic Woman','2009','爱慕','Angeline Leporini, Cecile Zarokian, Daniel Maurel','女香','东方花香调','background-image: url(https://img.xssdcdn.com/perfume/929313.jpg);',"爱慕 史诗女士 Amouage Epic Woman"],
        ['成功(拿破仑之水)','Creed Aventus','2010','信仰','Olivier Creed Sixth Generation, Erwin Creed Seventh Generation','男香','果香甘苔调','background-image: url(https://img.xssdcdn.com/perfume/503110.jpg);',"信仰 成功（拿破仑之水） Creed Aventus"],
        ['罗斯公爵夫人(狐狸)','Penhaligon\'s The Coveted Duchess Rose','2016','潘海利根','Christophe Raynaud','女香','东方花香调','background-image: url(https://img.xssdcdn.com/perfume/873643.jpg);',"潘海利根 罗斯公爵夫人（狐狸） Penhaligon's The Coveted Duchess Rose"],
        ['珍华乌木','Tom Ford Oud Wood','2007','汤姆·福特','Richard Herpin','中性香','木质东方调','background-image: url(https://img.xssdcdn.com/perfume/936598.jpg);',"汤姆·福特 珍华乌木 Tom Ford Oud Wood"]
      ]
    }
  },
  watch:{
    linkdata: {
      handler: function (linkdata) {
        if(linkdata) {
          this.$router.push({name: 'PerfumeDetail', params: {perfume_name: linkdata}})
        }
      },
      immediate: true
    }
  },
  mounted () {
    //传入不同的数据渲染两个iframe页面
    const mapFrame1 = this.$refs['mainIframe1']
    if (mapFrame1.attachEvent) { // 兼容浏览器判断
      var data_list1 = this.trade_info
      var data_list2 = this.trade_top5
      mapFrame1.attachEvent('onload', function() {
        const iframeWin1 = mapFrame1.contentWindow
        iframeWin1.postMessage({
          method: 'getBaseInfo',
          data1:data_list1,
          data2:data_list2
        }, '*')
        // data传递的参数   *写成子页面的域名或者是ip
      })
    } else {
      var data_list1 = this.trade_info
      var data_list2 = this.trade_top5
      mapFrame1.onload = function() {
        const iframeWin1 = mapFrame1.contentWindow
        iframeWin1.postMessage({
          method: 'getBaseInfo',
          data1:data_list1,
          data2:data_list2
        }, '*')
      }
    }
    const mapFrame2 = this.$refs['mainIframe2']
    if (mapFrame2.attachEvent) { // 兼容浏览器判断
      var data_list3 = this.salon_info
      var data_list4 = this.salon_top5
      mapFrame2.attachEvent('onload', function() {
        const iframeWin2 = mapFrame2.contentWindow
        iframeWin2.postMessage({
          method: 'getBaseInfo',
          data1:data_list3,
          data2:data_list4
        }, '*')
        // data传递的参数   *写成子页面的域名或者是ip
      })
    } else {
      var data_list3 = this.salon_info
      var data_list4 = this.salon_top5
      mapFrame2.onload = function() {
        const iframeWin2 = mapFrame2.contentWindow
        iframeWin2.postMessage({
          method: 'getBaseInfo',
          data1:data_list3,
          data2:data_list4
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
    loaded() {
      const vm = this.$refs.mainIframe.contentWindow.vm
      console.log('VUE页面加载',vm)
    },
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
      var vm=this
      this.$confirm('是否确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.isLogin=false;
        this.$message({
          type: 'success',
          message: '成功退出登录!'
        });
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
