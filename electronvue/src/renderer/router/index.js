import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/pages/upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path:'/upload',
      name:'upload',
      component:Upload
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
