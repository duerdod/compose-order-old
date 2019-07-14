import React from 'react';
import styled from '@emotion/styled';

const Loading = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  h2 {
    position: absolute;
    left: 50%;
    top: 50;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
`;

const LoadingPage = props => {
  return (
    <Loading>
      <h2>{props.children}</h2>
    </Loading>
  );
};

export default LoadingPage;
