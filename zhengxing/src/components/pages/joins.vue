<template>
<div style=" margin-top: 10px; border-top: 1px solid #e0e0e0;">
  <div class="form_title">
    <p class="form_left">活动名称</p><div class="form_right">{{pages.post_title}}</div>
  </div>
  <div class="form_title">
    <p class="form_left">预约时间</p><div class="form_right"><input type="date" v-model="yuyue_time"></div>
  </div>
  <div class="form_title">
    <p class="form_left">联系人</p><div class="form_right"><input type="text" placeholder="请输入姓名" v-model="name" ></div>
  </div>
  <div class="form_title">
    <p class="form_left">联系电话</p><div class="form_right"><input type="text" placeholder="请输入联系电话" v-model="tel"></div>
  </div>
  <div class="form_title">
    <p class="form_left">活动方案</p><div class="form_right"><textarea rows="5" cols="20" placeholder="请输入活动方案" v-model="content"></textarea></div>
  </div>
  <button class="button" @click="join">提交</button>
</div>
</template>
<script>
export default{
  props: {
    id: '',
    type: ''
  },
  data () {
    return {
      pages: {},
      openid: '123456',
      name: '',
      tel: '',
      yuyue_time: '',
      content: '',
      code: ''
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Care/join', {
      params: {
        id: that.id,
        openid: that.openid
      }
    })
      .then(function (res) {
        console.log(res.data)
        that.pages = res.data.data
      })
  },
  methods: {
    join () {
      let that = this
      this.$axios.get('/Care/tijiao', {
        params: {
          id: that.id,
          openid: that.openid,
          type: that.type,
          name: that.name,
          tel: that.tel,
          yuyue_time: that.yuyue_time,
          content: that.content
        }
      })
        .then(function (res) {
          console.log(res.data)
          if (res.data.code == 1) {
            alert('预约成功！')
            window.history.go(-1);
          } else {
            alert('缺少参数，提交失败！')
          }
        })
    }
  }
}
</script>
<style scoped>
  .form_title{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #fff;
  }
  .form_title .form_left{
    flex: 3;
    padding-left: 20px;
  }
  .form_title input{
    border: 1px solid #fff;
  }
  .form_title .form_right{
    flex: 8;
    padding-left: 10px;
  }
  .form_title .form_left2{
    width: 50%;
    display: flex;
  }
  .form_title .form_left2 span{
    width: 50%;
    padding-left: 20px;
  }
  .form_title .form_left2 input{
    width: 50%;
    padding-left: 50px;
  }
  .form_title .form_right2{
    flex: 7;
  }
  .form_title textarea{
   width: 80%;
    border: 1px solid #fff;
  }
  .form_title .form_right2 span{
    width: 50%;
    padding-left: 20px;

  }
  .form_title .form_right2 input{
    width: 50%;
    padding-left: 20px;
  }
  .button{

    width: 100%;
    padding: 12px;
    margin-top: 30px;
    margin-bottom: 20px;

    border-radius: 5px;
    background-color: #19Ab18;
    border: 1px solid #19Ab18;
    color: #fff;
  }
</style>
