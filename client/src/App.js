import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Dashboard = () => {
  return <div>You're at the Dashboard</div>;
};

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <BrowserRouter>
      {user ? <NavBar user={user} setUser={setUser} /> : null}
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/dashboard" /> : <Redirect to="/auth" />}
        </Route>
        <Route exact path="/auth">
          {user ? <Redirect to="/dashboard" /> : <Auth />}
        </Route>
        <ProtectedRoute
          exact
          path="/dashboard"
          redirectPath="/auth"
          loggedIn={user}
        >
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
