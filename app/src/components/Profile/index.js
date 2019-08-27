import React, {useState, useEffect} from 'react';
import database, {fetchUser} from '../../firebase';
import Grid from '../Grid';

export default function Profile({match}) {
  const [Wall, setWall] = useState([]);
  const doc = match.params.id;

  useEffect(() => {
    fetchUser(doc).then(user => {
      setWall([
        <Grid key={user.images.length} images={user.images} user={user} />,
      ]);
    });
  }, [doc]);
  return <div>{Wall}</div>;
}
