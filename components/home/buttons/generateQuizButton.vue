<template>
  <v-btn class="mr-4" @click="generateQuiz">Generate Quiz</v-btn>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GenerateQuizButton',

  methods: {
    ...mapActions({
      generateQuiz: 'quiz/generateQuiz',
    }),
  },
};
</script>

<style scoped></style>
