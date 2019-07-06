import React from 'react';
import styled from '@emotion/styled';
import { HotDogs, Breads } from './Products/index';

const OrderWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);

  > * {
    text-align: left;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 2rem;
`;

const PriceTitle = styled.h2`
  font-size: 2rem;
`;

const QtyTitle = styled.h2`
  font-size: 2rem;
`;

const Order = () => {
  return (
    <OrderWrapper>
      <Header>
        <DescriptionTitle>Select korvs</DescriptionTitle>
        <QtyTitle>Quantity</QtyTitle>
        <PriceTitle>Price</PriceTitle>
      </Header>
      <HotDogs />
      <Header>
        <DescriptionTitle>Select breads</DescriptionTitle>
        <QtyTitle>Quantity</QtyTitle>
        <PriceTitle>Price</PriceTitle>
      </Header>
      <Breads />
    </OrderWrapper>
  );
};

export default Order;
