import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = ({ store, route, $auth, redirect }) => {
  store.commit("ui/setPage", route.name);

  const isAdmin = $auth.user?.scope == "admin";
  const routeHasAdmin = route.name?.indexOf("admin") !== -1;

  if (!$auth.loggedIn && route.name !== "login") redirect("/login");

  if (isAdmin && !routeHasAdmin) redirect("/admin");

  if (!isAdmin && routeHasAdmin) redirect("/");
};

export default myMiddleware;
