import React from 'react';
import styled from '@emotion/styled';
import { getOrderProducts, calcOrderValue } from '../utils/utils';

const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0.5rem 0 3rem 0;
  padding: 12px 0;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
  border: 2px solid #383838;
  transition: all 0.2s ease;
  width: 100%;
  font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
  font-weight: 900;

  &:hover {
    background: #383838;
    color: #fffbf5;
  }
`;

function ordering(order) {
  let orderText = `You're ordering: \n\n`;
  if (!order.length) return;
  const totalPrice = calcOrderValue(order);
  order.forEach(
    product =>
      (orderText += `${product.qty} x ${product.name} á ${
        product.price
      } SEK \n`)
  );
  orderText += `\nat a total price of: ${totalPrice} SEK`;
  alert(orderText);
}

const OrderButton = ({ products }) => {
  return (
    <Button onClick={() => ordering(getOrderProducts(products))}>
      PLACE YO ORDER!
    </Button>
  );
};

export default OrderButton;
