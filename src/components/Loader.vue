<template>
  <main id="loader">
    <div class="text-center">
      <p></p>
      <div class="loader1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
#loader {
  text-align: center;
  margin: auto 0;
  padding: 15rem 0;
}
#loader .loader1 {
  display: inline-block;
  font-size: 0px;
}
#loader .loader1 span {
  vertical-align: middle;
  border-radius: 100%;

  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 3px 2px;
  -webkit-animation: loader1 0.8s linear infinite alternate;
  animation: loader1 0.8s linear infinite alternate;
}
#loader .loader1 span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgb(245, 165, 36);
}
#loader .loader1 span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgb(245, 165, 36);
}
#loader .loader1 span:nth-child(3) {
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
  background: rgb(245, 165, 36);
}
#loader .loader1 span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgb(245, 165, 36);
}
#loader .loader1 span:nth-child(5) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgb(245, 165, 36);
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }
  to {
    -webkit-transform: scale(1, 1);
  }
}
</style>