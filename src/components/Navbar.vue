<template>
  <main id="nav-bar">
    <nav class="navbar">
      <router-link class="navbar-brand ml-5" to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="logo-img" />
      </router-link>
      <ul class="navbar-right">
        <li class>I didn't get my ticket</li>

        <li>
          <button class="create-event-btn">CREATE YOUR OWN EVENT</button>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style scoped>
#nav-bar .navbar {
  display: flex;
  justify-content: space-between;
}

#nav-bar .navbar .navbar-brand {
  margin-left: 9rem;
}

#nav-bar .navbar .navbar-right {
  list-style: none;
  margin-right: 9rem;
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
}
</style>