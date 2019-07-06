import React from 'react';
import styled from '@emotion/styled';

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
