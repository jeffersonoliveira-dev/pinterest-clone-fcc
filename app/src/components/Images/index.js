import React from 'react';
import {useSelector} from 'react-redux';
import Grid from '../Grid';

export default function Images() {
  const cards = useSelector(state => state.user.images);
  return (
    <>
      <Grid images={cards} />
    </>
  );
}
