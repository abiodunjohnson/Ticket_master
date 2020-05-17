<template>
  <main id="register">
    <div class="main-container">
      <div class="register-close">
        <div class="register-heading">
          <h3>Register For free</h3>
        </div>
        <a @click="$emit()">
          <img src="@/assets/img/Close.png" />
        </a>
      </div>
      <hr />
      <div class="main-detail">
        <form class="form-container">
          <div class="input-block">
            <label for="email">Full name</label>
            <br />
            <input type="name" placeholder name="email" required />
          </div>

          <div class="input-block">
            <label for="email">Email address</label>
            <br />
            <input type="email" placeholder name="email" required />
          </div>

          <div class="input-block">
            <label for="email">Phone number</label>
            <br />
            <input type="number" placeholder name="email" required />
          </div>
          <div class="btn-block">
            <router-link to class="send-ticket">Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#register {
  height: auto;
}
#register .main-container {
  background: #ffffff;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
  width: 70%;
  height: auto;
  margin: auto;
  padding: 30px 10px 60px 10px;
}

#register .main-container .register-close {
  display: flex;
  justify-content: space-around;
}

#register .main-container .register-close .register-heading {
  font-family: Flutterwave;
  font-size: 13px;
  line-height: 12px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  padding-right: 39px;
}

#register .main-container .register-close a {
  margin-top: 10px;
}

#register .main-container hr {
  width: 82%;
  border: 0.2px solid#bdbdbd;
}

#register .main-container .main-detail {
  margin: auto;
}

#register .main-container .main-detail .form-container .input-block {
  margin-top: 30px;
}

#register .main-container .main-detail .form-container .input-block label {
  margin-left: 29px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #333333;
}

input[type="name"],
[type="email"],
[type="number"] {
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px 15px;
  width: 16.5rem;
  margin-left: 28px;
  margin-top: 10px;
}

#register .main-container .main-detail .form-container .btn-block {
  margin-top: 30px;
  text-align: center;
}

#register .main-container .main-detail .form-container .btn-block .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 111px;
  width: 4rem;
}
</style>