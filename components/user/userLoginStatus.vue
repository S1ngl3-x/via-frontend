<template v-if="loginStatus">
  <div>
    <div>User email is: {{ email }}</div>
    <v-btn @click="setInfo">Authenticate</v-btn>
    <div v-if="info">
      {{ info }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserLoginStatus',
  data() {
    return {
      info: null,
    };
  },
  computed: {
    email() {
      return this.$store.getters['user/user'].email;
    },
    loginStatus() {
      return this.email || this.email !== null;
    },
  },
  methods: {
    ...mapActions({
      authenticate: 'user/authenticate',
    }),
    async setInfo() {
      this.info = await this.authenticate();
    },
  },
};
</script>

<style scoped></style>
