<template>
  <div class="bottom_class">
       <ul>
      <router-link tag="li" v-for="(item,index) in tar" :to='item.link' :key="index"><li><span>{{item.title}}</span></li></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Links',
  props: ['tar']
}
</script>
<style scoped>
  .bottom_class{
    width: 100%;
    background-color: #EBEBEB;
    border-top:1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  ul{
    display: flex;
    height: 45px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    padding-top: 5px;
    padding-bottom:10px;
  }
  li{
    flex: 3;
    text-align: center;
    line-height: 45px;
    font-size: 13px;

  }
  span{
    background-color: #fff;
    display: inline-block;
    border-radius:100%;
    height: 45px;
    width: 45px;
    border: 2px solid #0D65Ac;
    padding-top:2px;
    padding-left:2px;

  }

  span:hover{
    background-color: #0D65Ac;
    color: #fff;
  }
</style>
