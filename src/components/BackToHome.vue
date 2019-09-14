<template>
  <div class="back-to-home">
    <div class="h4">Lorem Ipsum is text of the typesetting industry</div>
    <router-link to="/" class="border-btn"><span>&#129120</span> Back to homepage</router-link>
  </div>
</template>

<script>
  export default {
    name: "BackToHome",
  }
</script>

<style scoped lang="less">
  .back-to-home {
    margin: 55px 0;
    text-align: center;
    .border-btn {
      letter-spacing: -.5px;
      font-size: 17px;
      span {
        color: #60e3a1;
        margin-right: 10px;
      }
    }

  }
</style>