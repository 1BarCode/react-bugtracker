import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  CssBaseline,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const NavBar = ({ user, setUser }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography>Logged in as: {user.result.name}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText>DashBoard Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
