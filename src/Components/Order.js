import React, { useState, createContext } from 'react';
import styled from '@emotion/styled';
import HotDogs from './HotDogs';
import Breads from './Breads';
// import Products from '../data/data';

const products = [
  {
    id: 1,
    productGroup: 1,
    name: 'regular korv',
    price: 5,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 2,
    productGroup: 1,
    name: 'bombastic korv',
    price: 20,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 3,
    productGroup: 1,
    name: 'gigantic korv',
    price: 25,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 4,
    productGroup: 1,
    name: 'normal korv',
    price: 5,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 5,
    productGroup: 2,
    name: 'heavy bread',
    price: 15,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 6,
    productGroup: 2,
    name: 'light bread',
    price: 5,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  },
  {
    id: 7,
    productGroup: 2,
    name: 'mega heavy bread',
    price: 25,
    currency: 'kr',
    quantitySuffix: 'st',
    qty: 0
  }
];

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

&:before {
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
    items: products
  };

  handleQuantityChange = (qty, name, id, action) => {
    let stateProducts = [...this.state.items];
    let newProduct = { id, name, qty };
    const isProductAdded = this.state.items.some(
      item => item.id === newProduct.id
    );

    // Is product already in state
    if (isProductAdded) {
      // Find it
      stateProducts.find(item => {
        if (item.id === newProduct.id) {
          // Cannot decrement to a value less than 0.
          if (action === 'decrement' && item.qty === 0) {
            return (item.qty = 0);
          }
          // Increment or decrement values above 0
          // Modify it.
          return action === 'increment'
            ? (item.qty = item.qty + 1)
            : (item.qty = item.qty - 1);
        }
      });
      // Set edited product to state.
      this.setState({ items: stateProducts });
      return;
    }
    // Else add the product
    this.setState({ items: [...stateProducts, newProduct] });
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
          <HotDogs products={this.state.items} />
          <Header>
            <DescriptionTitle step={2}>Breads</DescriptionTitle>
            <QtyTitle>Quantity</QtyTitle>
            <PriceTitle>Price</PriceTitle>
          </Header>
          <Breads products={this.state.items} />
        </OrderContext.Provider>
      </OrderWrapper>
    );
  }
}

export default Order;
