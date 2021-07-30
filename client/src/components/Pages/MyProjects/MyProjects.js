import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const MyProjects = () => {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>My Projects</Container>
    </div>
  );
};

export default MyProjects;
