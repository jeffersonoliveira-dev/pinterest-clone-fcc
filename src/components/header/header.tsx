import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Keys from "../../Keys";

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
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Header;
