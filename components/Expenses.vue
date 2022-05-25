<template>
  <div
    class="w-full bg-blue-100 p-4 flex justify-between items-center text-blue-500"
  >
    <div>
      <p class="font-bold">Expenses</p>
      <p class="text-xl font-bold">{{ currencySign }}{{ expenses }}</p>
    </div>

    <div class="max-w-[140px] w-full ml-auto text-center">
      <ActionButton to="/purchase" label="Purchase" />
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
