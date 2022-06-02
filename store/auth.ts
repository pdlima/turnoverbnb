import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  isSignedIn: false,
  credentials: {
    role: "ADMIN",
  },
});

export type AuthState = ReturnType<typeof state>;

export const mutations: MutationTree<AuthState> = {
  setSignedIn: (state, isSignedIn: boolean) => (state.isSignedIn = isSignedIn),
  setCredentials: (state, credentials: any) =>
    (state.credentials = credentials),
};

export const getters: GetterTree<AuthState, RootState> = {
  credentials: (state) => state.credentials,
};

export const actions: ActionTree<AuthState, RootState> = {
  signUp({ commit }, payload) {
    // TODO: call API
    const resultFromAPI = {};

    commit("setSignedIn", true);
    commit("setCredentials", {
      role: "USER",
    });
    this.$router.push({ path: "/" });
  },
  signIn({ commit }, payload) {
    // TODO: call API
    const resultFromAPI = {};

    commit("setSignedIn", true);

    this.$router.push({ path: "/" });
  },
};
