<template>
  <div>
    <validation-observer ref="observer" v-slot="{ valid }">
      <validation-provider
        v-slot="{ errors }"
        rules="required|email"
        name="email"
      >
        <input
          type="email"
          class="w-full px-4 py-2 mt-4 text-black border border-blue-500 rounded-full"
          placeholder="email"
          v-model="form.email"
        />
        <div class="mt-2 text-red-400" v-if="errors.length > 0">
          {{ errors[0] }}
        </div>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required" name="password">
        <input
          type="password"
          class="w-full px-4 py-2 mt-4 text-black border border-blue-500 rounded-full"
          placeholder="password"
          v-model="form.password"
        />
        <div class="mt-2 text-red-400" v-if="errors.length > 0">
          {{ errors[0] }}
        </div>
      </validation-provider>

      <button
        type="button"
        class="w-full py-2 mt-8 text-white uppercase bg-blue-400 rounded-sm"
        @click="signIn"
        :disabled="!valid"
      >
        Sign In
      </button>

      <div class="mt-2 text-red-400" v-if="apiError">
        {{ apiError }}
      </div>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default Vue.extend({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        email: "" as string,
        password: "" as string,
      },
    };
  },
  computed: {
    apiError() {
      return this.$store.state.operations.apiError;
    },
  },
  methods: {
    async signIn() {
      const isValid = await (this.$refs.observer as any).validate();

      if (!isValid) return;

      this.$store.commit("operations/setApiError", null);
      this.$store.dispatch("operations/signIn", this.form);
    },
  },
});
</script>

<style scoped></style>
