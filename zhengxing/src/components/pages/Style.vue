<template>
  <div>
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from'../common/Top.vue'
  import alinkword from'../common/Link.vue'
  export default {
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../../static/img/文体服务.jpg',
        links:[{link:'/Style_footer/1',title:'文体队伍'}
          ,{link:'/Style_footer/2',title:'文艺阵地'}
          ,{link:'/Style_footer/3',title:'文体活动'}
          ,{link:'/Style_footer/4',title:'精彩回顾'}

        ]
      }
    }


  }
</script>
<style>

</style>
