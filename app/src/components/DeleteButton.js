import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  top: 100%;
`;

export default function DeleteButton(props) {
  return (
    <Container>
      <Button>remove</Button>
    </Container>
  );
}
