import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";

import SignIn from "../pages/SingIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
