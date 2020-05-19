<template>
  <main id="home">
    <div class="home-heading">
      <h6>The best events happening now</h6>
    </div>
    <div>
      <section v-if="this.event.events.length === 0">
        <Loader />
      </section>
      <section class="main-container" v-else>
        <div v-for="event in allEvents" :key="event.id">
          <Card :x="event" v-on:getOne="eventDetail(event, event.id)"/>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Loader from "../components/Loader.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Card,
    Loader
  },
  computed: {
    ...mapState(["event"]),
    allEvents() {
      return this.event.events;
    }
  },
  methods: {
    ...mapActions(["getAllEvents", "getEvent"]),
    eventDetail(event, id) {
      this.getEvent(id)
      this.$router.push({
        path: `Event/${id}`,
        params:{
          id: event.id,
          value: event
        }
      })
    }
  },
  mounted() {
    this.getAllEvents();
  }
};
</script>

<style scoped>
#home .main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 0px;
  margin: auto;
}

/* grid-template-columns: repeat(3fr, minmax(225px, 1fr)); */
/* WALLET CARD LEFT START  */

#home .home-heading h6 {
  margin: 2rem 6rem;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  color: #333333;
}

/* MEDIA QUEIRES */
/* @media (max-width: 576px) {
  #home .home-heading h6 {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 40px;
    color: #333333;
  }
} */
</style>