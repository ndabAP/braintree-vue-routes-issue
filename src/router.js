import Vue from 'vue'
import Router from 'vue-router'
import BraintreeWebDropIn from './views/BraintreeWebDropIn.vue'
import OtherRoute from './views/OtherRoute.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BraintreeWebDropIn
    },
    {
      path: '/other-route',
      component: OtherRoute
    }
  ]
})
