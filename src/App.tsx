import React from "react";
import Welcome from "./components/welcome/welcome";
import { Container } from "./App.styles";

const App: React.FC = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};

export default App;
