import React from 'react';
import { getProductsByGroupId } from './utils/utils';
import { Product } from './Product/Product';

const HotDogs = ({ products }) => {
  return getProductsByGroupId(products, 1).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default HotDogs;
