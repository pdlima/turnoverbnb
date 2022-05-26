import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = ({ store, route, redirect }) => {
  store.commit("ui/setPage", route.name);

  if (!store.state.auth.isSignedIn && route.name !== "login")
    redirect("/login");
};

export default myMiddleware;
