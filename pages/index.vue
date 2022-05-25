<template>
  <div class="w-full">
    <CurrentBalance class="bg-blue-400" />
    <Incomes />
    <Expenses />

    <div class="text-blue-400 p-4">
      <h1 class="text-xl uppercase mt-4">Transactions</h1>

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
