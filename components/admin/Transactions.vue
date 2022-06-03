<template>
  <ul>
    <li
      class="flex items-center justify-between py-4 border-b cursor-pointer border-blue-50"
      v-for="transaction in filteredTransactions"
      :key="transaction.date"
      @click="goTo(transaction)"
    >
      <div>
        <p class="font-bold">{{ transaction.user.name }}</p>
        <p class="uppercase">{{ transaction.date }}</p>
      </div>

      <div
        class="text-xl font-bold"
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
  props: ["transactionType", "transactionStatus"],
  methods: {
    goTo(transaction: any) {
      this.$router.push({ path: `/admin/transactions/${transaction.id}` });
    },
  },
  computed: {
    ...mapGetters("admin", ["transactions", "currencySign"]),
    filteredTransactions() {
      return this.transactions.filter((transaction: any) => {
        if (!this.transactionType) return true;

        const matchByType = transaction.type == this.transactionType;
        const matchByStatus = transaction.status == this.transactionStatus;

        if (this.transactionStatus) return matchByType && matchByStatus;

        return matchByType;
      });
    },
  },
});
</script>

<style scoped></style>
