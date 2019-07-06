import React from 'react';
import styled from '@emotion/styled';

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 3px;

  > p {
    font-family: sans-serif;
    padding: 1rem 0.5rem;
    box-shadow: 0 0 0 3px #383838;
  }
`;

const ItemName = styled.p``;

const Price = styled.p``;

const Suffix = styled.p``;

const ProductItem = ({ product }) => {
  return (
    <Item>
      <ItemName>{product.name}</ItemName>
      <Price>
        {product.price} {product.currency}
      </Price>
      <Suffix>{product.qtySuffix}</Suffix>
    </Item>
  );
};

export default ProductItem;
