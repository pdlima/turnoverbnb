import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = ({ store, route, redirect }) => {
  store.commit("ui/setPage", route.name);

  // if (!store.state.auth.isSignedIn && route.name !== "login")
  //   redirect("/login");

  // if (
  //   store.state.auth.credentials.role == "ADMIN" &&
  //   route.name?.indexOf("admin") == -1
  // )
  //   redirect("/admin");
};

export default myMiddleware;
