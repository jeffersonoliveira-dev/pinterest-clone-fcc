import React from 'react';
import {useSelector} from 'react-redux';
import Grid from '../Grid';
import styled from 'styled-components';

export default function Dashboard() {
  const data = useSelector(state => state.data);
  const cards = data.map((user, index) => {
    console.log(user);
    let imgs = [];
    user.images.map(item => imgs.push(item));
    return <Grid key={index} images={imgs} user={user} />;
  });

  return <>{cards}</>;
}
