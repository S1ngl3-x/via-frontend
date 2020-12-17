<template>
  <v-row justify="center" align="center">
    <div class="text-center ma-12">
      <v-progress-circular
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="value"
        :width="width"
        color="grey"
        >{{ value }}
      </v-progress-circular>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'PageLoader',
  data() {
    return {
      indeterminate: true,
      size: 350,
      rotate: 0,
      value: 'loading...',
      width: 22,
    };
  },
};
</script>

<style scoped></style>
