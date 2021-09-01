import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProject } from "../../../../redux/actions/projects";

import useStyles from "./styles";

const ProjectEdit = () => {
  const classes = useStyles();
  const { id: _id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [projectData, setProjectData] = useState({
    name: "",
    status: "",
    description: "",
  });

  const project = useSelector((state) =>
    _id ? state.projects.find((proj) => proj._id === _id) : null
  );

  useEffect(() => {
    if (project) {
      setProjectData({
        name: project.name,
        status: project.status,
        description: project.description,
      });
    }
  }, [project]);

  const clear = () => {
    setProjectData({
      name: "",
      status: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setProjectData((projectData) => ({
      ...projectData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProject(_id, { ...projectData }));
    clear();
    history.push("/myprojects");
  };

  const handleCancel = () => {
    clear();
    history.push("/myprojects");
  };

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.pageTitle}>
            <strong>Edit Project</strong>
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
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="priority-label">Project Status</InputLabel>
                  <Select
                    name="status"
                    labelId="status-label"
                    id="status"
                    value={projectData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
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
                <Button
                  type="submit"
                  className={classes.submit}
                  style={{ textTransform: "none" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Update
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

export default ProjectEdit;
