import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default {
    state: {
        events: [],
        oneEvent: [],
        isFetching: false,
        eventType: {}
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
        },
        setEvent(state, one){
            state.oneEvent = one
        },
        setEventType(state, eventType){
            state.eventType = eventType
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
        },
        async getEvent({commit}, eventId){
            commit('startRequest')
            try{
               await axios.get(`https://eventsflw.herokuapp.com/v1/events/${eventId}`)
               .then(res => {
                   if(res.status === 200){
                       commit('setEvent', res.data.data)
                       commit('endRequest')
                   }
               })
            }catch(error)  {
                commit('endRequest')
                throw new Error(error.response)
            }  
        },
        async getEventType({commit}, id) {
            commit('startRequest')
            try {
                await axios.get(`https://eventsflw.herokuapp.com/v1/ticket-types/${id}`)
                .then(res => {
                    if(res === 200) {
                        commit('setEventType', res.data.data)
                        commit('endRequest')
                    }
                })
            } catch(error){
                commit('endRequest')
                throw new Error(error.response)
            }
        } 


    } 
}
