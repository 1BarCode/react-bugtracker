import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import useStyles from "./styles";
import moment from "moment";

const TicketDetail = () => {
  const classes = useStyles();
  const { id: _id } = useParams();
  const history = useHistory();

  const ticket = useSelector((state) =>
    state.tickets.filter((ticket) => (_id ? ticket._id === _id : null))
  );

  console.log(_id);
  console.log(ticket[0]);

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.pageTitle}>
            <strong>Ticket Detail</strong>
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Ticket Title</strong>
                  </Typography>
                  <Typography>{ticket[0]?.title}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Assigned Developer(s)</strong>
                  </Typography>
                  <Typography>{ticket[0]?.assignedDevelopers[0]}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Ticket Priority</strong>
                  </Typography>
                  <Typography>{ticket[0]?.priority}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Created</strong>
                  </Typography>
                  <Typography>
                    {moment(ticket[0]?.createdAt).startOf("minute").fromNow()}
                  </Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Last Updated</strong>
                  </Typography>
                  <Typography>
                    {moment(ticket[0]?.updatedAt).startOf("minute").fromNow()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Ticket Status</strong>
                  </Typography>
                  <Typography>{ticket[0]?.status}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Ticket Type</strong>
                  </Typography>
                  <Typography>{ticket[0]?.type}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography>
                    <strong>Ticket Description</strong>
                  </Typography>
                  <Typography>{ticket[0]?.description}</Typography>
                </CardContent>
              </Card>
              <Button
                variant="contained"
                color="secondary"
                className={classes.back}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.edit}
                onClick={() => history.push(`/ticket/edit/${_id}`)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default TicketDetail;
