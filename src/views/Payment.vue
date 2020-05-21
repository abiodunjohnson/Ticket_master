<template>
  <main id="payment">
    <section class="main-container">
      <div class="left-container">
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
            <ul>
              <li class="list-item" v-for="status in loadData" :key="status.id">
                <p class="status">{{status.type}}</p>
                <p class="price">&#8358;{{status.price}}</p>
                <div class="btn-item">
                  <div class="btn-left">
                    <img @click="decrement(status.id)" src="@/assets/img/deduct item.png" />
                  </div>
                  {{count}}
                  <div class="btn-right">
                    <img @click="increment(status.id)" src="@/assets/img/Add item.png" />
                  </div>
                </div>
              </li>
              <hr class="left-line" />
            </ul>

            <p class="expire">
              Ticket sales ends on
              <span>22nd</span> Novemember 2019
            </p>
          </div>
        </div>
      </div>
      <PriceSidebar :oneItem="status" />
    </section>
  </main>
</template>

<script>
import PriceSidebar from "../components/PriceSidebar";
export default {
  components: {
    PriceSidebar
  },

  data() {
    return {};
  },

  computed: {
    loadData() {
      return this.$store.state.item.allTypes;
    },

    count() {
      return this.$store.state.item.quantity;
    }
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
    increment(id) {
      this.$store.dispatch("addToCart", id);
      console.log(id);
    },
    decrement(id) {
      this.$store.dispatch("removeFromCart", id);
      console.log(id);
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
</style>