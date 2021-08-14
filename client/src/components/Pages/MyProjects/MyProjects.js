import React from "react";
import { Container, Button, Typography, Paper } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const MyProjects = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Button
          classes={{ root: classes.buttonRoot }}
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/project/new")}
        >
          <Typography>New Project</Typography>
        </Button>
        <Paper></Paper>
      </Container>
    </div>
  );
};

export default MyProjects;
