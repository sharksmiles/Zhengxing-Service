<template>
  <div>
    <div v-if="$route.params.id==1">
      <router-link  tag="div"  :to='"/Details/"+item.id' v-for="(item,index) in part1" :key="index" class="life" >
     <div class="life_img" :style="'background-image: url('+item.image+');'"></div>
      <div class="life_desc">
        <p>{{item.post_content}}</p>
      </div>
      </router-link>
    </div>
    <div v-if="$route.params.id==2" >
      <div class="red_wuye">
        <img src="../../../static/img/红色物业_02.jpg" alt="">
        <router-link  tag="div"  to='/Repair' class="one"><img src="../../../static/img/one.png" alt=""></router-link>
        <router-link  tag="div"  to='/Team_Service' class="two"><img src="../../../static/img/two.png" alt=""></router-link>
        <router-link  tag="div"  to='/Complaint'  class="three"><img src="../../../static/img/three.png" alt=""></router-link>
      </div>
    </div>
    <div v-if="$route.params.id==3" >
      <router-link  tag="div"  :to='"/Details/"+item.id' class="healthy"  v-for="(item,index)  in part3" :key="index" >
      <div class="healthy_left"><img :src="item.image" alt=""></div>
      <div class="healthy_right">
        <p>单位：{{item.post_title}}</p>
        <p>地址：{{item.location}}</p>
        <p>服务时间：{{item.service_time}}</p>
        <p>电话：{{item.tel}}</p>
      </div>
        <div class="healthy_img"> <img src="../../../static/img/biaoji.png" alt=""></div>
      </router-link>
      </div>
    <div v-if="$route.params.id==4" class="part4" v-for="item in part4">
      <div class="iphone"><a href="tel:item.tel"><img src="../../../static/img/iphone.png" alt=""></a></div>
      <h4>{{item.post_title}}</h4>
      <p>服务内容：{{item.zhiwu}}</p>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      part1: [],
      part3: [],
      part4: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Life/index ', {
    })
      .then(function (res) {
        that.part1 = res.data.data
      })
    this.$axios.get('/Life/healthy ', {
    })
      .then(function (res) {
        that.part3 = res.data.data
      })
    this.$axios.get('/Life/trading ', {
    })
      .then(function (res) {
        that.part4 = res.data.data
      })
  }
}
</script>
<style scoped>
.life{
  display: flex;
  padding: 10px 10px 10px 15px;
  border-top:1px solid #e0e0e0;
  border-bottom:1px solid #e0e0e0;
  margin-bottom:10px;
  background-color: #fff;
}
.life .life_img{
  flex: 1;
  padding: 5px;
  height: 80px;
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  background-size:cover;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537434939218&di=f45e283455c8b01f963d1377260c360c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F6c224f4a20a44623d8c8f4359e22720e0cf3d763.jpg);
  background-position: center center;
  box-shadow: 2px 2px 4px #a2a4a7;
  margin-bottom:10px;
}
  .life .life_desc{
    flex: 3;
    padding-left:10px;
    padding-top:5px;
  }
.life .life_desc p{
  font-size: 13px;
  color: #a2a4a7;
  line-height: 20px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.red_wuye{
  background-color: #F6F4E8;
  padding-bottom:30px;
}
.red_wuye img{
  width: 100%;

}
.red_wuye div{
  display: inline-block;
  width:100px;
  height: 50px;

}
.red_wuye .one{
  position: absolute;
  top:85%;
  left: 5%;
}
.red_wuye .two{
  position: absolute;
  top:82.5%;
  left: 35%;
}
.red_wuye .three{
  position: absolute;
  top:86.5%;
  left: 70%;
}
.healthy{
  margin-top:5px;
  padding: 10px 15px;
  background-color: #fff;
  display: flex;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
.healthy .healthy_left{
  flex: 1;
  padding-right:10px;
  height: 100px;
}
.healthy .healthy_left img{
  width: 100%;
  height: 100%;
}
.healthy .healthy_right{
  margin-top:10px;
  flex: 2;
  font-size: 13px;
}
.healthy .healthy_right p{
  margin-top: 5px;
}
.healthy_img{
  width: 10%;
}
.healthy_img img{
  width: 40px;
  margin-top:250%;
}
  .part4{
    margin-top:10px;
    padding: 15px 15px 10px 20px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    height: 60px;
  }
.iphone{
  width: 25px;
  height: 25px;
  position: absolute;
  right: 5%;
}
.iphone img{
  width: 100%;
}
.part4 p{
  margin-top:5px;
}
</style>
