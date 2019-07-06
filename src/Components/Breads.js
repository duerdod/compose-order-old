import React from 'react';
import { getProducts } from './Product/utils/utils';
import { Products } from '../data/data';
import { Product } from './Product/Product';

const Breads = () => {
  return getProducts(Products, 2).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default Breads;
