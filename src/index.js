import React from "react";
import ReactDOM from "react-dom";
import indexRoutes from "routes/index";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let history = createBrowserHistory();

function Index() {
  return (
    <Router history={history}>
      <React.Fragment>
        <ToastContainer />
        <Switch>
          {indexRoutes.map((route, i) =>
            route.redirect ? (
              <Redirect key={i} to={route.to} />
            ) : (
              <Route
                key={i}
                path={route.path}
                component={() => <route.component />}
              />
            )
          )}
        </Switch>
      </React.Fragment>
    </Router>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
