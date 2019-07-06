import React from 'react';
import styled from '@emotion/styled';
import { HotDogs, Breads } from './Products/index';

const OrderWrapper = styled.div``;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 3px;
  margin-top: 1.5rem;
  > h2 {
    padding: 0.8rem 0.5rem;
    text-align: left;
    font-size: 1.5rem;
    box-shadow: 0 0 0 3px #383838;
  }
`;

const DescriptionTitle = styled.h2`

&:after {
  content: 'step ${p => p.step}.';
  display: block;
  font-size: .75rem;
  font-family: sans-serif;
  }
`;

const PriceTitle = styled.h2``;

const QtyTitle = styled.h2``;

const Order = () => {
  return (
    <OrderWrapper>
      <Header>
        <DescriptionTitle step={1}>Select korvs</DescriptionTitle>
        <QtyTitle>Quantity</QtyTitle>
        <PriceTitle>Price</PriceTitle>
      </Header>
      <HotDogs />
      <Header>
        <DescriptionTitle step={2}>Select breads</DescriptionTitle>
        <QtyTitle>Quantity</QtyTitle>
        <PriceTitle>Price</PriceTitle>
      </Header>
      <Breads />
    </OrderWrapper>
  );
};

export default Order;
