<template>
<div>
  <div  v-if="$route.params.id==1">
    <div v-for="(items,index) in part1" :key="index" style="background-color: #fff;">
      <router-link  tag="div"  :to='"/Details/"+items.id'>
      <test1 :data="items" ></test1>
      </router-link>
    </div>
  </div>
  <div  v-if="$route.params.id==2">
      <div class="beijing" style="padding-top: 10px">
    <div @click="zuzhizhuanjiediyi" >&nbsp;&nbsp;一、服务对象<i class="jiantou"><img src="../../../static/img/going.png" alt=""></i></div>
    <dt class="xiala" v-show="zuzhizhuanjieyi">
      <br>&emsp;
    <pre>1、中共党员</pre>
    <pre>2、居住地在汉兴街辖区内</pre>
    <pre>3、符合党组织关系转接有关规定</pre>
    <br>
    </dt>
    <div @click="zuzhizhuanjiedier">&nbsp;&nbsp;二、服务内容<i class="jiantou"><img src="../../../static/img/going.png" alt=""></i></div>
    <dt class="xiala" v-show="zuzhizhuanjieer">
      <br>&emsp;
    <pre>1、省外党组织关系转入</pre>
    <pre>2、省内党组织关系转入</pre>
    <pre>3、党组织关系转出省外</pre>
    <pre>4、党组织关系转出省内</pre>
    <br>
    </dt>
    <div @click="zuzhizhuanjiedisan">&nbsp;&nbsp;三、党组织关系转接流程<i class="jiantou"><img src="../../../static/img/going.png" alt=""></i></div>
    <dt class="xiala" v-show="zuzhizhuanjiesan">
      <br><br>
    <ul class="biaoge" style="float: left;text-align: center; ">
      <h3 style="color:#0560AC; margin-top: 10px">省外转接</h3>&nbsp;
      <li>所在党支部(总支)</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li>汉兴街工委</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li>江汉区委组织部</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li style="height: 7vh">外省县(市,区)及以上党委组织部门</li>
    </ul>
    <ul class="biaoge" style="float: right;text-align: center;">
      <h3 style="color:#0560AC;  margin-top: 10px">省内转接</h3>&nbsp;
      <li>所在党支部(总支)</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li>转出地基党(工)委</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li>转入地基党(工)委</li>
      <li style="border: none;color:#0560AC;">&nbsp;↑&emsp;&emsp;&emsp;&emsp;&emsp;↓</li>
      <li style="height: 7vh">转入党支部(总支)</li>
    </ul>
    <pre style="clear:both;"></pre>
    <br>
    </dt>
    <div @click="zuzhizhuanjiedisi">&nbsp;&nbsp;四、党组织关系转接所需材料<i class="jiantou"><img src="../../../static/img/going.png" alt=""></i></div>
    <dt class="xiala" v-show="zuzhizhuanjiesi">
      <br>&emsp;
    <pre>1、中共党员</pre>
    <pre>2、居住地在汉兴街辖区内</pre>
    <pre>3、符合党组织关系转接有关规定</pre>
    <br>
    </dt>
    <div @click="zuzhizhuanjiediwu">&nbsp;&nbsp;五、党组织关系转接有关规定<i class="jiantou"><img src="../../../static/img/going.png" alt=""></i></div>
    <dt class="xiala" v-show="zuzhizhuanjiewu">
      <br>&emsp;
    <pre>1、中共党员</pre>
    <pre>2、居住地在汉兴街辖区内</pre>
    <pre>3、符合党组织关系转接有关规定</pre>
    <br>
    </dt>
  </div>
  </div>
  <div  v-if="$route.params.id==3" style="background-color: #fff;">
    <router-link  tag="div"  :to='"/Details/"+item.id' class="courses" v-for="(item,index) in part3" :key="index">
      <div class="course_img">
        <img :src="item.image" alt="">
      </div>
      <p>{{item.post_title}}</p>
    </router-link>
  </div>
  <div  v-if="$route.params.id==4" style="background-color: #fff;">
    <div class="form_title">
      <p class="form_left">姓名</p><div class="form_right"><input type="text" v-model="name" placeholder="您的真实姓名" ></div>
    </div>
    <div class="form_title">
      <p class="form_left">性别</p>
      <div class="form_right">
        <label>
          <span style="margin-right: 3px">男</span>
          <input type="radio" value="男"  id="man" v-model="sex" style="margin-right: 20px">
          <span style="margin-right: 3px">女</span>
          <input type="radio" value="女" v-model="sex">
        </label>
      </div>
    </div>
    <div class="form_title">
      <p class="form_left">出生日期</p><div class="form_right"><input type="date" v-model="birthday"></div>
    </div>
    <div class="form_title">
      <div class="form_left2"><span>民族</span><input type="text" placeholder="汉" v-model="nation"></div>
      <div class="form_right2"><span>籍贯</span><input type="text" placeholder="湖北武汉" v-model="native_place"></div>
    </div>
    <div class="form_title">
      <p class="form_left">入党日期</p><div class="form_right"><input type="date" v-model="riqi"></div>
    </div>
    <div class="form_title">
      <p class="form_left">所在支部</p>
      <div class="form_right">
        <select style="padding: 5px 10px" v-model="dzb_id">
          <option v-for="item in dzb" :value='item.id' >  {{item.title}}  </option>
          <!--<option value="2">   第一党支部   </option>-->
          <!--<option value="3">   第三党支部   </option>-->
          <!--<option value="4">   第四党支部   </option>-->
        </select>
      </div>
    </div>
    <div class="form_title">
      <p class="form_left">党内职务</p><div class="form_right"><input type="text" placeholder="填写您所在党内职务" v-model="zhiwu"></div>
    </div>
    <div class="form_title">
      <p class="form_left">联系电话</p><div class="form_right"><input type="text" placeholder="填写您的联系电话"  v-model="tel"></div>
    </div>
    <div class="form_title">
      <p class="form_left">现居住地</p><div class="form_right"><input type="text" placeholder="填写您目前的居住地址" v-model="address"></div>
    </div>
    <div class="form_title">
      <p class="form_left">进入当前党支部日期</p><div class="form_right"><input type="date" v-model="now_riqi"></div>
    </div>
    <div class="form_title">
      <p class="form_left">兴趣爱好</p><div class="form_right"><input type="text" placeholder="填写您的兴趣爱好" v-model="hobby"></div>
    </div>
    <button class="button" @click="submit" id="submit">提交</button>
  </div>
  <div  v-if="$route.params.id==5" class="part5">
    <div class="content">
      <div class="content_left"><p>工&nbsp;&nbsp;作&nbsp;&nbsp;状&nbsp;&nbsp;况：</p></div>
     <div class="content_right">
       <select>
         <option value="volvo">在&nbsp;&nbsp;职</option>
         <option value="saab">退&nbsp;&nbsp;&nbsp;休</option>
       </select>
     </div>
    </div>
    <div class="content">
      <div class="content_left"><p>收&nbsp;&nbsp;入&nbsp;&nbsp;方&nbsp;&nbsp;式：</p></div>
      <div class="content_right">
        <select>
          <option value="volvo">月&nbsp;薪&nbsp;制</option>
          <option value="saab">年&nbsp;薪&nbsp;制</option>
        </select>
      </div>
    </div>
    <div class="content">
      <div class="content_left"><p>税&nbsp;&nbsp;后&nbsp;&nbsp;收&nbsp;&nbsp;入：</p></div>
      <div class="content_right">
        <input type="text">
        <p>按新颁布的税后比率计算</p>
      </div>
    </div>
    <div class="content">
      <div class="content_left"><p></p></div>
      <div class="content_right">
       <button>计算</button>
      </div>
    </div>
    <div class="content_money">
      <div class="content_money_left"><p>应&nbsp;&nbsp;缴&nbsp;&nbsp;党&nbsp;&nbsp;费：</p></div>
      <div class="content_money_right">
        <input type="text">
        <span>元/月</span>
      </div>
    </div>

  </div>
</div>
</template>
<script>
import test1 from '../common/test1.vue'
export default{
  components: {
    test1
  },
  data () {
    return {
      zuzhizhuanjieyi: false,
      zuzhizhuanjieer: false,
      zuzhizhuanjiesan: false,
      zuzhizhuanjiesi: false,
      zuzhizhuanjiewu: false,
      name: '',
      sex: '男',
      birthday: '2012-09-06',
      nation: '',
      native_place: '',
      riqi: '2011-11-11',
      dzb_id: '1',
      zhiwu: '',
      tel: '',
      address: '',
      now_riqi: '2018-03-04',
      hobby: '',
      part1: [],
      part3: [],
      part2: [],
      part4: [],
      part5: [],
      code: 0,
      dzb: []
    }
  },
  mounted () {
    let that = this
    this.$axios.get('/Dangyuan/index', {
    })
      .then(function (res) {
        that.part1 = res.data.data
      })
    this.$axios.get('/Dangyuan/service_object', {
    })
      .then(function (res) {
        that.part2 = res.data.data
      })
    this.$axios.get('/Dangyuan/kecheng', {
    })
      .then(function (res) {
        that.part3 = res.data.data
      })
    this.$axios.get('/Dangyuan/dangzhibu', {
    })
      .then(function (res) {
        that.dzb = res.data.data
      })
    this.$axios.get('/Dangyuan/dangyuan', {
      params: {
        openid: 1123
      }
    })
      .then(function (res) {
        that.code = res.data.code
        console.log(that.code)
        if (that.code !== 1) {
          document.getElementById('submit').style.background = '#eaeaea'
          document.getElementById('submit').style.border = '#eaeaea'
        }
      })
  },
  methods: {
    zuzhizhuanjiediyi () {
      if (this.zuzhizhuanjieyi == true) {
        this.zuzhizhuanjieyi = false
        document.getElementsByClassName('jiantou')[0].style.transform = 'rotate(0deg)'
      } else {
        document.getElementsByClassName('jiantou')[0].style.transform = 'rotate(90deg)'
        this.zuzhizhuanjieyi = true
      }
    },
    zuzhizhuanjiedier () {
      if (this.zuzhizhuanjieer == true) {
        this.zuzhizhuanjieer = false
        document.getElementsByClassName('jiantou')[1].style.transform = 'rotate(0deg)'
      } else {
        this.zuzhizhuanjieer = true
        document.getElementsByClassName('jiantou')[1].style.transform = 'rotate(90deg)'
      }
    },
    zuzhizhuanjiedisan () {
      if (this.zuzhizhuanjiesan == true) {
        this.zuzhizhuanjiesan = false
        document.getElementsByClassName('jiantou')[2].style.transform = 'rotate(0deg)'
      } else {
        this.zuzhizhuanjiesan = true
        document.getElementsByClassName('jiantou')[2].style.transform = 'rotate(90deg)'
      }
    },
    zuzhizhuanjiedisi () {
      if (this.zuzhizhuanjiesi == true) {
        this.zuzhizhuanjiesi = false
        document.getElementsByClassName('jiantou')[3].style.transform = 'rotate(0deg)'
      } else {
        this.zuzhizhuanjiesi = true
        document.getElementsByClassName('jiantou')[3].style.transform = 'rotate(90deg)'
      }
    },
    zuzhizhuanjiediwu (index) {
      if (this.zuzhizhuanjiewu == true) {
        this.zuzhizhuanjiewu = false
        document.getElementsByClassName('jiantou')[4].style.transform = 'rotate(0deg)'
      } else {
        this.zuzhizhuanjiewu = true
        document.getElementsByClassName('jiantou')[4].style.transform = 'rotate(90deg)'
      }
    },
    submit () {
      let that = this
      if (that.code == 1) {
        this.$axios.get('/Dangyuan/dy_submit', {
          params: {
            openid: 123456,
            name: that.name,
            sex: that.sex,
            birthday: that.birthday,
            nation: that.nation,
            native_place: that.native_place,
            riqi: that.riqi,
            dzb_id: that.dzb_id,
            zhiwu: that.zhiwu,
            tel: that.tel,
            address: that.address,
            now_riqi: that.now_riqi,
            hobby: that.hobby
          }
        })
          .then(function (res) {
            console.log(res.data.code)
            if (res.data.code == 1) {
              alert('提交成功！')
              window.history.go(-1);
            } else {
              alert('缺少参数，请重填！')
            }
          })

      } else {
        alert('您已提交过！')
      }
      return 0;
    }
  }
}
</script>
<style scoped>
  body{
    background-color: #fff;
  }
  .beijing{
    background-size: 100%;
    width:100%;
    color:#0560AC;
    background-image: url(../../../static/img/zhuzhi.jpg);
    padding-bottom:20%;
  }
  .beijing div{
    width: 88%;
    height: 46px;
    border: 1px solid #EFDDCF;
    margin-left: 3.4vh;
    border-radius: 20px;
    font-size: 18px;
    line-height: 46px;
    margin-top: 1vh;
    background-color: #FDECDC;
    z-index: 100;
    color:#0560AC;
    font-weight: bold;
    position: relative;
    box-shadow: 1px 3px 8px #F0E0D0;
  }
  .beijing div i{
    font-weight: bolder;
    float: right;
    margin-right: 3vh;
  }
  .xiala{
    width: 88%;
    /*height: 20vh;*/
    border: 1px solid #EFDDCF;
    margin-left: 3.4vh;
    border-radius: 20px;
    margin-top: -46px;
    font-size: 16px;
    background-color: #FDECDC;
    box-shadow: 1px 3px 8px #F0E0D0;
  }
  .xiala pre{
    margin-top: 3vh;
    margin-left: 2vh;
  }
  .beijing p{
    padding-top: 8vh;
  }
  .biaoge{width:50%;}
  .biaoge li{
    list-style-type:none;
    border:1px solid #0560AC;
    color:#0560AC;
    width: 88%;
    margin-left: 1.4vh;
  }
  .jiantou img{
    width: 3vh;
  }
  .courses{
    margin-bottom:10px;
  }
  .course_img{
    height: 120px;
  }
  .course_img img{
    width: 100%;
    height: 100%;

  }
  .courses p{
    font-size: 13px;
    margin-top:5px;
    color: #A5ABD4;
    padding-left:10px;
    padding-right: 10px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .form_title{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
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
  .form_right label span{
    position: relative;
    top:-2px
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
  .form_title .form_right2 span{
    width: 35%;
    padding-left: 20px;
    display: inline-block;
  }
  .form_title .form_right2 input{
    width: 40%;
    padding-right: 5%;
  }
  .button{
    margin-left: 40%;
    width: 90px;
    padding: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: red;
    border: 1px solid red;
    color: #fff;
  }
  .part5{
    color: #83AFD3;
    background-image: url(../../../static/img/党费.jpg);
    -webkit-background-size:cover;
    background-size:cover;
    padding-top:50px;
    padding-bottom:50%;
  }
  .content{
    width:60%;
    margin-left:15%;
    display: flex;
    margin-bottom:40px;
  }
  .content_left{
    width: 50%;
  }
  .content_left p{
    position: relative;
    top:2px
  }
  .content_right{
    width: 50%;
  }
  .content_right select{
    width: 100%;
    margin-left:5%;
    padding-bottom:3px;
    padding-left:20%;
    padding-right:10%;
  }
  .content_right input{
    width: 68%;
    margin-left:5%;
    padding-bottom:3px;
    padding-left:20%;
    padding-right:10%;
  }
  .content_right button{
    width: 100%;
    margin-left:5%;
    border-radius: 5px;
    background-color: red;
    border: 1px solid red;
    padding: 5px;
    color: #fff;
  }
  .content_right p{
    width: 130%;
    font-size: 12px;
    margin-top: 5px;
  }
  span{
    font-size: 14px;
  display: inline-block;
    width: 40px;
    position: relative;
    top:2px;
  }
  .content_money{
    display: flex;
    margin-left: 15%;
    margin-top:40px;
  }
  .content_money_left{
    width: 50%;
  }
  .content_money_right{
    width: 120%;

  }
  .content_money_right input{
    width: 23%;
    margin-left:5%;
    padding-bottom:3px;
    padding-left:20%;
    padding-right:10%;
  }
</style>
