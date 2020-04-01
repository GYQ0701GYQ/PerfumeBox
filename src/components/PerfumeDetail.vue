<template>
    <div>
      <h3>{{'搜索内容为：'+this.$route.params.search_name}}</h3>
      <div>{{this.perfume_info}}</div>
    </div>
</template>

<script>
  export default {
    name: 'PerfumeDetail',
    data(){
      return{
        perfume_info:''
      }
    },
    created () {
      this.search_perfume(this.$route.params.search_name)  //向后端传递搜索框的字符串，按字符串检索
      // this.test_show_perfume()  //不向后端传递参数的情况下直接get数据
    },
    methods:{
      search_perfume(search_name){
        this.$http({
          url:'http://127.0.0.1:8000/api/search_perfume',
          method:'GET',
          data:{
            search_info:String(search_name),
            search_info2 :333
          },
          headers:{
            'content-Type':'x-www-form-urlencoded; charset=UTF-8'
          }
        }).then((response) => {
            console.log(response)
            var res = JSON.parse(response.bodyText)
            console.log(res)
            if (res.error_num === 0) {
              this.$message.success('调用成功')
            } else {
              this.$message.error('调用失败')
            }
          })
      },
      test_show_perfume(){
        this.$http.get('http://127.0.0.1:8000/api/show_perfume')
          .then((response) => {
            console.log(response)
            var res = JSON.parse(response.bodyText)
            console.log(res)
            if (res.error_num === 0) {
              this.perfume_info = res['list']
              console.log(this.perfume_info)
            } else {
              this.$message.error('查询香水失败')
              console.log(res['msg'])
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
