import React from 'react';
import styled from '@emotion/styled';
import { calcOrderValue } from '../utils/utils';

const OrderValueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border: 2px solid #383838;
  margin-top: -2px;
  padding: 1rem 6rem;
  text-transform: uppercase;
  text-align: initial;
  span {
    font-weight: 900;
    font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  }
  @media screen and (max-width: 40em) {
    padding: 0 2rem;
  }
`;

const Total = styled.div`
  padding: 12px;
  font-family: sans-serif;
`;

const OrderValue = ({ products }) => (
  <OrderValueWrapper>
    <Total>
      <span> Total:</span>
    </Total>
    <Total>
      <span> {calcOrderValue(products)} SEK</span>
    </Total>
  </OrderValueWrapper>
);

export default OrderValue;
