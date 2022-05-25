import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  page: "index",
  menuIsOpen: true,
});

export type UiState = ReturnType<typeof state>;

export const mutations: MutationTree<UiState> = {
  setMenu: (state, menuIsOpen: boolean) => (state.menuIsOpen = menuIsOpen),
  setPage: (state, page: string) => {
    state.page = page;
    state.menuIsOpen = false;
  },
};

export const getters: GetterTree<UiState, RootState> = {
  menuIsOpen: (state) => state.menuIsOpen,
  pageTheme: (state) => {
    let pageTheme = "DEFAULT";

    if (state.page !== "index") pageTheme = "INTERNAL";

    return pageTheme;
  },
  page: (state) => {
    return state.page.charAt(0).toUpperCase() + state.page.slice(1);
  },
};

export const actions: ActionTree<UiState, RootState> = {};
