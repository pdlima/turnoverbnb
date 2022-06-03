<template>
  <validation-observer
    class="relative flex flex-col h-full"
    ref="observer"
    v-slot="{ valid }"
  >
    <CustomInput
      rules="required"
      label="Amount"
      :value="form.value"
      :hasCurrencyCode="true"
      placeholder="40,00"
      @input="updateValue"
    >
      <IconCurrency />
    </CustomInput>

    <CustomInput
      rules="required"
      label="Date"
      :value="form.date"
      class="mt-4"
      placeholder="August 8, 2021"
      @input="updateDate"
    >
      <IconCalendar />
    </CustomInput>

    <CustomInput
      rules="required"
      label="Description"
      :value="form.description"
      class="mt-4"
      placeholder="t-shirt"
      @input="updateDescription"
    >
      <IconStar />
    </CustomInput>

    <div class="mt-2 text-red-400" v-if="apiError">
      {{ apiError }}
    </div>

    <button
      class="w-full py-2 mt-auto text-white bg-blue-400"
      @click="addPurchase"
      :disabled="!valid"
    >
      Add Purchase
    </button>
  </validation-observer>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationObserver } from "vee-validate";

export default Vue.extend({
  components: {
    ValidationObserver,
  },
  layout: "default",
  name: "Purchase",
  data() {
    return {
      form: {
        value: "" as string,
        date: "" as string,
        description: "" as string,
      },
    };
  },
  methods: {
    updateValue(input: string) {
      this.form.value = input;
    },
    updateDate(input: string) {
      this.form.date = input;
    },
    updateDescription(input: string) {
      this.form.description = input;
    },
    async addPurchase() {
      const isValid = await (this.$refs.observer as any).validate();

      if (isValid) this.$store.dispatch("operations/addPurchase", this.form);
    },
  },
  computed: {
    apiError() {
      return this.$store.state.operations.apiError;
    },
  },
});
</script>
