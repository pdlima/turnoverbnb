<template>
  <div>
    <validation-observer ref="observer" v-slot="{ valid }">
      <validation-provider v-slot="{ errors }" rules="required" name="username">
        <input
          type="text"
          class="w-full px-4 py-2 mt-4 text-black border border-blue-500 rounded-full"
          placeholder="username"
          v-model="form.username"
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
        username: "" as string,
        password: "" as string,
      },
    };
  },
  methods: {
    async signIn() {
      const isValid = await (this.$refs.observer as any).validate();

      if (isValid) this.$store.dispatch("auth/signIn", this.form);
    },
  },
});
</script>

<style scoped></style>
