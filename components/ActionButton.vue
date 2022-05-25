<template>
  <NuxtLink :to="to" class="inline-flex gap-1 flex-col uppercase items-center">
    <IconPlus />
    <p>{{ label }}</p>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["to", "label"],
});
</script>

<style scoped></style>
