import Vue from 'vue'
import Vuex from 'vuex'
import event from '../store/event.js'
import item from '../store/item.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      event,
      item
    },


})