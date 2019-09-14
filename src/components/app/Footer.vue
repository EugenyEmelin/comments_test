<template>
  <div class="footer">
    <div class="footer-container row-sb row-align-center">
      <div class="contacts">
        <div>mail@mailtest.com</div>
        <div>+30-6977664062</div>
      </div>
      <div class="copyright">
        Copyright © 2019 Test All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style scoped lang="less">
  @import "../../assets/styles/_variables";
  @import "../../assets/styles/smart-grid";

  .footer {
    background-color: @bgcDark;
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    &-container {
      margin: 0 50px;
      .md-block({ margin: 0 25px });
      .xs-block({ margin: 0 10px });
      border-top: 1px solid #2b2c36;
      height: 100px;
      .contacts {
        color: #c3c3c5;
      }
      .copyright {
        color: #5b5f74;
      }
    }
  }
</style>