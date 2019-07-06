import React from 'react';
import styled from '@emotion/styled';
import OrderQuantity from '../Order/OrderQuantity';

const ProductQuantityWrapper = styled.div``;

const ProductQuantity = ({ product }) => {
  return (
    <ProductQuantityWrapper>
      <OrderQuantity name={product.name} /> {product.quantitySuffix}
    </ProductQuantityWrapper>
  );
};
export default ProductQuantity;
