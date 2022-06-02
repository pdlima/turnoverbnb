import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  currencySign: "$",
  currencyCode: "USD",
  transactions: [
    {
      id: 4,
      customer: {
        name: "customer1",
        email: "customer1@email.com",
      },
      account: "365748478",
      type: "INCOME",
      date: "08/16/2021, 05:43PM",
      value: "2547,00",
      status: "PENDING",
    },
  ],
});

export type AdminState = ReturnType<typeof state>;

export const mutations: MutationTree<AdminState> = {
  setTransactions(state, payload) {
    state.transactions = payload.transactions;
  },
};

export const getters: GetterTree<AdminState, RootState> = {
  transactions: (state) => {
    return state.transactions.map((transaction) => {
      let operationSign = "";

      return {
        ...transaction,
        operationSign,
      };
    });
  },
  currencySign: (state) => state.currencySign,
  currencyCode: (state) => state.currencyCode,
};

export const actions: ActionTree<AdminState, RootState> = {};
