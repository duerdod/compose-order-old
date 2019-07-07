import React from 'react';
import { getProducts } from './utils/utils';
import { Product } from './Product/Product';

const Breads = ({ products }) => {
  return getProducts(products, 2).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default Breads;
