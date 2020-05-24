<template>
  <main id="blank-layout">
    <img src="@/assets/img/Liness.png" alt />
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#blank-layout {
  top: 0;
    right: 0%;
  position: absolute;
}

#blank-layout img {
  overflow: hidden;
   position: relative;
 height: 44.7rem;
}


/* MEDIA QUERIES */
@media (max-width: 360px) {
  #blank-layout img {
    display: none;
  }
}

@media (max-width: 768px) {
  #blank-layout img {
    display: none;
  }
}

</style>