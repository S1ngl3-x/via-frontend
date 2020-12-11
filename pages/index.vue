<template>
  <div>
    <generate-quiz-button />
    <generated-quiz />
    <submit-answers-button />
  </div>
</template>

<script>
import GenerateQuizButton from '@/components/home/buttons/generateQuizButton';
import GeneratedQuiz from '@/components/home/generatedQuiz';
import SubmitAnswersButton from '@/components/home/buttons/submitAnswersButton';
export default {
  components: { SubmitAnswersButton, GeneratedQuiz, GenerateQuizButton },
};
</script>
