<template>
  <div class="absolute inset-0 z-20 bg-black bg-opacity-70" v-show="menuIsOpen">
    <div class="w-full max-w-[60%] flex flex-col h-full">
      <NuxtLink to="/" class="px-4 py-8 text-2xl bg-blue-200"
        >BNB Bank</NuxtLink
      >

      <ul
        class="flex-1 px-4 text-white uppercase bg-blue-500"
        v-if="user.scope !== 'admin'"
      >
        <li class="py-4">
          <NuxtLink class="flex gap-4" to="/"
            ><IconBalance class="text-blue-100" />
            <span>Balance</span></NuxtLink
          >
        </li>
        <li class="py-4">
          <NuxtLink class="flex gap-4" to="/incomes"
            ><IconIncome class="text-blue-100" /> <span>Incomes</span></NuxtLink
          >
        </li>
        <li class="py-4">
          <NuxtLink class="flex gap-4" to="/expenses"
            ><IconExpense class="text-blue-100" />
            <span>Expenses</span></NuxtLink
          >
        </li>
      </ul>

      <ul
        class="flex-1 px-4 text-white uppercase bg-blue-500"
        v-if="user.scope == 'admin'"
      >
        <li class="py-4">
          <NuxtLink class="flex gap-4" to="/"
            ><IconCurrency class="text-blue-100" />
            <span>Checks</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("ui", ["menuIsOpen"]),
    user() {
      return this.$auth.user;
    },
  },
});
</script>

<style scoped></style>
