import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
      </Router>
    </Provider>
  );
};

export default App;
