import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  apiError: null as any,
});

export type OperationsState = ReturnType<typeof state>;

export const mutations: MutationTree<OperationsState> = {
  setApiError: (state, apiError: string) => (state.apiError = apiError),
};

export const getters: GetterTree<OperationsState, RootState> = {};

export const actions: ActionTree<OperationsState, RootState> = {
  async getUser({ commit }) {
    await this.$auth.setUserToken(true);
    commit("finance/setFinances", this.$auth.user, { root: true });
  },
  async signUp({ commit }, payload) {
    try {
      await this.$axios.get("/sanctum/csrf-cookie");
      await this.$axios.post("/register", payload);

      await this.$auth.setUserToken(true);

      commit("finance/setFinances", this.$auth.user, { root: true });

      this.$router.push({ path: "/" });
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
  async signIn({ commit }, payload) {
    try {
      await this.$auth.loginWith("laravelSanctum", {
        data: payload,
      });

      commit("finance/setFinances", this.$auth.user, { root: true });

      this.$router.push({ path: "/" });
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
  addPurchase({ commit }, payload) {
    // TODO: validate input and call API
    const resultFromAPI = {};

    commit("finance/setFinances", resultFromAPI, { root: true });
  },
  depositCheck({ commit }, payload) {
    // TODO: validate input and call API
    const resultFromAPI = {};

    commit("finance/setFinances", resultFromAPI, { root: true });
  },
};
