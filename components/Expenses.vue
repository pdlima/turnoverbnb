<template>
  <div
    class="flex items-center justify-between w-full p-4 text-blue-500 bg-blue-100"
  >
    <div>
      <p class="font-bold">Expenses</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ expenses }}</p>
    </div>

    <div class="max-w-[140px] w-full ml-auto text-center">
      <ActionButton to="/expenses/purchase" label="Purchase" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("finance", ["expenses", "currencySign"]),
  },
});
</script>

<style scoped></style>
