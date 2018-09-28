<template>
  <div class="complaint">
    <p>问题标题:</p>
    <input type="text" v-model="title">
    <p>问题内容:<span>(请清楚、详细的描述您的问题)</span></p>
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <p>姓名:</p>
    <input type="text" v-model="name">
    <p>联系电话:</p>
    <input type="text" v-model="tel">
    <div class="button">
      <button @click="comit">提交</button>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      openid: '123456',
      title: '',
      content: '',
      name: '',
      tel: ''
    }
  },
  methods: {
    comit () {
      let that = this
      this.$axios.get('/Property/message', {
        params: {
          openid: that.openid,
          title: that.title,
          content: that.content,
          name: that.name,
          tel: that.tel
        }
      })
        .then(function (res) {
          console.log(res.data.code)
          if (res.data.code == 1) {
            alert('问题反馈成功！')
            window.history.go(-1);
          } else {
            alert('提交失败！')
          }
        })
    }
  }
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
