<template>
<div style="background-color: #fff;">
  <h4 class="title">{{pages.post_title}}</h4>
  <p class="time">{{pages.create_time}}</p>
  <div id="sbcontent" v-html="pages.post_content"></div>
</div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      pages: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Article/index', {
      params: {
        id: that.id
      }
    })
      .then(function (res) {
        that.pages = res.data.data
      })
      .then(()=>{
        sbcontent.innerHTML=sbcontent.textContent
      })
  }
}
</script>
<style scoped>
#sbcontent{
  padding-left: 10px;
  padding-right: 10px;
}
.time{
  margin-left: 5%;
  font-size: 14px;
  color: #cfcfcf;
  padding-top: 5px;
}
  .title{
    margin-left: 5%;
    padding-top: 10px;
  }
</style>
