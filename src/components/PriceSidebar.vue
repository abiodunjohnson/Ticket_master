<template>
  <main id="sidebar">
    <div class="right-container">
      <div class="right-content">
        <h6>ORDER SUMMARY</h6>
        <hr class="right-line" />
        <div class="status-block">
          <p class="status-right"></p>
          <p class="amount-right">&#8358;</p>
        </div>
        <div class="status-block">
          <p class="status-right"></p>
          <p class="amount-right">&#8358;</p>
        </div>
        <hr class="right-line-bottom" />
        <div class="status-block">
          <p class="sub-total-right">
            Sub
            <span>-</span>total
          </p>
          <p class="amount-right">&#8358;</p>
        </div>
        <div class="status-block">
          <p class="vat">VAT</p>
          <p class="amount-right">&#8358;</p>
        </div>

        <div class="status-block">
          <p class="total">TOTAL PAYMENT</p>
          <p class="total-amount-right">&#8358;</p>
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
  </main>
</template>
<script>
export default {
  props: {
    oneItem: Object
  },
  mounted() {
    console.log(this.oneItem);
  }
};
</script>
<style scoped>
#sidebar .right-container {
  background-color: #ffffff;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
}

#sidebar .right-container .right-content h6 {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  margin-left: 3.5rem;
  margin-top: 0rem;
}

#sidebar .right-container .right-content .right-line {
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#sidebar .right-container .right-content .status-block {
  display: flex;
  justify-content: space-around;
}

#sidebar .right-container .right-content .right-line-bottom {
  margin-top: 7rem;
  width: 70%;
  border: 0.2px solid #bdbdbd;
}

#sidebar .right-container .right-content .status-block .status-right,
.vat,
.sub-total-right {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  font-weight: 600;
}

#sidebar .right-container .right-content .status-block .amount-right {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}

#sidebar .right-container .right-content .status-block .total {
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #333333;
  font-weight: 600;
}

.right-container .right-content .status-block .total-amount-right {
  font-family: Flutterwave;
  font-size: 18px;
  line-height: 29px;
  text-align: right;
  color: #333333;
  border-radius: 4.65425px;
  margin: 07px 0;
  font-weight: 600;
}

#sidebar .right-container .right-content .btn-block {
  text-align: center;
  margin-top: 30px;
}

#sidebar .right-container .right-content .btn-block .send-ticket {
  font-family: Flutterwave;
  text-transform: uppercase;
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 105px;
  width: 0rem;
}

#sidebar .right-container .right-content .money-back {
  display: flex;
  margin-top: 20px;
  margin-left: 3.5rem;
}

#sidebar .right-container .right-content .money-back img {
  width: 21px;
  height: 21px;
  margin-top: 15px;
}

#sidebar .right-container .right-content .money-back .costumer {
  font-family: Flutterwave;
  font-size: 13px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #333333;
  margin-left: 05px;
  font-weight: 600;
}

#sidebar .right-container .right-content .money-back .guarantee {
  font-family: Flutterwave;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #828282;
  margin-top: -13px;
}
</style>