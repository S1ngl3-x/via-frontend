<template>
  <v-container>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        Quiz Number: {{ quizNumber }}
        <template v-slot:actions>
          <v-btn :color="color">{{ correctCount }}/5</v-btn>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card max-width="450" class="mx-auto">
          <v-list three-line>
            <template v-for="(question, index) in questions">
              <v-list-item :key="question.id">
                <v-list-item-icon>
                  <v-icon v-if="question.type === question.answer" color="green"
                    >mdi-check</v-icon
                  >
                  <v-icon v-else color="red">mdi-cancel</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ ++index }}</v-list-item-title>
                  <v-list-item-subtitle>{{ question.text }}</v-list-item-subtitle>
                  <v-list-item-subtitle
                    >your answer: {{ question.answer }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle
                    >correct answer: {{ question.type }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  name: 'CompletedQuiz',
  props: {
    questions: { type: Array, required: true },
    quizNumber: { type: Number, required: true },
  },
  data() {
    return {
      correctCount: this.questions.filter((q) => q.type === q.answer).length,
    };
  },
  computed: {
    color() {
      if (this.correctCount === 5) {
        return 'green';
      } else if (this.correctCount !== 0) {
        return 'orange';
      } else {
        return 'red';
      }
    },
  },
};
</script>

<style scoped></style>
