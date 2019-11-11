import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    margin: "10px auto",
    width: "90%"
  }
});

export default function MainLayout({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
