import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const loggedIn = true;

const Dashboard = () => {
  return <div>You're at the Dashboard</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      {loggedIn ? <NavBar /> : null}
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/auth" />}
        </Route>
        <Route exact path="/auth">
          {loggedIn ? <Redirect to="/dashboard" /> : <Auth />}
        </Route>
        <ProtectedRoute
          path="/dashboard"
          redirectPath="/auth"
          loggedIn={loggedIn}
        >
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
