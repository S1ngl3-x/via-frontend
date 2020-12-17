<template>
  <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
    class="mx-auto my-4"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 pa-4 text-center">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'WelcomeCarouselInspiring',
  data() {
    return {
      colors: ['indigo', 'purple', 'pink darken-2', 'warning'],
      slides: [
        'Show off your INTELLECT',
        'Recognize famous quotes',
        'Brewed for cultural experts',
        'Are you up to the challenge?!',
      ],
    };
  },
};
</script>

<style scoped></style>
