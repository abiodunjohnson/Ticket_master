<template>
  <main id="homelayout">
    <Navbar v-on:showModal="show" />
    <router-view></router-view>
    <modal
      name="register-modal"
      :width="500"
      :height="500"
      :border-radius="10"
      @close="open = false"
    >
      <Register />
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
  data() {
    return { open: false };
  },
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

<style scoped>
</style>