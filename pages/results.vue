<template>
  <v-container>
    <quiz-list />
  </v-container>
</template>

<script>
import QuizList from '@/components/results/quizList';
export default {
  name: 'Results',
  components: { QuizList },
};
</script>

<style scoped></style>
