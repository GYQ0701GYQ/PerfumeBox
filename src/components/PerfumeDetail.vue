<template>
    <div>
      <Banner/>
      <h3 class="heading">{{'香水名称：'+perfume_name}}</h3>
      <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
        <el-col :span="7">
          <img v-show="perfume_info2[3]!=='#'" :src="perfume_info2[3]" style="max-height:400px;width:50%;height:auto;justify-content: center;display: flex;align-items: center;" alt="">
        </el-col>
        <el-col :span="11">
          <el-row v-show="perfume_info2[8]!=='#'" class="detail_row">
            <b>品牌：</b>
            <el-button round size="medium" @click="click_primary_brand(perfume_info2[8])">{{perfume_info2[8]}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[0]!=='#'" class="detail_row">
            <b>标签：</b>
            <el-button v-for="item in perfume_info2[0]" :key="item.index" round size="medium" @click="click_primary_tag(item)">{{item}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[4]!=='#'" class="detail_row">
            <b>香调：</b>
            <el-button v-for="item in perfume_info2[4]" :key="item.index" round size="medium" @click="click_primary_fragment(item)">{{item}}</el-button>
          </el-row>
          <el-row v-show="perfume_info2[5]!=='#'" class="detail_row">
            <b>属性：</b>
            <el-button round size="medium" @click="click_primary_type(perfume_info2[5])">{{perfume_info2[5]}}</el-button>
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
          <el-row v-if="collect_flag===1" class="detail_row"><el-button icon="el-icon-star-on" type="primary" plain @click="handle_collect('delete',perfume_info2[2])">已收藏</el-button></el-row>
          <el-row v-else class="detail_row"><el-button icon="el-icon-star-off" type="primary" plain @click="handle_collect('create',perfume_info2[2])">收藏</el-button></el-row>
          <br>
          <el-row class="detail_row"><el-button icon="el-icon-goods" type="primary" plain @click="handle_buy('add',perfume_info2[2])">加购</el-button></el-row>
          <br>
          <el-row class="detail_row"><el-button icon="el-icon-connection" type="primary" plain @click="show_brief(perfume_info2[2],perfume_info2[7])">简介</el-button></el-row>
        </el-col>
      </el-row>
      <h3 class="heading">产品关系图</h3>
      <Graph :perfume_info2="perfume_info2"/>
      <h3 class="heading">其他产品对比</h3>
      <el-tabs type="border-card" v-model="select" style="border-radius: 10px;width: 90%;margin-left: 5%;margin-bottom:5%;" >
        <el-tab-pane name="品牌" label="同品牌产品" :disabled="perfume_info2[8]==='#'">
          <el-card shadow="always" style="margin-left:5%;width:90%;">{{perfume_info2[8]}}</el-card>
          <el-card v-if="compare_info!=='#'" v-for="each_perfume in compare_info" :key="each_perfume.index" class="compare_card">
            <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
              <el-col :span="7">
                <img v-show="each_perfume[3]!=='#'" :src="each_perfume[3]" class="compare_img" alt="">
              </el-col>
              <el-col :span="11">
                <el-row v-show="each_perfume[2]!=='#'">
                  <i><b>{{each_perfume[2]}}</b></i>
                </el-row>
                <br>
                <el-row v-show="each_perfume[8]!=='#'">
                  <b>品牌：</b><i style="color: #1a9be6">{{' '+each_perfume[8]}}</i>
                </el-row>
                <el-row v-show="each_perfume[0]!=='#'">
                  <b>标签：</b><span v-for="item in each_perfume[0]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[4]!=='#'">
                  <b>香调：</b><span v-for="item in each_perfume[4]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[5]!=='#'">
                  <b>属性：</b><span>{{' '+each_perfume[5]}}</span>
                </el-row>
                <el-row v-show="each_perfume[10]!=='#'">
                  <b>前调：</b><span v-for="item in each_perfume[10]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[9]!=='#'">
                  <b>中调：</b><span v-for="item in each_perfume[9]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[12]!=='#'">
                  <b>后调：</b><span v-for="item in each_perfume[12]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[1]!=='#'">
                  <b>发布时间：</b><span>{{' '+each_perfume[1]}}</span>
                </el-row>
                <el-row v-show="each_perfume[11]!=='#'">
                  <b>调香师：</b><span v-for="item in each_perfume[11]" :key="item.index">{{'  '+item}}</span>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-row><el-button icon="el-icon-connection" type="primary" plain size="small" @click="show_brief(each_perfume[2],each_perfume[7])">简介</el-button></el-row>
                <br>
                <el-row><el-button icon="el-icon-thumb" type="primary" plain size="small" @click="change_primary(each_perfume[2])">详情</el-button></el-row>
              </el-col>
            </el-row>
          </el-card>
          <el-card v-else shadow="always" style="margin-left:5%;width:90%;">当前选项未搜索到关联产品</el-card>
        </el-tab-pane>
        <el-tab-pane name="标签" label="同标签产品" :disabled="perfume_info2[0]==='#'">
          <el-card shadow="always" style="margin-left:5%;width:90%;">
            <el-radio v-for="item in perfume_info2[0]" :key="item.index" v-model="tag" :label="item">{{item}}</el-radio>
          </el-card>
          <el-card v-if="compare_info!=='#'" v-for="each_perfume in compare_info" :key="each_perfume.index" class="compare_card">
            <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
              <el-col :span="7">
                <img v-show="each_perfume[3]!=='#'" :src="each_perfume[3]" class="compare_img" alt="">
              </el-col>
              <el-col :span="11">
                <el-row v-show="each_perfume[2]!=='#'">
                  <i><b>{{each_perfume[2]}}</b></i>
                </el-row>
                <br>
                <el-row v-show="each_perfume[8]!=='#'">
                  <b>品牌：</b><span>{{' '+each_perfume[8]}}</span>
                </el-row>
                <el-row v-show="each_perfume[0]!=='#'">
                  <b>标签：</b><i v-for="item in each_perfume[0]" :key="item.index" style="color: #1a9be6">{{' '+item}}</i>
                </el-row>
                <el-row v-show="each_perfume[4]!=='#'">
                  <b>香调：</b><span v-for="item in each_perfume[4]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[5]!=='#'">
                  <b>属性：</b><span>{{' '+each_perfume[5]}}</span>
                </el-row>
                <el-row v-show="each_perfume[10]!=='#'">
                  <b>前调：</b><span v-for="item in each_perfume[10]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[9]!=='#'">
                  <b>中调：</b><span v-for="item in each_perfume[9]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[12]!=='#'">
                  <b>后调：</b><span v-for="item in each_perfume[12]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[1]!=='#'">
                  <b>发布时间：</b><span>{{' '+each_perfume[1]}}</span>
                </el-row>
                <el-row v-show="each_perfume[11]!=='#'">
                  <b>调香师：</b><span v-for="item in each_perfume[11]" :key="item.index">{{'  '+item}}</span>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-row><el-button icon="el-icon-connection" type="primary" plain size="small" @click="show_brief(each_perfume[2],each_perfume[7])">简介</el-button></el-row>
                <br>
                <el-row><el-button icon="el-icon-thumb" type="primary" plain size="small" @click="change_primary(each_perfume[2])">详情</el-button></el-row>
              </el-col>
            </el-row>
          </el-card>
          <el-card v-else shadow="always" style="margin-left:5%;width:90%;">当前选项未搜索到关联产品</el-card>
        </el-tab-pane>
        <el-tab-pane name="香调" label="同香调产品" :disabled="perfume_info2[4]==='#'">
          <el-card shadow="always"  style="margin-left:5%;width:90%;">
            <el-radio v-if="perfume_info2[4][1]!==undefined " v-for="item in perfume_info2[4]" :key="item.index" v-model="fragment" :label="item">{{item}}</el-radio>
            <span v-else>{{perfume_info2[4][0]}}</span>
          </el-card>
          <el-card v-if="compare_info!=='#'" v-for="each_perfume in compare_info" :key="each_perfume.index" class="compare_card">
            <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
              <el-col :span="7">
                <img v-show="each_perfume[3]!=='#'" :src="each_perfume[3]" class="compare_img" alt="">
              </el-col>
              <el-col :span="11">
                <el-row v-show="each_perfume[2]!=='#'">
                  <i><b>{{each_perfume[2]}}</b></i>
                </el-row>
                <br>
                <el-row v-show="each_perfume[8]!=='#'">
                  <b>品牌：</b><span>{{' '+each_perfume[8]}}</span>
                </el-row>
                <el-row v-show="each_perfume[0]!=='#'">
                  <b>标签：</b><span v-for="item in each_perfume[0]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[4]!=='#'">
                  <b>香调：</b><i v-for="item in each_perfume[4]" :key="item.index" style="color: #1a9be6">{{' '+item}}</i>
                </el-row>
                <el-row v-show="each_perfume[5]!=='#'">
                  <b>属性：</b><span>{{' '+each_perfume[5]}}</span>
                </el-row>
                <el-row v-show="each_perfume[10]!=='#'">
                  <b>前调：</b><span v-for="item in each_perfume[10]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[9]!=='#'">
                  <b>中调：</b><span v-for="item in each_perfume[9]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[12]!=='#'">
                  <b>后调：</b><span v-for="item in each_perfume[12]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[1]!=='#'">
                  <b>发布时间：</b><span>{{' '+each_perfume[1]}}</span>
                </el-row>
                <el-row v-show="each_perfume[11]!=='#'">
                  <b>调香师：</b><span v-for="item in each_perfume[11]" :key="item.index">{{'  '+item}}</span>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-row><el-button icon="el-icon-connection" type="primary" plain size="small" @click="show_brief(each_perfume[2],each_perfume[7])">简介</el-button></el-row>
                <br>
                <el-row><el-button icon="el-icon-thumb" type="primary" plain size="small" @click="change_primary(each_perfume[2])">详情</el-button></el-row>
              </el-col>
            </el-row>
          </el-card>
          <el-card v-else shadow="always" style="margin-left:5%;width:90%;">当前选项未搜索到关联产品</el-card>
        </el-tab-pane>
        <el-tab-pane name="属性" label="同属性产品" :disabled="perfume_info2[5]==='#'">
          <el-card shadow="always"  style="margin-left:5%;width:90%;">{{perfume_info2[5]}}</el-card>
          <el-card v-if="compare_info!=='#'" v-for="each_perfume in compare_info" :key="each_perfume.index" class="compare_card">
            <el-row :gutter="20" style="margin-bottom:20px;margin-top:20px;margin-left:5%;width:90%;">
              <el-col :span="7">
                <img v-show="each_perfume[3]!=='#'" :src="each_perfume[3]" class="compare_img" alt="">
              </el-col>
              <el-col :span="11">
                <el-row v-show="each_perfume[2]!=='#'">
                  <i><b>{{each_perfume[2]}}</b></i>
                </el-row>
                <br>
                <el-row v-show="each_perfume[8]!=='#'">
                  <b>品牌：</b><span>{{' '+each_perfume[8]}}</span>
                </el-row>
                <el-row v-show="each_perfume[0]!=='#'">
                  <b>标签：</b><span v-for="item in each_perfume[0]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[4]!=='#'">
                  <b>香调：</b><span v-for="item in each_perfume[4]" :key="item.index">{{' '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[5]!=='#'">
                  <b>属性：</b><i  style="color: #1a9be6">{{' '+each_perfume[5]}}</i>
                </el-row>
                <el-row v-show="each_perfume[10]!=='#'">
                  <b>前调：</b><span v-for="item in each_perfume[10]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[9]!=='#'">
                  <b>中调：</b><span v-for="item in each_perfume[9]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[12]!=='#'">
                  <b>后调：</b><span v-for="item in each_perfume[12]" :key="item.index">{{'  '+item}}</span>
                </el-row>
                <el-row v-show="each_perfume[1]!=='#'">
                  <b>发布时间：</b><span>{{' '+each_perfume[1]}}</span>
                </el-row>
                <el-row v-show="each_perfume[11]!=='#'">
                  <b>调香师：</b><span v-for="item in each_perfume[11]" :key="item.index">{{'  '+item}}</span>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-row><el-button icon="el-icon-connection" type="primary" plain size="small" @click="show_brief(each_perfume[2],each_perfume[7])">简介</el-button></el-row>
                <br>
                <el-row><el-button icon="el-icon-thumb" type="primary" plain size="small" @click="change_primary(each_perfume[2])">详情</el-button></el-row>
              </el-col>
            </el-row>
          </el-card>
          <el-card v-else shadow="always" style="margin-left:5%;width:90%;">当前选项未搜索到关联产品</el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import Graph from './Graph'
  import Banner from './Banner'
  export default {
    name: 'PerfumeDetail',
    components:{
      Banner,
      Graph
    },
    data(){
      return{
        perfume_name:'',
        perfume_info1:['标签','发布时间','名称','图片','香调','属性','简介图片','简介文字','品牌','中调','前调','调香师','后调'],
        perfume_info2:[],
        collect_flag:2,
        select:'品牌',
        tag:'',
        fragment:'',
        brand_compare_info:[],
        tag_compare_info:[],
        fragment_compare_info:[],
        type_compare_info:[],
        compare_info:[],
      }
    },
    created () {
      this.perfume_name = this.$route.params.perfume_name
      this.search_one_perfume(this.$route.params.perfume_name)  //向后端传递准确的香水名称，非模糊搜索
    },
    watch:{
      $route(){
        this.perfume_name = this.$route.params.perfume_name
        this.search_one_perfume(this.$route.params.perfume_name)
      },
      select:{
        handler: function (select) {
         if(select==='品牌'){
           this.compare_info = []
           this.perfume_compare(select,this.perfume_info2[8],this.perfume_info2[2])
         }
         else if(select==='标签' && this.tag!==''){
           this.compare_info = []
           this.perfume_compare(select,this.tag,this.perfume_info2[2])
         }
         else if(select==='香调' && this.fragment!==''){
           this.compare_info = []
           this.perfume_compare(select,this.fragment,this.perfume_info2[2])
         }
         else if(select==='属性'){
           this.compare_info = []
           this.perfume_compare(select,this.perfume_info2[5],this.perfume_info2[2])
         }
        },
        immediate: true
      },
      tag:{
        handler: function (tag) {
          this.compare_info = []
          this.perfume_compare(this.select,tag,this.perfume_info2[2])
        },
        immediate: true
      },
      fragment:{
        handler: function (fragment) {
          this.compare_info = []
          this.perfume_compare(this.select,fragment,this.perfume_info2[2])
        },
        immediate: true
      },
    },
    methods:{
      search_one_perfume(perfume_name){
        this.$api.get('/url/api/search_one_perfume', {
          perfume_name: perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.perfume_info2 = response.data['list']
            console.log('调用搜索成功');//请求成功，response为成功信息参数
            this.judge_collect(this.$route.params.perfume_name)
          } else {
            console.log('失败',response);//请求失败，response为失败信息
          }
        });
      },
      perfume_compare(search_type,search_name,perfume_name){
        this.$api.get('/url/api/perfume_compare', {
          search_type: search_type,
          search_name: search_name,
          perfume_name:perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300 && response.data['error_num']===0) {
            this.compare_info = response.data['list']
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            this.compare_info = '#'
            console.log('失败',response);//请求失败，response为失败信息
          }
        });
      },
      judge_collect(perfume_name){
        this.$api.get('/url/api/judge_collect', {
          user_name: window.sessionStorage.user,
          perfume_name:perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300) {
            this.collect_flag = response.data['collect_flag']
            this.perfume_compare('品牌',this.perfume_info2[8],this.perfume_info2[2])
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
          } else {
            console.log('失败',response);//请求失败，response为失败信息
          }
        });
      },
      show_brief(name,brief){
        if(brief==="''"||brief==='#'||brief===" ''"){
          this.$message.info('当前香水暂无简介')
        }else{
          const h = this.$createElement;
          this.$message({
            message: h('p', null, [
              h('b', { style: 'padding-left: 10px;padding-right: 12px;' }, name),
              h('p', { style: 'color: teal;font-size:14px;padding-left: 12px;padding-right: 12px;' }, brief)
            ]),
            showClose: true,
            duration:3000
          });
        }
      },
      click_primary_brand(search_name){
        this.$router.push({name: 'SearchDetail',params:{search_type:'品牌',search_name:search_name}}, onComplete => { }, onAbort => { })
      },
      click_primary_tag(search_name){
        this.$router.push({name: 'SearchDetail',params:{search_type:'标签',search_name:search_name}}, onComplete => { }, onAbort => { })
      },
      click_primary_fragment(search_name){
        this.$router.push({name: 'SearchDetail',params:{search_type:'香调',search_name:search_name}}, onComplete => { }, onAbort => { })
      },
      click_primary_type(search_name){
        this.$router.push({name: 'SearchDetail',params:{search_type:'属性',search_name:search_name}}, onComplete => { }, onAbort => { })
      },
      change_primary(perfume_name){
        //通过路由监听重新渲染页面
        this.$router.push({name: 'PerfumeDetail', params: {perfume_name:perfume_name}})
      },
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
  .detail_row{
    min-height: 40px;
  }
  .compare_card{
    max-height: 400px;
    margin-bottom:20px;
    margin-top:15px;
    margin-left:5%;
    width:90%;
  }
  .compare_img{
    max-height:300px;
    max-width:50%;
    height:auto;
    justify-content: center;
    display: flex;
    align-items: center;
  }
</style>
