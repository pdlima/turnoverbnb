<template>
  <div
    class="flex flex-col justify-center w-8 h-8 gap-2 cursor-pointer"
    @click="openMenu"
  >
    <div class="w-full bg-current rounded-sm h-[2px]"></div>
    <div class="w-full bg-current rounded-sm h-[2px]"></div>
    <div class="w-full bg-current rounded-sm h-[2px]"></div>
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
