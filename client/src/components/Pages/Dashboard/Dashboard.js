import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <main className={classes.content}>
        <Typography>You're at the Dashboard</Typography>
      </main>
    </div>
  );
};

export default Dashboard;
