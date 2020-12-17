<template>
  <v-card class="mx-auto my-4" color="#EA80FC" dark max-width="400">
    <v-card-title>
      <v-icon large left> mdi-hand-heart </v-icon>
      <span class="title font-weight-light">Taylor Swift</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Are you ready to fall for true and the most epic love poems? But remember:
      "Everything that falls, gets broken.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" src="images/love_avatar.jpeg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            ><a href="https://taylor.rest" target="_blank">API</a>
            for Swift quotes.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WelcomeCardSwift',
};
</script>

<style scoped></style>
