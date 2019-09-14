<template>
  <div class="app-main-layout">
    <NavBar/>
    <main class="app-content">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '../components/app/Navbar'
  import Footer from '../components/app/Footer'

  export default {
    name: "MainLayout",
    components: {
      NavBar,
      Footer
    },
    async mounted() {
      if (!Object.keys(this.$store.getters.comments).length) {
        const comments = await this.$store.dispatch('getComments')
        console.log(comments, 'from comments mounted')
      }
    }
  }
</script>

<style scoped lang="less">
  .app-content {
    min-height: 100vh;
  }
</style>