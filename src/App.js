import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Theme from './Components/Theme';
import OrderTable from './Components/OrderTable';

const AppWrapper = styled.section`
  max-width: 800px;
  margin: 25px auto;
`;

const Header = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 5px;
  line-height: 1;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.serif}, serif;
`;

const GitHubLink = styled.h5`
  text-align: center;
  font-size: 0.65rem;
  color: #383838;
  a {
    text-decoration: underline;
    font-family: ${({ theme }) => theme.sansSerif};
  }
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppWrapper>
        <Header>Compose your custom korv</Header>
        <OrderTable />
      </AppWrapper>
      <GitHubLink>
        <a
          href="https://github.com/duerdod/"
          rel="noopener noreferrer"
          target="_blank"
        >
          DUERDOD
        </a>
      </GitHubLink>
    </ThemeProvider>
  );
}

export default App;
