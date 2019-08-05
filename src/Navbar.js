
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import App from "./App";
// import styles from "./styles/NavBarStyles";

class Navbar extends Component {
  render() {
    return (
      <div className={classes.root}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' >
              <span>🇫🇷</span>
            </IconButton>
            <Typography
              className={classes.title}
              variant='h6'
              color='inherit'
            >
              App title
            </Typography>
            <Switch /> {/*gives us a toggle button to toggle theme from dark to light*/}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar