<template>
  <main id="card">
    <div class="card-container">
      <div class="img-block">
        <img src="@/assets/img/event-image.png" alt="outgoing-card" />
      </div>
      <div class="detail-summary">
        <div class="event-date">
          8th
          <span>FEBRUARY</span> 2019
        </div>
        <div class="event-name">The Nathan Cole Experience</div>
        <div class="event-price">
          &#8358;5,000
          <span>-</span> &#8358;2,000,000
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
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