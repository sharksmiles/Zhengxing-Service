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
  name: 'Law',
  components: {
    alinkword,
    Top
  },
  data () {
    return {
      urls: '../../../static/img/法律服务.jpg',
      links: [{link: '/Laws_footer/1', title: '万警进社区'},
        {link: '/Laws_footer/2', title: '社区律师'},
        {link: '/Laws_footer/3', title: '法枫桥汉兴'},
        {link: '/Laws_footer/4', title: '小韩说法'}
      ]
    }
  }

}
</script>
<style>

</style>
