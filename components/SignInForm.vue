<template>
  <div>
    <input
      type="text"
      class="w-full px-4 py-2 mt-4 border border-blue-500 rounded-full"
      placeholder="username"
      v-model="username"
    />
    <input
      type="password"
      class="w-full px-4 py-2 mt-4 border border-blue-500 rounded-full"
      placeholder="password"
      v-model="password"
    />

    <button
      type="submit"
      class="w-full py-2 mt-8 text-white uppercase bg-blue-400 rounded-sm"
      @submit.prevent="signIn"
    >
      Sign In
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
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch("auth/signIn", this.form);
    },
  },
});
</script>

<style scoped></style>
