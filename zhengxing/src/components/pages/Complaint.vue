<template>
  <div class="complaint">
    <p>问题标题:</p>
    <input type="text">
    <p>问题内容:<span>(请清楚、详细的描述您的问题)</span></p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <p>姓名:</p>
    <input type="text">
    <p>联系电话:</p>
    <input type="text">
    <div class="button">
      <button>提交</button>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
.complaint{
  padding: 5px 20px;
  margin: 0 auto;
}
  input{
    margin-top:10px;
    width: 100%;
    border: 1px solid #e0e0e0;
    padding-top: 10px;
    padding-bottom:10px;
    border-radius: 5px;
  }
  p{
    margin-top:15px;
  }
  span{
    color: #a3a5a8;
    font-size: 13px;
    margin-left:10px;
  }
textarea{
  width: 100%;
  margin-top:10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
.button{
  text-align: center;
}
  button{
    width: 75%;
    margin-top:30px;
    padding: 5px;
    background-color: #CA0F2E;
    border: 1px solid #CA0F2E;
    color: #fff;
  }
</style>
