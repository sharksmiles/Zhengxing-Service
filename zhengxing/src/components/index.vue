<template>
    <div>
      <div class="banner">
        <img src="../../static/img/wangge@2x.png" alt="">
      </div>
      <div class="nav">
        <router-link  tag="div"  to='/Party_service' class="nav_left"><img src="../../static/img/dang@2x.png" alt=""><p>党建引领</p></router-link>
        <div class="nav_right">
          <router-link  tag="div"  to='/Affairs'><img src="../../static/img/zhengwu@2x.png" alt=""><p>政务服务</p></router-link>
          <router-link  tag="div"  to='Life'><img src="../../static/img/shenghuo@2x.png" alt=""><p>生活服务</p></router-link>
          <router-link  tag="div"  to='/Laws'><img src="../../static/img/falv@2x.png" alt=""><p>法律服务</p></router-link>
          <router-link  tag="div"  to='/Style'><img src="../../static/img/wenti@2x.png" alt=""><p>文体服务</p></router-link>
          <router-link  tag="div"  to='/Love'><img src="../../static/img/zhiy@2x.png" alt=""><p>关爱服务</p></router-link>
          <router-link  tag="div"  to='/Party_member' class="nav_left"><img src="../../static/img/dangy@2x.png" alt=""><p>党员服务</p></router-link>
        </div>
      </div>
      <div class="news" v-for=" item in pages" >
        <div class="title">
          <span class="title_left">党建新闻</span>
          <router-link  tag="div"  to='/Party_footer/2' class="title_right">
            <span>更多</span><img src="../../static/img/going.png" alt="">
          </router-link >
        </div>
        <router-link  tag="div"  :to='"Details/"+item.id' class="title_content">
          <div class="title_content_left" >
          <p>{{item.post_title}}</p>
          <p>{{item.create_time}}</p>
          </div>
          <div class="title_content_right" >
            <div class="img" :style="'background-image:url('+item.image+')'"></div>
          </div>
        </router-link>
    </div>
      </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pages: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Index/index', {
    })
      .then(function (res) {
        that.pages = res.data.data
      })
  }
}
</script>

<style scoped>
.banner{
  background-color: #fff;
}
  .banner img{
    width: 100%;
    height: 100%;
  }
  .nav{
    display: flex;
    background-color: #fff;
    padding-top:5px;
    padding-bottom:5px;
  }
  .nav .nav_left{
    flex: 1;
    text-align: center;
    padding-top: 30px;
    padding-bottom:30px;
    font-size: 14px;
  }
.nav .nav_left img{
  width: 32px;
  margin-bottom:5px;

}
.nav .nav_right{
    flex: 3;
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  }
.nav .nav_right div{
  width: 33.1%;
  text-align: center;
  padding-top:5px;
  padding-bottom:10px;
}
.nav .nav_right div img{
  width: 25px;
  height: 25px;
  margin-bottom:5px;
}
.news{
  margin-top: 10px;
}
.title{
  background-color: #fff;
  padding-top:10px;
  height: 30px;
}
  .title_left{
    display: inline-block;
    float: left;
    border-left: 3px solid red;
    padding-left:5px;
    margin-left:20px;

  }
.title_right{
  display: inline-block;
  float: right;
  margin-right:10px;
}
.title_right span{
  position: relative;
  top:-3px
}
.title_right img{
  width: 20px;
}
.title_content{
  background-color: #fff;
  display: flex;
  padding-bottom:10px;
  padding-top:10px;;
}
.title_content_left{
  flex: 6;
  padding-left:10px;
}
.title_content_left p{
  margin-top:5px;
}
.title_content_right{
  flex: 4;
  padding-left: 10px;
  padding-right:10px;
}
  .title_content_right .img{
    width: 150px;
    height: 80px;
    background-color: bisque;
    background-size:cover;
    background-position: center center;
  }
</style>
