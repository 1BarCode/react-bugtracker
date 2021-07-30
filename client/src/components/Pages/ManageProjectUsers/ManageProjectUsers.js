import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const ManageProjectUsers = () => {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        Manage Project Users Page
      </Container>
    </div>
  );
};

export default ManageProjectUsers;
