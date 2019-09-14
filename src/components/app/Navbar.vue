<template>
  <nav class="navbar container">
    <div class="navbar-wrapper row-sb">
      <div class="navbar-left row-align-center">
        <div class="logo" @click="goScroll('app')">
          <router-link to="/">
            <img src="../../assets/img/logo_test.png" alt="">
          </router-link>
        </div>
      </div>
      <ul class="navbar-right row-align-center">
        <li>
          <span @click="goScroll('about')">
            <router-link to="/#info">ABOUT US</router-link>
          </span>
        </li>
        <li>
          <span @click="goScroll('write-comment')">
            <router-link to="/#comment">WRITE COMMENT</router-link>
          </span>
        </li>
        <li>
          <span>
            <router-link to="/comments">COMMENTS</router-link>
          </span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
    methods: {
      goScroll(el) {
        document.getElementById(el).scrollIntoView({
          behavior: 'smooth',

        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/styles/_variables";
  @import "../../assets/styles/smart-grid";

  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(247, 247, 247, 0.9);
    z-index: 99999;
  }
  .navbar-wrapper {
    height: 80px;
    margin-top: 25px;
    .xs-block({ margin-top: 0;})
  }
  .navbar-left {
    img {
      .xs-block({ height: 35px;})
    }
  }
  .navbar-right {
    li {
      display: inline-block;
      margin-left: 38px;
      color: @colorText;
      font-size: 15px;
      font-weight: bold;
      .sm-block({ font-size: 12px; margin-left: 12px; letter-spacing: -.5px;});
    }

  }

</style>