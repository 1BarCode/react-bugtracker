import React, { useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";

import useStyles from "./styles";

const initialProjectData = {
  name: "",
  description: "",
  status: "",
};

const NewProject = () => {
  const classes = useStyles();
  const [projectData, setProjectData] = useState(initialProjectData);

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="h6" className={classes.pageTitle}>
            Create A New Ticket
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  name="name"
                  label="Project Name"
                  value={projectData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  name="description"
                  label="Description"
                  value={projectData.description}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default NewProject;
