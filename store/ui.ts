import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  page: "index",
  menuIsOpen: false,
});

export type UiState = ReturnType<typeof state>;

export const mutations: MutationTree<UiState> = {
  setMenu: (state, menuIsOpen: boolean) => (state.menuIsOpen = menuIsOpen),
  setPage: (state, page: string) => (state.page = page),
};

export const getters: GetterTree<UiState, RootState> = {
  page: (state) => {
    let pageTitle = "BNB Bank";
    let headerClasses = "bg-blue-100 uppercase text-blue-400";

    if (state.page == "index") {
      pageTitle = "BNB Bank";
      headerClasses = "bg-blue-400";
    }

    if (state.page == "expenses") pageTitle = "Expenses";

    return { headerClasses, pageTitle };
  },
};

export const actions: ActionTree<UiState, RootState> = {};
