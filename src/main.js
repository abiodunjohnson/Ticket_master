import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import VModal from 'vue-js-modal'
import store from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'



Vue.use(VModal)
Vue.use(VueToast);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
