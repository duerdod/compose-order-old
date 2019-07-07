import React from 'react';
import styled from '@emotion/styled';
import { calcOrderValue } from '../utils/utils';

const OrderValueWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid #383838;
  margin-top: 1rem;
`;

const Total = styled.div`
  padding: 12px;
  font-family: sans-serif;
`;

const OrderValue = ({ products }) => (
  <OrderValueWrapper>
    <Total>Total:</Total>
    <Total>{calcOrderValue(products)} kr</Total>
  </OrderValueWrapper>
);

export default OrderValue;
