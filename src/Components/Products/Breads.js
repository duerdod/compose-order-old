import React from 'react';
import styled from '@emotion/styled';
import { getProducts } from './utils/utils';
import { Products } from '../../data/data';

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);

  > * {
    border: 2px solid #383838;
  }
`;

const ItemName = styled.p``;

const Price = styled.p``;

const Suffix = styled.p``;

const Breads = () => {
  return getProducts(Products, 2).map(product => (
    <Item key={product.id}>
      <ItemName>{product.name}</ItemName>
      <Price>
        {product.price} {product.currency}
      </Price>
      <Suffix>{product.qtySuffix}</Suffix>
    </Item>
  ));
};

export default Breads;
