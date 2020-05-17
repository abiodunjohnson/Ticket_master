<template>
  <main id="registersuccess">
    <div class="main-container">
      <div class="register-close">
        <a>
          <img src="@/assets/img/Close.png" />
        </a>
      </div>

      <div class="main-detail">
        <div class="check-circle">
          <img src="@/assets/img/check-circle.png" alt="website logo" />
        </div>
        <div class="success-text">
          <h3>You have successfully registered for the nathan cole experience.</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#registersuccess .main-container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 30%;
  height: 18rem;
  margin: auto;
  padding: 30px 10px 60px 10px;
}

#registersuccess .main-container .register-close {
  float: right;
  margin-left: -20px;
}

#registersuccess .main-container .main-detail .check-circle {
  text-align: center;
}

#registersuccess .main-container .main-detail .check-circle img {
  width: 60px;
  height: 60px;
}

#registersuccess .main-container .main-detail .success-text {
  font-family: Flutterwave;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.065em;
  color: #000000;
  margin: 24px 0px;
}
#registersuccess .main-container .register-close a {
  margin-top: 10px;
}

#registersuccess .main-container .main-detail {
  margin: auto;
  padding-top: 40px;
}

#registersuccess .main-container .main-detail .form-container .input-block {
  margin-top: 30px;
}
</style>