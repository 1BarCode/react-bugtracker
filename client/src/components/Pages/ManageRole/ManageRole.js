import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const ManageRole = () => {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>Manage Role Page</Container>
    </div>
  );
};

export default ManageRole;
