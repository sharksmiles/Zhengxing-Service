<template>
  <div>
    <div v-if="$route.params.id==1">
    <div class="containers" v-for="(item,index) in part1" :key="index">
      <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
    <div class="left">
      <div class="touxiang" :style="'background-image: url('+item.image+')'">
      </div>
    </div>
        <div class="right">
          <router-link  tag="div"  :to='"/Details/"+item.id'>
          <h4 style="margin-bottom: 10px;">{{item.post_title}}</h4>
          <p>负责人：{{item.name}}</p>
          <p>地址：{{item.location}}</p>
          <p>人数：{{item.number}}人</p>
          <p>简介：{{item.post_content}}</p>
          </router-link>
        </div>
      <router-link  tag="div"  :to='"/joins/"+item.id+"/1"'> <button  class="button1">我要参加</button></router-link>
      </div>
  </div>
    <div v-if="$route.params.id==2">
      <div v-for="(item,index) in part2" :key="index" class="containers" >
        <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
        <div class="left">
          <div class="touxiang" :style="'background-image: url('+item.image+')'">
          </div>
        </div>
        <div class="right">
          <router-link  tag="div"  :to='"/Details/"+item.id'>
          <h4 style="margin-bottom: 10px;">{{item.post_title}}</h4>
          <p>开始时间：{{item.start_time}}</p>
          <p>结束时间：{{item.end_time}}</p>
          <p>活动地点：{{item.location}}</p>
          <p>联系人：{{item.name}}</p>
          <p>联系电话：{{item.tel}}</p>
          </router-link>
        </div>
        <router-link  tag="div"  :to='"/joins/"+item.id+"/2"'><button  class="button1">我要参加</button></router-link>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <div v-for="(data,index) in part3" :key="index">
        <router-link  tag="div"  :to='"/Details/"+data.id'>
        <div class="my-goods1">
          <div class="img"><img :src="data.image" ></div>
          <div class="item_name">
            <h4>{{data.post_title}}</h4>
            <p>{{data.post_content}}</p>
          </div>
        </div>
        </router-link>
        <router-link  tag="div"  :to='"/joins/"+data.id+"/3"'> <button class="button2">我要参与</button></router-link>
      </div>
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
      part3: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Care/index', {
    })
      .then(function (res) {
        that.part1 = res.data.data
      })
    this.$axios.get('/Care/activity', {
    })
      .then(function (res) {
        that.part2 = res.data.data
      })
    this.$axios.get('/Care/time', {
    })
      .then(function (res) {
        that.part3 = res.data.data
        console.log(that.part3)
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
    padding-bottom:30px;
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
    padding-left:10px;
  }
  .left .touxiang{
    height: 120px;
    width: 120px;
    background-size: cover;
    margin: 20px auto;
    border-radius: 5px;
    background-position: center center;
  }
  .right{
    flex: 2;
    font-size: 14px;
    padding-left:20px;
  }
  .right p{
    margin-bottom:5px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .button1{
    width: 70px;
    height: 25px;
    position: absolute;
    right: 20px;
    bottom: 10px;
    border-radius: 5px;
    background-color: #0D65AC;
    color: #fff;
    border: 1px solid #0D65AC;
  }
  .button2{
    width: 70px;
    height: 25px;
    border-radius: 5px;
    background-color: #0D65AC;
    color: #fff;
    border: 1px solid #0D65AC;
    margin-right:20px;
    margin-left: 80%;
  }
  .bottom_footer{
    padding: 20px 10px 20px 20px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 1px 1px 3px #e0e0e0;
    margin-top: 10px;
    background-color: #fff;
  }
  .my-goods1{
    display: flex;
  }
  .my-goods1 .img {
    width:   30%;
    height: 120px;
  }
  .my-goods1 .img img{
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
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .my-goods span{
    width: 20%;
    font-size: 12px;
    padding-left: 5px;
    padding-right:5px;
    margin-top: 30px;
  }
</style>
