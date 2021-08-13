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
  Card,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
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
  const [selectedItemLoc, setSelectedItemLoc] = useState(location.pathname);

  const handleListItemClick = (e, pathname) => {
    setSelectedItemLoc(pathname);
  };

  useEffect(() => {
    // const token = user?.token;
    setSelectedItemLoc(location.pathname);
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
    { title: "Dashboard", icon: "DashboardIcon" },
    { title: "Manage Role", icon: "AssignmentIndIcon" },
    { title: "Project Users", icon: "GroupAddIcon" },
    { title: "My Projects", icon: "AssignmentIcon" },
    { title: "My Tickets", icon: "ConfirmationNumberIcon" },
    { title: "User Profile", icon: "PersonIcon" },
  ].map((button) => (
    <ListItem
      selected={
        button.icon === "DashboardIcon"
          ? selectedItemLoc === "/dashboard"
          : button.icon === "AssignmentIndIcon"
          ? selectedItemLoc === "/roles"
          : button.icon === "GroupAddIcon"
          ? selectedItemLoc === "/users"
          : button.icon === "AssignmentIcon"
          ? selectedItemLoc === "/myprojects"
          : button.icon === "ConfirmationNumberIcon"
          ? selectedItemLoc === "/mytickets"
          : selectedItemLoc === "/profile"
      }
      onClick={
        button.icon === "DashboardIcon"
          ? (e) => {
              handleListItemClick(e, "/dashboard");
              history.push("/dashboard");
            }
          : button.icon === "AssignmentIndIcon"
          ? (e) => {
              handleListItemClick(e, "/roles");
              history.push("/roles");
            }
          : button.icon === "GroupAddIcon"
          ? (e) => {
              handleListItemClick(e, "/users");
              history.push("/users");
            }
          : button.icon === "AssignmentIcon"
          ? (e) => {
              handleListItemClick(e, "/myprojects");
              history.push("/myprojects");
            }
          : button.icon === "ConfirmationNumberIcon"
          ? (e) => {
              handleListItemClick(e, "/mytickets");
              history.push("/mytickets");
            }
          : (e) => {
              handleListItemClick(e, "/profile");
              history.push("/profile");
            }
      }
      button
      key={button.title}
      classes={{ root: classes.listItemRoot }}
    >
      <ListItemIcon>
        {button.icon === "DashboardIcon" ? (
          <DashboardIcon fontSize="large" />
        ) : button.icon === "AssignmentIndIcon" ? (
          <AssignmentIndIcon fontSize="large" />
        ) : button.icon === "GroupAddIcon" ? (
          <GroupAddIcon fontSize="large" />
        ) : button.icon === "AssignmentIcon" ? (
          <AssignmentIcon fontSize="large" />
        ) : button.icon === "ConfirmationNumberIcon" ? (
          <ConfirmationNumberIcon fontSize="large" />
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
        {/* <div className={classes.toolbar} /> */}
        <Card square elevation={0}>
          <CardHeader
            avatar={<Avatar>{user?.result.name.split("")[0]}</Avatar>}
            title="WELCOME"
            subheader={user?.result.name}
          />
        </Card>
        <Divider />
        <List>{drawerButtons}</List>
      </Drawer>
    </div>
  );
};

export default NavBar;
