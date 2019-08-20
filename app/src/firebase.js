import firebase from 'firebase';
import {Config} from './Keys';
import('firebase/firestore');

firebase.initializeApp(Config);
const database = firebase.firestore();

export default database;
