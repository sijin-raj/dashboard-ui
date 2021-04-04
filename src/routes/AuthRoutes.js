import SignIn from "views/AuthPages/SignIn";

var authRoutes = [
  { path: "/signin", name: "SignIn", component: SignIn },
  { redirect: true, to: "/signin" },
];

export default authRoutes;
