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
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneProject } from "../../../../redux/actions/projects";

import useStyles from "./styles";
import moment from "moment";

const ProjectDetail = () => {
  const classes = useStyles();
  const { id: _id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [infoReady, setInfoReady] = useState(false);

  const project = useSelector((state) =>
    state.projects.filter((project) => (_id ? project._id === _id : null))
  )[0];

  useEffect(() => {
    const fetchOneProject = async () => {
      dispatch(getOneProject(_id));
      setInfoReady(true);
    };
    fetchOneProject();
  }, [dispatch, _id]);

  if (!infoReady) {
    return null;
  }

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.back}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.pageTitle}>
            <strong>Project Detail</strong>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Project Name</strong>
                  </Typography>
                  <Typography>{project.name}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Project Manager</strong>
                  </Typography>
                  <Typography>{project.projectManager.name}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Assigned Developer(s)</strong>
                  </Typography>
                  <Typography>
                    {project.developers[0] ? project.developers[0] : "None"}
                  </Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Last Updated</strong>
                  </Typography>
                  <Typography>
                    {moment(project?.updatedAt).startOf("minute").fromNow()}
                  </Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Created</strong>
                  </Typography>
                  <Typography>
                    {moment(project?.createdAt).startOf("minute").fromNow()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Project Description</strong>
                  </Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
              </Card>
              <Card square elevation={3} className={classes.cardRoot}>
                <CardContent>
                  <Typography className={classes.typo}>
                    <strong>Tickets</strong>
                  </Typography>
                  <Typography>
                    {project.tickets[0] ? project.tickets[0] : "None"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectDetail;
