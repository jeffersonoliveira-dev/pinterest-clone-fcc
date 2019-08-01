import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
