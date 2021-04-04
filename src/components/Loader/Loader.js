import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader(props) {
  let classes = useStyles();
  if (props.Loading) {
    return (
      <div className={classes.root}>
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </div>
    );
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}
