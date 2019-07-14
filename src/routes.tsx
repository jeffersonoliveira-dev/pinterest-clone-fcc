import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Welcome from "./pages/Welcome";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Header />
      <Route path="/" exact component={Welcome} />
    </Router>
  );
}

export default AppRouter;
