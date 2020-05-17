import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) 

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/layout/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/views/Home.vue')
                },

                {
                    path: '/DidntGetTicket',
                    component: () => import('@/views/DidntGetTicket.vue')
                },

                {
                    path: '/Event',
                    component: () => import('@/views/Event.vue')
                },
                {
                    path: '/FreeEvent',
                    component: () => import('@/views/FreeEvent.vue')
                },
                {
                    path: '/DidntGetTicketSuccessful',
                    component: () => import('@/views/DidntGetTicketSuccessful.vue')
                },
                {
                    path:'/BlankLayout',
                    component: () => import('@/views/BlankLayout.vue')
                },
                {
                    path:'/Register',
                    component: () => import('@/views/Register.vue')
                },

                {
                    path:'/RegisterationSucessful',
                    component: () => import('@/views/RegisterationSucessful.vue')
                }


               
            ]

       },

    {
        path: '/Payment',
        component: () => import('@/views/Payment.vue')
    },

    {
        path: '/User',
        component: () => import('@/views/User.vue')
    },
    
    {
        path: '/CoverPage',
        component: () => import('@/views/CoverPage.vue')
    },
    {
        path: '/EventTicket',
        component: () => import('@/views/EventTicket.vue')
    }


    ]
})