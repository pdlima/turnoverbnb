<template>
  <ul class="flex w-full text-xl uppercase">
    <li
      class="w-full p-4 border-b-2 border-transparent cursor-pointer hover:border-blue-500"
      :class="{ 'border-blue-500': selectedStatus == status }"
      @click="handleSelect(status)"
      v-for="status in statuses"
      :key="status"
    >
      {{ status }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["selectedStatus"],
  data() {
    return {
      statuses: ["PENDING", "ACCEPTED", "REJECTED"],
    };
  },
  methods: {
    handleSelect(value: string) {
      this.$emit("statusSelected", value);
    },
  },
});
</script>

<style scoped></style>
