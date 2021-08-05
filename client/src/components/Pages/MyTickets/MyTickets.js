import React, { useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Link,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";

import useStyles from "./styles";

const MyTickets = () => {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "title", label: "Title", minWidth: 150 },
    { id: "projectName", label: "Project Name", minWidth: 150 },
    { id: "assignedDeveloper", label: "Assigned Developer", minWidth: 170 },
    { id: "ticketPriority", label: "Ticket Priority", minWidth: 30 },
    { id: "ticketStatus", label: "Ticket Status", minWidth: 30 },
    { id: "ticketType", label: "Ticket Type", minWidth: 50 },
    { id: "created", label: "Created", minWidth: 120 },
    { id: "action", label: "Action", minWidth: 150 },
  ];

  const createData = (
    id,
    title,
    projectName,
    assignedDeveloper,
    ticketPriority,
    ticketStatus,
    ticketType,
    created,
    action
  ) => {
    return {
      id,
      title,
      projectName,
      assignedDeveloper,
      ticketPriority,
      ticketStatus,
      ticketType,
      created,
      action,
    };
  };

  const rows = [
    createData(
      1,
      "Pop-up Issue",
      "Bug Tracker",
      "jon wick",
      "Low",
      "Open",
      "Bug",
      "7-30-2021",
      { Edit: "Edit/Assign", Details: "Details" }
    ),
    createData(
      2,
      "Closing Issue",
      "Bug Tracker",
      "jon wick",
      "High",
      "Open",
      "Ticket",
      "7-30-2021",
      { Edit: "Edit/Assign", Details: "Details" }
    ),
  ];

  const renderTableHead = columns.map((column) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{ minWidth: column.minWidth }}
    >
      <strong>{column.label}</strong>
    </TableCell>
  ));

  const renderTableBody = rows.map((row) => {
    return (
      <TableRow key={row.title}>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.projectName}</TableCell>
        <TableCell>{row.assignedDeveloper}</TableCell>
        <TableCell>{row.ticketPriority}</TableCell>
        <TableCell>{row.ticketStatus}</TableCell>
        <TableCell>{row.ticketType}</TableCell>
        <TableCell>{row.created}</TableCell>
        <TableCell>
          <List>
            <ListItem disableGutters>
              <Link component={RouterLink} to={`/myticket/edit/${row.id}`}>
                {row.action.Edit}
              </Link>
            </ListItem>
            <ListItem disableGutters>
              <Link component={RouterLink} to={`/myticket/detail/${row.id}`}>
                {row.action.Details}
              </Link>
            </ListItem>
          </List>
        </TableCell>
      </TableRow>
    );
  });

  console.log(rows);

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Button
          classes={{ root: classes.buttonRoot }}
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/ticket/new")}
        >
          <Typography>New Ticket</Typography>
        </Button>
        <Paper className={classes.paper}>
          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader aria-label="My Tickets">
              <TableHead>
                <TableRow>{renderTableHead}</TableRow>
              </TableHead>
              <TableBody>{renderTableBody}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
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

export default MyTickets;
