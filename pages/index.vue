<template>
  <div class="w-full">
    <CurrentBalance />
    <Incomes />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Home",
});
</script>
