import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>My Profile</Container>
    </div>
  );
};

export default Profile;
