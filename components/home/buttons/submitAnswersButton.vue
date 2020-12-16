<template>
  <v-card-actions class="justify-center">
    <v-btn v-show="readyToSubmit" class="mr-4" color="primary" @click="submit"
      >Submit Your Answers</v-btn
    >
  </v-card-actions>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SubmitAnswersButton',
  computed: {
    readyToSubmit() {
      const questions = this.$store.getters['quiz/currentQuiz'].questions;
      // because no typescript, I might just as well enjoy the dynamic madness
      // eslint-disable-next-line no-prototype-builtins
      return questions.filter((q) => q.hasOwnProperty('answer')).length === 5;
    },
  },
  methods: {
    ...mapActions({
      submitQuiz: 'quiz/submitCurrentQuiz',
      openFirstQuiz: 'quiz/openFirstQuiz',
    }),
    async submit() {
      await this.submitQuiz;
      this.openFirstQuiz(0);
      await this.$router.push('/results');
    },
  },
};
</script>

<style scoped></style>
