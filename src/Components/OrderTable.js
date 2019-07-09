import React, { createContext } from 'react';
import styled from '@emotion/styled';
import HotDogs from './HotDogs';
import Breads from './Breads';
import Header from './Header';
import OrderValue from './Order/OrderValue';
import OrderButton from './Order/OrderButton';
import localProducts from '../data/data';

const OrderWrapper = styled.div``;

export const OrderContext = createContext();

class OrderTable extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      const getAllProducts = () => {
        fetch(process.env.REACT_APP_BASE_URL)
          .then(res => res.json())
          .then(data => {
            const products = data.products.map(p => ({
              id: p._id,
              groupId: p.groupId,
              name: p.name,
              price: p.price,
              currency: p.currency,
              qty: p.qty,
              qtySuffix: p.qtySuffix
            }));
            this.setState({ products });
          });
      };
      getAllProducts();
    } else {
      this.setState({ products: localProducts });
    }
  }

  handleQuantityChange = (clickedProduct, action) => {
    const productsInState = [...this.state.products];
    // Get id from clicked product
    const { id } = clickedProduct;
    // Check if product with same id exist
    const isProductAdded = this.state.products.some(item => item.id === id);

    // Is product already in state
    if (isProductAdded) {
      // Find it
      productsInState.find(item => {
        if (item.id === id) {
          // Cannot decrement to a value less than 0
          if (action === 'decrement' && item.qty === 0) {
            return false;
          }
          // Increment or decrement values above 0
          // Modify it accordingly.
          return action === 'increment'
            ? (item.qty = item.qty + 1)
            : (item.qty = item.qty - 1);
        }
        return false;
      });
      // Put products back to state
      this.setState({ products: productsInState });
      return;
    }
  };

  handleNativeChange = (product, qty) => {
    if (!qty) return;
    const productsInState = [...this.state.products];
    const { id } = product;
    productsInState.find(product => {
      if (product.id === id) {
        product.qty = parseInt(qty);
      }
      return false;
    });
    this.setState({ products: productsInState });
  };

  resetAllQuantities = () => {
    let productsInState = [...this.state.products];
    productsInState.map(p => (p.qty = 0));
    this.setState({ products: productsInState });
  };

  resetQuantity = product => {
    const { id } = product;
    const productsInState = [...this.state.products];
    productsInState.find(product => {
      if (product.id === id) {
        return (product.qty = 0);
      }
      return false;
    });
    this.setState({ products: productsInState });
  };

  render() {
    const { handleQuantityChange, resetQuantity, handleNativeChange } = this;
    return (
      <OrderWrapper>
        <OrderContext.Provider
          value={{ handleQuantityChange, resetQuantity, handleNativeChange }}
        >
          <Header step={1}>Korvs</Header>
          <HotDogs products={this.state.products} />
          <Header step={2}>Breads</Header>
          <Breads products={this.state.products} />
          <OrderValue products={this.state.products} />
          <OrderButton
            resetAllQuantities={this.resetAllQuantities}
            products={this.state.products}
          />
        </OrderContext.Provider>
      </OrderWrapper>
    );
  }
}

export default OrderTable;
