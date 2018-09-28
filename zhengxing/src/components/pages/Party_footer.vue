<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==1">
      <div class="content">
        <div class="content_img">
          <img src="../../../static/img/汉正街全景.png" alt="">
        </div >
        <div class="content_text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;汉兴街地处江汉区“北大门”，南起京广铁路，北临张公提，东至地铁6号线，西抵园博园；寓意“江汉区兴旺腾飞”而得名，街区面积10.08平方公里，下辖和祥里、杨汊湖
          、常二、常三、常四、民航里、水仙里、姑嫂树、阳光、华苑里、新华家园、华安里、新松里、玉兰里、常远里、红梅里16个社区，涵盖南方航空、中国电信、中级人民法院、
          市委党校等省级市级单位，常驻人口15万余人，流动人口6万余人。
        </div>
        <div class="content_img1">
          <img src="../../../static/img/汉正街地图.png" alt="">
        </div >
        <p>机构设置</p>
        <div class="content_text1">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中共汉兴街工委、汉兴街办事处位于杨汊湖特8号，是江汉区委、区政府的派出机构，主要职贡为开展基层党建、加强公共管理、提供公共服务和维护公共安全等。内设党建办公室、安全办公室、
          、公共管理办公室、公共服务办公室、公共管理办公室、公共服务办、区域发展办公室、综合办公室等6个职能科室、政务服务中心、网格化综合管理中心、综合执法协调办公室3个
          综合平台。
        </div>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==2">
      <router-link  tag="div"  :to='"/Details/"+item.id' v-for="(item,index) in part2" :key="index">
        <test :data="item"  ></test>
      </router-link>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <router-link  tag="div"  :to='"/Details/"+item.id' v-for="(item,index) in part3" :key="index">
        <test :data="item" :key="index" ></test>
      </router-link>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4||$route.params.id==4.1||$route.params.id==4.2||$route.params.id==4.3||$route.params.id==4.4">
       <div class="my_point">
         <div class="my_point_left">
          <div class="touxiang"></div>
           <div class="points">
             <p>我的积分</p>
             <p>100积分<img src="../../../static/img/back.png" alt=""></p>
           </div>
         </div>
         <div class="my_point_right">
           <img src="../../../static/img/五边形.png" alt="">
         </div>
       </div>
      <Links :tar="links"></Links>
      <div v-if="$route.params.id==4.1||$route.params.id==4">
        <test1 :data="item" v-for="(item,index) in part4" :key="index" >
          <button>认领</button>
        </test1>
      </div>
      <div v-if="$route.params.id==4.2">
        <test1 :data="item" v-for="(item,index) in part4_1" :key="index" >
          <button @click="exchange(item.id)">兑换</button>
        </test1>
      </div>
      <div v-if="$route.params.id==4.3">
        <test1 :data="item" v-for="(item,index) in part4_2" :key="index" >
          <button style="background-color: #fff;color: #e0e0e0; border: 1px solid #a2a4a7" >已兑换</button>
        </test1>
      </div>
      <div v-if="$route.params.id==4.4">
        <div>1、规则</div>
      </div>
    </div>
  </div>
</template>
<script>
import test from '../common/test.vue'
import test1 from '../common/test1.vue'
import Links from '../common/Links.vue'
export default {
  name: 'Party_footer',
  components: {
    test,
    Links,
    test1
  },
  data () {
    return {
      links: [
        {link: '/Party_footer/4.1', title: '发布'},
        {link: '/Party_footer/4.2', title: '兑换'},
        {link: '/Party_footer/4.3', title: '查询'},
        {link: '/Party_footer/4.4', title: '规则'}
      ],
      part1: [],
      part2: [],
      part3: [],
      part4: [],
      part4_1: [],
      part4_2: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Dangjian/street', {
    })
      .then(function (res) {
        that.part1 = res.data.data
      })
    this.$axios.get('/Dangjian/index', {
    })
      .then(function (res) {
        that.part2 = res.data.data
      })
    this.$axios.get('/Dangjian/work', {
    })
      .then(function (res) {
        that.part3 = res.data.data
      })
    this.$axios.get('/Time/index', {
    })
      .then(function (res) {
        that.part4 = res.data.data
      })
    this.$axios.get('/Time/exchange', {
    })
      .then(function (res) {
        that.part4_1 = res.data.data
      })
    this.$axios.get('/Time/select', {
      params: {
        openid: 123456
      }
    })
      .then(function (res) {
        that.part4_2 = res.data.data
        console.log(that.part4_2)
      })
  },
  methods: {
    exchange (id) {
      this.$axios.get('Time/exchange_log', {
        params: {
          openid: 123456,
          id: id
        }
      })
        .then(function (res) {
          console.log(res)
        })
    }
  }
}
</script>
<style scoped>
.content{
  background-image: url(../../../static/img/hanxing.jpg);
  -webkit-background-size:100%;
  background-size:100%;
  background-repeat:no-repeat;
  border: 1px solid #e0e0e0;
  padding-bottom: 90px;
}
.content_img{
  margin: 55% auto;
  margin-bottom:0;
  width: 75%;
  height: 150px;
  border: 2px solid darkred;
  padding: 3px;
}
.content_img1{
  margin: 6% auto;
  margin-bottom:0;
  width: 75%;
  height: 150px;
  border: 2px solid darkred;
  padding: 3px;
}
.content_img1 img{
  width: 100%;
  height: 100%;
}
.content_img img{
  width: 100%;
  height: 100%;
}
.content_text{
  margin: 3% auto;
  width: 85%;
  font-size: 13px;
}
.content_text1{
  margin: 0% auto;
  width: 85%;
  font-size: 13px;
}
.content p{
  text-align: center;
  margin-top: 10px;
}
.my_point{
  height: 120px;
  background-image: url(../../../static/img/point.png);
  background-size:cover;
  display: flex;
}
.my_point_left{
  width: 50%;
  display: flex;
}
.my_point_left p{
  flex: 1;
}
.my_point .touxiang{
  height:60px;
  width: 60px;
  border-radius: 50%;
  -webkit-background-size:cover;
  background-size:cover;
  background-image: url(http://img5.imgtn.bdimg.com/it/u=1263701138,2111296431&fm=26&gp=0.jpg);
  margin-left:30px;
  margin-top:20px;
}
.points{
  margin-top:30px;
  margin-left:5px;
  color: #fff;
}
.points p img{
  width: 16px;
  position: relative;
  top:2px;
}
.my_point_right{
  width: 50%;
}
.my_point_right img{
  width: 120px;
  float: right;
  margin-top:1%;
  margin-right:15%;
}
</style>
