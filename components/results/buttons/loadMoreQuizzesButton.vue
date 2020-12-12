<template>
  <v-btn>Load more</v-btn>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoadMoreQuizzesButton',
  methods: {
    ...mapActions({
      findQuizzes: 'quiz/findCompletedQuizzes',
    }),
  },
};
</script>

<style scoped></style>
