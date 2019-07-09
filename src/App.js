import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Theme from './Components/Theme';
import OrderTable from './Components/OrderTable';
import Modal from './Components/Modal/Modal';
import ModalOpener, { toggleOnEscape } from './Components/Modal/ModalOpener';

const StyleLine = styled.div`
  background: #383838;
  height: 6px;
  margin: 0;
  opacity: 0.8;
`;

const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: right;
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

const App = () => {
  const [isModalOpen, toggleModalOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', e =>
      toggleOnEscape(e, toggleModalOpen)
    );
    return () => {
      document.removeEventListener('keydown', toggleOnEscape);
    };
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <StyleLine />
      <AppWrapper>
        <Header>Compose your custom korv</Header>
        <ModalOpener
          isModalOpen={isModalOpen}
          toggleModalOpen={() => toggleModalOpen(!isModalOpen)}
        />
        <Modal isModalOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
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
};

export default App;
