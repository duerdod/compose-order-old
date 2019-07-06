import React from 'react';
import styled from '@emotion/styled';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantitySuffix from './ProductQuantity';

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-gap: 3px;

  > * {
    font-family: sans-serif;
    padding: 1rem 0.5rem;
    box-shadow: 0 0 0 3px #383838;
    display: flex;
    align-items: center;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <Item>
      <ProductName product={product} />
      <ProductQuantitySuffix product={product} />
      <ProductPrice product={product} />
    </Item>
  );
};

export default ProductItem;
