import React from "react";
import { Container, Paper } from "@material-ui/core";

import useStyles from "./styles";

const TicketEdit = () => {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper></Paper>
      </Container>
    </div>
  );
};

export default TicketEdit;
