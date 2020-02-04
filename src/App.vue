<template>
  <div id="app" >
    <div id="banner" :style="backgroundDiv">
      <div id="banner_line1">
        <div id="xinshougroup">
         <img id="xinshou_logo" class="sameline" src="./assets/xinshou.png" alt="新手提示" height="30px">
         <table class="sameline">新手入门</table>
        </div>
        <img id="perfumebox_logo" src="./assets/perfumebox-logo-18.png" alt="logo图片" width="160px" >
        <div id="logingroup">
          <img id="yonghu_logo" class="sameline" src="./assets/yonghu.png" alt="个人中心" height="30px">
          <table class="sameline">用户中心</table>
        </div>
      </div>
      <div id="searchgroup" >
        <input type="text" id="search" name="search" placeholder="请输入关键字">
        <div id="searchbtn">搜索</div>
      </div>
    </div>
    <div id="navigation">
      <ul :class="isFixed?'navigationFixed':'navigationUnFixed'">
        <li class="navigation_li">首 页</li>
        <li class="navigation_li">排 行</li>
        <li class="navigation_li">香 调</li>
        <li class="navigation_li">气 味</li>
        <li class="navigation_li">调 香 师</li>
      </ul>
    </div>
    <div class="container">
      <a v-show="i===index" v-for="(item,i) in arr" :key="item.id" :href="item.url">
        <img :src="item.img" alt="">
      </a>
      <ul class="indexes">
        <li v-for="(item,i) in arr" :key="item.id" :class="{active:i===index}" @mouseover="mouseover_li(i)"></li>
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
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
        backgroundImage: 'url(' + require('./assets/banner3.png') + ')'
      },
      isFixed: false,
      index: 0,
      arr: [
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
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setInterval(() => {
      ++this.index
      if (this.index > this.arr.length - 1) this.index = 0
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
    }
  }
}
</script>

<style>
  @import "PerfumeBox-Home.css";
</style>

<!--<template>-->
<!--  <div class="overall">-->
<!--    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->
<!--    <div-->
<!--      class="card-wrap"-->
<!--      @mousemove="handleMouseMove"-->
<!--      @mouseenter="handleMouseEnter"-->
<!--      @mouseleave="handleMouseLeave"-->
<!--      ref="card"-->
<!--    >-->
<!--      <div class="card" :style="cardStyle">-->
<!--        <img class="card-bg" src="@/assets/demo1.jpg" :style="cardBgTransform" alt />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  computed: {-->
<!--    mousePX () {-->
<!--      return this.mouseX / this.width-->
<!--    },-->
<!--    mousePY () {-->
<!--      return this.mouseY / this.height-->
<!--    },-->
<!--    cardStyle () {-->
<!--      // 外层卡片偏移量-->
<!--      let rX = this.mousePX * 30-->
<!--      let rY = this.mousePY * -30-->
<!--      return {-->
<!--        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`-->
<!--      }-->
<!--    },-->
<!--    cardBgTransform () {-->
<!--      // 内层图片偏移量-->
<!--      let tX = this.mousePX * -40-->
<!--      let tY = this.mousePY * -40-->
<!--      return {-->
<!--        transform: `translateX(${tX}px) translateY(${tY}px)`-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      width: 0,-->
<!--      height: 0,-->
<!--      mouseX: 0,-->
<!--      mouseY: 0,-->
<!--      mouseLeaveDelay: null // 添加一个默认还原的定时器-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    this.width = this.$refs.card.offsetWidth-->
<!--    this.height = this.$refs.card.offsetHeight-->
<!--  },-->
<!--  methods: {-->
<!--    handleMouseMove (e) {-->
<!--      // e.pageX 鼠标在body的x轴坐标位置-->
<!--      // this.$refs.card.offsetLeft 外层卡片容器与body的左侧距离-->
<!--      // e.pageX - this.$refs.card.offsetLeft 鼠标所在容器内的x轴坐标位置-->
<!--      // e.pageX - this.$refs.card.offsetLeft - this.width / 2 鼠标以容器中心点为原点的x轴位置-->
<!--      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2-->
<!--      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2-->
<!--    },-->
<!--    // 当鼠标进入时清除计时器-->
<!--    handleMouseEnter () {-->
<!--      clearTimeout(this.mouseLeaveDelay)-->
<!--    },-->
<!--    // 当鼠标离开时添加定时器-->
<!--    handleMouseLeave () {-->
<!--      this.mouseLeaveDelay = setTimeout(() => {-->
<!--        this.mouseX = 0-->
<!--        this.mouseY = 0-->
<!--      }, 1000)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--  .overall {-->
<!--    perspective: 2000px;-->
<!--  }-->
<!--  .card-wrap {-->
<!--    perspective: 2000px;-->
<!--    transform-style: preserve-3d;-->
<!--    cursor: pointer;-->
<!--  }-->
<!--  .card {-->
<!--    transform-style: preserve-3d;-->
<!--    width: 300px;-->
<!--    height: 200px;-->
<!--    background: #ececec;-->
<!--    overflow: hidden;-->
<!--    perspective: 1000px;-->
<!--    transition: 1s cubic-bezier(0.23, 1, 0.32, 1);-->
<!--    opacity: 0.8;-->
<!--    margin: auto auto;// 有修改-->
<!--  }-->
<!--  .card-bg {-->
<!--    transform-style: preserve-3d;-->
<!--    width: 150%;-->
<!--    height: 135%;-->
<!--    display: block;-->
<!--    position: relative;-->
<!--    left: -25%;-->
<!--    top: -25%;-->
<!--    transition: 1s cubic-bezier(0.23, 1, 0.32, 1);-->
<!--    //   pointer-events: none; //pointer-events 更像是JavaScript。用于阻止鼠标事件-->
<!--  }-->
<!--  //样式尽量定义成3层（否则会出现卡顿现象），1.鼠标经过开始层，2.卡片旋转层，3.图片旋转层-->
<!--  //鼠标移入到1层时，执行过度效果（会有一个缓冲），过1s后缓冲结束，此时旋转时不再会有以上定义的1s过渡效果（不然会出现一卡一卡的情况），当鼠标移出时才会执行以上的过度效果，实现缓慢的归位状态（而不是一闪就归位了）-->
<!--  //此处 hover选择器优先级最高-->
<!--  .card-wrap:hover .card-bg {-->
<!--    transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);-->
<!--  }-->
<!--  .card-wrap:hover .card {-->
<!--    opacity: 1;-->
<!--    transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);-->
<!--    box-shadow: white 0 0 0 5px, rgba(0, 0, 0, 0.66) 0 30px 60px 0;-->
<!--  }-->
<!--</style>-->
