<template>
  <span class="text-center">{{ currencyCode }}</span>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("finance", ["currencyCode"]),
  },
});
</script>

<style scoped></style>
