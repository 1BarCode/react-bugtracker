import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Auth from "./components/Auth/Auth";

const loggedIn = false;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          // component={loggedIn ? <Redirect to="/dashboard" /> : <Auth />}
          component={Auth}
        />
        {/* <Route exact path="/auth" component={Auth} /> */}
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
