<template>
  <v-alert
    text
    color="primary"
    dense
    icon="mdi-shield-lock-outline"
    border="left"
    prominent
  >
    LOGIN
    <br />
    <br />
    Only logged users can use the Celebrity App
  </v-alert>
</template>

<script>
export default {
  name: 'LoginAlertNeedToLogin',
};
</script>

<style scoped></style>
