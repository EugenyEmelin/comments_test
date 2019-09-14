<template>
  <div class="page-content">
    <div class="small-container">
      <div class="h1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </div>
    </div>
    <div class="img-wrapper">
      <img src="../assets/img/Layer_131.png" alt="">
    </div>
    <div class="small-container">
      <div class="about row-sb" ref="about" id="about">
        <div class="about-col">
          <div class="icon-line">
            <img src="../assets/img/people.png" alt="">
          </div>
          <div class="h3">Who we are</div>
          <ul class="list">
            <li class="text">• It is a long established fact that a reader will be distracted</li>
            <li class="text">• The readable content of a page when looking at its layout</li>
            <li class="text">• The point of using Lorem Ipsum</li>
            <li class="text">• As opposed to using 'Content here, content here'.</li>
          </ul>
        </div>
        <div class="about-col">
          <div class="icon-line">
            <img src="../assets/img/monitor.png" alt="">
          </div>
          <div class="h3">What we do</div>
          <ul class="list">
            <li class="text">• Many desktop publishing packages and web page</li>
            <li class="text">• There are many variations of passages of Lorem Ipsum available, but the majority have</li>
            <li class="text">• Various versions have evolved over the years, sometimes by accident</li>
          </ul>
        </div>
        <div class="about-col">
          <div class="icon-line">
            <img src="../assets/img/mechanism.png" alt="">
          </div>
          <div class="h3">Technology</div>
          <ul class="list">
            <li class="text">• The point of using Lorem Ipsum</li>
            <li class="text">• As opposed to using 'Content here, content here'</li>
            <li class="text">• Contrary to popular belief, Lorem Ipsum is not simply random text</li>
            <li class="text">• A Latin professor at Hampden-Sydney College in Virginia</li>
          </ul>
        </div>
      </div>
    </div>
    <WriteComment ref="writeComment"/>
  </div>
</template>

<script>
  import WriteComment from '../components/WriteComment'

  export default {
    name: "main-page",
    components: {
      WriteComment
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/smart-grid";
  .about {
    padding-bottom: 110px;
    .md-block({ flex-flow: column nowrap; padding-bottom: 40px;})
  }
  .about-col {
    width: 30%;
    margin-top: 110px;
    .md-block({ width: 100%; margin-top: 40px;})
  }
</style>