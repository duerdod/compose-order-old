import React from 'react';
import styled from '@emotion/styled';
import { getProducts } from './utils/utils';
import { Products } from '../../data/data';
import { ProductItem } from './index';

const Breads = () => {
  return getProducts(Products, 2).map(product => (
    <ProductItem key={product.id} product={product} />
  ));
};

export default Breads;
