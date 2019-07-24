import React from "react";
import firebase from "firebase";

const Dashboard: React.FC = () => {
  console.log(firebase.auth().currentUser);
  return <p> this is the dashboard</p>;
};

export default Dashboard;
