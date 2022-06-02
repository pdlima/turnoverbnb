<template>
  <validation-observer
    class="relative flex flex-col h-full"
    ref="observer"
    v-slot="{ valid }"
  >
    <CustomInput
      rules="required"
      label="Amount"
      :value="form.amount"
      :hasCurrencyCode="true"
      placeholder="40,00"
      @input="updateAmount"
    >
      <IconCurrency />
    </CustomInput>

    <p class="mt-2 text-blue-400">
      *The money will be deposited in your account once the check is accepted.
    </p>

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

    <CustomUpload
      rules="required"
      label="Upload check picture"
      :value="form.picture"
      class="mt-8"
      placeholder="t-shirt"
      @input="updatePicture"
    />

    <button
      class="w-full py-2 mt-auto text-white bg-blue-400"
      @click="depositCheck"
      :disabled="!valid"
    >
      Deposit Check
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
  name: "DepositForm",
  data() {
    return {
      form: {
        amount: "" as string,
        description: "" as string,
        picture: "" as string,
      },
    };
  },
  methods: {
    updateAmount(input: string) {
      this.form.amount = input;
    },
    updatePicture(input: string) {
      this.form.picture = input;
    },
    updateDescription(input: string) {
      this.form.description = input;
    },
    async depositCheck() {
      const isValid = await (this.$refs.observer as any).validate();

      if (isValid) this.$store.dispatch("operations/depositCheck", this.form);
    },
  },
});
</script>
