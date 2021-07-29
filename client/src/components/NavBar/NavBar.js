import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  CssBaseline,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";

import { useDispatch } from "react-redux";

import { useLocation, useHistory } from "react-router-dom";

import useStyles from "./styles";

const NavBar = ({ user, setUser }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileIconButton = (
    <div className={classes.profileButtonRoot}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        edge="end"
      >
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );

  const drawerButtons = [
    { title: "Dashboard Home", icon: "HomeIcon" },
    { title: "Manage Role", icon: "AssignmentIndIcon" },
    { title: "Manage Users", icon: "GroupAddIcon" },
    { title: "My Projects", icon: "ListIcon" },
    { title: "My Tickets", icon: "AssignmentIcon" },
    { title: "User Profile", icon: "PersonIcon" },
  ].map((button) => (
    <ListItem
      onClick={
        button.icon === "HomeIcon"
          ? () => history.push("/dashboard")
          : button.icon === "AssignmentIndIcon"
          ? () => history.push("/roles")
          : button.icon === "GroupAddIcon"
          ? () => history.push("/users")
          : button.icon === "ListIcon"
          ? () => history.push("/projects")
          : button.icon === "AssignmentIcon"
          ? () => history.push("/tickets")
          : () => history.push("/profile")
      }
      button
      key={button.title}
      classes={{ root: classes.listItemRoot }}
    >
      <ListItemIcon>
        {button.icon === "HomeIcon" ? (
          <HomeIcon fontSize="large" />
        ) : button.icon === "AssignmentIndIcon" ? (
          <AssignmentIndIcon fontSize="large" />
        ) : button.icon === "GroupAddIcon" ? (
          <GroupAddIcon fontSize="large" />
        ) : button.icon === "ListIcon" ? (
          <ListIcon fontSize="large" />
        ) : button.icon === "AssignmentIcon" ? (
          <AssignmentIcon fontSize="large" />
        ) : (
          <PersonIcon fontSize="large" />
        )}
      </ListItemIcon>
      <ListItemText primary={button.title} />
    </ListItem>
  ));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} elevation={5} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logged in as: <strong> {user?.result.name}</strong>
          </Typography>
          {profileIconButton}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <Drawer
        elevation={50}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {/* <ListItemIcon></ListItemIcon>
            <ListItemText>DashBoard Home</ListItemText> */}
          {drawerButtons}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
