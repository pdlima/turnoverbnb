<template>
  <div class="flex flex-col gap-2 w-8 h-8 justify-center" @click="openMenu">
    <div class="w-full bg-white rounded-sm h-[2px]"></div>
    <div class="w-full bg-white rounded-sm h-[2px]"></div>
    <div class="w-full bg-white rounded-sm h-[2px]"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    openMenu() {
      this.$store.commit("ui/setMenu", true);
    },
  },
});
</script>

<style scoped></style>
