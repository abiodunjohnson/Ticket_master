<template>
  <main id="notsuccess">
    <section>
      <div class="home-heading">
        <h6>
          Enter your email and we'll send your
          <br />tickets right away!
        </h6>
      </div>
      <div class="main-detail">
        <div class="check-circle">
          <img src="@/assets/img/check-circle.png" alt="website logo" />
        </div>

        <p>
          Your tickets have been confirmed and
          <br />sent to your email address at
          <br />
          <span>ted@flutterwave</span>
        </p>

        <div class="btn-block">
          <router-link to class="send-ticket">Buy more Tickets</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#notsuccess .home-heading {
  text-align: center;
}

#notsuccess .home-heading h6 {
  font-family: Flutterwave;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  color: #333333;
  margin-bottom: 20px;
}

#notsuccess .main-detail {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 30%;
  height: 15rem;
  margin: auto;
  padding: 60px 10px;
}

#notsuccess .main-detail .check-circle {
  text-align: center;
}

#notsuccess .main-detail .check-circle img {
  width: 60px;
  height: 60px;
}

#notsuccess .main-detail p {
  font-family: Flutterwave;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.065em;
  color: #000000;
}

#notsuccess .main-detail p span {
  color: rgb(25, 141, 207);
}

#notsuccess .main-detail .btn-block {
  text-align: center;
  margin-top: 2rem;
}

#notsuccess .main-detail .btn-block .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 95px;
  width: 20rem;
}
</style>