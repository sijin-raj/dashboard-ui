import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoutes from "routes/AuthRoutes";

function LogIn() {
  const switchComponent = AuthRoutes.map((route, i) =>
    route.redirect ? (
      <Redirect key={`AuthRoutes-${i}`} to={route.to} />
    ) : (
      <Route
        key={`AuthRoutes-${i}`}
        path={route.path}
        component={() => <route.component />}
      />
    )
  );

  return (
    <div>
      <Switch>{switchComponent}</Switch>
    </div>
  );
}

export default LogIn;
