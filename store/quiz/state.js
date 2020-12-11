export default () => ({
  currentQuiz: {
    id: null,
    completed: null,
    questions: [],
  },
  quizzes: [],
  quizAnswer: {
    id: null,
    completed: true,
    questions: [],
  },
  answers: Array(5),
});
