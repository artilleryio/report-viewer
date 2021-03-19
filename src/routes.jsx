import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
