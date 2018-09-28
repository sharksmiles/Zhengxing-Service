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
      urls: '../../../static/img/关爱服务.jpg',
      links: [{link: '/Love_footer/1', title: '关爱团队'},
        {link: '/Love_footer/2', title: '关爱活动'},
        {link: '/Love_footer/3', title: '有爱时刻'}

      ]
    }
  }

}
</script>
<style>

</style>
