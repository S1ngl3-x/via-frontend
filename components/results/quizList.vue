<template>
  <v-card max-width="450" class="mx-auto">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Quiz Results</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-expansion-panels v-if="quizzes" v-model="openFirst" popout focusable hover>
      <completed-quiz
        v-for="(quiz, i) in quizzes"
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
  data() {
    return {
      openFirst: this.$store.getters['quiz/openFirstQuiz'],
    };
  },
  computed: {
    quizzes() {
      return this.$store.getters['quiz/quizzes'].items;
    },
  },
  created() {
    this.findQuizzes({ limit: 50, page: 1 });
  },
  beforeDestroy() {
    this.openFirstQuiz(null);
  },
  methods: {
    ...mapActions({
      findQuizzes: 'quiz/findCompletedQuizzes',
      openFirstQuiz: 'quiz/openFirstQuiz',
    }),
  },
};
</script>

<style scoped></style>
