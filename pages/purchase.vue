<template>
  <div class="w-full">
    <CurrentBalance :showMonthSelector="false" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Purchase",
});
</script>
