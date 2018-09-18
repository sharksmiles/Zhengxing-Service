import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Party from '../components/pages/Party_service.vue'
import Party_footer from '../components/pages/Party_footer.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Party_service',
      name: 'Party_service',
      component: Party,
      children: [
        {
          path: '/Party_footer/:id',
          name: 'Party_footer',
          component: Party_footer
        }
      ],
      redirect: '/Party_footer/1'
    },
  ]
})
