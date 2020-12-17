<template>
  <v-btn v-if="username" class="text-lowercase" @click="logout"
    >{{ username }} <v-icon small class="px-2" color="red">mdi-logout</v-icon></v-btn
  >
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LogoutButton',
  computed: {
    userEmail() {
      return this.$store.getters['user/user'].email;
    },
    username() {
      if (this.userEmail) {
        return this.userEmail.split('@')[0];
      } else {
        return '';
      }
    },
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
  },
};
</script>

<style scoped></style>
