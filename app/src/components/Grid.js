import React from 'react';
import StackGrid from 'react-stack-grid';
import styled from 'styled-components';

// import { Container } from './styles';

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default function Grid({images}) {
  return (
    <StackGrid columnWidth={150}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <Img src={image.link} />
          </div>
        );
      })}
    </StackGrid>
  );
}
