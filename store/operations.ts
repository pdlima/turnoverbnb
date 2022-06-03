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
      await this.$axios.get("/api/sanctum/csrf-cookie");
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
  async addPurchase({ commit }, payload) {
    payload.type = "PURCHASE";

    try {
      await this.$axios.post("/api/transactions", payload);

      await this.$auth.setUserToken(true);

      commit("finance/setFinances", this.$auth.user, { root: true });

      this.$router.push({ path: "/expenses" });
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
  async depositCheck({ commit }, payload) {
    payload.type = "INCOME";

    try {
      const formData = new FormData();

      Object.keys(payload).forEach((key) => formData.append(key, payload[key]));

      await this.$axios.post("/api/transactions", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      await this.$auth.setUserToken(true);

      commit("finance/setFinances", this.$auth.user, { root: true });

      this.$router.push({ path: "/incomes" });
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
};
