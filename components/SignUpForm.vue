<template>
  <div>
    <input
      type="text"
      class="w-full px-4 py-2 text-black border border-blue-500 rounded-full"
      placeholder="username"
      v-model="form.username"
    />
    <input
      type="email"
      class="w-full px-4 py-2 mt-4 text-black border border-blue-500 rounded-full"
      placeholder="email"
      v-model="form.email"
    />
    <input
      type="password"
      class="w-full px-4 py-2 mt-4 text-black border border-blue-500 rounded-full"
      placeholder="password"
      v-model="form.password"
    />

    <button
      type="submit"
      class="w-full py-2 mt-8 text-white uppercase bg-blue-400 rounded-sm"
      @submit.prevent="signUp"
    >
      Sign Up
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("auth/signUp", this.form);
    },
  },
});
</script>

<style scoped></style>
