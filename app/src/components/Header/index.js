import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import database from '../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {flexGrow: 1},
  menuButton: {marginRight: theme.spacing(2)},
  title: {flexGrow: 1},
  github: {flexStart: 'end'},
}));

const Header = withRouter(({history}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth) {
      history.push('/');
    }
  });

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    signInSuccessUrl: '/dashboard',
    callbacks: {
      signInSuccessWithAuthResult: authResult => {
        let user = database.collection('users').doc(authResult.user.uid);
        user.get().then(doc => {
          if (doc.exists) {
            dispatch({
              type: 'ADD_USER',
              name: doc.data().name,
              images: doc.data().images,
              token: authResult.user.uid,
            });
          } else {
            let userData = {
              name: authResult.user.displayName,
              images: [],
            };
            user
              .doc(authResult.user.uid)
              .set(userData)
              .then(() => {
                dispatch({
                  type: 'ADD_USER',
                  name: doc.data().name,
                  images: doc.data().images,
                  token: authResult.user.uid,
                });
              });
          }
          return history.push('/dashboard');
        });
        return false;
      },
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PC
          </Typography>
          {auth ? (
            <>
              <button onClick={() => history.push('/image')}>add pic</button>
              <button onClick={() => history.push('/images')}>add pic</button>
            </>
          ) : (
            <div className={classes.github}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default Header;
