import React, {useState, useEffect} from 'react';
import database from '../../firebase';
import Grid from '../Grid';

export default function Profile({match}) {
  const [Wall, setWall] = useState([]);
  const doc = match.params.id;

  useEffect(() => {
    database
      .collection('users')
      .doc(doc)
      .get()
      .then(user => {
        setWall([
          <Grid
            key={user.data().images.length}
            images={user.data().images}
            user={user.data()}
          />,
        ]);
      });
  }, [doc]);
  return <div>{Wall}</div>;
}
