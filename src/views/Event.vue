<template>
  <main id="event">
    <section class="main-container">
      <div class="right-container">
        <div class="right-content">
          <div class="event-date">
            8th
            <span>FEBRUARY</span> 2019
          </div>
          <div class="event-name">
            The Nathan Cole
            <br />Experience
          </div>
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
            <router-link to class="send-ticket">Buy Tickets</router-link>
          </div>
        </div>
      </div>

      <div class="left-container">
        <div class="left-content">
          <div class="img-block">
            <img src="@/assets/img/event-image.png" />
          </div>
        </div>
      </div>
    </section>
    
    <hr />
    <!-- <Register /> -->

    <section class="next-container">
      <div class="left-container">
        <div class="left-content">
          <div class="event-date">Venue</div>

          <p>
            Eko Atlantic Beach, Off Ahmadu
            <br />Bello way, Victoria island,
            <br />Lagos.
          </p>

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
// import Register from "./Register.vue";
export default {
  components: {
    // Register
  },

  

 
};
</script>

<style scoped>
#event .main-container {
  display: flex;
}

#event .main-container .right-container {
  /* margin-right: 15px; */
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
  width: 100%;
  color: #ffffff;
  border: 1px solid #f5a623;
  text-decoration: none;
  padding: 12px 104px;
  margin: 10px 0 22px 0;
  text-transform: uppercase;
}
#event .main-container .left-container {
  margin-right: 15rem;
  margin-top: 10px;
}

#event .main-container .left-container .left-content .img-block img {
  margin-right: -30px;
}

#event .main-container .left-container .left-content .img-block img {
  width: 22.5rem;
  height: 23.5rem;
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
  /* margin-top: -03px; */
}

#event .next-container .right-container .right-content .social-block ul li {
  margin-top: 05px;
}
</style>