import React, {useState} from 'react';
import StackGrid from 'react-stack-grid';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

// import { Container } from './styles';

const Img = styled.img`
  width: 300px;
  height: auto;
  z-index: -1;
`;

const UI = styled.div`
  margin: 20px;
  position: relative;
`;

const Card = styled.div`
  position: relative;
  display: block;
  width: 300px;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100%;
  display: block;
  background-color: black;
  z-index: 1;
  opacity: 0;
  &:hover {
    opacity: 0.4;
  }
`;

const Test = styled.h1`
  color: white;
`;

function Grid({images, size}) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <UI>
      <StackGrid monitorImagesLoaded={true} columnWidth={300}>
        {images.map((image, index) => {
          return (
            <>
              <Card key={index}>
                <Img src={image.link} />
                <Overlay>
                  <Test>ola</Test>
                </Overlay>
              </Card>
            </>
          );
        })}
      </StackGrid>
    </UI>
  );
}

export default withSize()(Grid);
