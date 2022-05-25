import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  currentBalance: "6320,00",
  incomes: "7100,00",
  currencySign: "$",
});

export type FinanceState = ReturnType<typeof state>;

export const mutations: MutationTree<FinanceState> = {};

export const getters: GetterTree<FinanceState, RootState> = {
  incomes: (state) => state.incomes,
  currentBalance: (state) => state.currentBalance,
  currencySign: (state) => state.currencySign,
};

export const actions: ActionTree<FinanceState, RootState> = {};
