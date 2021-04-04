import React from "react";
// import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import Footer from "components/Footer/Footer";
import DashboardRoutes from "routes/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "scroll",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const classes = useStyles();

  const switchRoutes = DashboardRoutes.map((route, i) => {
    if (route.redirect) {
      return <Redirect key={`DashBoardRoutes-${i}`} to={route.to} />;
    }

    return (
      <Route key={i} path={route.path} component={() => <route.component />} />
    );
  });

  return (
    <div className={classes.root}>
      <SideBar routes={DashboardRoutes} headerName="" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>{switchRoutes}</Switch>
        <Footer />
      </main>
    </div>
  );
}

export default withRouter(App);
