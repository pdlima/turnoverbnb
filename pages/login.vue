<template>
  <div>
    <div class="w-full p-12">
      <SignUpForm v-if="isSignUp" />
      <SignInForm v-else />

      <div class="w-6 h-1 mx-auto my-8 bg-blue-100 rounded-full"></div>

      <button
        type="button"
        class="block mx-auto text-blue-400"
        @click="isSignUp = !isSignUp"
      >
        {{
          isSignUp ? "Already have an account?" : "I already have an account"
        }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "login",
  data() {
    return {
      isSignUp: true,
    };
  },
});
</script>

<style scoped></style>
