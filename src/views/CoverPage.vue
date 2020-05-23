<template>
  <main id="coverpage">
    <div class="main-container">
      <div class="img-circle-block">
        <img src="@/assets/img/Ellipse.png" />
      </div>
      <div class="img-line-block1">
        <img src="@/assets/img/Line.png" />
      </div>
      <div class="cover-text">
        <h1>Ticket Master</h1>
      </div>

      <div class="img-line-block">
        <img src="@/assets/img/Line.png" />
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#coverpage {
  background-color: #12122c;
  height: 38rem;
}

#coverpage .main-container .img-circle-block {
  padding-right: 5rem;
  padding-top: 2rem;
}

#coverpage .main-container .img-circle-block img {
  float: right;
  width: 5rem;
  height: 5rem;
}

#coverpage .main-container .img-line-block {
  margin-right: 5rem;
  padding-top: 3rem;
  text-align: center;
}

#coverpage .main-container .img-line-block img {
  height: 6rem;
  text-align: center;
}

#coverpage .main-container .img-line-block1 {
  text-align: center;
  margin-left: 4.6rem;
}

#coverpage .main-container .img-line-block1 img {
  height: 6rem;
}

#coverpage .main-container .cover-text {
  text-align: center;
}

#coverpage .main-container h1 {
  font-family: Flutterwave;
  font-size: 100px;
  line-height: 140px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #f5a623;
}
</style>