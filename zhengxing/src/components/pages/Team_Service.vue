<template>
  <div>
  <div class="team" v-for="item in page">
    <div class="team_left"></div>
    <div class="team_right">
      <p>姓名：王玉巧</p>
      <p>电话：18702799373</p>
      <p>工种：电工</p>
      <p>所属物业公司：汉兴街社区</p>
    </div>
  </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      page:["1","2","3"]
    }
  }
}
</script>
<style>
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
.team_right{
  flex: 3;
  padding-left:20px;
}
.team_right p{
  margin-top:5px;
}
</style>
