<template>
  <div class="flex flex-col w-full min-h-screen pt-16">
    <CurrentBalance :showMonthSelector="false" />

    <PurchaseForm class="flex-1 p-4 mt-8" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Purchase",
});
</script>
