<template>
  <div
    class="w-full relative p-4"
    :class="{
      'bg-blue-100 text-blue-400 uppercase': pageTheme == 'INTERNAL',
      'bg-blue-400': pageTheme == 'DEFAULT',
    }"
  >
    <HBMenu />

    <p class="text-2xl absolute-center">
      {{ pageTheme == "INTERNAL" ? page : "BNB Bank" }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("ui", ["pageTheme", "page"]),
  },
});
</script>

<style scoped></style>
