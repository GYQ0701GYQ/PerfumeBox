<template>
    <div style="width: 80%;height: 600px;margin-left:10%;border: 1px solid lightgray;">
      <el-row style="margin-left: 5px;margin-top: 5px">
        <el-button @click="by_brand()" style="background:#ffcccc"><b>按品牌扩展</b></el-button>
        <el-button @click="by_tag()" style="background:#8CFBCE;"><b>按标签扩展</b></el-button>
        <el-button @click="by_fragment()" style="background:#CDB5CD;"><b>按香调扩展</b></el-button>
        <el-button @click="by_type()" style="background:#ffff99;"><b>按属性扩展</b></el-button>
      </el-row>
      <div id="mynetwork" style="width: 100%;height:560px;margin-bottom: 0px;"></div>
    </div>
</template>

<script>
  import { DataSet,Network } from 'vis/index-network'
  export default {
    name: 'Graph',
    props:['perfume_info2'],
    data(){
      return{
        perfume:null,
        more_perfume:null,
        // network:null,
        nodes:[{id: 0, label:'origin',shape: "star", color: "#97C2FC",margin:10}],
        edges:[{from:0,to:0}],
      }
    },
    created () {
      // this.graph_create()
    },
    watch:{
      perfume_info2:function (newVal,oldVal) {
        this.perfume = newVal;  //newVal即是chartData
        this.graph_init();
      }
    },
    mounted () {
      // this.graph_init();
      this.graph_create()
      // this.network.on("click", function(params) {
      //   params.event = "[original event]";
      //   console.log(
      //     "click event, getNodeAt returns: " + this.getNodeAt(params.pointer.DOM)
      //   );
      // });
    },
    methods:{
      graph_init(){
        this.nodes = []
        this.edges = []
        //本页主产品
        this.nodes.push({id: 0, label:this.perfume[2],shape: "star", color: "#97C2FC",margin:10})
        if(this.perfume[8]!=='#'){//品牌
          this.nodes.push({id: 1, label:this.perfume[8], shape: "box", color: "#ffcccc",margin:10})
          this.edges.push({from:0,to:1})
        }
        if(this.perfume[0]!=='#'){//标签
          for(var i=0;i<this.perfume[0].length;i++){
            this.nodes.push({id: 21+i, label:this.perfume[0][i],shape: "box", color: "#8CFBCE",margin:10})
            this.edges.push({from:0,to:21+i})
          }
        }
        if(this.perfume[4]!=='#'){//香调
          for(i=0;i<this.perfume[4].length;i++){
            this.nodes.push({id: 41+i, label:this.perfume[4][i],shape: "box", color: "#CDB5CD",margin:10})
            this.edges.push({from:0,to:41+i})
          }
        }
        if(this.perfume[5]!=='#'){//属性
          this.nodes.push({id: 61, label:this.perfume[5],shape: "box", color: "#ffff99",margin:10})
          this.edges.push({from:0,to:61})
        }
        this.graph_create()
        // this.network.setData({ nodes: this.nodes, edges: this.edges });
        // console.log(this.network.body.data.nodes._data[0])
        // this.network.redraw()
        // console.log('redraw结束')
      },
      graph_create(){
        // create a network
        var container = document.getElementById("mynetwork");
        // provide the data in the vis format

        var data = {
          nodes: new DataSet(this.nodes),
          edges: new DataSet(this.edges)
        };
        var options = {
          interaction: { hover: true }
        };
        // initialize your network!
        this.network = new Network(container, data, options);
      },
      enlarge_graph(search_type,group_key){
        if(search_type==='品牌' && this.more_perfume!=='#'){
          for(var i=0;i<2;i++){
            this.nodes.push({id: 81+i, label:this.more_perfume[i][2], shape:  "diamond", color: " #BFEFFF",margin:2})
            this.edges.push({from:1,to:81+i})
          }
        }
        if(search_type==='标签' && this.more_perfume!=='#'){
          // console.log(this.group_key)
            this.nodes.push({id: 100+group_key*2+1, label:this.more_perfume[0][2], shape:  "diamond", color: " #BFEFFF",margin:2})
            this.edges.push({from:21+group_key,to:100+group_key*2+1})
            if(this.more_perfume.length>1){
              this.nodes.push({id: 100+group_key*2+2, label:this.more_perfume[1][2], shape:  "diamond", color: " #BFEFFF",margin:2})
              this.edges.push({from:21+group_key,to:100+group_key*2+2})
            }

        }
        if(search_type==='香调' && this.more_perfume!=='#'){
          this.nodes.push({id: 140+group_key*2+1, label:this.more_perfume[0][2], shape:  "diamond", color: " #BFEFFF",margin:2})
          this.edges.push({from:41+group_key,to:140+group_key*2+1})
          if(this.more_perfume.length>1){
            this.nodes.push({id: 140+group_key*2+2, label:this.more_perfume[1][2], shape:  "diamond", color: " #BFEFFF",margin:2})
            this.edges.push({from:41+group_key,to:140+group_key*2+2})
          }
        }
        if(search_type==='属性' && this.more_perfume!=='#'){
          this.nodes.push({id: 160+group_key*2+1, label:this.more_perfume[0][2], shape:  "diamond", color: " #BFEFFF",margin:2})
          this.edges.push({from:61+group_key,to:160+group_key*2+1})
          if(this.more_perfume.length>1){
            this.nodes.push({id: 160+group_key*2+2, label:this.more_perfume[1][2], shape:  "diamond", color: " #BFEFFF",margin:2})
            this.edges.push({from:61+group_key,to:160+group_key*2+2})
          }
        }
        this.graph_create()
      },
      by_brand(){
        this.perfume_compare('品牌',this.perfume[8],this.perfume[2],0)
      },
      by_tag(){
        for(var i=0;i<this.perfume[0].length;i++){
          this.perfume_compare('标签',this.perfume[0][i],this.perfume[2],i)
          // console.log(this.group_key)
        }
      },
      by_fragment(){
        for(var i=0;i<this.perfume[4].length;i++){
          this.perfume_compare('香调',this.perfume[4][i],this.perfume[2],i)
        }
      },
      by_type(){
        this.perfume_compare('属性',this.perfume[5],this.perfume[2],0)
      },
      perfume_compare(search_type,search_name,perfume_name,group_key){
        this.$api.get('/url/api/perfume_compare', {
          search_type: search_type,
          search_name: search_name,
          perfume_name:perfume_name
        }, response => {
          if (response.status >= 200 && response.status < 300 && response.data['error_num']===0) {
            this.more_perfume = response.data['list']
            this.enlarge_graph(search_type,group_key)
            console.log('调用搜索成功');//请求成功，response为成功信息参数
          } else {
            this.more_perfume = '#'
            this.$message.error('当前选项未找到关联商品')
            console.log('失败',response);//请求失败，response为失败信息
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
