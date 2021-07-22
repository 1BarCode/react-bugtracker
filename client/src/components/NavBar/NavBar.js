import React from "react";
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

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography>Logged in as:</Typography>
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
