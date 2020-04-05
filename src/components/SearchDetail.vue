<template>
    <div>
      <h3>{{'关于【'+this.$route.params.search_type + ':' + this.$route.params.search_name + '】的信息如下'}}</h3>
      <div v-for="(each_perfume,index1) in perfume_info2" :key="each_perfume.index">
        <div v-for="(each_tag,index2) in each_perfume" :key="each_tag.index">
          <div v-show="each_tag!=='#'"><b>{{perfume_info1[index2]+': '}}</b>{{each_tag}}</div>
          <br v-show="each_tag!=='#'">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SearchDetail',
    data(){
      return{
        perfume_info1:['标签：','发布时间：','名称：','图片：','香调：','属性：','简介：','品牌：','中调：','前调：','调香师：','后调：'],
        perfume_info2:[]
      }
    },
    created () {
      switch(this.$route.params.search_type) {
        case '香水':
          console.log('是香水')
          break
        case '品牌':
          console.log('是品牌')
          break
        case '香调':
          console.log('是香调')
          break
        case '标签':
          console.log('是标签')
          break
      }
      this.search_perfume(this.$route.params.search_type,this.$route.params.search_name)
    },
    methods:{
      search_perfume(search_type,search_name){
        this.$api.get('/url/api/search_perfume', {
          search_type: search_type,
          search_name: search_name
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.perfume_info2 = response.data['list']
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            console.log(response);//请求失败，response为失败信息
            this.$message.error('未查询到相关内容')
            this.$router.go(-1)
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
