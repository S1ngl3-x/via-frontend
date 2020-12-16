<template>
  <div>
    <generated-quiz />
  </div>
</template>

<script>
import GeneratedQuiz from '@/components/home/generatedQuiz';
import SubmitAnswersButton from '@/components/home/buttons/submitAnswersButton';
export default {
  components: { SubmitAnswersButton, GeneratedQuiz },
};
</script>
