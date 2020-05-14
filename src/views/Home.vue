<template>
  <main id="home">
    <div class="home-heading">
      <h6>The best events happening now</h6>
    </div>
    <section class="main-container">
      <div class="home-card-left">
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

      <div class="home-card-center">
        <div class="img-block">
          <img src="@/assets/img/event-image(1).png" alt="outgoing-card" />
        </div>
        <div class="detail-summary">
          <div class="event-date">
            10th
            <span>December</span> 2019
          </div>
          <div class="event-name">One mic - by Alibaba</div>
          <div class="event-price">Sold out</div>
        </div>
      </div>

      <div class="home-card-right">
        <div class="img-block">
          <img src="@/assets/img/event-image(2).png" alt="outgoing-card" />
        </div>
        <div class="detail-summary">
          <div class="event-date">
            3rd
            <span>November</span> 2019
          </div>
          <div class="event-name">Mitch24</div>
          <div class="bold green event-price">free</div>
        </div>
      </div>

      <div class="home-card-left">
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

      <div class="home-card-center">
        <div class="img-block">
          <img src="@/assets/img/event-image(1).png" alt="outgoing-card" />
        </div>
        <div class="detail-summary">
          <div class="event-date">
            10th
            <span>December</span> 2019
          </div>
          <div class="event-name">One mic - by Alibaba</div>
          <div class="event-price-sold">
            &#8358;10,000
            <span>-</span> &#8358; 5,000,000
          </div>
        </div>
      </div>

      <div class="home-card-right">
        <div class="img-block">
          <img src="@/assets/img/event-image(2).png" alt="outgoing-card" />
        </div>
        <div class="detail-summary">
          <div class="event-date">
            3rd
            <span>November</span> 2019
          </div>
          <div class="event-name">Mitch24</div>
          <div class="bold green event-price">free</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#home .main-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  text-align: center;
}
/* WALLET CARD LEFT START  */

#home .home-heading h6 {
  margin: 60px 20px 25px 120px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  color: #333333;
}
#home .main-container .home-card-left .detail-summary {
  text-align: left;
  margin-left: 63px;
}

#home .main-container .home-card-left .detail-summary .event-date {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-top: 08px;
}

#home .main-container .home-card-left .img-block img {
  width: 18rem;
  height: 10rem;
}

#home .main-container .home-card-left .detail-summary .event-name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  margin-top: 4px;
}

#home .main-container .home-card-left .detail-summary .event-price {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
  margin-top: 08px;
}

/* WALLET CARD CENTER START  */
#home .main-container .home-card-center .detail-summary {
  text-align: left;
  margin-left: 54px;
}

#home .main-container .home-card-center .img-block img {
  width: 18rem;
  height: 10rem;
}

#home .main-container .home-card-center .detail-summary .event-date {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-top: 08px;
}

#home .main-container .home-card-center .detail-summary .event-name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  margin-top: 4px;
}

#home .main-container .home-card-center .detail-summary .event-price {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #eb5757;
  margin-top: 07px;
}

#home .main-container .home-card-center .detail-summary .event-price-sold {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
  margin-top: 07px;
}

/* WALLET CARD RIGHT START  */
#home .main-container .home-card-right .detail-summary {
  text-align: left;
  margin-left: 54px;
}

#home .main-container .home-card-right .img-block img {
  width: 18rem;
  height: 10rem;
}

#home .main-container .home-card-right .detail-summary .event-date {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-top: 08px;
}

#home .main-container .home-card-right .detail-summary .event-name {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4f4f4f;
  margin-top: 4px;
}

#home .main-container .home-card-right .detail-summary .event-price {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #219653;
  margin-top: 07px;
}
</style>