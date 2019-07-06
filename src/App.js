import React from 'react';
import styled from '@emotion/styled';
import Order from './Components/Order';

const AppWrapper = styled.section`
  max-width: 1000px;
  margin: 25px auto;
`;

const Header = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

function App() {
  return (
    <AppWrapper>
      <Header>Compose your custom korv</Header>
      <Order />
    </AppWrapper>
  );
}

export default App;
