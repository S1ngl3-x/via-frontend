export default {
  setCurrentQuiz(state, quiz) {
    state.currentQuiz = quiz;
  },

  setQuizzes(state, quizzes) {
    state.quizzes = quizzes;
  },

  setQuestionAnswer(state, { index, type }) {
    const updatedQuestion = state.currentQuiz.questions[index];
    updatedQuestion.answer = type;
    state.currentQuiz.questions.splice(index, 1, updatedQuestion);
  },

  setOpenFirstQuiz(state, value) {
    state.openFirstQuiz = value;
  },
};
