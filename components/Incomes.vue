<template>
  <div
    class="w-full bg-blue-200 p-4 flex justify-between items-center text-blue-500"
  >
    <div>
      <p class="font-bold">Incomes</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ incomes }}</p>
    </div>

    <div class="max-w-[140px] w-full ml-auto text-center">
      <ActionButton to="/deposit" label="Deposit a check" />
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
