<template>
  <div >
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>
<script>
import Top from '../common/Top.vue'
import alinkword from '../common/Link.vue'
export default {
  name: 'Party',
  components: {
    alinkword,
    Top
  },
  data () {
    return {
      urls: '../../../static/img/党建引领1.jpg',
      links: [
        {link: '/Party_footer/1', title: '街道概况'},
        {link: '/Party_footer/2', title: '党建要闻'},
        {link: '/Party_footer/3', title: '工作动态'},
        {link: '/Party_footer/4', title: '时间银行'},
      ]
    }
  }
}
</script>
<style>

</style>
