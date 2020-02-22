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
          <table class="sameline" v-show="isLogin">用户中心</table>
        </div>
      </div>
      <div id="searchgroup" >
        <input type="text" id="search" name="search" placeholder="请输入关键字">
        <div id="searchbtn">搜索</div>
      </div>
    </div>
    <div id="navigation">
      <ul :class="isFixed?'navigationFixed':'navigationUnFixed'">
        <li class="navigation_li" @click="goto_Home">首 页</li>
        <li class="navigation_li" @click="goto_RankingList">排 行</li>
        <li class="navigation_li" @click="goto_Fragrance">香 调</li>
<!--        <li class="navigation_li" @click="goto_Smell">气 味</li>-->
        <li class="navigation_li" @click="goto_Brand">品 牌</li>
<!--        <li class="navigation_li" @click="goto_Flavorist">调 香 师</li>-->
      </ul>
    </div>
    <div class="container">
      <a v-show="i===index" v-for="(item,i) in container_img" :key="item.id" :href="item.url">
        <img :src="item.img" alt="">
      </a>
      <ul class="indexes">
        <li v-for="(item,i) in container_img" :key="item.id" :class="{active:i===index}" @mouseover="mouseover_li(i)"></li>
      </ul>
    </div>
    <div class="article_index">
      <template v-for="img_info in article_imgs">
        <ul :key="img_info.id" class="article_ul">
          <li v-for="one_img_info in img_info" :key="one_img_info.id">
            <a :href="one_img_info.url" class="article_img">
              <img :src="one_img_info.img" alt="" width="400px">
            </a>
            <div class="article_title"><a :href="one_img_info.url" class="article_title">{{one_img_info.title}}</a></div>
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
    <el-button @click="goto_Three" type="primary">3D效果测试</el-button>
<!--    <iframe src="static/vue基础.html" frameborder="0" style="width: 100%;height: calc(100vh - 273px)"></iframe>-->
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
      // list: [],
      isFixed: false,
      index: 0,
      isLogin: false,
      container_img: [
        {
          url: 'https://www.nosetime.com/wenzhang/230.html',
          img: 'https://img.xssdcdn.com/static/index/2.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/355.html',
          img: 'https://img.xssdcdn.com/static/index/3.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/240.html',
          img: 'https://img.xssdcdn.com/static/index/4.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/283.html',
          img: 'https://img.xssdcdn.com/static/index/5.jpg'
        },
        {
          url: 'https://www.nosetime.com/wenzhang/273.html',
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
            img: 'https://img.xssdcdn.com/article/358/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/358.html',
            title: '一杯凉白开，给你温暖的家'
          }
        ],
        [
          {
            img: 'https://img.xssdcdn.com/article/334/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/334.html',
            title: '与调香师聊天: 以香水为工作是什么体验？'
          },
          {
            img: 'https://img.xssdcdn.com/article/333/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/333.html',
            title: '我们如何安全安心的穿越回60年代？'
          },
          {
            img: 'https://img.xssdcdn.com/article/322/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/322.html',
            title: '趁这些香水还没火，我先悄悄推荐给你'
          }
        ],
        [
          {
            img: 'https://img.xssdcdn.com/article/321/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/321.html',
            title: '香水圈里吵来吵去的“化工感”究竟是什么'
          },
          {
            img: 'https://img.xssdcdn.com/article/319/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/319.html',
            title: '为你奏一曲充满魔性香味交响乐'
          },
          {
            img: 'https://img.xssdcdn.com/article/330/0.jpg!l',
            url: 'https://www.nosetime.com/wenzhang/330.html',
            title: '「日光香」：用一瓶香水把阳光穿在身上'
          }
        ]
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
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setInterval(() => {
      ++this.index
      if (this.index > this.container_img.length - 1) this.index = 0
    }, 5000)
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
      this.setInterval()
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
      this.$router.push({path: '/RankingList'})
    },
    goto_Fragrance () {
      this.$router.push({path: '/Fragrance'})
    },
    goto_Smell () {
      this.$router.push({path: '/Smell'})
    },
    goto_Brand () {
      this.$router.push({path: '/Brand'})
    },
    goto_Flavorist () {
      this.$router.push({path: '/Flavorist'})
    },
    goto_Three () {
      this.$router.push({path: '/Three'})
    }
  }
}
</script>

<style scoped>
  @import "PerfumeBox-Home.css";
</style>
