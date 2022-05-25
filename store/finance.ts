import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  currentBalance: "6320,00",
  incomes: "7100,00",
  expenses: "780,00",
  currencySign: "$",
  currencyCode: "USD",
  transactions: [
    {
      description: "t-shirt",
      type: "PURCHASE",
      date: "08/18/2021, 02:25PM",
      value: "40",
    },
    {
      description: "Freelance work",
      type: "INCOME",
      date: "08/16/2021, 05:43PM",
      value: "3200,00",
    },
  ],
});

export type FinanceState = ReturnType<typeof state>;

export const mutations: MutationTree<FinanceState> = {
  setFinances(state, payload) {
    state.currentBalance = payload.currentBalance;
    state.incomes = payload.incomes;
    state.expenses = payload.expenses;
    state.transactions = payload.transactions;
  },
};

export const getters: GetterTree<FinanceState, RootState> = {
  transactions: (state) => {
    return state.transactions.map((transaction) => {
      let operationSign = "";

      if (transaction.type === "PURCHASE") operationSign = "-";

      return {
        ...transaction,
        operationSign,
      };
    });
  },
  incomes: (state) => state.incomes,
  expenses: (state) => state.expenses,
  currentBalance: (state) => state.currentBalance,
  currencySign: (state) => state.currencySign,
  currencyCode: (state) => state.currencyCode,
};

export const actions: ActionTree<FinanceState, RootState> = {};
