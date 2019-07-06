import React from 'react';
import styled from '@emotion/styled';
import Order from './Components/Order';

const AppWrapper = styled.section`
  > * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Order />
    </AppWrapper>
  );
}

export default App;
