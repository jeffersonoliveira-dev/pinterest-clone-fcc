import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import database from '../../firebase';

// import { Container } from './styles';

export default function Images() {
  const [Images, setImages] = useState();
  const token = useSelector(state => state.token);
  useEffect(() => {
    database
      .collection('users')
      .doc(token)
      .then(data => console.log(data));
  }, [token]);

  return <>this is images</>;
}
