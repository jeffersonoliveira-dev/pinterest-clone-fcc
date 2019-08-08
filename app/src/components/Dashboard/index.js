import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Dashboard = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Dashboard;
