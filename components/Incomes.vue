<template>
  <div
    class="w-full bg-blue-200 p-4 flex justify-between items-center text-blue-600"
  >
    <div>
      <p class="font-bold">Incomes</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ incomes }}</p>
    </div>

    <DepositButton />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    incomes() {
      return this.$store.state.finance.incomes;
    },
    currencySign() {
      return this.$store.state.finance.currencySign;
    },
  },
});
</script>

<style scoped></style>
