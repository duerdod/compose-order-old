import React from 'react';
import styled from '@emotion/styled';

const PriceContainer = styled.div``;

const Price = ({ price }) => {
  return (
    <PriceContainer>
      <span>{price}</span>
    </PriceContainer>
  );
};

export default Price;
