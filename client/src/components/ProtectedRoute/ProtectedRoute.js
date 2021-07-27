import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, redirectPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
