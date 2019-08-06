import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase";
import database from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ImageButton from "../ImageButton/ImageButton";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  github: { flexStart: "end" }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    signInSuccessUrl: "/dashboard",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        let CheckDoc = database.collection("users").doc(authResult.user.uid);
        CheckDoc.get().then(doc => {
          if (doc.exists) {
            dispatch({
              type: "ADD_USER",
              name: doc.data().name,
              images: doc.data().images,
              token: authResult.user.uid
            });
            // router stuff
            this.props.history.push("/dashboard");
          } else {
            let newUser = database.collection("users");
            let userData = {
              name: authResult.user.displayName,
              images: []
            };
            newUser
              .doc(authResult.user.uid)
              .set(userData)
              .then(() => {
                dispatch({
                  type: "ADD_USER",
                  name: doc.data().name,
                  images: doc.data().images,
                  token: authResult.user.uid
                });
                // route stuff
                this.props.history.push("/dashboard");
              });
          }
        });
        return false;
      }
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PC
          </Typography>
          {auth ? (
            <ImageButton />
          ) : (
            <div className={classes.github}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />{" "}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
