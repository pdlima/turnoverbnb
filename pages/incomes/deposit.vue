<template>
  <div class="flex flex-col w-full h-screen pt-16 max-h-[800px]">
    <CurrentBalance :showMonthSelector="false" />

    <DepositForm class="flex-1 p-4 mt-8" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Deposit",
});
</script>
