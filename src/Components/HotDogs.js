import React from 'react';
import { getProducts } from './utils/utils';
import { Product } from './Product/Product';

const HotDogs = ({ products }) => {
  return getProducts(products, 1).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default HotDogs;
