import Vue from 'vue'
import Router from 'vue-router'
import Overview from '../components/pages/Overview'
import Stats from '../components/pages/Stats'
import Service from '../components/pages/Service'
import Contact from '../components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'overview'
      }
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
