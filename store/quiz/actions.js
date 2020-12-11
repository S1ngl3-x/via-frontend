export default {
  async generateQuiz({ commit }) {
    const quiz = await this.$axios.$post('quiz');

    if (quiz) {
      quiz.questions.sort((a, b) => a.id - b.id); // backend does not sort to save on resources
      commit('setCurrentQuiz', quiz);
    }
  },

  async findQuizzes({ commit }, { limitInput, pageInput }) {
    const limit = limitInput || 5;
    const page = pageInput || 1;

    const quizzes = await this.$axios.$get('quiz', { params: limit, page });

    if (quizzes) {
      commit('setQuizzes', quizzes);
    }
  },

  async submitCurrentQuiz({ commit }) {
    const quiz = this.$store.getters['quiz/currentQuiz'];

    const result = await this.$axios.$patch('quiz', quiz);
    if (result) {
      commit('setQuizAnswer', result);
    }
  },

  answerQuestion({ commit }, { questionNumber, type }) {
    const arrayIndex = questionNumber - 1;
    commit('setQuestionAnswer', { index: arrayIndex, type });
  },
};
