import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import VModal from 'vue-js-modal'
import store from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import moment from 'moment'



Vue.use(VModal)
Vue.use(VueToast);
Vue.config.productionTip = false

Vue.filter('eventDay', (value) => {
  return moment(value).format('Do MMMM YYYY')
})

Vue.filter('eventDay1', (value) => {
  return moment(value).format('Do MMMM YYYY')
})

Vue.filter('eventDate', (value) => {
return moment(value).format('LLLL')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
