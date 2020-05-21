<template>
  <main id="no-ticket">
    <section>
      <div class="home-heading">
        <h6>
          Enter your email and we'll send your
          <br />tickets right away!
        </h6>
      </div>
      <div class="main-detail">
        <form class="form-container">
          <div class="input-block">
            <label for="email">Email address</label>
            <br />
            <input type="email" placeholder name="email" required />
          </div>

          <div class="btn-block">
            <router-link to class="send-ticket">Confirm and send ticket</router-link>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#no-ticket .home-heading {
  text-align: center;
}

#no-ticket .home-heading h6 {
  font-family: Flutterwave;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  color: #333333;
  margin-bottom: 20px;
}
#no-ticket .main-detail {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 30%;
  height: 10rem;
  margin: auto;
  padding: 60px 10px;
}

#no-ticket .main-detail .form-container .input-block label {
  margin-left: 27px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #333333;
}

input[type="email"] {
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px 15px;
  width: 20rem;
  margin-left: 25px;
  margin-top: 10px;
}

#no-ticket .main-detail .form-container .btn-block {
  text-align: center;
  margin-top: 30px;
}

#no-ticket .main-detail .form-container .btn-block .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 68px;
  width: 0rem;
}
</style>