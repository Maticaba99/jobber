import React from "react";
import { Switch, Route } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </Switch>
  );
}

export default Routes;
