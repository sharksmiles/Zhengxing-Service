<template>
  <div>
  <div class="team" v-for="item in page">
    <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
    <div class="team_left"><img :src="item.image" alt=""></div>
    <div class="team_right">
      <p>姓名：{{item.name}}</p>
      <p>电话：{{item.tel}}</p>
      <p>工种：{{item.work}}</p>
      <p>所属物业公司：{{item.title}}</p>
    </div>
  </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      page:[]
    }
  },
  mounted(){
    let that =this
    this.$axios.get('/Property/index', {
    })
      .then(function (res) {
        that.page = res.data.data

      })
  }
}
</script>
<style>
  .iphone {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
  }
  .iphone img {
    width: 100%;
  }
.team{
  display: flex;
  padding: 15px 10px 20px 15px;
  border-bottom:1px solid #e0e0e0;
  margin-top:5px;
}
.team_left{
  flex: 1;
  background-color: #a2a4a7;
}
.team_left img{
  width: 100%;
  height: 100%;
}
.team_right{
  flex: 3;
  padding-left:20px;
}
.team_right p{
  margin-top:5px;
}
</style>
