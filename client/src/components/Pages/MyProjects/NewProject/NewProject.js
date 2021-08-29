import React, { useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const initialProjectData = {
  name: "",
  description: "",
  status: "",
};

const NewProject = () => {
  const classes = useStyles();
  const [projectData, setProjectData] = useState(initialProjectData);
  const history = useHistory();

  const handleChange = (e) => {
    setProjectData((projectData) => ({
      ...projectData,
      [e.target.name]: e.target.value,
    }));
  };

  const clear = () => {
    setProjectData(initialProjectData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await dispatchEvent()
    clear();
    history.push("/myprojects");
  };

  const handleCancel = () => {
    setProjectData(initialProjectData);
    history.push("/myprojects");
  };

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
                  className={classes.formControl}
                />
                <TextField
                  className={classes.description}
                  name="description"
                  label="Description"
                  value={projectData.description}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                />
                {/* <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel>Project Status</InputLabel>
                  <Select name="status" labelId="status-label" id="status">
                    <MenuItem value="New">
                      <em>New</em>
                    </MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* <TextField
                  name="description"
                  label="Description"
                  value={projectData.description}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                /> */}
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel>Project Status</InputLabel>
                  <Select name="status" labelId="status-label" id="status">
                    <MenuItem value="New">
                      <em>New</em>
                    </MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  className={classes.submit}
                  style={{ textTransform: "none" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Submit
                </Button>
                <Button
                  className={classes.cancel}
                  style={{ textTransform: "none" }}
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default NewProject;
