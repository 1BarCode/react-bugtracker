import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";

const MyProjects = () => {
  const classes = useStyles();
  const history = useHistory();
  const [infoReady, setInfoReady] = useState(false);

  const solumns = [
    { id: "title", label: "Title", minWidth: 150 },
    { id: "projectPriority", label: "Project Priority", minWidth: 150 },
    { id: "projectStatus", label: "Project Status", minWidth: 150 },
    { id: "projectManager", label: "Project Manager", minWidth: 150 },
  ];

  const createData = (id, title, projectPriority, projectStatus) => {
    return { id, title, projectPriority, projectStatus };
  };

  // FETCH Projects when visiting route
  useEffect(() => {
    const loadProjects = async () => {
      // await dispatch(getProjects());
      setInfoReady(true);
    };
    loadProjects();
  }, [dispatch]);

  // const rowsArr =

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
