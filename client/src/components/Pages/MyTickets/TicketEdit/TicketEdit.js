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

import useStyles from "./styles";
import { updateTicket } from "../../../../redux/actions/tickets";
// import FileBase64 from "react-file-base64";

const TicketEdit = () => {
  const classes = useStyles();
  const { id: _id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [ticketData, setTicketData] = useState({
    title: "",
    priority: "",
    status: "",
    type: "",
    description: "",
    // file: "",
  });

  const ticket = useSelector((state) =>
    _id ? state.tickets.find((tic) => tic._id === _id) : null
  );

  useEffect(() => {
    if (ticket) {
      setTicketData({
        title: ticket.title,
        priority: ticket.priority,
        status: ticket.status,
        type: ticket.type,
        description: ticket.description,
        // file: ticket.attachment.file,
      });
    }
  }, [ticket]);

  // console.log(ticket);
  // console.log(ticketData);
  const clear = () => {
    setTicketData({
      title: "",
      priority: "",
      status: "",
      type: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setTicketData((ticketData) => ({
      ...ticketData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateTicket(_id, { ...ticketData }));
    clear();
    history.push("/mytickets");
  };

  const handleCancel = () => {
    setTicketData({
      title: "",
      priority: "",
      status: "",
      type: "",
      description: "",
    });
    history.push("/mytickets");
  };

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.pageTitle}>
            <strong>Edit Ticket</strong>
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
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
                  value={ticketData.description}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                />
                {/* <div className={classes.fileBase}>
                  <label>Attach a File: </label>
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={(base64) =>
                      setTicketData({ ...ticketData, file: base64.base64 })
                    }
                  />
                </div> */}
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

export default TicketEdit;
