<template>
  <div>
    <Banner/>
    <h1 class="heading" v-show="this.$route.params.type === 'trade'">商业香Top100</h1>
    <h1 class="heading" v-show="this.$route.params.type === 'salon'">沙龙香Top100</h1>
    <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;" v-for="(each_perfume,index1) in page_data" :key="each_perfume.index">
      <el-col :span="2" style="border-radius: 4px;"><div class="grid-content bg-purple-light">{{(current_page-1)*page_size+index1+1}}</div></el-col>
      <el-col :span="18" style="border-radius: 4px;"><div class="grid-content bg-purple-light"  @click="search_one_perfume(each_perfume)">{{each_perfume}}</div></el-col>
      <el-col :span="4" style="border-radius: 4px;"><div class="grid-content bg-purple-light"><i class="el-icon-goods" @click="handle_buy('add',each_perfume)"/></div></el-col>
<!--      <el-col :span="2" style="border-radius: 4px;"><div class="grid-content bg-purple-light"><i class="el-icon-star-off"/></div></el-col>-->
    </el-row>
    <div class="pagination">
      <el-pagination background layout="total,prev, pager, next, sizes" :current-page="current_page" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" :total="total_num" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
  import Banner from './Banner'
  export default {
    name:'Flavorist',
    components:{
      Banner
    },
    data () {
      return {
        isLogin:false,
        currentDate: new Date(),
        toplist:[],
        total_num: 100,
        page_size:10,
        current_page :1,
        max_page:1,
        page_data: []
      }
    },
    created () {
      this.show_top100(this.$route.params.type)
    },
    watch:{
      current_page: {
        handler: function (current_page) {
          if(current_page<this.max_page){
            this.page_data = this.toplist.slice(this.page_size*(current_page-1),this.page_size*current_page)
          }
          else{
            this.page_data = this.toplist.slice(this.page_size*(current_page-1),this.toplist.length)
          }
        },
        immediate: true
      },
      page_size:{
        handler: function (page_size) {
          this.max_page = Math.ceil(this.total_num/page_size)
          if(this.current_page<this.max_page){
            this.page_data = this.toplist.slice(page_size*(this.current_page-1),page_size*this.current_page)
          }
          else{
            this.page_data = this.toplist.slice(page_size*(this.current_page-1),this.toplist.length)
          }
        },
        immediate: true
      }
    },
    methods: {
      show_top100(type) {
        this.$api.get('/url/api/show_top100', {
          type: type
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.toplist = response.data['list']
            this.max_page = Math.ceil(this.total_num/this.page_size)  //获取页数
            if(this.current_page<this.max_page){
              this.page_data = this.toplist.slice(this.page_size*(this.current_page-1),this.page_size*this.current_page)
            }
            else{
              this.page_data = this.toplist.slice(this.page_size*(this.current_page-1),this.perfume_info2.length)
            }
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            console.log(response);//请求失败，response为失败信息
            this.$message.error('未查询到相关内容')
            this.$router.go(-1)
          }
        });
      },
      search_one_perfume(perfume_name){
        this.$router.push({name: 'PerfumeDetail', params: {perfume_name:perfume_name}})
      },
      handle_buy(handle_type,perfume_name){
        this.$api.get('/url/api/handle_buy', {
          handle_type:handle_type,
          user_name: window.sessionStorage.user,
          perfume_name:perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.$message.success(response.data['msg'])
          } else {
            console.log('失败',response);//请求失败，response为失败信息
          }
        });
      },
      handleCurrentChange(current_page) {
        this.current_page = current_page
      },
      handleSizeChange(size) {
        this.page_size = size
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  el-row {
    margin-bottom: 10px;
  }
  el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: linear-gradient(0deg,#F1FCFC,#F7F7F7);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-size: 17px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .pagination{
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 17px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .ranking{
    margin-left: 70px;
  }
  .topcard{
    width: 280px;
    height: 450px;
    float: left;
    margin: 2.2% 2.2% 2.2% 2.2%;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    padding: 5px 5px 5px 5px;
  }

  .button {
    margin-top: 10px;
    padding: 10px;
    float: right;
  }

  .image {
    /*width: 100%;*/
    width: 200px;
    height: 300px;
    margin: 0px auto;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
