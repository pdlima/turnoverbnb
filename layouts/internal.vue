<template>
  <div class="relative">
    <Header class="absolute top-0 left-0" />

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "default",
});
</script>
