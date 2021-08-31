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
  Link,
  List,
  ListItem,
} from "@material-ui/core";

import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/actions/projects";

import useStyles from "./styles";
import moment from "moment";

const MyProjects = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const fetchedProjects = useSelector((state) => state.projects);
  const [infoReady, setInfoReady] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "title", label: "Title", minWidth: 150 },
    { id: "projectStatus", label: "Project Status", minWidth: 150 },
    { id: "projectManager", label: "Project Manager", minWidth: 150 },
    { id: "created", label: "Created", minWidth: 150 },
    { id: "updated", label: "Updated", minWidth: 150 },
    { id: "action", label: "Action", minWidth: 150 },
  ];

  const createData = (
    id,
    name,
    projectStatus,
    projectManager,
    created,
    updated,
    action
  ) => {
    return {
      id,
      name,
      projectStatus,
      projectManager,
      created,
      updated,
      action,
    };
  };

  // FETCH Projects when visiting route
  useEffect(() => {
    const loadProjects = async () => {
      await dispatch(getProjects());
      setInfoReady(true);
    };
    loadProjects();
  }, [dispatch]);

  const rowsArr = fetchedProjects
    .filter((project) => project.projectManager._id === user.result._id)
    .map((project) => {
      const formattedProject = createData(
        project._id,
        project.name,
        project.status,
        project.projectManager.name,
        project.createdAt,
        project.updatedAt,
        { Edit: "Edit", Details: "Details" }
      );
      return formattedProject;
    });

  const renderTableHead = columns.map((column) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{ minWidth: column.minWidth }}
    >
      <strong>{column.label}</strong>
    </TableCell>
  ));

  const renderTableBody = rowsArr
    .reverse()
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      return (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.projectStatus}</TableCell>
          <TableCell>{row.projectManager}</TableCell>
          <TableCell>
            {moment(row.created).startOf("minute").fromNow()}
          </TableCell>
          <TableCell>
            {moment(row.updated).startOf("minute").fromNow()}
          </TableCell>
          <TableCell>
            <List>
              <ListItem disableGutters>
                <Link component={RouterLink} to={`/project/edit/${row.id}`}>
                  {row.action.Edit}
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link component={RouterLink} to={`/project/detail/${row.id}`}>
                  {row.action.Details}
                </Link>
              </ListItem>
            </List>
          </TableCell>
        </TableRow>
      );
    });

  if (!infoReady) {
    return null;
  }

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
        <Paper className={classes.paper} elevation={5}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>{renderTableHead}</TableRow>
              </TableHead>
              <TableBody>{renderTableBody}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rowsArr.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default MyProjects;
