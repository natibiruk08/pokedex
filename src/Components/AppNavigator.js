import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },
  Link: {
    textDecoration: "none",
  },
  Title: {
    cursor: "pointer",
    color: "white",
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed" variant="h6">
      <Toolbar>
        <Link to="/" className={classes.Link}>
          <Typography className={classes.Title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
