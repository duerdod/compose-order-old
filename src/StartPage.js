import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import OrderTable from './Components/OrderTable';
import Modal from './Components/Modal/Modal';
import ModalOpener, { toggleOnEscape } from './Components/Modal/ModalOpener';

export const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: right;
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

const StartPage = () => {
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
    <>
      <ModalOpener
        isModalOpen={isModalOpen}
        toggleModalOpen={() => toggleModalOpen(!isModalOpen)}
      />
      <Modal isModalOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
      <OrderTable />
      <GitHubLink>
        <a
          href="https://github.com/duerdod/"
          rel="noopener noreferrer"
          target="_blank"
        >
          DUERDOD
        </a>
      </GitHubLink>
    </>
  );
};

export default StartPage;
