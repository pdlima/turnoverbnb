<template>
  <div class="flex flex-col w-full h-screen pt-16 max-h-[800px]">
    <div
      class="relative flex flex-col flex-1 h-full gap-4 p-4 mt-8 text-blue-400"
    >
      <CustomInput
        rules="required"
        label="Customer"
        :value="transaction.user.name"
        placeholder="40,00"
      >
        <IconCurrency />
      </CustomInput>

      <CustomInput
        rules="required"
        label="Reported Amount"
        :value="transaction.value"
        :hasCurrencyCode="true"
        placeholder="40,00"
      >
        <IconCurrency />
      </CustomInput>
      <div class="relative z-0 h-[180px] overflow-hidden aspect-video">
        <img
          class="object-cover min-w-full min-h-full"
          :src="transaction.image"
          alt=""
        />
      </div>

      <div class="mt-2 text-red-400" v-if="apiError">
        {{ apiError }}
      </div>

      <div class="flex gap-4 mt-auto">
        <button
          class="w-full py-2 mt-auto text-blue-400 border border-blue-400"
          @click="reject"
        >
          Reject
        </button>
        <button
          class="w-full py-2 mt-auto text-white bg-blue-400"
          @click="accept"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ store, route }) {
    const transaction = await store.dispatch(
      "admin/getTransaction",
      route.params.id
    );

    return { transaction };
  },
  methods: {
    accept() {
      this.$store.dispatch("admin/updateTransaction", {
        id: this.$route.params.id,
        status: "ACCEPTED",
      });
    },
    reject() {
      this.$store.dispatch("admin/updateTransaction", {
        id: this.$route.params.id,
        status: "REJECTED",
      });
    },
  },
  computed: {
    apiError() {
      return this.$store.state.operations.apiError;
    },
  },
});
</script>

<style scoped></style>
