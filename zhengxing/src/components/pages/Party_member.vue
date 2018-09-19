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
  name: 'Party_member',
  components: {
    alinkword,
    Top
  },
  data () {
    return {
      urls: '../../../static/img/dangyuan.jpg',
      links: [
        {link: '/Party_member_footer/1', title: '三会一课'},
        {link: '/Party_member_footer/2', title: '组织转接'},
        {link: '/Party_member_footer/3', title: '徽党课'},
        {link: '/Party_member_footer/4', title: '党员档案'},
        {link: '/Party_member_footer/5', title: '党费计算'}
      ]
    }
  }
}
</script>
<style>

</style>
