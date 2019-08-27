import React from 'react';
import styled from 'styled-components';
import database, {fetchData} from '../firebase';
import firebase from 'firebase';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-toastify';

const Container = styled.div`
  position: absolute;
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
`;

const Button = styled.div`
  color: white;
  background-color: blue;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: skyblue;
    color: black;
    cursor: pointer;
  }
`;

export default function DeleteButton({image}) {
  const token = useSelector(state => state.token);
  const notify = () => toast('image removed!', {type: toast.TYPE.INFO});
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(image);
    database
      .collection('users')
      .doc(token)
      .update({
        images: firebase.firestore.FieldValue.arrayRemove(image),
      })
      .then(() => {
        notify();
        database
          .collection('users')
          .doc(token)
          .get()
          .then(doc => {
            // action to update images on store
            dispatch({
              type: 'UPDATE_IMAGES',
              data: doc.data().images,
            });
            let newData = fetchData();
            dispatch({
              type: 'ADD_DATA',
              data: newData,
            });
          });
      });
  };

  return (
    <Container>
      <Button onClick={handleDelete}>remove</Button>
    </Container>
  );
}
