<template>
  <div>
    <validation-provider v-slot="{ errors }" :rules="rules">
      <div class="flex gap-4 text-blue-400">
        <div
          class="inline-flex flex-shrink-0 gap-4 border-b border-blue-400 max-w-[280px] w-full"
        >
          <slot></slot>

          <div>
            <label class="text-sm uppercase" for="amount">{{ label }} </label>

            <input
              type="text"
              class="w-full py-2 text-black bg-transparent"
              v-model="model"
              :placeholder="placeholder"
            />
          </div>
        </div>
        <CurrencyCode class="self-center w-full" v-show="hasCurrencyCode" />
      </div>
      <span class="mt-2 text-red-400" v-if="errors.length > 0">
        {{ errors[0] }}
      </span>
    </validation-provider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationProvider } from "vee-validate";

export default Vue.extend({
  components: {
    ValidationProvider,
  },
  props: {
    rules: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      required: true,
    },
    hasCurrencyCode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get(): string {
        return this.value;
      },
      set(value: string) {
        this.$emit("input", value);
      },
    },
  },
});
</script>
