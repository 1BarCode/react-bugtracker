import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Input from "../../../Auth/Input";
import useStyles from "./styles";

const initialTicketData = {
  title: "",
  project: "",
  priority: "",
  status: "",
  type: "",
  description: "",
};

const NewTicket = () => {
  const classes = useStyles();
  const history = useHistory();
  const [ticketData, setTicketData] = useState(initialTicketData);

  const handleChange = (e) => {
    setTicketData((ticketData) => ({
      ...ticketData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setTicketData(initialTicketData);
    history.push("/mytickets");
  };

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="h6" className={classes.pageTitle}>
            Create A New Ticket
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  name="title"
                  label="Title"
                  value={ticketData.title}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="project-label">Project</InputLabel>
                  <Select
                    name="project"
                    labelId="project-label"
                    id="project"
                    value={ticketData.project}
                    onChange={handleChange}
                  >
                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Project 1">Project 1</MenuItem>
                    <MenuItem value="Project 2">Project 2</MenuItem>
                    <MenuItem value="Project 3">Project 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="priority-label">Ticket Priority</InputLabel>
                  <Select
                    name="priority"
                    labelId="priority-label"
                    id="priority"
                    value={ticketData.priority}
                    onChange={handleChange}
                  >
                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="ASAP">ASAP</MenuItem>
                    <MenuItem value="Emergency">Emergency</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="status-label">Ticket Status</InputLabel>
                  <Select
                    name="status"
                    labelId="status-label"
                    id="status"
                    value={ticketData.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="New">New</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="type-label">Ticket Type</InputLabel>
                  <Select
                    name="type"
                    labelId="type-label"
                    id="type"
                    value={ticketData.type}
                    onChange={handleChange}
                  >
                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Bugs/Errors">Bugs/Errors</MenuItem>
                    <MenuItem value="Feature Request">Feature Request</MenuItem>
                    <MenuItem value="Document Request">
                      Document Request
                    </MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  name="description"
                  label="Description"
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

export default NewTicket;
