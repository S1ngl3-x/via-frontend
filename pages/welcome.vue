<template>
  <div>
    <WelcomeHeader />
    <WelcomeCarouselInspiring />
    <v-row>
      <WelcomeCardSwift />
      <WelcomeCardTrump />
    </v-row>
    <WelcomeManual />
  </div>
</template>

<script>
import WelcomeHeader from '@/components/welcome/welcomeHeader';
import WelcomeCarouselInspiring from '@/components/welcome/welcomeCarouselInspiring';
import WelcomeCardSwift from '@/components/welcome/welcomeCardSwift';
import WelcomeCardTrump from '@/components/welcome/welcomeCardTrump';
import WelcomeManual from '@/components/welcome/welcomeManual';
export default {
  name: 'Welcome',
  components: {
    WelcomeManual,
    WelcomeCardTrump,
    WelcomeCardSwift,
    WelcomeCarouselInspiring,
    WelcomeHeader,
  },
};
</script>

<style scoped></style>
