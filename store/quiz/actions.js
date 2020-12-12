export default {
  async generateQuiz({ commit }) {
    const quiz = await this.$axios.$post('quiz');

    if (quiz) {
      quiz.questions.sort((a, b) => a.id - b.id); // backend does not sort to save on resources
      commit('setCurrentQuiz', quiz);
    }
  },

  async findCompletedQuizzes({ commit }, { limit, page }) {
    const quizzes = await this.$axios.$get('quiz/completed', { params: limit, page });
    if (quizzes) {
      commit('setQuizzes', quizzes);
    }
  },

  async submitCurrentQuiz({ getters }) {
    await this.$axios.$patch('quiz', getters.currentQuiz);
  },

  answerQuestion({ commit }, { questionNumber, type }) {
    const arrayIndex = questionNumber - 1;
    commit('setQuestionAnswer', { index: arrayIndex, type });
  },
};
