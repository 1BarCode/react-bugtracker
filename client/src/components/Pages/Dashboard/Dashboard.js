import React from "react";
import { Typography, Container } from "@material-ui/core";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Typography>You're at the Dashboard</Typography>
      </Container>
    </div>
  );
};

export default Dashboard;
