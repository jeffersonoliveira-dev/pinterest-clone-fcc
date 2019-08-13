import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from "./components/Header/index";
import Dashboard from "./components/Dashboard/index";
import Image from "./components/Image/index";

// testing

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/image" component={Image} />
      </Router>
    </Provider>
  );
};

export default App;
