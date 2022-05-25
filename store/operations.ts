import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({});

export type OperationsState = ReturnType<typeof state>;

export const mutations: MutationTree<OperationsState> = {};

export const getters: GetterTree<OperationsState, RootState> = {};

export const actions: ActionTree<OperationsState, RootState> = {
  addPurchase({ commit }, payload) {
    // TODO: validate input and call API
    const resultFromAPI = {};

    commit("finance/setFinances", resultFromAPI, { root: true });
  },
};
