<template>
    <div>
      <h3>{{'搜索内容为：'+this.$route.params.perfume_name}}</h3>
      <h4>搜索结果如下</h4>
      <div v-for="(each_tag,index1) in perfume_info2" :key="each_tag.index">
        <div v-show="each_tag!=='#'"><b>{{perfume_info1[index1]+': '}}</b>{{each_tag}}</div>
        <br v-show="each_tag!=='#'">
      </div>
<!--      <div>{{this.perfume_info2}}</div>-->
    </div>
</template>

<script>
  export default {
    name: 'PerfumeDetail',
    data(){
      return{
        perfume_info1:['标签：','发布时间：','名称：','图片：','香调：','属性：','简介：','品牌：','中调：','前调：','调香师：','后调：'],
        perfume_info2:[]
      }
    },
    created () {
      this.search_one_perfume(this.$route.params.perfume_name)  //向后端传递准确的香水名称，非模糊搜索
    },
    methods:{
      search_one_perfume(perfume_name){
        this.$api.get('/url/api/search_one_perfume', {
          perfume_name: perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.perfume_info2 = response.data['list']
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            console.log(response);//请求失败，response为失败信息
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
