import React from "react";
import { Switch, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import JobsList from "../pages/JobsList";

function Routes() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={JobsList} />
      </Layout>
    </Switch>
  );
}

export default Routes;
