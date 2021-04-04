// npm packages
import React from "react";
import clsx from "clsx";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#00838f",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: 36,
  },
  logout: {
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
}));

function Header(props) {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {props.name}
        </Typography>
        <Grid
          justify="space-between" // Add it here :)
          container
        >
          <Grid item>
            <Typography type="title" color="inherit"></Typography>
          </Grid>

          <Grid item>
            {/* <Link
              to={"/login"}
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("phoneNumber");
                toast.success("You Are Successfully LoggedOut ");
              }}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" className={classes.logout}>
                <ExitToAppIcon />
                &nbsp; Logout
              </Button>
            </Link> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
