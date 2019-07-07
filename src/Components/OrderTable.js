import React, { createContext } from 'react';
import styled from '@emotion/styled';
import HotDogs from './HotDogs';
import Breads from './Breads';
import Header from './Header';
import OrderValue from './Order/OrderValue';
import OrderButton from './Order/OrderButton';
import products from '../data/data';

const OrderWrapper = styled.div``;

export const OrderContext = createContext();

class OrderTable extends React.Component {
  state = {
    products
  };

  handleQuantityChange = (qty, name, id, action) => {
    const stateProducts = [...this.state.products];
    const newProduct = { id, name, qty };

    // Check if product with same id exist
    const isProductAdded = this.state.products.some(
      item => item.id === newProduct.id
    );

    // Is product already in state
    if (isProductAdded) {
      // Find it
      stateProducts.find(item => {
        if (item.id === newProduct.id) {
          // Cannot decrement to a value less than 0
          if (action === 'decrement' && item.qty === 0) {
            return (item.qty = 0);
          }
          // Increment or decrement values above 0
          // Modify it accordingly.
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

  resetQuantity = product => {
    const { id } = product;
    const stateProducts = [...this.state.products];
    stateProducts.find(product => {
      if (product.id === id) {
        return (product.qty = 0);
      }
      return false;
    });
    this.setState({ products: stateProducts });
  };

  render() {
    const { handleQuantityChange, resetQuantity } = this;
    return (
      <OrderWrapper>
        <OrderContext.Provider value={{ handleQuantityChange, resetQuantity }}>
          <Header step={1}>Korvs</Header>
          <HotDogs products={this.state.products} />
          <Header step={2}>Breads</Header>
          <Breads products={this.state.products} />

          <OrderValue products={this.state.products} />
          <OrderButton products={this.state.products} />
        </OrderContext.Provider>
      </OrderWrapper>
    );
  }
}

export default OrderTable;