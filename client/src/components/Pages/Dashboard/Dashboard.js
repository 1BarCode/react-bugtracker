import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography>You're at the Dashboard</Typography>;
    </main>
  );
};

export default Dashboard;
