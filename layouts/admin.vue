<template>
  <div class="relative max-w-[375px] mx-auto max-h-[800px] bg-white">
    <Header class="absolute top-0 left-0" />
    <Menu />

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "default",
});
</script>
