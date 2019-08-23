import React from 'react';
import StackGrid from 'react-stack-grid';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

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

const OverlayContainer = styled.h1`
  color: white;
`;

// fork between edit if user auth or just showing link to profile image wall
// I have to read react router docs to get info about url or history

function Grid(props) {
  const path = props.location.pathname;
  // just some if / else to realocate to profile link/ exclude button
  // need token from image
  // props.history.push('path', {state})
  const content = () => {
    if (path === '/') {
      return <h6>profile link</h6>;
    } else if (path === '/images') {
      return <h6>button to delete</h6>;
    }
  };
  return (
    <UI>
      <StackGrid monitorImagesLoaded={true} columnWidth={300}>
        {props.images.map((image, index) => {
          return (
            <>
              <Card key={index}>
                <Img src={image.link} />
                <Overlay>
                  <OverlayContainer>{content()}</OverlayContainer>
                </Overlay>
              </Card>
            </>
          );
        })}
      </StackGrid>
    </UI>
  );
}

export default withRouter(Grid);
