import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Keys from "../../Keys";
import { Container, NavBar, GithubAuth } from "./header.styles";

const config = {
  apiKey: Keys.firebase,
  authDomain: "project-140434701386.firebaseapp.com"
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/signedIn",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
};

const Header: React.FC = () => {
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
