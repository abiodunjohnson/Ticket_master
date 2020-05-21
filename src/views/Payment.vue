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
              <span style="font-size: 13px; margin-right: 10px;">{{countTicket}}</span>
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
            <div>
              <p class="costumer">100% customer protection</p>
              <p class="guarantee">Money back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right-container" v-if="show2">
        <div class="right-content">
          <div class="go-back-block">
            <router-link to class="send-ticket deduct">
              <img src="@/assets/img/arrow-left 1.png" />
            </router-link>
            <h6>Go back</h6>
          </div>
          <hr class="right-line" />
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
            </form>
          </div>

          <div class="status-block">
            <p class="total">TOTAL PAYMENT</p>
            <p class="total-amount-right">&#8358;111,000</p>
          </div>

          <div class="btn-block">
            <router-link to class="send-ticket">CONTINUE</router-link>
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
      <!-- <div class="right-container" v-if="show2">
      <div class="right-content">
        <h6>Go Back</h6>
        <hr class="right-line" />
      </div>
      <div >
        <form>
          <div style="display: flex; flex-direction: column;">
            <label>Full Name</label>
            <input type="text" name="" id="">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label>Email Address</label>
            <input type="email" name="" id="">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label>Phone Number</label>
            <input type="text" name="" id="">
          </div>
        </form>
      </div>

        <div class="btn-block">
          <button class="send-ticket">CONTINUE</button>
        </div>
        <div class="money-back">
          <img src="@/assets/img/Vector.png" />
          <div>
            <p class="costumer">100% customer protection</p>
            <p class="guarantee">Money back guarantee</p>
          </div>
        </div>
      </div>-->
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      payObject: {},
      quannt: 0,
      countTicket: 0,
      disabled: true,
      vat: 100,
      show: true,
      show2: false
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
    }
  }
};
</script>

<style scoped>
#payment {
  background: #f2f2f2;
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

#payment .main-container .left-container ul .list-item .btn-item .btn-right {
  padding-left: 05px;
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
  /* padding-right: 2rem;
  padding-left: 2rem;
} */
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

#payment .main-container .right-container .right-content .right-line {
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#payment .main-container .right-container .right-content .status-block {
  display: flex;
  justify-content: space-around;
}

#payment .main-container .right-container .right-content .right-line-bottom {
  margin-top: 7rem;
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#payment
  .main-container
  .right-container
  .right-content
  .status-block
  .status-right,
.vat,
.sub-total-right {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  font-weight: 600;
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
}

#sidebar .right-container .right-content .money-back {
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

/* LEFT CONTINAER 2 */
</style>