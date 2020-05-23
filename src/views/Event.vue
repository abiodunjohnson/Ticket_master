<template>
  <main id="event">
    <section class="main-container">
      <div class="right-container">
        <div class="right-content">
          <div class="event-date">{{oneEvent.start_time|eventDay}}</div>
          <div class="event-name">{{oneEvent.description}}</div>
          <p>
            Two-Time Grammy Award winner. Nathaniel Cole, who's also just released an album.
            <b>Into The Wild,</b> will be having his first
            concert in Lagos, Nigeria!
            <br />Fans have waited, so long for this announcement, and it promises to be everything anyone has imagined
          </p>
          <div class="event-price">
            &#8358;5,000
            <span>-</span> &#8358;2,000,000
          </div>
          <div class="btn-block">
            <button @click="goTopay(oneEvent.id)" class="send-ticket">Buy Tickets</button>
          </div>
        </div>
      </div>

      <div class="left-container">
        <div class="left-content">
          <div class="img-block">
            <img :src="oneEvent.image" style />
          </div>
        </div>
      </div>
    </section>
    <BlankLayout />
    <hr />

    <section class="next-container">
      <div class="left-container">
        <div class="left-content">
          <div class="event-date">Venue</div>

          <p>{{oneEvent.venue}}</p>

          <div class="btn-block">
            <img src="@/assets/img/map.png" /> View map for directions
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-content">
          <div class="event-date">Date and Time</div>

          <p>Friday, February 8th 2019, 10:00am</p>
          <div class="social-block">
            <div class="Social-link">Social links</div>
            <ul>
              <li>http://www.nathanielcole.com</li>
              <li>http://twitter.com/nathanielcole</li>
              <li>http://instagram.com/nathanielcole/</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import BlankLayout from "../views/BlankLayout.vue";
export default {
  components: {
    BlankLayout
  },
  data() {
    return {
      oneEvent: {},
      passEvent: {}
    };
  },

  methods: {
    async goTopay(id) {
      await axios
        .get(`https://eventsflw.herokuapp.com/v1/ticket-types/${id}`)
        .then(res => {
          if (res.status === 200) {
            this.passEvent = res.data.data;
            this.$router.push({
              name: "payment",
              params: { value: this.passEvent }
            });
          }
        });
      // this.$router.push('/Payment')
    }
  },
  mounted() {
    this.oneEvent = this.$route.params.value;
  }
};
</script>

<style scoped>
#event .main-container {
  display: flex;
}

#event .main-container .right-container {
  margin-left: 13rem;
}

#event .main-container .right-container .right-content .event-date {
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  color: #12122c;
  margin-top: 10px;
}

#event .main-container .right-container .right-content .event-name {
  font-size: 30px;
  line-height: 40px;
  color: #12122c;
  font-weight: bold;
  margin-top: 5px;
}

#event .main-container .right-container .right-content p {
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
  width: 80%;
}

#event .main-container .right-container .right-content .event-price {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #333333;
}

#event .main-container .right-container .right-content .btn-block {
  margin-top: 30px;
}

#event .main-container .right-container .right-content .send-ticket {
  background: #f5a623;
  border-radius: 4px;
  width: 60%;
  color: #ffffff;
  border: 1px solid #f5a623;
  text-decoration: none;
  padding: 12px 24px;
  margin: 10px 0 22px 0;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: none !important;
  outline: none !important;
}
#event .main-container .left-container {
  margin-right: -30px;
  object-fit: contain;
  width: 100%;
}

#event .main-container .left-container .left-content .img-block img {
  margin-right: -30px;
}

#event .main-container .left-container .left-content .img-block img {
  width: 22.5rem;
  height: 23.5rem;
 border-radius: 10px;
}

#event hr {
  width: 69%;
  margin-top: 20px;
}

#event .next-container {
  display: flex;
  margin-top: 20px;
}

#event .next-container .left-container {
  margin-left: 13rem;
}

#event .next-container .left-container .left-content .event-date {
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 24px;
  align-items: center;
  text-transform: uppercase;
  color: #333333;
}

#event .next-container .left-container .left-content p {
  font-family: Flutterwave;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #333333;
  margin: 15px 0;
}

#event .next-container .left-container .left-content .btn-block {
  color: #f5a623;
}

#event .next-container .right-container {
  margin-left: 19.3rem;
}

#event .next-container .right-container .right-content .event-date {
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 24px;
  align-items: center;
  text-transform: uppercase;
  color: #333333;
}

#event .next-container .right-container .right-content p {
  font-family: Flutterwave;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #333333;
  margin: 15px 0;
}

#event
  .next-container
  .right-container
  .right-content
  .social-block
  .Social-link {
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 16px;
  color: #333333;
}
#event .next-container .right-container .right-content .social-block ul {
  list-style: none;
  padding: 0px;
}

#event .next-container .right-container .right-content .social-block ul li {
  margin-top: 05px;
}

/* MEDIA QUEIRES */

@media (max-width: 768px) {
  #event .main-container {
    flex-direction: column;
  }

  #event .main-container .right-container .right-content .event-name {
    font-size: 20px;
    line-height: 30px;
  }

  /* #event .main-container .left-container .left-content .img-block img {
    margin-right: -45px;
  } */

  #event hr {
    width: 51%;
    margin-top: 20px;
  }

  #event .main-container .left-container {
    margin-right: 1rem;
    margin-top: 50px;
  }
  #event .main-container .left-container .left-content {
    text-align: center;
  }

  #event .next-container {
    flex-direction: column;
  }

  #event .next-container .right-container {
    margin-left: 12.9rem;
    margin-top: 30px;
  }
}

@media (max-width: 576px) {
  #event .main-container .right-container {
    margin-left: 6.2rem;
  }

  #event .next-container .left-container {
    margin-left: 6.1rem;
  }

  #event .next-container .right-container {
    margin-left: 6.2rem;
  }

  #event .main-container .left-container .left-content .img-block {
    margin-left: -35px;
  }

  #event .main-container .right-container .right-content .send-ticket {
    width: 75%;
  }

  #event hr {
    width: 56%;
    margin-top: 20px;
  }
}

@media (max-width: 440px) {
  #event .main-container .left-container .left-content .img-block img {
    width: 15.5rem;
    height: 14.5rem;
  }

  #event .main-container .left-container .left-content .img-block {
    margin-right: -30px;
  }
}

@media (max-width: 414px) {
  #event .main-container .right-container .right-content .send-ticket {
    margin: 0px;
  }
}
 @media (max-width: 414px) {
  #event .main-container .left-container .left-content .img-block {
    margin-right: -01px;
  }

  #event .main-container .right-container {
    margin-left: 4.9rem;
  }

  #event .next-container .left-container {
    margin-left: 4.9rem;
  }

  #event .next-container .right-container {
    margin-left: 4.9rem;
  }
}

@media (max-width: 375px) {
  #event .main-container .right-container {
    margin-left: 3.8rem;
  }

  #event .main-container .right-container {
    margin-left: 3.8rem !important;
  }

  #event .next-container .right-container {
    margin-left: 3.9rem !important;
  }

  #event .main-container .right-container .right-content .send-ticket {
    width: 90% !important;
    margin: 0px;
  }

  #event .main-container .left-container {
    margin-top: 35px;
  }

  #event hr {
    width: 66%;
  }

  #event .main-container .left-container .left-content .img-block {
    margin-right: -0px;
  }

  #event .main-container .right-container .right-content p {
    font-size: 16px;
  }

  #event .main-container .right-container .right-content .event-name {
    font-size: 20px;
    line-height: 30px;
  }

  #event .main-container .right-container .right-content .event-price {
    font-size: 20px;
  }

  #event .main-container .left-container .left-content .img-block img {
    width: 15.5rem;
    height: 14.5rem;
  }

  #event .next-container .left-container {
    margin-left: 3.1rem;
  }

  #event .main-container .right-container .right-content .send-ticket {
    background: #f5a623;
    border-radius: 4px;
    width: 10%;
    padding: 06px 65px;
    font-size: 16px;
  }

  #event .next-container .right-container {
    margin-left: 3.1rem !important;
  }
}

@media (max-width: 320px) {
  #event .main-container .right-container {
    margin-left: 3.3rem !important;
  }
}
    
@media (max-width: 320px) {
  #event .main-container .right-container {
    margin-left: 2rem !important;
  }

  #event .next-container .left-container {
    margin-left: 2.3rem;
  }

  #event .next-container .right-container {
    margin-left: 2.3rem !important;
  }

  #event hr {
    width: 76%;
  }
}
</style>