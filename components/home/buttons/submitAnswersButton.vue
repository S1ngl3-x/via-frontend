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
      return questions.filter((q) => q.answer !== undefined).length === 5;
    },
  },
  methods: {
    ...mapActions({
      submitCurrentQuiz: 'quiz/submitCurrentQuiz',
      openFirstQuiz: 'quiz/openFirstQuiz',
      clearCurrentQuiz: 'quiz/clearCurrentQuiz',
    }),
    submit() {
      this.submitCurrentQuiz();
      this.openFirstQuiz(0);
      this.clearCurrentQuiz();
      this.$router.push('/results');
    },
  },
};
</script>

<style scoped></style>
