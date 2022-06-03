<template>
  <div class="flex flex-col w-full h-screen pt-16 max-h-[800px]">
    <div
      class="flex items-center justify-between w-full p-4 text-blue-400 bg-blue-100"
    >
      <MonthSelector />
    </div>

    <div class="relative flex flex-col flex-1 h-full p-4 text-blue-400">
      <Transactions transactionType="PURCHASE" class="mt-4" />

      <NuxtLink
        to="/expenses/purchase"
        class="inline-flex items-center justify-center w-12 h-12 py-2 mt-auto ml-auto text-white bg-blue-400 rounded-full"
      >
        <IconPlus />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  async asyncData({ store }) {
    await store.dispatch("operations/getUser");
  },
});
</script>
