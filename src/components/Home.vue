<template>
  <div id="app" >
    <div id="banner" :style="backgroundDiv">
      <div id="banner_line1">
        <div id="xinshougroup">
          <img id="xinshou_logo" class="sameline" src="../assets/xinshou.png" alt="新手提示" height="30px" @click="goto_NewMemberGuide">
          <table class="sameline" @click="goto_NewMemberGuide">新手入门</table>
        </div>
        <img id="perfumebox_logo" src="../assets/perfumebox-logo-18.png" alt="logo图片" width="160px" >
        <div id="logingroup">
          <img v-show="!isLogin" id="yonghu_logo" class="sameline" src="../assets/yonghu.png" alt="个人中心" height="30px" @click="goto_Login">
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
      <div id="searchgroup" >
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width: 450px">
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 80px">
              <el-option label="香水" value="香水"/>
              <el-option label="品牌" value="品牌"/>
              <el-option label="香调" value="香调"/>
              <el-option label="属性" value="属性"/>
              <el-option label="标签" value="标签"/>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search" style="width: 80px"/>
          </el-input>
        </div>
      </div>
    </div>
    <div id="navigation">
      <ul :class="isFixed?'navigationFixed':'navigationUnFixed'">
        <li class="navigation_li" @click="goto_Home">首 页</li>
        <li class="navigation_li" @click="goto_RankingList">排 行</li>
        <li class="navigation_li" @click="goto_Fragrance">香 调</li>
        <li class="navigation_li" @click="goto_Brand">品 牌</li>
      </ul>
    </div>
    <div class="container">
      <router-link  :to="{name:'Article', params: {article_num:index,article_title:item.title}}" v-show="i===index" v-for="(item,i) in container_img" :key="item.id" :href="item.url">
        <img :src="item.img" alt="">
      </router-link>
      <ul class="indexes">
        <li v-for="(item,i) in container_img" :key="item.id" :class="{active:i===index}" @mouseover="mouseover_li(i)"></li>
      </ul>
    </div>
    <div class="article_index">
      <template v-for="(img_info,index1) in article_imgs">
        <ul :key="img_info.id" class="article_ul">
          <li v-for="(one_img_info,index2) in img_info" :key="one_img_info.id">
            <router-link  :to="{name:'Article', params: {article_num:5+index1*3+index2,article_title:one_img_info.title}}" class="article_img">
              <img :src="one_img_info.img" alt="" width="400px">
            </router-link>
            <div class="article_title"><router-link  :to="{name:'Article', params: {article_num:5+index1*3+index2,article_title:one_img_info.title}}" class="article_title">{{one_img_info.title}}</router-link></div>
          </li>
        </ul>
      </template>
    </div>
    <div class="answer_area">
      <div class="area_level1">
        <img src="../assets/question_808080.png" alt="" width="40px">
        <div class="area_title"><b>常 见 问 答</b></div>
      </div>
      <ul class="area_level2">
        <li class="area_level3" v-for="answer_all in question_info" :key="answer_all.id">
          <div class="area_level4">
            <img class="ques_right" src="../assets/right_8a8a8a.png" alt="" width="25px" v-show="!answer_all.is_collapse" @click="answer_all.is_collapse = !answer_all.is_collapse">
            <img class="ans_bottom" src="../assets/bottom_8a8a8a.png" alt="" width="25px" v-show="answer_all.is_collapse" @click="answer_all.is_collapse = !answer_all.is_collapse">
            <div class="question_detail" @click="answer_all.is_collapse = !answer_all.is_collapse">{{answer_all.question}}</div>
          </div>
          <collapse>
            <div class="answer_detail" v-show="answer_all.is_collapse">{{answer_all.answer}}</div>
          </collapse>
        </li>
      </ul>
    </div>
<!--    <el-button @click="goto_Three" type="primary">测试父子页面传递数据</el-button>-->
  </div>
</template>

<script>
import collapse from '../components/collapse'
export default {
  name: 'Home',
  components: {
    collapse
  },
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/banner3.png') + ')'
      },
      list: [],
      isFixed: false,
      index: 0,
      isLogin: false,
      container_img: [
        {
          title: '香水品牌25宗最(上)：谁才是香水界的吉尼斯纪录？',
          img: 'https://img.xssdcdn.com/static/index/2.jpg'
        },
        {
          title: '什么香水让人上瘾: 在吸过1500种香水后，我总结出了这篇指南！',
          img: 'https://img.xssdcdn.com/static/index/3.jpg'
        },
        {
          title: '香水葵花宝典：50个沙龙品牌全解析（上）',
          img: 'https://img.xssdcdn.com/static/index/4.jpg'
        },
        {
          title: '佛系香水终极指南：这份Top10榜单让你随心所欲，怎样都行！',
          img: 'https://img.xssdcdn.com/static/index/5.jpg'
        },
        {
          title: '沙龙香水中的教科书品牌：40款热门阿蒂仙全线评测！',
          img: 'https://img.xssdcdn.com/static/index/6.jpg'
        }
      ],
      article_imgs: [
        [
          {
            img: 'https://img.xssdcdn.com/article/346/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/346.html',
            title: '12支香水环游地球: 雪山、沙漠、海洋...'
          },
          {
            img: 'https://img.xssdcdn.com/article/363/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/363.html',
            title: '穿越时间的爱与香气: 遇见世界上另一个馥郁的自己'
          },
          {
            img: 'https://img.xssdcdn.com/article/335/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/362.html',
            title: '2019年度香水盘点：今年哪些香水能够杀出重围？'
          }
        ],
        [
          {
            img: 'https://img.xssdcdn.com/article/353/2.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/353.html',
            title: '芦丹氏2019全系列点评'
          },
          {
            img: 'https://img.xssdcdn.com/article/359/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/359.html',
            title: '治愈系香水TOP 10: 寻找嗅觉的“深夜食堂”'
          },
          {
            img: 'https://img.xssdcdn.com/article/366/1.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/366.html',
            title: '12款「春日气息」香水，吹散2020年初的阴霾！'
          }
        ],
        // [
        //   {
        //     img: 'https://img.xssdcdn.com/article/334/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/334.html',
        //     title: '与调香师聊天: 以香水为工作是什么体验？'
        //   },
        //   {
        //     img: 'https://img.xssdcdn.com/article/333/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/333.html',
        //     title: '我们如何安全安心的穿越回60年代？'
        //   },
        //   {
        //     img: 'https://img.xssdcdn.com/article/322/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/322.html',
        //     title: '趁这些香水还没火，我先悄悄推荐给你'
        //   }
        // ],
        // [
        //   {
        //     img: 'https://img.xssdcdn.com/article/321/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/321.html',
        //     title: '香水圈里吵来吵去的“化工感”究竟是什么'
        //   },
        //   {
        //     img: 'https://img.xssdcdn.com/article/319/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/319.html',
        //     title: '为你奏一曲充满魔性香味交响乐'
        //   },
        //   {
        //     img: 'https://img.xssdcdn.com/article/330/0.jpg!l',
        //     url: 'https://www.nosetime.com/wenzhang/330.html',
        //     title: '「日光香」：用一瓶香水把阳光穿在身上'
        //   }
        // ]
      ],
      question_info: [
        {
          is_collapse: true,
          question: '怎样才是正确的试香方法？',
          answer: '试香时，可以在试香纸或者手帕上喷洒香水 ，等其干了以后再闻，觉得香味是自己喜欢的，再将香水喷洒在自己手腕或者手臂内侧来体验。不要直接从香水瓶口闻香味，因为香水是由香料、酒精制成的，直接对着瓶口不但闻不到香水的原味，还会因为酒精的刺激呛到鼻子。 '
        },
        {
          is_collapse: true,
          question: '怎样正确的喷洒香水？',
          answer: '香水的使用本身并不是什么玄学，使用者完全可以根据自己的喜好、习惯、场合需要来喷洒。比如涂抹在身体的脉搏点处或者距身体较远距离均匀喷洒。'
        },
        {
          is_collapse: false,
          question: '该如何保存香水？',
          answer: '香水应保存在远离日照或热源的干燥凉爽处。日照是香水贮藏的第一大敌，它能分解掉香水中的香料物质。过热或者过冷也会破坏香水中各种精油的平衡，继而改变香水的味道。不带喷头的沾式香水一旦打开就尽快使用，否则会发生缓慢的挥发。如果有长时间不用的香水，可以将它们放置于保鲜盒中避光保存，这样能大幅度延长它们的寿命。'
        },
        {
          is_collapse: false,
          question: '香水的三调变化是什么意思？',
          answer: '香水刚刚喷出来，从接触到皮肤开始，历经前调、中调和后调的演变，最终只剩下最后一点点香味的变化过程。'
        },
        {
          is_collapse: false,
          question: 'EDT, EDP, Parfum都是什么意思 ？',
          answer: '一款香水的浓度，持久度。或者说有多大比例的酒精或水份加入了纯精油中。Parfum 浓香精是你能买到的浓度最高的香水，有15%-25%的纯精油。Eau Fraiche 清香水（通常纯香精<3%）。Eau de Cologne 古龙水（纯香精占2-5%）。Eau de Toilette 淡香水 (纯香精占4 – 10% ) 。Eau de Parfum 淡香精 (纯香精占8 – 15%) 。Parfum/Extrait 浓香精 (纯香精占15 – 25% )甚至有少数情况你会看到香水标注Parfum de Toilette一词，这代表了这款香水的浓度介于EDP与Parfum之间。'
        },
        {
          is_collapse: false,
          question: '关于香水的留香和扩散问题？',
          answer: '一般来说，由于香水的挥发和扩散主要依靠酒精，根据酒精含量的不同，浓度越高的香水留香时间越久，但扩散会比较差。而有些低浓度的香水扩散会比较好，但留香不持久。'
        },
        {
          is_collapse: false,
          question: '金属制香水瓶应如何保存？',
          answer: '金属盖子的香水瓶身要考虑到氧化问题，尽量避光保存，如果已经氧化，可用口红涂在氧化处，用纸巾擦掉即可。'
        },
        {
          is_collapse: false,
          question: '什么是简装?',
          answer: '「简装香水」 即专柜供顾客试闻用的试用装，也是正品。英文叫Tester,只有简易的环保外盒，个别款的简装没有盖子。瓶身大多印有Tester字样。香水液体本身跟精装香水无差别。因为简装香水价格便宜，自用实惠，但不适合送人。「正装香水」即原装带塑封的香水(不提供礼盒和手提袋)。'
        }
      ],
      input: '',
      select: '香水'
    }
  },
  created () {
    if(window.sessionStorage.data === '1'){
      this.isLogin = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setInterval(() => {
      ++this.index
      if (this.index > this.container_img.length - 1) this.index = 0
    }, 5000)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#navigation').offsetTop
      if (scrollTop >= offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    mouseover_li (i) {
      clearTimeout(this.timer)
      this.index = i
      // this.setInterval()
    },
    search(){
      console.log(this.select + ':' + this.input)
      this.$router.push({name: 'SearchDetail',params:{search_type:this.select,search_name:this.input}}, onComplete => { }, onAbort => { })
    },
    goto_Login () {
      this.$router.push({path: '/LoginRegister'})
    },
    goto_NewMemberGuide () {
      const guide = this.$router.resolve({path: '/NewMemberGuide'})
      window.open(guide.href, '_blank')
    },
    goto_Home () {
      this.$router.push({path: '/Home'})
    },
    goto_RankingList () {
      this.$router.push({path: '/RankingList'}, onComplete => { }, onAbort => { })
    },
    goto_Fragrance () {
      this.$router.push({path: '/Fragrance'}, onComplete => { }, onAbort => { })
    },
    goto_Brand () {
      this.$router.push({path: '/Brand'}, onComplete => { }, onAbort => { })
    },
    goto_Three () {
      this.$router.push({path: '/Three'})
    },
    logout () {
      this.$confirm('是否确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.isLogin=false
        window.sessionStorage.removeItem('data');
        window.sessionStorage.removeItem('user');
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
  @import "PerfumeBox-Home.css";
</style>
