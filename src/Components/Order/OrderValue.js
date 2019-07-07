import React from 'react';
import styled from '@emotion/styled';
import { calcOrderValue } from '../utils/utils';

const OrderValueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border: 2px solid #383838;
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  font-weight: 900;
  padding: 0 6rem;
`;

const Total = styled.div`
  padding: 12px;
  font-family: sans-serif;
`;

const OrderValue = ({ products }) => (
  <OrderValueWrapper>
    <Total>Total:</Total>
    <Total>{calcOrderValue(products)} SEK</Total>
  </OrderValueWrapper>
);

export default OrderValue;
