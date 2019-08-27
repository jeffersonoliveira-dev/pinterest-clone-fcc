import firebase from 'firebase';
import {Config} from './Keys';
import('firebase/firestore');

firebase.initializeApp(Config);
const database = firebase.firestore();
const users = database.collection('users');

export const fetchData = async () => {
  return await users.get().then(snapshot => {
    let data = [];
    snapshot.docs.forEach(doc => {
      data.push({data: doc.data(), id: doc.id});
    });
    return data;
  });
};

export const fetchUser = async token => {
  return await users
    .doc(token)
    .get()
    .then(doc => doc.data());
};

export const fetchUserImages = async token => {
  return await users
    .doc(token)
    .get()
    .then(doc => doc.data().images);
};
export default database;
