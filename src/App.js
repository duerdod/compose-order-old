import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Theme from './Components/Theme';
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
    <ThemeProvider theme={Theme}>
      <AppWrapper>
        <Header>Compose your custom korv</Header>
        <Order />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
