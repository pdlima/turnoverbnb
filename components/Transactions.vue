<template>
  <ul>
    <li
      class="flex justify-between items-center py-4 border-b border-blue-50"
      v-for="transaction in filteredTransactions"
      :key="transaction.date"
    >
      <div>
        <p class="font-bold">{{ transaction.description }}</p>
        <p class="uppercase">{{ transaction.description }}</p>
      </div>

      <div
        class="font-bold text-xl"
        :class="{ 'text-red-500': transaction.operationSign == '-' }"
      >
        {{ transaction.operationSign }}{{ currencySign }}{{ transaction.value }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  props: ["transactionType"],
  computed: {
    ...mapGetters("finance", ["transactions", "currencySign"]),
    filteredTransactions() {
      return this.transactions.filter((transaction: any) => {
        if (!this.transactionType) return true;

        return transaction.type == this.transactionType;
      });
    },
  },
});
</script>

<style scoped></style>
