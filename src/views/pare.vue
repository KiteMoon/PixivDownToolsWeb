<template>
  <p>欢迎使用解析器</p>
  <el-row :gutter="20">
    <el-col :span="12">
      PID
      <el-input v-model="pid" placeholder="请输入PID"/>
    </el-col>
    <el-col :span="12">
      Token
      <el-input v-model="token" placeholder="请输入Token，暂时不需要"/>
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin-top: 5%">
    <el-col :span="12">
      <div class="grid-content bg-purple">PID:{{ pid }}</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">作品名称:{{title}}</div>
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin-top: 5%">
    <el-col :span="12">
      <div class="grid-content bg-purple">高度:{{ height }}px</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">宽度：{{width}}px</div>
    </el-col>
  </el-row>

  <el-row class="row-bg" justify="space-between" style="margin-top: 5%">
    <el-col :span="6">
    </el-col>
    <el-col :span="6">
      <el-button v-on:click="start" type="primary">开始解析</el-button>
    </el-col>
    <el-col :span="6">
    </el-col>
  </el-row>


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pid: '',
      token: '',
      title:'',
      height:'',
      width:''
    }

  },
  methods:{
    // eslint-disable-next-line no-undef
    start(){
      axios
          .get('http://api.sikadi.top/pixiv/get/pare/img?pid='+this.pid)
          .then(response => {
            if (response.data.code==200){
              this.title=response.data.body.Name;
              this.height=response.data.body.Height;
              this.width=response.data.body.Width;
            }else if (response.data.code==404){
              this.title="该作品不存在";
              this.height=0;
              this.width=0;
            }
          })
    }

  }
}
</script>

<style scoped>

</style>