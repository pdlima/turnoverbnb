import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  apiError: null as any,
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
  setApiError: (state, apiError: string) => (state.apiError = apiError),
  setTransactions(state, payload) {
    state.transactions = payload;
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

export const actions: ActionTree<AdminState, RootState> = {
  async updateTransaction({ commit }, payload) {
    try {
      await this.$axios.patch(`/api/transactions/${payload.id}`, {
        status: payload.status,
      });

      this.$router.push({ path: "/admin" });
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
  async getTransaction({ commit }, payload) {
    try {
      const transaction = await this.$axios.get(`/api/transactions/${payload}`);

      return transaction.data;
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
  async getTransactions({ commit }) {
    try {
      const transactions = await this.$axios.get("/api/transactions");

      commit("setTransactions", transactions.data);
    } catch (error: any) {
      if (error.response) {
        commit("setApiError", error.response.data.message);
      }
    }
  },
};
