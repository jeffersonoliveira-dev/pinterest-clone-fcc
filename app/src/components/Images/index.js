import React from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Grid from '../Grid';

const Images = () => {
  const images = useSelector(state => state.user.images);
  const user = useSelector(state => state.user);
  return <Grid images={images} user={user} />;
};

export default withRouter(Images);
