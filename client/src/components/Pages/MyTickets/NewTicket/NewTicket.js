import React, { useState } from "react";
import { Container, Paper, Grid } from "@material-ui/core";

import Input from "../../../Auth/Input";
import useStyles from "./styles";

const initialTicketData = {
  title: "",
  description: "",
  priority: "",
  status: "",
  type: "",
};

const NewTicket = () => {
  const classes = useStyles();
  const [ticketData, setTicketData] = useState(initialTicketData);

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper>
          <Grid container spacing={2}>
            <form>
              <Input />
            </form>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default NewTicket;
