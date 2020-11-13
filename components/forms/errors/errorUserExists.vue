<template>
  <div>
    <br />
    <v-alert type="error">
      An error occurred while creating the user. Probably because email is already
      registered.
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'ErrorUserExists',
};
</script>

<style scoped></style>
