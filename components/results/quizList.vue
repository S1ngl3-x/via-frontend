<template>
  <v-card max-width="450" class="mx-auto">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Quiz Results</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-expansion-panels popout focusable hover>
      <completed-quiz
        v-for="(quiz, i) in quizzes"
        v-if="quizzes"
        :key="quiz.id"
        :questions="quiz.questions"
        :quiz-number="++i"
      />
    </v-expansion-panels>
  </v-card>
</template>

<script>
import CompletedQuiz from '@/components/results/completedQuiz';
import { mapActions } from 'vuex';
export default {
  name: 'QuizList',
  components: { CompletedQuiz },
  computed: {
    quizzes() {
      return this.$store.getters['quiz/quizzes'].items;
    },
  },
  created() {
    this.findQuizzes({ limit: 5, page: 1 });
  },
  methods: {
    ...mapActions({
      findQuizzes: 'quiz/findCompletedQuizzes',
    }),
  },
};
</script>

<style scoped></style>
