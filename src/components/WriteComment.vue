<template>
  <div class="write-comment" id="write-comment">
    <div class="small-container">
      <div class="comment-wrapper">
        <div class="write-comment-title">
          <div class="h2">Write<br>comment</div>
        </div>
        <form class="write-comment-form" @submit.prevent="addComment">
          <input class="form-input" type="text" placeholder="Title" v-model="comment.title">
          <textarea class="form-input" cols="30" rows="10" placeholder="Your comment" v-model="comment.body"></textarea>
          <button class="btn" :disabled="!valid">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WriteComment",
    data() {
      return {
        comment: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      async addComment() {
        if (!this.valid) return false
        try {
          const newComment = await this.$store.dispatch('addComment', {
            'created_at': new Date().getTime(),
            'title': this.comment.title,
            'body': this.comment.body
          })
          this.comment.title = ''
          this.comment.body = ''
        } catch(e) {}
      }
    },
    computed: {
      valid() {
        return !!this.comment.title && !!this.comment.body
      }
    },
    mounted() {
      console.log(this.$store.getters.comments)
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/_variables";
  @import "../assets/styles/smart-grid";

  .write-comment {
    padding: 140px 0;
    background-color: @bgcDark;
    line-height: 1;

  }
  .write-comment-title {

  }
  .write-comment-title .h2 {
    color: @colorWhite;
  }
  .write-comment-title .h2:after {
    content: '';
    display: block;
    background-color: #f9d10d;
    width: 70px;
    height: 5px;
    margin-top: 30px;
  }
  .write-comment-form {
    width: 55%;
    .lg-block({ width: 100%; margin-top: 25px;})
  }
  .write-comment-form > *{
    outline: none;
    display: block;
    border-radius: 4px;
  }
  .form-input {
    width: 100%;
    color: #60e3a1;
    border: 1px solid #60e3a1;
    background-color: transparent;
    padding: 20px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  .form-input::placeholder {
    color: rgba(96, 227, 161, 0.35);
  }
  .comment-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .lg-block({ flex-flow: column nowrap;})
  }
</style>