import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import firebase from 'firebase';
import database, {fetchData, fetchUserImages} from '../../firebase';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50 %;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
`;

const Button = styled.input`
  font-size: 1.5em;
  background-color: black;
  position: relative;
  top: 5px
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
`;

const Input = styled.input`
  font-size: 1.45em;
  margin: 5px;
`;

const Img = styled.img`
  max-height: 200px;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
`;

const Image = () => {
  const [image, setImage] = useState();
  const [Enable, setEnable] = useState(true);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    let newImage = {
      token,
      link: e.target.preview.src,
      description: e.target.description.value,
    };
    database
      .collection('users')
      .doc(token)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion(newImage),
      })
      .then(() => {
        notify();
        let newData = fetchData();
        dispatch({
          type: 'ADD_DATA',
          data: newData,
        });
        fetchUserImages(token).then(doc => {
          dispatch({
            type: 'UPDATE_IMAGES',
            data: doc,
          });
        });
      });

    e.target.preview.src = null;
    e.target.description.value = '';
    e.target.link.value = '';
    setEnable(false);
    return e;
  };

  const notify = () => toast('image uploaded!', {type: toast.TYPE.INFO});

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="link"
          placeholder="image url"
          onChange={e => {
            if (e.target.value !== '') {
              setEnable(true);
              setImage(e.target.value);
            }
          }}
        />
        <Input type="text" name="description" placeholder="description" />
        <Button type="submit" value="upload" />
        <Img
          src={image}
          name="preview"
          alt=""
          onError={e => {
            if (Enable) {
              e.target.src = 'http://e.lvme.me/bb5srs1.jpg';
            }
          }}
        />
      </Form>
    </Container>
  );
};

export default Image;
