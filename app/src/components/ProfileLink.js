import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  opacity: 1;
  z-index: 3;
  text-align: center;
  position: absolute;
  bottom: 10px;
`;

export default function ProfileLink({name, token}) {
  return (
    <Container>
      <Button>
        <Link to={`/profile/${token}`}>{name}</Link>
      </Button>
    </Container>
  );
}
