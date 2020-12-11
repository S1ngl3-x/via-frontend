export default {
  setCurrentQuiz(state, quiz) {
    state.currentQuiz = quiz;
  },

  setQuizzes(state, quizzes) {
    state.quizzes = quizzes;
  },

  setQuizAnswer(state, quiz) {
    state.quizAnswer = quiz;
  },

  setQuestionAnswer(state, { index, type }) {
    const updatedQuestion = state.currentQuiz.questions[index];
    updatedQuestion.answer = type;
    state.currentQuiz.questions.splice(index, 1, updatedQuestion);
  },
};
