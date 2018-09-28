<template>
  <div>
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '../common/Top.vue'
import alinkword from '../common/Link.vue'
export default {
  components: {
    alinkword,
    Top
  },
  data () {
    return {
      urls: '../../../static/img/生活服务.jpg',
      links: [{link: '/Life_footer/1', title: '印象汉兴'},
        {link: '/Life_footer/2', title: '红色物业'},
        {link: '/Life_footer/3', title: '健康驿站'},
        {link: '/Life_footer/4', title: '便民商圈'}

      ]
    }
  }

}
</script>
<style>

</style>
