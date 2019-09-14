<template>
  <div class="page-content">
    <div class="small-container">
      <div class="h1">Comments</div>
      <div class="comments-all">
        <div class="comment-card" v-for="comment in comments" :key="comment.id">
          <div class="comment-title">{{comment.title}}</div>
          <div class="comment-text">{{comment.body}}</div>
          <div @click="goScroll('app')">
            <router-link class="btn" :to="'comments/'+comment.id">Read more</router-link>
          </div>
        </div>
      </div>
      <BackToHome/>
    </div>
  </div>
</template>

<script>
  import BackToHome from '../components/BackToHome'

  export default {
    name: "comments",
    components: {
      BackToHome
    },
    data() {
      return {
        comments: [],
      }
    },
    methods: {
      goScroll(el) {
        document.getElementById(el).scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
    async mounted() {
      this.comments = await this.$store.dispatch('getComments')
      console.log(this.comments)
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/_variables";
  @import "../assets/styles/smart-grid";

  .comments-all {
    margin-top: 55px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    .md-block({ margin-top: 10px;})
  }
  .comment-card {
    padding: 35px;
    background: linear-gradient(135deg, @colorWhite, transparent 2%, @colorWhite, #fff);
    box-shadow: 10px 5px 10px #f2f2f2;
    width: calc(50% - 20px);
    box-sizing: border-box;
    margin-bottom: 55px;
    border-radius: 3px;
    .md-block({ width: 100%;})
  }
  .comment-title {
    font-size: 20px;
    color: @bgcDark;
  }
  .comment-text {
    color: #888888;
    font-size: 15px;
    margin: 20px 0 25px 0;
  }
</style>