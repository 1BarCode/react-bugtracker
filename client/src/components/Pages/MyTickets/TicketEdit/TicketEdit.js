import React from "react";
import { Container, Paper, Grid } from "@material-ui/core";

import Input from "../../../Auth/Input";
import useStyles from "./styles";

const TicketEdit = () => {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper>
          <Grid container spacing={2}>
            <Input />
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default TicketEdit;
