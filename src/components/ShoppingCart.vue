<template>
  <div>
    <Banner/>
    <h3 class="heading">{{user+'的购物车'}}</h3>
    <el-card v-if="shopping_cart==='购物车为空'" class="card_style">{{shopping_cart}}</el-card>
    <el-card v-else v-for="(perfume,index) in shopping_cart" :key="perfume.index" class="card_style">
      <el-col :span="2" class="col_other">{{index+1}}</el-col>
      <el-col :span="3"><img :src="perfume[1]" alt="暂无图片" class="col_img"></el-col>
      <el-col :span="12" class="col_other">{{perfume[0]}}</el-col>
      <el-col :span="1" class="col_other"><i class="el-icon-remove-outline" @click="handle_buy('sub',perfume[0])"/></el-col>
      <el-col :span="1" class="col_other">{{perfume[2]}}</el-col>
      <el-col :span="1" class="col_other"><i class="el-icon-circle-plus-outline" @click="handle_buy('add',perfume[0])"/></el-col>
      <el-col :span="2" ><el-button class="el-icon-delete" type="primary" plain @click="handle_buy('del',perfume[0])">删除</el-button></el-col>
      <el-col :span="2" ><el-button class="el-icon-thumb" type="primary" plain @click="goto_detail(perfume[0])">详情</el-button></el-col>
    </el-card>
  </div>
</template>

<script>
import Banner from './Banner'
export default {
  name: 'ShoppingCart',
  components:{
    Banner
  },
  data(){
    return{
      user:'',
      shopping_cart:[]
    }
  },
  created () {
    this.user = window.sessionStorage.user
    this.show_shopping_cart()
  },
  methods:{
    show_shopping_cart(){
      this.$api.get('/url/api/show_shopping_cart', {
        user_name: window.sessionStorage.user,
      }, response => {
        if (response.status >= 200 && response.status < 300) {
          this.shopping_cart = response.data['list']
        } else {
          console.log('失败',response);//请求失败，response为失败信息
        }
      });
    },
    handle_collect(handle_type,perfume_name){
      this.$api.get('/url/api/handle_collect', {
        handle_type:handle_type,
        user_name: window.sessionStorage.user,
        perfume_name:perfume_name
      }, response => {
        if (response.status >= 200 && response.status < 300) {
          if(handle_type==='create'){
            this.collect_flag = 1
            this.$message.success(response.data['msg'])
          }else if(handle_type==='delete'){
            this.collect_flag = 0
            this.$message.success(response.data['msg'])
          }
        } else {
          console.log('失败',response);//请求失败，response为失败信息
        }
      });
    },
    handle_buy(handle_type,perfume_name){
      this.$api.get('/url/api/handle_buy', {
        handle_type:handle_type,
        user_name: window.sessionStorage.user,
        perfume_name:perfume_name
      }, response => {
        if (response.status >= 200 && response.status < 300) {
            this.$message.success(response.data['msg'])
            this.show_shopping_cart()
        } else {
          console.log('失败',response);//请求失败，response为失败信息
        }
      });
    },
    goto_detail(perfume_name){
      this.$router.push({name: 'PerfumeDetail', params: {perfume_name:perfume_name}})
    }
  }
}
</script>

<style scoped>
  .heading {
    width: 100%;
    margin-left: 5%;
    font-weight: 900;
    font-size: 1.618rem;
    letter-spacing: .1ch;
    line-height: 1;
    padding-bottom: .5em;
    margin-bottom: 20px;
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
  .card_style{
    margin-bottom:20px;
    margin-top:20px;
    margin-left:5%;
    width:90%;
  }
  .col_img{
    margin-top:0;
    margin-bottom: 10px;
    max-height:100px;
    width:20%;
    height:auto;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .col_other{
    padding-top: 11px
  }
</style>
