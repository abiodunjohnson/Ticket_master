import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default {
    state: {
        events: [],
        isFetching: false
    },
    mutations: {
        setEvents(state, events){
            state.events = events
        },
        startRequest(state){
            state.isFetching = true;
        },
        endRequest(state){
            state.isFetching = false;
        }
    },
    actions: {
        async getAllEvents({ commit }){
            commit('startRequest')
            try{
                await axios.get('https://eventsflw.herokuapp.com/v1/events')
                    .then(res => {
                        if(res.status === 200){
                            commit('setEvents', res.data.data.events);
                            commit('endRequest')
                        }
                    })
               
             }catch(error){ 
                 commit('endRequest')
                throw new Error(error.response)
             }
        } 
    } 
}
