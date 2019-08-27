import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.div`
  opacity: 1;
  z-index: 3;
  text-align: center;
  position: absolute;
  bottom: 15%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: blue;
  text-align: center;
  padding: 5px;
  &:hover {
    background-color: skyblue;
    color: black;
  }
`;

export default function ProfileLink({name, token}) {
  return (
    <Container>
      <Button>
        <StyledLink to={`/profile/${token}`}>{name}</StyledLink>
      </Button>
    </Container>
  );
}
