<template>
  <div
    class="w-full p-4 flex justify-between items-center"
    :class="{
      'bg-blue-100 text-blue-400': pageTheme == 'INTERNAL',
      'bg-blue-400': pageTheme == 'DEFAULT',
    }"
  >
    <div>
      <p>Current Balance</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ currentBalance }}</p>
    </div>

    <MonthSelector v-show="showMonthSelector" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  props: {
    showMonthSelector: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters("ui", ["pageTheme"]),
    ...mapGetters("finance", ["currentBalance", "currencySign"]),
  },
});
</script>

<style scoped></style>
