import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ManageRole from "./components/Pages/ManageRole/ManageRole";
import ManageProjectUsers from "./components/Pages/ManageProjectUsers/ManageProjectUsers";
import MyProjects from "./components/Pages/MyProjects/MyProjects";
import NewProject from "./components/Pages/MyProjects/NewProject/NewProject";
import MyTickets from "./components/Pages/MyTickets/MyTickets";
import Profile from "./components/Pages/Profile/Profile";
import NewTicket from "./components/Pages/MyTickets/NewTicket/NewTicket";
import TicketEdit from "./components/Pages/MyTickets/TicketEdit/TicketEdit";
import TicketDetail from "./components/Pages/MyTickets/TicketDetail/TicketDetail";
import ProjectDetail from "./components/Pages/MyProjects/ProjectDetail/ProjectDetail";
import ProjectEdit from "./components/Pages/MyProjects/ProjectEdit/ProjectEdit";

const App = () => {
  const loggedUser = useSelector((state) => state.auth.authData);
  const userStorage = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(userStorage);
  const isAuth = loggedUser || Boolean(user);

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

        <ProtectedRoute
          exact
          path="/roles"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <ManageRole />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/users"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <ManageProjectUsers />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/myprojects"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <MyProjects user={user} />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/project/new"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <NewProject />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/project/edit/:id"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <ProjectEdit />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/project/detail/:id"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <ProjectDetail />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/mytickets"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <MyTickets user={user} />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/ticket/new"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <NewTicket />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/ticket/edit/:id"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <TicketEdit />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/ticket/detail/:id"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <TicketDetail />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/profile"
          redirectPath="/auth"
          loggedIn={isAuth}
        >
          <Profile user={user} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
