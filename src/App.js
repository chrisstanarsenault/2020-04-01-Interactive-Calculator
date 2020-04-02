import React from "react";
import styled from "styled-components";

import BillContainer from "./BillContainer";

function App() {
  return (
    <MainContainer>
      <Title>Tax Calculator</Title>
      <BillContainer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
`;
