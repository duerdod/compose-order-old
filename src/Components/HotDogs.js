import React from 'react';
import { getProducts } from './Product/utils/utils';
import { Products } from '../data/data';
import { Product } from './Product/Product';

const HotDogs = () => {
  return getProducts(Products, 1).map(product => (
    <Product key={product.id} product={product} />
  ));
};

export default HotDogs;
