import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Input = ({ name, label, type, half, handleChange }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        required
        fullWidth
        type={type}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Input;
