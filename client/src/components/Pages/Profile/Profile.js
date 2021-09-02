import React, { useState } from "react";
import {
  Container,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import Input from "../../Auth/Input";
import moment from "moment";

import useStyles from "./styles";

const Profile = ({ user }) => {
  const classes = useStyles();
  const [wantEdit, setWantEdit] = useState(false);

  const changeForm = (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paperForm} elevation={3}>
        <Typography variant="h6">Credentials</Typography>
        <form
          className={classes.form}
          // onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              type="email"
              // handleChange={handleChange}
            />
            <Button
              className={classes.save}
              style={{ textTransform: "none" }}
              variant="contained"
              color="primary"
              // onClick={() => setWantEdit(!wantEdit)}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );

  return (
    <div className={classes.divRoot}>
      <Container className={classes.content}>
        <Paper className={classes.paper} elevation={5}>
          <Card elevation={2}>
            <CardContent>
              <div style={{ display: "flex" }}>
                <Avatar className={classes.large}>{user.result.name[0]}</Avatar>
                <Divider
                  className={classes.divider1}
                  orientation="vertical"
                  flexItem
                />

                <div className={classes.nameEmail}>
                  <Typography variant="h5">{user.result.name}</Typography>
                  <Typography>{user.result.email}</Typography>
                  <Typography>
                    Account created:{" "}
                    {moment(user.result.createdAt).format("LL")}
                  </Typography>
                </div>
              </div>

              <Divider className={classes.divider2} orientation="horizontal" />

              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                color={wantEdit ? "secondary" : "primary"}
                onClick={() => setWantEdit(!wantEdit)}
              >
                {wantEdit ? "Cancel" : "Update Credentials"}
              </Button>
              {wantEdit ? changeForm : null}
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};

export default Profile;
