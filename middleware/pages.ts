import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = (context) => {
  context.store.commit("ui/setPage", context.route.name);
};

export default myMiddleware;
