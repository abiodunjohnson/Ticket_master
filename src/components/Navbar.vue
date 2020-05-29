<template>
  <main id="nav-bar">
    <div class="navbar-brand-block">
      <router-link class="navbar-brand ml-5" to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="logo-img" />
      </router-link>
    </div>
    <div>
      <ul class="navbar-right">
        <li class="ticket__text">I didn't get my ticket</li>

        <li>
          <button @click="showModal" class="create-event-btn">CREATE YOUR OWN EVENT</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit("showModal", "carrier");
    }
  }
};
</script>

<style scoped>
#nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 0rem 6rem;
}

#nav-bar .navbar-brand-block {
  margin-top: 10px;
}

#nav-bar .navbar-brand-block .navbar-brand img {
  width: 09rem;
}

#nav-bar .navbar-right {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav-bar .navbar-right .ticket__text {
  padding-right: 1rem;
}

#nav-bar .navbar .navbar-right li {
  display: inline-block;
  margin-left: 40px;
}

#nav-bar .navbar-right .create-event-btn {
  border: 1px solid #f5a623;
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4.06693px;
  padding: 8px 10px;
  cursor: pointer;
  outline: none;
}

/* MEDIA QUEIRES */

@media (max-width: 576px) {
  #nav-bar {
    padding: 0rem 1rem;
  }

  #nav-bar .navbar-brand-block .navbar-brand img {
    width: 09rem;
  }

  #nav-bar .navbar-right {
    list-style: none;
    display: block;
    justify-content: space-between;
    align-items: center;
  }

  #nav-bar .navbar-right .ticket__text {
    padding-bottom: 0.7rem;
  }
}

@media (max-width: 411px) {
  #nav-bar .navbar-right .create-event-btn {
    font-size: 12px;
  }
}

@media (max-width: 414px) {
  #nav-bar .navbar-right .create-event-btn {
    padding: 8px 04px;
  }
}

@media (max-width: 375px) {
  #nav-bar .navbar-right .create-event-btn {
    font-size: 11px;
  }

  #nav-bar .navbar-right .ticket__text {
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  #nav-bar .navbar-right .create-event-btn {
    font-size: 09px;
  }
}

@media (max-width: 320px) {
  #nav-bar .navbar-right .create-event-btn {
    font-size: 07px !important;
    padding: 8px 01px;
  }
}
</style>