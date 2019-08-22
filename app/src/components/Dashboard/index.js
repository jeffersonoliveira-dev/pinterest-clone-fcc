import React from 'react';
import {useSelector} from 'react-redux';
import Grid from '../Grid';
import styled from 'styled-components';

export default function Dashboard() {
  const data = useSelector(state => state.data);

  console.log(data);

  const cards = data.map(user => {
    let imgs = [];
    user.images.map(item => imgs.push(item));
    return <Grid images={imgs} />;
  });

  return <>{cards}</>;
}
