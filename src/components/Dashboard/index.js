import React, {useEffect, useState} from 'react';
import Grid from '../Grid';
import {fetchData} from '../../firebase';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 50%;
  margin: 0 auto
  padding: 20px
`;

export default function Dashboard() {
  const [Doc, setDoc] = useState(false);

  useEffect(() => {
    fetchData().then(doc => setDoc(doc));
  }, []);

  return (
    <>
      {Doc ? (
        Doc.map((user, index) => {
          console.log(user.data.name);
          return (
            <Grid
              key={index}
              name={user.data.name}
              token={user.id}
              images={user.data.images}
            />
          );
        })
      ) : (
        <LoadingContainer>
          <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
        </LoadingContainer>
      )}
    </>
  );
}
