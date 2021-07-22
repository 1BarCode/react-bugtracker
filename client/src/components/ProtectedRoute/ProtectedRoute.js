import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, redirectPath, children, ...rest }) => {
  return (
    <Route {...rest}>
      {loggedIn ? children : <Redirect to={redirectPath} />}
    </Route>
  );
};

export default ProtectedRoute;
