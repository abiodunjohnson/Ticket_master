<template>
  <main id="homelayout">
    <Navbar v-on:showModal="show" />
    <router-view></router-view>
    <modal name="register-modal" :width="500" :height="600">
      <Register v-on:hideModal="hide" />
    </modal>
    
    <Footer />
  </main>
</template>

<script>
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
    top: 125px !important;
    width: 300px;
    height: 400px;
  }
}

@media (max-width: 576px) {
  .vm--modal {
    width: 200px;
    height: 300px;
  }
}

@media (max-width: 414px) {
  .vm--modal {
    left: 25px !important;
    width: 320px !important;
    height: 400px !important;
  }

  #register .main-container {
    width: 100% !important;
  }

  #register
    .main-container
    .main-detail
    .form-container
    .btn-block
    .send-ticket {
    width: 15.5rem;
    margin-right: 20px;
  }
}

@media (max-width: 375px) {
  .vm--modal {
    left: 25px !important;
    width: 320px !important;
    height: 400px !important;
  }

  #register .main-container {
    width: 100% !important;
  }
}
</style>