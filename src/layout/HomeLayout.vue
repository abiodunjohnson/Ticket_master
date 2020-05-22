<template>
  <main id="homelayout">
    <Navbar v-on:showModal="show" />
    <router-view></router-view>
    <modal 
      name="register-modal"
      :width="500"
      :height="600"
    >
      <Register v-on:hideModal="hide" />
    </modal>
    <Footer />
  </main>
</template>

<script>
// eslint-disable-next-line vue/no-parsing-error
import Register from "../views/Register.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    Register
  },
  methods: {
    show() {
      this.$modal.show("register-modal");
    },
    hide() {
      this.$modal.hide("register-modal");
    }
  }
};
</script>

<style>
.vm--modal {
    
    width: 500px;
    height: 600px;
    overflow-y: scroll !important;
    border-radius: 10px;
}


/* MEDIA QUERIES */

@media (max-width: 768px) {
  .vm--modal {
    
    width: 300px;
    height: 400px;
    /* overflow-y: scroll !important;
    border-radius: 10px; */
}
}



@media (max-width: 576px) {
  .vm--modal {
    
    width: 200px;
    height: 300px;
   
}
  
}
</style>