import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Header />
      <Route path="/" exact component={Welcome} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default AppRouter;
