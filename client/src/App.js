import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Dashboard = () => {
  return <div>You're at the Dashboard</div>;
};

const App = () => {
  const loggedUser = useSelector((state) => state.auth.authData);
  const userStorage = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(userStorage);
  const isAuth = loggedUser || Boolean(user);

  // console.log(`user from redux: ${loggedUser}`);
  // console.log(`user storage: ${userStorage}`);
  // console.log(`user: ${user}`);
  // console.log(`is auth: ${isAuth}`);

  useEffect(() => {
    setUser(userStorage);
  }, []);

  return (
    <BrowserRouter>
      {isAuth ? <NavBar user={user} setUser={setUser} /> : null}
      <Switch>
        <ProtectedRoute exact path="/" redirectPath="/auth" loggedIn={isAuth}>
          <Dashboard />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/auth"
          redirectPath="/dashboard"
          loggedIn={!isAuth}
        >
          <Auth />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/dashboard"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
