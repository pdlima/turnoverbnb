<template>
  <div class="relative flex flex-col h-full">
    <CustomInput
      label="Amount"
      :value="form.amount"
      :hasCurrencyCode="true"
      placeholder="40,00"
    >
      <IconCurrency />
    </CustomInput>

    <CustomInput
      label="Date"
      :value="form.date"
      class="mt-4"
      placeholder="August 8, 2021"
    >
      <IconCalendar />
    </CustomInput>

    <CustomInput
      label="Description"
      :value="form.description"
      class="mt-4"
      placeholder="t-shirt"
    >
      <IconStar />
    </CustomInput>

    <button
      class="w-full py-2 mt-auto text-white bg-blue-400"
      @click="addPurchase"
    >
      Add Purchase
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "default",
  name: "Purchase",
  data() {
    return {
      form: {
        amount: "",
        date: "",
        description: "",
      },
    };
  },
  methods: {
    addPurchase() {
      this.$store.dispatch("operations/addPurchase", this.form);
    },
  },
});
</script>
