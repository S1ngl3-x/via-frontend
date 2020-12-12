<template>
  <v-container>
    <quiz-list />
    <load-more-quizzes-button />
  </v-container>
</template>

<script>
import QuizList from '@/components/results/quizList';
import LoadMoreQuizzesButton from '@/components/results/buttons/loadMoreQuizzesButton';
export default {
  name: 'Results',
  components: { LoadMoreQuizzesButton, QuizList },
};
</script>

<style scoped></style>
