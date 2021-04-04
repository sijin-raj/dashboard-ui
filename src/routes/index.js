import Dashboard from "layouts/Dashboard";
import AuthPages from "layouts/AuthPages";

var indexRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/", name: "AuthPage", component: AuthPages },
  { redirect: true, to: "/signin" },
];

export default indexRoutes;
