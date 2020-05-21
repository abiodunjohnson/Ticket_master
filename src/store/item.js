import Vue from 'vue'
import Vuex from 'vuex'
import myApi from '../myApi.js'

Vue.use(Vuex);

export default {
    state: {
        allTypes: null,
        cart: [],
        quantity: 0
    },

    getters: {
        cartSize: (state) => {
            return state.cart.length;
        },
        cartTotalAmount: (state) => {
            return state.cart.reduce((total, ticketType) => {
                return total + (ticketType.price * ticketType.quantity);
            }, 0);
        },
},

mutations: {
    setUpticketTypes: (state, allTypes) => {
        state.allTypes = allTypes;
    },
    addToCart: (state, ticketTypeId) => {
        //find the product in the products list
        let ticket = state.allTypes.find((ticketType) => ticketType.id === ticketTypeId);
        //find the product in the cart list
        let cartTicketType = state.cart.find((ticketType) => ticketType.id === ticketTypeId);
        if (cartTicketType) {
            //product already present in the cart. so increase the quantity
            cartTicketType.quantity++;
        } else {
            state.cart.push({
                // product newly added to cart
                ...ticket,
                stock: ticket.quantity,
                quantity: 1,
            });
        }
        //reduce the quantity in products list by 1
        ticket.ticketType--;
    },
    removeFromCart: (state, ticketTypeId) => {
        //find the product in the products list
        let ticketType = state.allTypes.find((ticketType) => ticketType.id === ticketTypeId);
        //find the product in the cart list
        let cartTicketType = state.cart.find((ticketType) => ticketType.id === ticketTypeId);
        cartTicketType.quantity--;
        //Add back the quantity in products list by 1
        ticketType.quantity++;
    },
    deleteFromCart: (state, ticketTypeId) => {
        //find the product in the products list
        let ticketType = state.allTypes.find((ticketType) => ticketType.id === ticketTypeId);
        //find the product index in the cart list
        let cartProductIndex = state.cart.findIndex((product) => product.id === ticketTypeId);
        //srt back the quantity of the product to intial quantity
        ticketType.quantity = state.cart[cartProductIndex].stock;
        // remove the product from the cart
        state.cart.splice(cartProductIndex, 1);
    }

},

actions: {
    
fetchProducts: ({ commit  }) => {
           //simulating a fake ajax request to fetch products from database
           myApi.getallTypes().then((e) => {
               console.log(e)
               //passing the products recieved from response as a payload to the mutation
               commit("setUpticketTypes", e);
               
           });
       },
       addToCart: ({ commit, state }, ticketTypeId) => {
           myApi.allTypes("add", ticketTypeId).then((ticketTypeId) => {
               commit("addToCart", ticketTypeId);
               state.counter++
           });
       },
       removeFromCart: ({ commit, state }, ticketTypeId) => {
           myApi.allTypes("remove", ticketTypeId).then((ticketTypeId) => {
               commit("removeFromCart", ticketTypeId);
               state.counter--
           });
       },
       deleteFromCart: ({ commit }, ticketTypeId) => {
           myApi.products("delete", ticketTypeId).then((ticketTypeId) => {
               commit("deleteFromCart", ticketTypeId);
           });
       }
}



}