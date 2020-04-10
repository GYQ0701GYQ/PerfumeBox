<template>
    <div>
      <Banner/>
      <h3 class="heading">{{'香水名称：'+this.$route.params.perfume_name}}</h3>
      <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
        <el-col :span="7">
          <img v-show="perfume_info2[3]!=='#'" :src="perfume_info2[3]" style="width:50%;height:auto;justify-content: center;display: flex;align-items: center;" alt="">
        </el-col>
        <el-col :span="11">
          <el-row v-show="perfume_info2[8]!=='#'" class="detail_row">
            <b>品牌：</b>
            <el-button round size="medium">{{perfume_info2[8]}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[0]!=='#'" class="detail_row">
            <b>标签：</b>
            <el-button v-for="item in perfume_info2[0]" :key="item.index" round size="medium">{{item}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[4]!=='#'" class="detail_row">
            <b>香调：</b>
            <el-button v-for="item in perfume_info2[4]" :key="item.index" round size="medium">{{item}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[5]!=='#'" class="detail_row">
            <b>属性：</b>
            <el-button round size="medium">{{perfume_info2[5]}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[10]!=='#'" class="detail_row">
            <b>前调：</b>
            <span v-for="item in perfume_info2[10]" :key="item.index">{{'  '+item}}</span>
          </el-row>
          <el-row v-show="perfume_info2[9]!=='#'" class="detail_row">
            <b>中调：</b>
            <span v-for="item in perfume_info2[9]" :key="item.index">{{'  '+item}}</span>
          </el-row>
          <el-row v-show="perfume_info2[12]!=='#'" class="detail_row">
            <b>后调：</b>
            <span v-for="item in perfume_info2[12]" :key="item.index">{{'  '+item}}</span>
          </el-row>
          <el-row v-show="perfume_info2[1]!=='#'" class="detail_row">
            <b>发布时间：</b>
            <span>{{' '+perfume_info2[1]}}</span>
          </el-row>
          <el-row v-show="perfume_info2[11]!=='#'" class="detail_row">
            <b>调香师：</b>
            <span v-for="item in perfume_info2[11]" :key="item.index">{{'  '+item}}</span>
          </el-row>
        </el-col>
        <el-col :span="6">
          <br>
          <el-row class="detail_row"><el-button icon="el-icon-star-off" type="primary" plain>收藏</el-button></el-row>
          <br>
          <el-row class="detail_row"><el-button icon="el-icon-goods" type="primary" plain>加购</el-button></el-row>
          <br>
          <el-row class="detail_row"><el-button icon="el-icon-connection" type="primary" plain>简介</el-button></el-row>
        </el-col>
      </el-row>
      <h3 class="heading">其他产品对比</h3>
      <el-tabs type="border-card" v-model="select" style="border-radius: 10px;width: 90%;margin-left: 5%" >
        <el-tab-pane name="品牌" label="同品牌产品" :disabled="perfume_info2[8]==='#'">
          <el-card shadow="always">{{perfume_info2[8]}}</el-card>
        </el-tab-pane>
        <el-tab-pane name="标签" label="同标签产品" :disabled="perfume_info2[0]==='#'">
          <el-card shadow="always">
            <el-radio v-for="item in perfume_info2[0]" :key="item.index" v-model="tag" :label="item">{{item}}</el-radio>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="香调" label="同香调产品" :disabled="perfume_info2[4]==='#'">
          <el-card shadow="always">
            <el-radio v-if="perfume_info2[4][1]!==undefined " v-for="item in perfume_info2[4]" :key="item.index" v-model="fragment" :label="item">{{item}}</el-radio>
            <span v-else>{{perfume_info2[4][0]}}</span>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="属性" label="同属性产品" :disabled="perfume_info2[5]==='#'">
          <el-card shadow="always">{{perfume_info2[5]}}</el-card>
        </el-tab-pane>
      </el-tabs>
      <div>{{select}}<br>{{tag}}<br>{{fragment}}</div>
    </div>
</template>

<script>
  import Banner from './Banner'
  export default {
    name: 'PerfumeDetail',
    components:{
      Banner
    },
    data(){
      return{
        perfume_info1:['标签','发布时间','名称','图片','香调','属性','简介图片','简介文字','品牌','中调','前调','调香师','后调'],
        perfume_info2:[],
        select:'品牌',
        tag:'',
        fragment:'',
        brand_compare_info:[],
        tag_compare_info:[],
        fragment_compare_info:[],
        type_compare_info:[],
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
  .heading {
    width: 100%;
    margin-left: 5%;
    font-weight: 900;
    font-size: 1.618rem;
    text-transform: uppercase;
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
  .detail_row{
    min-height: 40px;
  }
</style>
