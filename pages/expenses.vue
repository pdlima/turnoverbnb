<template>
  <div class="w-full">
    <div
      class="w-full bg-blue-100 p-4 flex justify-between items-center text-blue-400"
    >
      <MonthSelector />
    </div>

    <div class="text-blue-400 p-4">
      <Transactions transactionType="PURCHASE" class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Home",
});
</script>
