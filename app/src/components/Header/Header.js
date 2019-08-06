import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase";
import database from "../../firebase";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  github: { flexStart: "end" }
}));

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      console.log(authResult.user.uid);
      let CheckDoc = database.collection("users").doc(authResult.user.uid);
      CheckDoc.get().then(doc => {
        let auth = authResult.user.uid;
        if (doc.exists) {
          // push user to store
        } else {
          let newUser = database.collection("users");
          let userData = {
            // user config
          };
          // push new user to firestore
        }
      });
      return false;
    }
  }
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Fragment className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PC
          </Typography>
          <div className={classes.github}>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
