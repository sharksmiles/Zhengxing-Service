<template>
  <div>
    <div v-if="$route.params.id==1">
      <div v-for=" item in part1" class="containers" >
        <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
    <div class="left">
      <div class="touxiang" :style="'background-image: url('+item.image+')'">
      </div>
    </div>
    <div class="right" style="padding-bottom: 10px;">
      <p>姓名：{{item.post_title}}</p>
      <p>单位：{{item.company}}</p>
      <p>职务：{{item.zhiwu}}</p>
      <p>服务时间：{{item.service_time}}</p>
    </div>
      </div>
  </div>
    <div v-if="$route.params.id==2">
      <div v-for=" item in part2" class="containers" >
        <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
        <div class="left">
          <div class="touxiang" :style="'background-image: url('+item.image+')'">
          </div>
        </div>
        <div class="right">
          <p>姓名：{{item.post_title}}</p>
          <p>电话：{{item.tel}}</p>
          <p>单位：{{item.company}}</p>
          <p>职务：{{item.zhiwu}}</p>
          <p>服务范围：{{item.rang}}</p>
          <p>服务时间：{{item.service_time}}</p>
        </div>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
        <router-link  tag="div"  :to='"/Details/"+data.id' class="my-goods" v-for="(data,index) in part3" :key="index">
          <div class="img"><img :src="data.image" ></div>
          <div class="item_name">
            <h4>{{data.post_title}}</h4>
            <p>{{data.create_time}}</p>
          </div>
        </router-link>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4">
      <router-link  tag="div"  :to='"/Details/"+data.id' class="my-goods" v-for="(data,index) in part4" :key="index">
        <div class="img"><img :src="data.image" ></div>
        <div class="item_name">
          <h4>{{data.post_title}}</h4>
          <p>{{data.create_time}}</p>
        </div>
    </router-link>
    </div>
  </div>
</template>

<script>
import test1 from '../common/test1.vue'
export default {
  components: {
    test1
  },
  data () {
    return {
      part1: [],
      part2: [],
      part3: [],
      part4: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Law/index', {
    })
      .then(function (res) {
        that.part1 = res.data.data
      })
    this.$axios.get('/Law/law', {
    })
      .then(function (res) {
        that.part2 = res.data.data
      })
    this.$axios.get('/Law/hanxing', {
    })
      .then(function (res) {
        that.part3 = res.data.data
      })
    this.$axios.get('/Law/shuofa', {
    })
      .then(function (res) {
        that.part4 = res.data.data
        console.log(that.part4)
      })
  }

}
</script>
<style scoped>

  .containers{
    display: flex;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 1px 1px 3px #e0e0e0;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    position: relative;
    background-color: #fff;
  }
  .iphone{
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
  }
  .iphone img{
    width: 100%;
  }
  .left{
    flex: 1;
  }
  .left .touxiang{
    height: 110px;
    width: 80px;
    background-size: cover;
    margin: 0 auto;
    border-radius: 10px;
    background-position: center center;
  }
  .right{
    flex: 2;
    font-size: 14px;
  }
  .right p{
    margin-bottom:5px;
  }
  .my-goods{
    display: flex;
    padding: 20px 10px 20px 20px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 1px 1px 3px #e0e0e0;
    margin-top: 10px;
    background-color: #fff;

  }
  .my-goods .img {
    width:   30%;
  }
  .my-goods .img img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .item_name{
    width:80%;
    font-size: 14px;
    padding-left: 10px;
    padding-right:10px;
    margin-top: 10px;
  }
  .item_name h4{
    margin-bottom:10px;
  }
  .item_name p{
    font-size: 13px;
    color: #A5ABD4;
  }
  .my-goods span{
    width: 20%;
    font-size: 12px;
    padding-left: 5px;
    padding-right:5px;
    margin-top: 30px;
  }
</style>
