<template>
    <div>
      <h3>{{'关于【'+this.$route.params.search_type + ':' + this.$route.params.search_name + '】的信息如下'}}</h3>
      <el-row :gutter="20" style="margin-bottom: 20px;" v-for="(each_perfume,index1) in page_data" :key="each_perfume.index">
        <el-col :span="2" style="border-radius: 4px;"><div class="grid-content bg-purple-light">{{(current_page-1)*page_size+index1+1}}</div></el-col>
        <el-col :span="18" style="border-radius: 4px;"><div class="grid-content bg-purple-light"  @click="search_one_perfume(each_perfume)">{{each_perfume}}</div></el-col>
        <el-col :span="2" style="border-radius: 4px;"><div class="grid-content bg-purple-light"><i class="el-icon-goods"/></div></el-col>
        <el-col :span="2" style="border-radius: 4px;"><div class="grid-content bg-purple-light"><i class="el-icon-star-off"/></div></el-col>
      </el-row>
      <div class="pagination">
        <el-pagination background layout="total,prev, pager, next, sizes" :current-page="current_page" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" :total="total_num" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
      </div>
<!--      <div v-for="(each_perfume,index1) in page_data" :key="each_perfume.index">-->
<!--        <h1>{{index1+1}}</h1>-->
<!--        <div v-for="(each_tag,index2) in each_perfume" :key="each_tag.index">-->
<!--          <div v-show="each_tag!=='#'"><b>{{perfume_info1[index2]+': '}}</b>{{each_tag}}</div>-->
<!--          <br v-show="each_tag!=='#'">-->
<!--        </div>-->
<!--      </div>-->
    </div>
</template>

<script>
  export default {
    name: 'SearchDetail',
    data(){
      return{
        perfume_info1:['标签：','发布时间：','名称：','图片：','香调：','属性：','简介：','品牌：','中调：','前调：','调香师：','后调：'],
        perfume_info2:[],
        total_num: 0,
        page_size:10,
        current_page :1,
        max_page:1,
        page_data: []
      }
    },
    created () {
      this.search_perfume(this.$route.params.search_type,this.$route.params.search_name)
    },
    watch:{
      current_page: {
        handler: function (current_page) {
          if(current_page<this.max_page){
            this.page_data = this.perfume_info2.slice(this.page_size*(current_page-1),this.page_size*current_page)
          }
          else{
            this.page_data = this.perfume_info2.slice(this.page_size*(current_page-1),this.perfume_info2.length)
          }
        },
        immediate: true
      },
      page_size:{
        handler: function (page_size) {
          this.max_page = Math.ceil(this.total_num/page_size)
          if(this.current_page<this.max_page){
            this.page_data = this.perfume_info2.slice(page_size*(this.current_page-1),page_size*this.current_page)
          }
          else{
            this.page_data = this.perfume_info2.slice(page_size*(this.current_page-1),this.perfume_info2.length)
          }
        },
        immediate: true
      }
    },
    methods:{
      search_perfume(search_type,search_name){
        this.$api.get('/url/api/search_perfume', {
          search_type: search_type,
          search_name: search_name
        }, response => {
          if (response.status >= 200 && response.status < 300 && response.data['error_num']===0) {
            this.perfume_info2 = response.data['list']  //获取香水列表
            this.total_num = response.data['list'].length  //获取总条目数
            this.max_page = Math.ceil(this.total_num/this.page_size)  //获取页数
            if(this.current_page<this.max_page){
              this.page_data = this.perfume_info2.slice(this.page_size*(this.current_page-1),this.page_size*this.current_page)
            }
            else{
              this.page_data = this.perfume_info2.slice(this.page_size*(this.current_page-1),this.perfume_info2.length)
            }
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            console.log(response);//请求失败，response为失败信息
            this.$message.error('未查询到相关内容')
            this.$router.go(-1)
          }
        });
      },
      search_one_perfume(perfume_name){
        this.$router.push({name: 'PerfumeDetail', params: {perfume_name:perfume_name}})
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

<style scoped>
  el-row {
    margin-bottom: 10px;
  }
  el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #e5e9f2;
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
</style>
