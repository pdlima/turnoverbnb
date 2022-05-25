<template>
  <div class="w-full min-h-screen pt-16">
    <CurrentBalance class="bg-blue-400" />
    <Incomes />
    <Expenses />

    <div class="p-4 text-blue-400">
      <h1 class="mt-4 text-xl uppercase">Transactions</h1>

      <Transactions class="mt-4" />
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
