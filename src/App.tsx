import React from "react";
import Welcome from "./components/welcome/welcome";
import Header from "./components/header/header";
import { Container } from "./App.styles";
import AppRouter from "./routes";

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;
