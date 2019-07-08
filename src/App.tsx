import React from "react";
import Welcome from "./components/welcome/welcome";
import Header from "./components/header/header";
import { Container } from "./App.styles";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Welcome />
    </Container>
  );
};

export default App;
