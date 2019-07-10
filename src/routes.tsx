import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Welcome from "./pages/Welcome";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Welcome} />
    </Router>
  );
}

export default AppRouter;
