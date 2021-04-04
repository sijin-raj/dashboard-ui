// npm packages
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";

// custom pages
import Logo from "assets/Img/logo.png";

// material ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Link: {
    color: "#000",
    textDecoration: "none",
  },
  highLight: {
    backgroundColor: "#00838f",
    color: "#fff",
    "&:hover": {
      background: "#0097a7",
    },
  },
  icon: {
    color: "#fff",
  },
}));

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let [width, setWidth] = useState(getWidth());

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const widthResize = () => {
    if (width < 700) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setWidth(0);
  };

  useEffect(() => {
    widthResize();
  }, []);

  function isThisRoute(sidebar) {
    if (sidebar.to.toLowerCase() === window.location.pathname.toLowerCase())
      return true;
    return false;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        name={props.headerName}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "50px", width: "50px", marginRight: "9%" }}
          />
          <h4 style={{ marginRight: "16%" }}>IS3 Admin</h4>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {props.routes.map(
            (route, index) =>
              route.sidebar && (
                <Link
                  key={index}
                  className={classes.Link}
                  to={route.sidebar.to}
                  onClick={() => {
                    if (route.sidebar.to === "/login") {
                      localStorage.removeItem("token");
                      localStorage.removeItem("phoneNumber");
                      toast.success("You Are Successfully LoggedOut ");
                    }
                  }}
                >
                  <ListItem
                    button
                    className={clsx(classes.Link, {
                      [classes.highLight]: isThisRoute(route.sidebar),
                    })}
                  >
                    <ListItemIcon
                      className={clsx(classes.Link, {
                        [classes.icon]: isThisRoute(route.sidebar),
                      })}
                    >
                      <route.sidebar.icon />
                    </ListItemIcon>
                    <ListItemText primary={route.sidebar.name} />
                  </ListItem>
                </Link>
              )
          )}
        </List>
      </Drawer>
    </div>
  );
}
