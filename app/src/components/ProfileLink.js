import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  opacity: 1;
  z-index: 3;
  text-align: center;
`;

export default function ProfileLink() {
  return (
    <Container>
      <Button>
        <Link to="/profile/bozo">profile</Link>
      </Button>
    </Container>
  );
}
