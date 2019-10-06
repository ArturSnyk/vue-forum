<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to me practicing vue</h1>
      <p class="lead">Lets see what we can do with vue 🤩</p>
      <hr class="my-4">
      <p>It's all about practicing some code.</p>
      <p class="lead">
        <a
          v-if="!user"
          class="btn btn-danger btn-lg"
          :href="getLoginURL"
          role="button">Login with Google</a>
        <router-link
          class="btn btn-primary btn-lg"
          to="/forum"
          role="button">Go to forum</router-link>
      </p>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState(['user']), // means that this component has access to user
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google';
      }
      return 'http://localhost:3000/no-current-prod-env';
    },
  },
};
</script>
