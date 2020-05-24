<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f2f2;
  width: 100vw !important;
}
body, html {
  margin: 0px !important;
  overflow-x: none;
  padding: 0;
  box-sizing: border-box;
}

</style>
