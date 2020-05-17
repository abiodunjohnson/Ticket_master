<template>
  <main id="home">
    <div class="home-heading">
      <h6>The best events happening now</h6>
    </div>
    <section class="main-container">
      <div v-for="i in 6" :key="i">
        <Card />
      </div>
    </section>
  </main>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card
  }
};
</script>

<style scoped>
#home .main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  grid-gap: 0px;
  margin: auto;
}
/* WALLET CARD LEFT START  */

#home .home-heading h6 {
  margin: 2rem 6rem;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  color: #333333;
}
</style>