import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from "firebase";
import Keys from "../../Keys";
import { Container, NavBar, GithubAuth } from "./header.styles";

const config = {
  apiKey: Keys.firebase,
  authDomain: "pinclonerest.firebaseapp.com",
  databaseURL: "https://pinclonerest.firebaseio.com",
  projectId: "pinclonerest",
  storageBucket: "",
  messagingSenderId: "140434701386",
  appId: "1:140434701386:web:2a9f8fa32221d232"
};
firebase.initializeApp(config);

const Header: React.FC = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  return (
    <Container>
      <NavBar>
        <h1> Pinclonerest </h1>
        <GithubAuth>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </GithubAuth>
      </NavBar>
    </Container>
  );
};

export default Header;
