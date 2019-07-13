import React from 'react';
import styled from '@emotion/styled';

const Price = styled.div``;

const ProductPrice = ({ product }) => {
  return (
    <Price>
      {product.price} {product.currency}
    </Price>
  );
};

export default ProductPrice;
