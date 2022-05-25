<template>
  <div class="w-full bg-blue-600 p-4 flex justify-between items-center">
    <div>
      <p>Current Balance</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ currentBalance }}</p>
    </div>

    <MonthSelector />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    currentBalance() {
      return this.$store.state.finance.currentBalance;
    },
    currencySign() {
      return this.$store.state.finance.currencySign;
    },
  },
});
</script>

<style scoped></style>
