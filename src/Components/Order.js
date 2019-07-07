import React, { createContext } from 'react';
import styled from '@emotion/styled';
import HotDogs from './HotDogs';
import Breads from './Breads';
import Header from './Header';
import OrderValue from './Order/OrderValue';

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

export const OrderContext = createContext();

class Order extends React.Component {
  state = {
    products
  };

  handleQuantityChange = (qty, name, id, action) => {
    const stateProducts = [...this.state.products];
    const newProduct = { id, name, qty };
    const isProductAdded = this.state.products.some(
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
        return false;
      });
      // Set edited product to state.
      this.setState({ products: stateProducts });
      return;
    }
  };

  render() {
    const { state } = this;
    const { handleQuantityChange } = this;
    return (
      <OrderWrapper>
        <OrderContext.Provider value={{ state, handleQuantityChange }}>
          <Header step={1}>Korvs</Header>
          <HotDogs products={this.state.products} />
          <Header step={2}>Breads</Header>
          <Breads products={this.state.products} />

          <OrderValue products={this.state.products} />
        </OrderContext.Provider>
      </OrderWrapper>
    );
  }
}

export default Order;
