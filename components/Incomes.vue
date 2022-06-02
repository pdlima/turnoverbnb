<template>
  <div
    class="flex items-center justify-between w-full p-4 text-blue-500 bg-blue-200"
  >
    <div>
      <p class="font-bold">Incomes</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ incomes }}</p>
    </div>

    <div class="max-w-[140px] w-full ml-auto text-center">
      <ActionButton to="/incomes/deposit" label="Deposit a check" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("finance", ["incomes", "currencySign"]),
  },
});
</script>

<style scoped></style>
