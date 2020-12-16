<template>
  <div>
    <v-card max-width="400" class="mx-auto">
      <v-app-bar dark color="pink">
        <v-toolbar-title>New Quiz</v-toolbar-title>
        <v-spacer></v-spacer>
        <generate-quiz-button />
      </v-app-bar>

      <v-container>
        <v-row dense>
          <question-to-ask
            v-for="(question, i) in questions"
            :id="question.id"
            :key="question.id"
            :quiz-id="quiz.id"
            :text="question.text"
            :question-number="++i"
          />
        </v-row>
      </v-container>
      <submit-answers-button />
    </v-card>
  </div>
</template>

<script>
import QuestionToAsk from '@/components/home/questionToAsk';
import GenerateQuizButton from '@/components/home/buttons/generateQuizButton';
import SubmitAnswersButton from '@/components/home/buttons/submitAnswersButton';
export default {
  name: 'GeneratedQuiz',
  components: { SubmitAnswersButton, GenerateQuizButton, QuestionToAsk },
  computed: {
    quiz() {
      return this.$store.getters['quiz/currentQuiz'];
    },
    questions() {
      return this.quiz.questions;
    },
  },
};
</script>

<style scoped></style>
