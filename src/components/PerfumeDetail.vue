<template>
    <div>
      <h1>{{'搜索内容为'+this.$route.params.search_name}}</h1>
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
      this.show_perfume(this.$route.params.search_name)
    },
    methods:{
      show_perfume(search_name){
        this.$http({
          url:'http://127.0.0.1:8000/api/add_book',
          method:'POST',
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
      }
    }
  }
</script>

<style scoped>

</style>
