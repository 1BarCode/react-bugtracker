import React, { useState } from "react";

import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Input from "./Input";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [wantSignUp, setWantSignUp] = useState(false);
  const [formData, setformData] = useState(initialFormData);

  const handleChange = (e) => {
    setformData({ ...initialFormData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Typography>{wantSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form>
          <Grid container spacing={2}>
            {wantSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              handleChange={handleChange}
            />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
