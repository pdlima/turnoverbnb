<template>
  <div class="w-full h-screen max-h-[800px] pt-16">
    <div class="p-4 text-blue-400">
      <AdminTransactions transactionType="INCOME" transactionStatus="PENDING" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "admin",
  async asyncData({ store }) {
    await store.dispatch("admin/getTransactions");
  },
});
</script>

<style scoped></style>
