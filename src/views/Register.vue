<template>
  <main id="register">
    <div class="main-container">
      <div class="register-close">
        <div class="register-heading">
          <h3>Register For free</h3>
        </div>
        <a @click="hideModal">
          <img src="@/assets/img/Close.png" />
        </a>
      </div>
      <hr />
      <div class="main-detail">
        <form class="form-container" @submit.prevent='handleCreate'>
          <div class="input-block">
            <label for="name">Event name</label>
            <br />
            <input type="text" v-model ="ticket.name" placeholder required />
          </div>


          <div class="input-block">
            <label for="">Description</label>
            <br />
            <input type="text" v-model ="ticket.description" placeholder required />
          </div>

          <div class="input-block">
            <label for="">End time</label>
            <br />
            <input type="text" v-model ="ticket.end_time" placeholder="2020-08-21 " required />
          </div>

          <div class="input-block">
            <label for="email">Start time</label>
            <br />
            <input type="text" v-model ="ticket.start_time" placeholder="2020-08-21 " required />
          </div>

           <div class="input-block">
            <label for="Venue">Venue</label>
            <br />
            <input type="text" v-model ="ticket.venue" placeholder required />
          </div>
          <div class="input-block">
            <label for="email">Number of tickets</label>
            <br />
            <input type="text" v-model ="ticket.num_of_tickets" placeholder="2020-08-21 " name required />
          </div>

          <div class="input-block">
            <label for="email">Sale End Date</label>
            <br />
            <input type="text" v-model ="ticket.tickets_sale_end_date" placeholder="2020-08-21 " name= required />
          </div>
          <div class="input-block">
           <select type="select-ticket" v-model="ticket.is_free">
            <option disabled value="">Please select one</option>
            <option id="1">Paid</option>
            <option id="0">Free</option>
           </select>
          </div>

          <div class="btn-block">
            <button class="send-ticket" type="submit">Register</button>
          </div>
          <modal 
            name="hello-modal"
            :width="500"
            :height="600"
          >
            <success-modal :name="ticket"  v-on:hideModal="hideSuccess" />
          </modal>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import SuccessModal from '../components/successModal.vue'

export default {
  components:{
    SuccessModal
  },
  data() {
   return {
     ticket: {
       name: '',
       description: '',
       end_time: '',
       start_time: '',
       venue: '',
       num_of_tickets: '',
       tickets_sale_end_date: '',
       is_free: ''
     },
   }
  },
  updated(){
    console.log('mokiiing',this.ticket)
  },
  methods:{
    async handleCreate(e){
      e.preventDefault();

      let payload = {
        name: this.ticket.name,
        description: this.ticket.description,
        end_time: this.ticket.end_time,
        start_time: this.ticket.start_time,
        venue: this.ticket.venue,
        num_of_tickets: this.ticket.num_of_tickets,
        tickets_sale_end_date: this.ticket.tickets_sale_end_date,
        is_free: this.ticket.is_free
      }

      let url = 'https://eventsflw.herokuapp.com/v1/events'

      await axios.post(url, payload)
        .then(res => {
          if(res.status === 200){
            this.clearField();
            console.log('i got here')
             this.$modal.show("success-modal")
             console.log('i got here---')
            this.hideModal();
            console.log('i got here also')
          }
        })
    },
    clearField() {
      this.ticket.name = '',
      this.ticket.description = '',
      this.ticket.end_time = '',
      this.ticket.start_time = '',
      this.ticket.venue = '',
      this.ticket.num_of_tickets = '',
      this.ticket.tickets_sale_end_date = '',
      this.ticket.is_free = ''
    },
    hideModal() {
      this.$emit("hideModal", "carrier");
    },
    showSuccess(){
      this.$modal.show("success-modal")
    },
    hideSuccess(){
      this.$modal.hide("success-modal")
    }
  }, 
  
};
</script>

<style scoped>

#register .main-container {
  background: #ffffff;
  border-radius: 10px;
  width: 70%;
  height: auto;
  margin: auto;
  padding: 30px 10px 60px 10px;
  /* overflow: hidden; */
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

input[type="text"],
[type="select-ticket"]
 {
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
  padding: 10px 11px;
  width: 18.5rem;
  text-align: center;
}
/* MEDIA QUERIES */

@media (max-width: 414px) {
 input[type="text"],
[type="select-ticket"]
 {
  width: 13.5rem !important;
}
}

@media (max-width: 375px) {
 input[type="text"],
[type="select-ticket"]
 {
  width: 13.5rem !important;
}
}
</style>