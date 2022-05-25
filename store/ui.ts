import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  menuIsOpen: false,
});

export type UiState = ReturnType<typeof state>;

export const mutations: MutationTree<UiState> = {
  setMenu: (state, menuIsOpen: boolean) => (state.menuIsOpen = menuIsOpen),
};

export const getters: GetterTree<UiState, RootState> = {};

export const actions: ActionTree<UiState, RootState> = {};
