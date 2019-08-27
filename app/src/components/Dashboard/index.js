import React, {useEffect, useState} from 'react';
import Grid from '../Grid';
import {fetchData} from '../../firebase';

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
        <h6>loading</h6>
      )}
    </>
  );
}
