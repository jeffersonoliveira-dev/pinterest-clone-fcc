import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import database from '../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

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
  }, [auth, history]);

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
            <StyledLink to={auth ? '/dashboard' : '/'}>PC</StyledLink>
          </Typography>
          {auth ? (
            <>
              <div>
                <Button color="inherit">
                  <Button color="inherit">
                    <StyledLink to="/image">add</StyledLink>
                  </Button>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Button color="inherit">
                    <StyledLink to="/images">images</StyledLink>
                  </Button>
                </Button>
              </div>
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

export default withRouter(Header);
