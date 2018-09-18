<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==1">
      <div class="content">
        <div class="content_img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537266979767&di=cf430db8ac0be5550dc31122bd3c096b&imgtype=0&src=http%3A%2F%2Ft1.hddhhn.com%2Fuploads%2Ftu%2F201608%2F339%2F1.jpg" alt="">
        </div >
        <div class="content_text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那女子肌肤胜雪，双目犹似一泓清水，顾盼之际，
          自有一番清雅高华的气质，让人为之所摄、自惭形秽、不敢亵渎。但那冷傲灵动中颇有勾魂摄魄之态，
          又让人不能不魂牵蒙绕。
          似喜非喜含情目－－林黛玉明眸皓齿 明眸善睐 蛾眉皓齿 蛾眉曼睩 美目流盼 美目顾盼</div>
        <div class="content_img1">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537266979767&di=cf430db8ac0be5550dc31122bd3c096b&imgtype=0&src=http%3A%2F%2Ft1.hddhhn.com%2Fuploads%2Ftu%2F201608%2F339%2F1.jpg" alt="">
        </div >
        <p>机构设置</p>
        <div class="content_text1">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那女子肌肤胜雪，双目犹似一泓清水，顾盼之际，
          自有一番清雅高华的气质，让人为之所摄、自惭形秽、不敢亵渎。但那冷傲灵动中颇有勾魂摄魄之态，
          又让人不能不魂牵蒙绕。
          似喜非喜含情目－－林黛玉明眸皓齿 明眸善睐 蛾眉皓齿 蛾眉曼睩 美目流盼 美目顾盼</div>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==2">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===0" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===1" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
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
      <div v-if="$route.params.id==4.1">
        <test1 :my_goods="my_goods">
          <!--<span>{{item.price}}积分</span>-->
          <button>认领</button>
        </test1>
      </div>
      <div v-if="$route.params.id==4.2">
        <test1 :my_goods="my_goods">
          <!--<button>兑换</button>-->
        </test1>
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
          {link: '/Party_footer/4.4', title: '规则'},
      ],
      pages: [
        [ {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537268621843&di=e32c371b2ee330f87c3d55582f3510fc&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D588577760%2C3156489458%26fm%3D214%26gp%3D0.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537266979767&di=cf430db8ac0be5550dc31122bd3c096b&imgtype=0&src=http%3A%2F%2Ft1.hddhhn.com%2Fuploads%2Ftu%2F201608%2F339%2F1.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'http://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwXyIH_6lAAqaQFvVqcUAALGZAEDV6AACppY696.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'http://pic1.win4000.com/wallpaper/a/589bfbe3199e6.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'http://pic1.win4000.com/wallpaper/2017-10-23/59ed94c47c64e.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'}
        ],
        [ {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537863840&di=8d6d6d906f9202b8597b37fdb22e8f55&imgtype=jpg&er=1&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb8014a90f603738d27174c33b01bb051f819ec46.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://pic1.win4000.com/wallpaper/2017-11-07/5a014adfb6e02.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://attachments.gfan.com/forum/201510/29/211357lktt6lznzm6noeg1.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://t1.niutuku.com/960/22/22-607802.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://pic1.win4000.com/wallpaper/2017-10-23/59ed94cf18ac1.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'}
        ],
        [{url: 'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'},
          {url: 'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'},
          {url: 'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'}
        ]
      ],
      my_goods:[
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今天要加班加班加班24号前要上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今天要加班加班加班24号前要上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:180,desc:"今天要加班加班加班24号前要上线要上线"}
      ]
    }
  },
  methods: {

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
  background-color: #fff;
  border: 2px solid darkred;
  padding: 3px;
}
.content_img1{
  margin: 6% auto;
  margin-bottom:0;
  width: 75%;
  height: 150px;
  background-color: #fff;
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
