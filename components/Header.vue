<template>
  <div class="w-full bg-blue-300 relative p-4" :class="page.headerClasses">
    <HBMenu />

    <p class="text-2xl absolute-center" v-html="page.pageTitle"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("ui", ["page"]),
  },
});
</script>

<style scoped></style>
