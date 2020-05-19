<template>
  <main id="footer">
    <footer class="footer-block">
      <div class="footer-left">Copyright {{ new Date().getFullYear() }}. Flutterwave inc</div>
      <ul>
        <li>Terms &#38; Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#footer .footer-block {
  display: flex;
  justify-content: space-between;
  /* padding-top: 50px; */
}

#footer .footer-block .footer-left {
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  color: #4a4a4a;
  margin-left: 9rem;
}

#footer .footer-block ul {
  list-style: none;
  margin-top: 0;
}

#footer .footer-block ul li {
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
  color: #4a4a4a;
  margin-right: 9rem;
}

@media (max-width: 576px) {
  #footer .footer-block {
    display: block;
    padding-top: 30px;
    padding-left: 6.2rem
  }

  #footer .footer-block .footer-left {
    margin-left: 0rem;
  }

  #footer .footer-block ul {
    list-style: none;
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 10px;
    padding-inline-start: 0px;
  }

  #footer .footer-block ul li:first-child {
  margin-left: 0rem;
}

  #footer .footer-block ul li {
    margin-right: 0rem;
  }
}
</style>