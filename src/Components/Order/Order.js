import React, { createContext } from 'react';

import localProducts from '../../data/data';

export const OrderContext = createContext();

// This handles state across the app. Keep it light.
class Order extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    // Because the API ain't published.
    if (process.env.NODE_ENV === 'development') {
      const getAllProducts = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products`)
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
          })
          .catch(e => console.log(e));
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
    // Native as in handle change on input.
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
      if (product.id === id) return (product.qty = 0);
      return false;
    });
    this.setState({ products: productsInState });
  };
  render() {
    const {
      handleQuantityChange,
      resetQuantity,
      handleNativeChange,
      resetAllQuantities
    } = this;
    const { products } = this.state;
    return (
      <OrderContext.Provider
        value={{
          products,
          handleQuantityChange,
          resetQuantity,
          handleNativeChange,
          resetAllQuantities
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export default Order;
