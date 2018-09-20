import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Party from '../components/pages/Party_service.vue'
import Party_footer from '../components/pages/Party_footer.vue'
import Party_member from '../components/pages/Party_member.vue'
import Party_member_footer from '../components/pages/Party_member_footer.vue'
import Affairs from '../components/pages/Affairs.vue'
import Laws from '../components/pages/Laws.vue'
import Laws_footer from '../components/pages/Laws_footer.vue'
import Love from '../components/pages/Love.vue'
import Love_footer from '../components/pages/Love_footer.vue'
import Style from '../components/pages/Style.vue'
import Style_footer from '../components/pages/Style_footer.vue'
import Life from '../components/pages/Life.vue'
import Life_footer from '../components/pages/Life_footer.vue'
import join from '../components/pages/join.vue'
import Team_Service from '../components/pages/Team_Service.vue'
import Repair from '../components/pages/Repair.vue'
import Complaint from '../components/pages/Complaint.vue'
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
    {
      path: '/Party_member',
      name: 'Party_member',
      component: Party_member,
      children: [
        {
          path: '/Party_member_footer/:id',
          name: 'Party_member_footer',
          component: Party_member_footer
        }
      ],
      redirect: '/Party_member_footer/1'
    },
    {
      path: '/Affairs',
      name: 'Affairs',
      component: Affairs
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/Team_Service',
      name: 'Team_Service',
      component: Team_Service
    },
    {
      path: '/Repair',
      name: 'Repair',
      component: Repair
    }, {
      path: '/Complaint',
      name: 'Complaint',
      component:Complaint
    },
    {
      path: '/Laws',
      name: 'Laws',
      component: Laws,
      children: [
        {
          path: '/Laws_footer/:id',
          name: 'Laws_footer',
          component: Laws_footer
        }
      ],
      redirect: '/Laws_footer/1'
    },
    {
      path: '/Love',
      name: 'Love',
      component: Love,
      children: [
        {
          path: '/Love_footer/:id',
          name: 'Love_footer',
          component: Love_footer
        }
      ],
      redirect: '/Love_footer/1'
    },
    {
      path: '/Style',
      name: 'Style',
      component: Style,
      children: [
        {
          path: '/Style_footer/:id',
          name: 'Style_footer',
          component: Style_footer
        }
      ],
      redirect: '/Style_footer/1'
    },
    {
      path: '/Life',
      name: 'Life',
      component: Life,
      children: [
        {
          path: '/Life_footer/:id',
          name: 'Life_footer',
          component:Life_footer
        }
      ],
      redirect: '/Life_footer/1'
    }
  ]
})
