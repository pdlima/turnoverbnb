import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  isSignedIn: false,
  credentials: {
    username: "",
    email: "",
  },
});

export type AuthState = ReturnType<typeof state>;

export const mutations: MutationTree<AuthState> = {
  setSignedIn: (state, isSignedIn: boolean) => (state.isSignedIn = isSignedIn),
};

export const getters: GetterTree<AuthState, RootState> = {};

export const actions: ActionTree<AuthState, RootState> = {
  signUp({ commit }, payload) {
    // TODO: call API
    const resultFromAPI = {};

    commit("setSignedIn", true);
    this.$router.push({ path: "/" });
  },
  signIn({ commit }, payload) {
    // TODO: call API
    const resultFromAPI = {};

    commit("setSignedIn", true);
    this.$router.push({ path: "/" });
  },
};
