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
          <Card :x="event" v-on:getOne="eventDetail(event, event.id)" />
        </div>
      </section>
       <Paginate
          :page-range=this.event.limit
          :click-handler="clickCallback"
          :container-class="paginate"
         />
    </div>
  </main>
</template>

<script>
import Loader from "../components/Loader.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "vuex";
import Paginate from 'vuejs-paginate';
export default {
  data(){
    return {
      pageCount: 2
    }
  },
  components: {
    Card,
    Loader,
    Paginate
  },
  computed: {
    ...mapState(["event"]),
    allEvents() {
      return this.event.events;
    }
  },
  methods: {
    ...mapActions(["getAllEvents", "getEvent"]),
    eventDetail(event) {
      this.getEvent(event.id);
      this.$router.push({
        name: "one",
        path: `/Event/${event.description}`,
        params: {
          id: event.id,
          value: event
        }
      });
    },
    clickCallback(pageNum){
      this.event.page = pageNum
      console.log(pageNum)
      this.getAllEvents({page: pageNum})
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
@media (max-width: 768px) {
  #home .main-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
@media (max-width: 440px) {
  #home .home-heading h6 {
    margin: 2rem 1rem;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 40px;
    color: #333333;
    width: 100%;
  }
}
@media (max-width: 411px) {
  #home .home-heading h6 {
    width: 90%;
  }
}

@media (max-width: 375px) {
  #nav-bar .navbar-right .create-event-btn {
    font-size: 10px;
  }

  #card .card-container .detail-summary {
    padding-left: 65px;
  }
}

@media (max-width: 320px) {
  #card .card-container .detail-summary {
    padding-left: 35px;
  }
}
</style>
<style>
#home ul {
  margin-left: 20px;
  list-style: none !important;
  display: flex;
  align-items:center;
justify-content: space-between;
width: 25%;
margin-left: 10rem;
}

#home ul li:first-child {
  color: #ffff;
  border: 1px solid #f5a524;
  padding: 6px 10px;
  background-color: #f5a524;
  outline: none !important;;
}

#home ul li:last-child {
  color: #ffff;
  border: 1px solid #f5a524;
  padding: 6px 10px;
  background-color: #f5a524;
  outline: none !important;
}

</style>