import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import Input from "./Input";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [wantSignUp, setWantSignUp] = useState(true);
  const [formData, setformData] = useState(initialFormData);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSwitchMode = () => {
    setWantSignUp((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Typography>{wantSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
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
            {wantSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                type="password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {wantSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {/* Google Login Button */}
          <Button onClick={handleSwitchMode}>
            {wantSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
