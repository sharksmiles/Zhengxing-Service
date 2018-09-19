<template>
  <div>
    <div v-if="$route.params.id==1">
      <div v-for=" item in page[0]" class="containers" >
        <div class="iphone"><img src="../../../static/img/iphone.png" alt=""></div>
    <div class="left">
      <div class="touxiang" :style="'background-image: url('+item.url+')'">
      </div>
    </div>
    <div class="right" style="padding-bottom: 10px;">
      <p>姓名：{{item.name}}</p>
      <p>{{item.unit}}</p>
      <p>职务：{{item.position}}</p>
      <p>{{item.time}}</p>
    </div>
      </div>
  </div>
    <div v-if="$route.params.id==2">
      <div v-for=" item in page[0]" class="containers" >
        <div class="iphone"><img src="../../../static/img/iphone.png" alt=""></div>
        <div class="left">
          <div class="touxiang" :style="'background-image: url('+item.url+')'">
          </div>
        </div>
        <div class="right">
          <p>姓名：{{item.name}}</p>
          <p>{{item.unit}}</p>
          <p>职务：{{item.position}}</p>
          <p>服务范围：XXXXXXX</p>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
        <div class="my-goods" v-for="data in pages">
          <div class="img"><img :src="data.img" ></div>
          <div class="item_name">
            <h4>{{data.name}}</h4>
            <p>{{data.desc}}</p>
          </div>
        </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4">
      <div class="my-goods" v-for="data in pages1">
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
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30,desc:"今天要加班加班加班24号前要上线要上线"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:180,desc:"今天要加班加班加班24号前要上线要上线"}
      ],
    }
  }

}
</script>
<style>

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
