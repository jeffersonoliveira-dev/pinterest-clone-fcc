import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import database from "../../firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50 %;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 90px;
  color: black;
  background: white;
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;

const Button = styled.input`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;

const Input = styled.input`
  font-size: 1.45em;
  border: 1px solid #ddd;
`;

const Img = styled.img`
  height: 200px;
  width: 150px;
  margin: 0 auto;
`;

const Image = () => {
  const [image, setImage] = useState();
  return (
    <Container>
      <Form>
        <Title> show your image </Title>
        <Img
          src={image}
          alt=""
          onError={e => {
            e.target.src = "http://e.lvme.me/bb5srs1.jpg";
          }}
        />
        <Input
          type="text"
          name="link"
          placeholder="image url"
          onChange={e => setImage(e.target.value)}
        />
        <Input type="text" name="description" placeholder="description" />
        <Button type="submit" value="save" />
      </Form>
    </Container>
  );
};

export default Image;
