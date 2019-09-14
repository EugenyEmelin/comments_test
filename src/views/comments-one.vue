<template>
  <div class="page-content">
    <div class="comment-page">
      <div class="mini-container">
        <div class="back">
          <router-link to="/comments">
            <span>&#129120</span>
            Back to comment
          </router-link>
        </div>
        <div class="comment">
          <div class="h2">{{comment.title}}</div>
          <div class="text">{{comment.body}}</div>
        </div>
      </div>
    </div>
    <BackToHome/>
  </div>
</template>

<script>
  import BackToHome from '../components/BackToHome'
  import { mapGetters } from 'vuex'

  export default {
    name: "comment",
    data() {
      return {
        comment: {}
      }
    },
    computed: {

    },
    async mounted() {
      const commentId = this.$route.params.id
      console.log(commentId, 'comment id')
      this.comment = await this.$store.dispatch('getComment', commentId)
      console.log(this.comment, 'comment')
    },
    components: {
      BackToHome
    }
  }
</script>

<style scoped lang="less">
  .comment-page {
    padding-top: 60px;
    min-height: 55vh;
  }
  .h2 {
    margin: 45px 0;
  }
  .back {
    span {
      color: #60e3a1;
    }
  }


</style>