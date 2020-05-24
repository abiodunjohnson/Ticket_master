<template>
  <main id="payment">
    <section class="main-container">
      <div class="left-container" v-if="this.payObject !== {}">
        <div class="left-content">
          <div class="btn-close-block">
            <div class="register-close">
              <a>
                <img src="@/assets/img/Close.png" />
              </a>
              <div class="register-heading">
                <h3>Close</h3>
              </div>
            </div>
          </div>
          <div class="event-name">
            The Nathan Cole
            Experience
          </div>
          <div class="left-below-block">
            <div class="event-date">
              8th
              <span>FEBRUARY</span> 2019
            </div>
            <div v-if="this.payObject">
              <ul>
                <li class="list-item">
                  <p class="status">{{payObject.name}}</p>
                  <p class="price">&#8358;{{payObject.price}}</p>
                  <div class="btn-item">
                    <div class="btn-left">
                      <button
                        :disabled="disabled"
                        @click="decrement"
                        style="background: transparent; border: none; outline: none !important;"
                      >
                        <img src="@/assets/img/deduct item.png" />
                      </button>
                    </div>
                    {{quannt}}
                    <div class="btn-right">
                      <img @click="increment" src="@/assets/img/Add item.png" />
                    </div>
                  </div>
                </li>
                <hr class="left-line" />
              </ul>
            </div>
            <div style="padding: 5rem;" v-else>
              <h1 style="text-align:left; padding-left: 1.2rem;">No Ticket Available for this Event</h1>
            </div>

            <p class="expire">
              Ticket sales ends on
              <span>22nd</span> Novemember 2019
            </p>
          </div>
        </div>
      </div>

      <div class="right-container" v-if="show">
        <div class="right-content">
          <h6>ORDER SUMMARY</h6>
          <hr class="right-line" />
          <div class="status-block">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 13px; ">{{countTicket}}</span>
              <span>-</span>
              <p class="status-right">{{payObject.name}}</p>
            </div>
            <p class="amount-right" v-if="quannt !== 0">&#8358; {{price}}</p>
          </div>
          <hr class="right-line-bottom" />
          <div class="status-block">
            <p class="sub-total-right">
              Sub
              <span>-</span>total
            </p>
            <p class="amount-right" v-if="quannt !== 0">&#8358; {{price}}</p>
          </div>
          <div class="status-block">
            <p class="vat">VAT</p>
            <p class="amount-right">&#8358; {{vat}}</p>
          </div>

          <div class="status-block">
            <p class="total">TOTAL PAYMENT</p>
            <p class="total-amount-right">&#8358; {{subTotal}}</p>
          </div>

          <div class="btn-block">
            <button class="send-ticket" @click="hide">CONTINUE</button>
          </div>
          <div class="money-back">
            <img src="@/assets/img/Vector.png" />
            <div class>
              <p class="costumer">100% customer protection</p>
              <p class="guarantee">Money back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right-container" v-if="show2">
        <div class="right-content">
          <div class="go-back-block">
            <div class="send-ticket deduct">
              <img @click="showOther" src="@/assets/img/arrow-left 1.png" />
            </div>
            <h6>Go back</h6>
          </div>
          <hr class="right-line" />
          <div class="main-detail">
            <form class="form-container">
              <div class="input-block">
                <label for="email">Full name</label>
                <br />
                <input type="name" placeholder name="email" v-model="user.name" required />
              </div>

              <div class="input-block">
                <label for="email">Email address</label>
                <br />
                <input type="email" placeholder name="email" v-model="user.email" required />
              </div>

              <div class="input-block">
                <label for="email">Phone number</label>
                <br />
                <input type="text" placeholder name="email" v-model="user.phone" required />
              </div>
            </form>
          </div>

          <div class="status-block">
            <p class="total">TOTAL PAYMENT</p>
            <p class="total-amount-right">&#8358;{{subTotal}}</p>
          </div>

          <div class="btn-block1">
            <button
              v-if="payShow"
              @click="createOrder(payObject.event_id)"
              :disabled="disabled"
              class="send-ticket"
            >CONTINUE</button>
          </div>
          <div class="money-back">
            <img src="@/assets/img/Vector.png" />
            <div>
              <p class="costumer">100% customer protection</p>
              <p class="guarantee">Money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
      <Rave
        v-if="flutterOpen"
        style-class="paymentbtn"
        :email="email"
        :amount="amount"
        :reference="reference"
        :rave-key="raveKey"
        :callback="callback"
        :close="close"
        :paymentPlan="plan"
        :customerFirstname="fname"
        paymentOptions="card,barter,account,ussd"
        hostedPayemt="1"
        customTitle="Pay for Ticket"
        currency="NGN"
        country="NG"
      >
        <i>Pay</i>
      </Rave>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Rave from "vue-ravepayment";
export default {
  components: {
    Rave
  },
  data() {
    return {
      blurBrn: true,
      payObject: {},
      quannt: 0,
      currency: "NGN",
      country: "NG",
      countTicket: 0,
      disabled: true,
      vat: 100,
      show: true,
      show2: false,
      payShow: true,

      user: {
        email: "",
        phone: "",
        name: ""
      },
      flutterOpen: false,
      raveKey: "FLWPUBK-0a6ee03e40e2ae7bee6e0e5e90df97cc-X",
      email: "",
      amount: "",
      fname: ""
    };
  },
  watch: {
    quannt: {
      deep: true,
      immediate: true,
      handler(x) {
        if (x > 0) {
          this.disabled = false;
        } else if (x === 0) {
          this.disabled = true;
        }
      }
    },
    "user.phone": {
      deep: true,
      immediate: true,
      handler(x) {
        if (this.user.phone != undefined) {
          const result = x
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, "");
          this.user.phoneNumber = result;
        }
      }
    }
  },
  computed: {
    price() {
      if (this.quannt > 0) {
        return this.payObject.price * this.quannt;
      } else {
        return this.payObject.price;
      }
    },
    subTotal() {
      return this.quannt > 0 ? this.price + this.vat : 0;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  mounted() {
    this.payObject = this.$route.params.value;
  },

  methods: {
    increment() {
      this.quannt++;
      this.countTicket++;
    },
    decrement() {
      this.quannt--;
      this.countTicket--;
    },
    hide() {
      this.show = false;
      this.show2 = true;
    },
    showOther() {
      this.show2 = false;
      this.show = true;
    },

    async createOrder(id) {
      let payload = {
        event_id: id,
        email: this.user.email,
        phone: this.user.phone,
        name: this.user.name,
        base_amount: this.subTotal,
        value_added_tax: this.vat,
        tickets_bought: this.quannt
      };
      let url = `https://eventsflw.herokuapp.com/v1/orders`;
      await axios.post(url, payload).then(res => {
        console.log(res);
        if (res.status === 200) {
          let { email, name } = this.user;
          this.email = email;
          this.amount = this.subTotal;
          this.fname = name;
          this.payShow = false;
          this.flutterOpen = true;
        }
      });
    },
    clearFields() {
      this.user.email = "";
      this.user.phone = "";
      this.user.name = "";
    },
    callback(response) {
      console.log(response);
    },
    close() {
      console.log("Payment closed");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#payment {
  background: #f2f2f2;
  height: 100vh;
}

#payment .main-container {
  display: flex;
  justify-content: space-between;
}

#payment .main-container .left-container {
  margin-left: 5rem;
}

#payment .main-container .left-container .btn-close-block {
  padding-top: 35px;
}

#payment .main-container .left-container .register-close {
  display: flex;
  border: 1px solid transparent;
  background: #ffffff;
  border-radius: 60px;
  padding: 04px 06px;
  height: 1rem;
  width: 12%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 6rem;
}

#payment .main-container .left-container .register-close .register-heading h3 {
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0.065em;
  font-weight: 500;
  margin: 0px;
  color: #333333;
}
#payment .main-container .left-container .register-close a {
  margin-top: -02px;
}

#payment .main-container .left-container .register-close a img {
  width: 13px;
  height: 13px;
}

#payment .main-container .left-container .left-line {
  width: 78%;
  border: 0.2px solid #bdbdbd;
}

#payment .main-container .left-container .left-below-block {
  width: 180%;
}

#payment .main-container .left-container .btn-block {
  display: flex;
}

#payment .main-container .left-container .btn-block .send-ticket {
  border: 1px solid transparent;
  background: #ffffff;
  border-radius: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #333333;
  padding: 6px 10px;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

#payment .main-container .left-container .btn-block .send-ticket img {
  width: 20px;
  height: 20px;
}

#payment .main-container .left-container .event-name {
  line-height: 25px;
  color: #12122c;
  font-weight: bold;
  margin-top: 25px;
  font-size: 27px;
  margin-left: 6rem;
}

.paymentbtn {
  width: 22%;
  color: #ffffff;
  bottom: 27%;
  right: 4rem;
  height: 38px;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  position: absolute !important;
  padding: 6px 10px;
  border-radius: 4px;
}

#payment .main-container .left-container .event-date {
  font-size: 14px;
  line-height: 05px;
  text-transform: uppercase;
  color: #12122c;
  margin-top: 10px;
  margin-left: 6rem;
}

#payment .main-container .left-container ul {
  list-style: none;
  padding: 0px;
}

#payment .main-container .left-container ul .list-item {
  display: flex;
  justify-content: space-around;
}

#payment .main-container .left-container ul .list-item .btn-item {
  display: flex;
  padding-top: 21px;
}

#payment .main-container .left-container ul .list-item .btn-item button {
  padding-left: 0px;
  padding-right: 0px;
}

#payment .main-container .left-container ul .list-item .btn-item .btn-right {
  padding-left: 04px;
}

#payment .main-container .left-container ul .list-item .btn-item .btn-left {
  padding-right: 05px;
}

#payment .main-container .left-container ul .list-item .btn-item img {
  width: 22px;
  height: 22px;
}

#payment
  .main-container
  .left-container
  ul
  .list-item
  .btn-item
  .send-ticket
  img {
  width: 22px;
  height: 22px;
}

#payment .main-container .left-container ul .list-item .status {
  font-family: Flutterwave;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
  margin-right: 5rem;
}

#payment .main-container .left-container ul .list-item .price {
  font-family: Flutterwave;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #333333;
  font-weight: 600;
}

#payment .main-container .left-container ul .list-item .number {
  font-family: Flutterwave;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #333333;
}

#payment .main-container .left-container .expire {
  font-family: Flutterwave;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #828282;
  margin-left: 5.4rem;
}

/* LEFT CONTAINER */

#payment .main-container .right-container {
  background-color: #ffffff;
  width: 30%;
  padding-top: 30px;
  height: 95vh;
}

#payment .main-container .right-container .right-content h6 {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  margin-left: 3.5rem;
  margin-top: 0rem;
}

#payment .main-container .right-container .right-content .go-back-block img {
  margin-left: 3.2rem;
}

#payment .main-container .right-container .right-content .right-line {
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#payment .main-container .right-container .right-content .status-block {
  display: flex;
  justify-content: space-between;
  padding-right: 59px;
  padding-left: 59px;
}

#payment .main-container .right-container .right-content .right-line-bottom {
  margin-top: 7rem;
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#payment .main-container .right-container .right-content .status-block .vat {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  font-weight: 600;
  /* margin-right: 140px; */
}
#payment
  .main-container
  .right-container
  .right-content
  .status-block
  .status-right,
.sub-total-right {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  font-weight: 600;
  margin-right: 80px;
}

#payment
  .main-container
  .right-container
  .right-content
  .status-block
  .amount-right {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}

#payment .main-container .right-container .right-content .status-block .total {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #333333;
  font-weight: 600;
}

#payment
  .main-container
  .right-container
  .right-content
  .status-block
  .total-amount-right {
  font-family: Flutterwave;
  font-size: 18px;
  line-height: 29px;
  text-align: right;
  color: #333333;
  border-radius: 4.65425px;
  margin: 07px 0;
  font-weight: 600;
}

#payment .main-container .right-container .right-content .btn-block {
  text-align: center;
  margin-top: 30px;
}

#payment .main-container .right-container .right-content .btn-block1 {
  text-align: center;
  margin-top: 30px;
}

#payment
  .main-container
  .right-container
  .right-content
  .btn-block1
  .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 105px;
  font-size: 16px;
  cursor: pointer;
}

#payment
  .main-container
  .right-container
  .right-content
  .btn-block
  .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 105px;
  font-size: 16px;
  cursor: pointer;
}

#payment .right-container .right-content .money-back {
  display: flex;
  margin-top: 20px;
  margin-left: 3.5rem;
}

#payment .main-container .right-container .right-content .money-back img {
  width: 21px;
  height: 21px;
  margin-top: 15px;
}

#payment .main-container .right-container .right-content .money-back .costumer {
  font-family: Flutterwave;
  font-size: 13px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #333333;
  margin-left: 05px;
  font-weight: 600;
}

#payment
  .main-container
  .right-container
  .right-content
  .money-back
  .guarantee {
  font-family: Flutterwave;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #828282;
  margin-top: -13px;
}

input[type="name"],
[type="email"],
[type="text"] {
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px 15px;
  width: 16.5rem;
  margin-left: 48px;
  margin-top: 10px;
}

#payment .main-detail .form-container .input-block {
  margin-top: 30px;
}

#payment .main-detail .form-container .input-block label {
  margin-left: 57px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #333333;
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  #payment .main-container {
    flex-direction: column;
  }

  #payment .main-container .left-container .register-close {
    width: 7%;
    margin-left: 3rem;
  }

  #payment .main-container .left-container .left-below-block {
    width: 90%;
    margin-left: 35px;
  }

  #payment .main-container .right-container .right-content .go-back-block {
    margin-left: 3.2rem;
  }

  #payment .main-container .left-container {
    margin-left: 0rem;
  }

  #payment .main-container .right-container {
    background-color: #ffffff;
    width: 100%;
  }

  #payment .main-container .right-container .right-content .go-back-block img {
    margin-left: 0.2rem;
  }

  #payment .main-container .right-container .right-content h6 {
    margin-left: 3.2rem;
  }

  #payment .main-container .right-container .right-content .go-back-block h6 {
    margin-left: 0.2rem;
  }
  input[type="name"],
  [type="email"],
  [type="text"] {
    margin-left: 100px;
    width: 31rem;
  }

  #payment .main-detail .form-container .input-block label {
    margin-left: 100px;
  }

  #payment .main-container .left-container .event-date {
    margin-left: 1rem;
  }

  #payment .main-container .left-container .event-name {
    margin-left: 3rem;
  }

  #payment .main-container .left-container .expire {
    margin-left: 4.4rem;
  }

  #payment .main-container .right-container .right-content .status-block {
    display: flex;
    justify-content: space-between;
    padding-right: 139px;
    padding-left: 100px;
  }

  #payment .right-container .right-content .money-back {
    margin-left: 13rem;
  }

  .paymentbtn {
     /* bottom: -10.5%; */
      width: 69%;
      right: 8.6rem;
  }

  #payment .main-container .right-container .right-content .btn-block .send-ticket{
    width: 75%;
  }

  #payment .main-container .right-container .right-content .btn-block1 .send-ticket{
    width: 70%;
    margin-right: 40px;
  }
}

@media (max-width: 676px) {
  input[type="name"],
  [type="email"],
  [type="text"] {
    margin-left: 100px;
    width: 25rem;
  }
}

@media (max-width: 576px) {
  #payment .main-container .right-container .right-content .status-block {
    display: flex;
    justify-content: space-between;
    padding-right: 82px;
    padding-left: 82px;
  }

  #payment .right-container .right-content .money-back {
    margin-left: 6rem;
  }

  #payment .main-container .right-container .right-content .go-back-block img {
    margin-left: 0.2rem;
  }

  #payment .main-container .left-container .expire {
    margin-left: 3.2rem;
  }

  input[type="name"],
  [type="email"],
  [type="text"] {
    margin-left: 80px;
    width: 23.4rem;
  }

  #payment .main-detail .form-container .input-block label {
    margin-left: 80px;
  }
}

@media (max-width: 440px) {
  #payment .main-container .left-container .register-close {
    width: 15%;
  }

  #payment .main-container .right-container .right-content .status-block {
    padding-right: 62px;
    padding-left: 62px;
  }

  #payment .right-container .right-content .money-back {
    margin-left: 5.2rem;
  }

  #payment .main-detail .form-container .input-block label {
    margin-left: 60px;
  }

  #payment .main-container .right-container .right-content .go-back-block img {
    margin-left: 0rem;
  }

  input[type="name"],
  [type="email"],
  [type="text"] {
    width: 16.7rem;
    margin-left: 62px;
  }

  #payment
    .main-container
    .right-container
    .right-content
    .btn-block
    .send-ticket {
    padding: 10px 85px;
  }
}

@media (max-width: 414px) {
  #payment .main-container .left-container ul .list-item .status {
    margin-right: 0.1rem !important;
    font-family: Flutterwave;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    margin-right: 0.5rem;
  }

  #payment .main-container .left-container .left-line {
    width: 83%;
  }

  .paymentbtn {
     bottom: -1.5%;
      width: 73%;
      right: 3rem;
  }
}

@media (max-width: 411px) {
.paymentbtn {
   width: 71%;
  /* bottom: -19%; */
  right: 3.4rem;
  bottom: -4.5%;

}
}

@media (max-width: 375px) {
  #payment .main-container .left-container ul .list-item .status {
    margin-left: 0rem;
  }

  #payment .main-container .left-container .expire {
    margin-left: 1.2rem;
  }

  #payment .main-container .left-container .left-line {
    width: 88%;
  }

  #payment .main-container .left-container ul .list-item .price {
    margin-right: 0px;
  }

  #payment .main-container .right-container .right-content .right-line {
    width: 80%;
    margin-left: 50px;
  }

  #payment .main-container .right-container .right-content .right-line-bottom {
    width: 80%;
    margin-left: 50px;
  }

  #payment .main-detail .form-container .input-block label {
    margin-left: 39px;
  }

  #payment .main-container .right-container .right-content .btn-block1 .send-ticket {
    width: 80%;
}

  input[type="name"],
  [type="email"],
  [type="text"] {
    margin-left: 39px;
  }

  .paymentbtn {
     bottom: -14.5%;
      width: 82%;
      right: 2rem;
  }
}

@media (max-width: 360px) {
.paymentbtn {
   width: 84%;
  bottom: -19%;
  right: 1rem;

}
}


@media (max-width: 320px) {
  #payment .right-container .right-content .money-back {
    margin-left: 1.5rem;
  }

  #payment .main-container .right-container .right-content .go-back-block img {
    margin-right: 1rem;
  }

  #payment .main-container .right-container .right-content .status-block {
    padding-right: 42px;
    padding-left: 42px;
  }

  #payment .main-container .left-container .expire {
    margin-left: 1.2rem;
  }

  #payment .main-container .left-container .register-close {
    width: 20%;
    margin-left: 3rem;
  }

  #payment
    .main-container
    .right-container
    .right-content
    .btn-block
    .send-ticket {
    padding: 10px 85px;
  }

  input[type="name"],
  [type="email"],
  [type="text"] {
    width: 12.5rem;
    margin-left: 38px;
  }

  #payment
    .main-container
    .right-container
    .right-content
    .btn-block1
    .send-ticket {
    padding: 10px 75px;
  }

  #payment
    .main-container
    .right-container
    .right-content
    .btn-block
    .send-ticket {
    padding: 10px 75px;
  }

  #payment .main-detail .form-container .input-block label {
    margin-left: 42px;
  }

  .paymentbtn {
     bottom: -34.5%;
      width: 74%;
      right: 3rem;
  }
}
</style>