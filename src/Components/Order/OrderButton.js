import React from 'react';
import styled from '@emotion/styled';
import { getOrderProducts } from '../utils/utils';

const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0.5rem 0;
  padding: 12px 0;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
  border: 2px solid #383838;
  transition: all 0.2s ease;
  width: 100%;
  font-family: sans-serif;

  &:hover {
    background: #383838;
    color: #fffbf5;
  }
`;

function ordering(fn) {
  alert(fn[0].name);
}

const OrderButton = ({ products }) => {
  return (
    <Button onClick={() => ordering(getOrderProducts(products))}>
      Place yo order!
    </Button>
  );
};

export default OrderButton;
