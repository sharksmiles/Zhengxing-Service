<template>
  <div >
    <top :img="urls"></top>
    <div class="content">
      <div class="content-item" v-for="item in lv">
        <span>{{item}}</span>
        <p><img src="../../../static/img/goto.png"></p>
      </div>
    </div>

  </div>
</template>
<script>
  import Top from'../common/Top.vue'
  export default {
    components:{
      Top
    },
    data(){
      return{
        urls:'../../../static/img/Affairs.jpg',
        lv:["社区救助","老年人帮助","助残服务","社会保障","劳动就业","人口计生","车管服务"]
      }
    }
  }
</script>
<style scoped>
  .content-item{
    border: 1px solid #e0e0e0;
    margin: 10px 15px;
    padding: 10px 10px;
    box-shadow: 0 2px 1px #e0e0e0;
    margin-bottom: 15px;
    background-color: #fff;
    border-radius: 5px;
  }
  .content-item span{
    padding-left: 10px;
    border-radius: 2px;
    font-size: 13px;
    display: inline-block;
    height: 15px;
    line-height: 15px;
  }
  .content-item p{
    float: right;
    width: 15px;
    height: 15px;
  }
  .content-item p img{
    width: 100%;
  }
</style>
