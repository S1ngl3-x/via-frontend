<template>
  <v-card class="mx-auto" color="#D50000" dark max-width="400">
    <v-card-title>
      <v-icon large left> mdi-account-voice </v-icon>
      <span class="title font-weight-light">Donal Trump</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      Can you recognize jokes from a comedian who also happens to be a president? I mean
      ... happened to be.
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" src="images/trump_avatar.webp"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            ><a
              href="https://whatdoestrumpthink.com/api-docs/index.html#introduction"
              target="_blank"
              >API</a
            >
            for generating Donald Trump quotes.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WelcomeCardTrump',
};
</script>

<style scoped></style>
