<template>
  <main id="card" @click="getOne">
    <div class="card-container">
      <div class="img-block">
        <img v-if="x.image === null" src="@/assets/img/event-image.png" alt="outgoing-card" />
        <img v-else :src="x.image" />
      </div>
      <div class="detail-summary">
        <div class="event-date">{{x.start_time|eventDay}}</div>
        <div class="event-name">{{x.description}}</div>
        <div v-if="x.is_free === false" class="event-price">N5,000 - 20,000</div>
        <div v-if="x.is_free === true" class="event-price">Free</div>
        <div v-if="x.is_sold_out === true" style="color: red">Sold Out</div>
        <p v-if="x.is_sold_out === false" style="color: green">Available</p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    x: Object
  },
  methods: {
    getOne() {
      this.$emit("getOne", "carrier");
    }
  }
};
</script>
<style scoped>
#card .card-container {
  cursor: pointer;
}
#card .card-container .img-block img {
  width: 25rem;
  height: 14.438rem;
  border-radius: 10px;
}
#card .card-container .detail-summary {
  text-align: start;
  padding-left: 30px;
}
#card .card-container .detail-summary .event-date {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-top: 08px;
}

#card .card-container .detail-summary .event-name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  margin-top: 4px;
}

#card .card-container .detail-summary .event-price {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
  padding-top: 04px;
  padding-bottom: 20px;
}
</style>