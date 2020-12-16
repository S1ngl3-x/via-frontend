<template>
  <v-btn class="mr-2" small :loading="loadingStatus" @click="submit"
    >Generate Quiz
    <v-icon small class="pa-1" color="primary">mdi-repeat</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GenerateQuizButton',
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    ...mapActions({
      generateQuiz: 'quiz/generateQuiz',
    }),
    async submit() {
      this.loadingStatus = true;
      await this.generateQuiz();
      this.loadingStatus = false;
    },
  },
};
</script>

<style scoped></style>
