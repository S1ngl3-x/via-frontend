<template>
  <v-row>
    <v-col cols="12">
      <v-card :color="cardColor" dark>
        <v-card-title class="headline"> {{ questionNumber }} )</v-card-title>

        <v-card-subtitle>{{ text }}</v-card-subtitle>

        <v-card-actions>
          <v-btn :color="trumpColour" @click="selectTrump"> Trump </v-btn>
          <v-btn :color="swiftColor" @click="selectSwift"> Swift </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import QuestionType from '@/enums/questionType';

export default {
  name: 'QuestionToAsk',
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    questionNumber: { type: Number, required: true },
    quizId: { type: Number, required: true },
  },
  data() {
    return {
      answer: '',
      cardColor: '#696969',
    };
  },
  computed: {
    swiftColor() {
      return this.answer === QuestionType.swift ? '#ff80ed' : '#333333';
    },
    trumpColour() {
      return this.answer === QuestionType.trump ? '#FF0000' : '#333333';
    },
  },
  methods: {
    ...mapActions({
      selectAnswer: 'quiz/answerQuestion',
    }),
    selectTrump() {
      this.answer = QuestionType.trump;
      this.selectAnswer({ questionNumber: this.questionNumber, type: this.answer });
    },
    selectSwift() {
      this.answer = QuestionType.swift;
      this.selectAnswer({ questionNumber: this.questionNumber, type: this.answer });
    },
  },
};
</script>

<style scoped></style>
