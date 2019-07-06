import React, { useState, createContext } from 'react';
import styled from '@emotion/styled';
import HotDogs from './HotDogs';
import Breads from './Breads';

const OrderWrapper = styled.div``;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
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

export const OrderContext = createContext();

class Order extends React.Component {
  state = {
    items: [
      {
        name: '',
        qty: 0
      }
    ]
  };

  handleQuantityChange = (name, qty) => {
    const stateItem = [...this.state.items];
    const newItem = { [name]: qty };
    this.setState({ items: [...stateItem, newItem] });
  };

  render() {
    const { state } = this;
    const { handleQuantityChange } = this;
    return (
      <OrderWrapper>
        <OrderContext.Provider value={{ state, handleQuantityChange }}>
          <Header>
            <DescriptionTitle step={1}>Korvs</DescriptionTitle>
            <QtyTitle>Quantity</QtyTitle>
            <PriceTitle>Price</PriceTitle>
          </Header>
          <HotDogs />
          <Header>
            <DescriptionTitle step={2}>Breads</DescriptionTitle>
            <QtyTitle>Quantity</QtyTitle>
            <PriceTitle>Price</PriceTitle>
          </Header>
          <Breads />
        </OrderContext.Provider>
      </OrderWrapper>
    );
  }
}

export default Order;
