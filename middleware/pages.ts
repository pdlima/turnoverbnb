import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = ({ store, route, $auth, redirect }) => {
  store.commit("ui/setPage", route.name);

  if (!$auth.loggedIn && route.name !== "login") redirect("/login");

  if ($auth.hasScope("admin") && route.name?.indexOf("admin") == -1)
    redirect("/admin");

  if (!$auth.hasScope("admin") && route.name?.indexOf("admin") !== -1)
    redirect("/");
};

export default myMiddleware;
