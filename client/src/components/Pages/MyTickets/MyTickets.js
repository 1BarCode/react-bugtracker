import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const MyTickets = () => {
  const classes = useStyles();
  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>My Tickets</Container>
    </div>
  );
};

export default MyTickets;
