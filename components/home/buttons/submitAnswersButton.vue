<template>
  <v-btn :disabled="!readyToSubmit" class="mr-4" @click="submitQuiz"
    >Submit Your Answers</v-btn
  >
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
    }),
  },
};
</script>

<style scoped></style>
