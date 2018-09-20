<template>
  <div>
    <div v-if="$route.params.id==1">
      <div v-for=" item in page[0]" class="containers" >
        <div class="iphone"><img src="../../../static/img/iphone.png" alt=""></div>
    <div class="left">
      <div class="touxiang" :style="'background-image: url('+item.url+')'">
      </div>
    </div>
        <div class="right">
          <h4 style="margin-bottom: 10px;">四季花城舞蹈队</h4>
          <p>负责人：XXX</p>
          <p>地址：XXXXXXXX</p>
          <p>人数：13人</p>
          <p>简介：舞蹈队成立于2002年，有居住在XXXXXXX,现有团员13人现有团员13人现有团员13人现有团员13人</p>
        </div>
        <button  class="button1">我要参加</button>
      </div>
  </div>
    <div v-if="$route.params.id==2">
      <div v-for=" item in page[0]" class="containers" >
        <div class="left">
          <div class="touxiang" :style="'background-image: url('+item.url+')'">
          </div>
        </div>
        <div class="right">
          <h4 style="margin-bottom: 10px;">老年合唱团</h4>
          <p>地点：XXXXXXXX</p>
          <p>可容纳人数：30人</p>
          <p>开放时间：每周三上午</p>
          <p>建议功能：会议室、舞蹈室</p>
        </div>
        <button  class="button3">我要预约</button>
      </div>
    </div>
    <div v-if="$route.params.id==3" v-for="data in pages1">
      <div v-for=" item in page[0]" class="containers" >
        <div class="left">
          <div class="touxiang" :style="'background-image: url('+item.url+')'">
          </div>
        </div>
        <div class="right">
          <h4 style="margin-bottom: 10px;">健康义诊</h4>
          <p>活动时间：XXX</p>
          <p>活动地点：XXXXXXXX</p>
          <p>联系人：</p>
          <p>联系电话：</p>
          <p>参加理由</p>
        </div>
        <router-link  tag="div"  to='/join'> <button  class="button1">我要参加</button></router-link>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4" v-for="data in pages1">
      <div class="my-goods1">
        <div class="img"><img :src="data.img" ></div>
        <div class="item_name">
          <h4>{{data.name}}</h4>
          <p>{{data.desc}}</p>
        </div>
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
      page: [
        [{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584272840&di=c734001b2e00fcbbe362c142a49fcc08&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2F4gAu4BIv%2FEgfuEtMUe_-w4g-Ue_fuelUWhmMTGVuMiNyWKHmHEb5n9NHv7uaRG_j.jpg',
          name: '陈武',
          unit: '单位：湖北中国（西桥社区）',
          position: '合伙人律师',
          tel: '12313123132',
          time: '服务时间：每周四-早上 8:30-12:00 下午14：30-17:30'}, {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584272840&di=c734001b2e00fcbbe362c142a49fcc08&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2F4gAu4BIv%2FEgfuEtMUe_-w4g-Ue_fuelUWhmMTGVuMiNyWKHmHEb5n9NHv7uaRG_j.jpg',
          name: '陈武',
          unit: '单位：湖北中国（西桥社区）',
          position: '合伙人律师',
          tel: '12313123132',
          time: '服务时间：每周四-早上 8:30-12:00 下午14：30-17:30'}],
        [{url: 'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg',
          name: '晨曦与',
          unit: '单位：湖北魏晨律师事务所（西桥社区）',
          position: '合伙人律师',
          tel: '138718152123121',
          time: '服务时间：每周四-早上 8:30-12:00 下午14：30-17:30'}, {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584272840&di=c734001b2e00fcbbe362c142a49fcc08&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2F4gAu4BIv%2FEgfuEtMUe_-w4g-Ue_fuelUWhmMTGVuMiNyWKHmHEb5n9NHv7uaRG_j.jpg',
          name: '陈武',
          unit: '单位：湖北中国（西桥社区）',
          position: '合伙人律师',
          tel: '12313123132',
          time: '服务时间：每周四-早上 8:30-12:00 下午14：30-17:30'}],
        [{title: '湖北中盛汇金项目管理有限公司',
          content: '江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584333945&di=8c85662e59e753e9c6889b179d33740a&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201506%2F10%2F20150610153043_8LzPk.jpeg' },
        {title: '湖北中盛汇金项目管理有限公司',
          content: '江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584333945&di=8c85662e59e753e9c6889b179d33740a&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201506%2F10%2F20150610153043_8LzPk.jpeg' }
        ]
      ],
      pages:[
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今上线今天号加班班24号前要上线要上线上线要上线上线要上线上线要上线上线要上线上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今天要加班加班加班24号前要上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:180,desc:"今天要加班加班加班24号前要上线要上线"}
      ],
      pages1:[
        {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537355494180&di=d8d5b49ab4191c5ce687f0b5dae69e89&imgtype=0&src=http%3A%2F%2Fimg008.hc360.cn%2Fy4%2FM06%2F1B%2F6D%2FwKhQiFTTGxmEbW1LAAAAAN1e-tk700.jpg",name:"清风提装卫生纸",price:30,desc:"今上线今天号加班班24号前要上线要上线上线要上线上线要上线上线要上线上线要上线上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今天要加班加班加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线加班24号前要上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:180,desc:"今天要加班加班加班24号前要上线要上线"}
      ],
    }
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
    padding-bottom:40px;
    padding-top: 30px;
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
    height: 140px;
    width: 100%;
    background-size: cover;
    margin: 0 auto;
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
  .button3{
    width: 70px;
    height: 25px;
    border-radius: 5px;
    background-color: #0D65AC;
    color: #fff;
    border: 1px solid #0D65AC;
    margin-top:110px;
    margin-right:15px;
    margin-left:3px;
  }

  .bottom_footer{
    padding: 20px 10px 20px 15px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 1px 1px 3px #e0e0e0;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .my-goods1{
    display: flex;
  }
  .my-goods1 .img {
    width:25%;
    height: 80px;
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
    padding-right:5px;
    margin-top: 0px;
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
