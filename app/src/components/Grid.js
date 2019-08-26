import React from 'react';
import StackGrid from 'react-stack-grid';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import ProfileLink from './ProfileLink';

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
  z-index: 1;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const OverlayContainer = styled.h1`
  color: white;
`;

// fork between edit if user auth or just showing link to profile image wall
// I have to read react router docs to get info about url or history

function Grid(props) {
  const path = props.location.pathname;
  // props.history.push('path', {state})
  const name = props.user.name;
  const token = props.user.images[0].token;

  const content = () => {
    if (path === '/' || path === '/dashboard') {
      return <ProfileLink name={name} token={token} />;
    } else if (path === '/images') {
      return <DeleteButton />;
    }
  };
  return (
    <UI>
      <StackGrid monitorImagesLoaded={true} columnWidth={300}>
        {props.images.map((image, index) => {
          return (
            <Card key={index}>
              <Img src={image.link} />
              <Overlay>
                <OverlayContainer>{content()}</OverlayContainer>
              </Overlay>
            </Card>
          );
        })}
      </StackGrid>
    </UI>
  );
}

export default withRouter(Grid);
