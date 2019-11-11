import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBarBase from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GithubCircle from "mdi-material-ui/GithubCircle";
import Reddit from "mdi-material-ui/Reddit";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarBase position="static">
        <Toolbar>
          <Typography
            align="left"
            variant="h6"
            color="inherit"
            className={classes.grow}
          >
            Ditto Post Helper
          </Typography>
          <IconButton
            target="_blank"
            href="https://www.reddit.com/r/morebreedingdittos/"
          >
            <Reddit color="inherit" />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://github.com/ShinySylveon04/ditto-post-helper"
          >
            <GithubCircle color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBarBase>
    </div>
  );
}
