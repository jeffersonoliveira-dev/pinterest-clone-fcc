import React, {useEffect} from 'react';
import styled from 'styled-components';
import database from '../../firebase';

const Container = styled.div`
  display: flex;
`;

const Dashboard = () => {
  useEffect(() => {
    // firebase code here
    database
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          console.log(doc.data());
          // display image
        });
      });
  }, []);
  return <Container>hello</Container>;
};

export default Dashboard;
