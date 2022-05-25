<template>
  <div class="w-full bg-blue-300 p-4 flex justify-between items-center">
    <div>
      <p>Current Balance</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ currentBalance }}</p>
    </div>

    <MonthSelector />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("finance", ["currentBalance", "currencySign"]),
  },
});
</script>

<style scoped></style>
