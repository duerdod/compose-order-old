import React from 'react';
import { getProductsByGroupId } from './utils/utils';
import { Product } from './ProductRows/Product';

const Breads = ({ products }) => {
  return getProductsByGroupId(products, 2).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default Breads;
