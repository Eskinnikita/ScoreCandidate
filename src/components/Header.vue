<template>
  <div id="header">
    <div class="wrapper">
      <span class="title" @click="toHomePage">Score Candidate <i class="fas fa-file"></i></span>
      <router-link to="/login"><button class="login-button">войти</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    toHomePage() {
      this.$router.replace('/', () => {})
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 55px;
  box-sizing: border-box;
  background-color: $main-color;
  margin-bottom: 30px;
  color: #fff;

  .login-button {
    @include link(#fff);
  }

  .title {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: semi-bold;
    cursor: pointer;
  }
}

.wrapper {
  @include flexSpaceBetween;
  height: 100%;
}
</style>
