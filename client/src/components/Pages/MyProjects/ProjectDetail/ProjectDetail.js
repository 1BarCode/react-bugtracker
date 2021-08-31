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

import useStyles from "./styles";
import moment from "moment";

const ProjectDetail = () => {
  const classes = useStyles();
  const { id: _id } = useParams();
  const history = useHistory;
  const dispatch = useDispatch();
  const [infoReady, setInfoReady] = useState(false);

  //   useEffect(() => {
  //     // const fetchOneProject = async () => {
  //     //   await dispatch(getOneProject(_id));
  //     //   setInfoReady(true);
  //     // };
  //     // // fetchOneProject();
  //   }, []);

  //   if (!infoReady) {
  //     return null;
  //   }

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
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
                  <Typography>{}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectDetail;
