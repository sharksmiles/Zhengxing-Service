<template>
  <div>
    <div class="my-goods" >
      <div class="img"><img :src="data.image" ></div>
      <div class="item_name">
        <h4 style="display: inline-block">{{data.post_title}}</h4> {{data.jifen}}积分
        <p>{{data.post_content}}</p>
      </div>
      <slot>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .my-goods{
    display: flex;
    padding: 10px 10px 10px 15px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom:10px;
    box-shadow: 1px 1px 3px #e0e0e0;
  }
  .my-goods .img {
    width:   30%;
    height: 90px;
    border: 1px solid #e0e0e0;
  }
  .my-goods .img img{
    width: 100%;
    height: 100%;
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

button{
  width: 20%;
  float: right;
  margin-top:60px;
  height: 25px;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #0D65Ac;
  background-color: #0D65Ac;
}
</style>
