import React from 'react';
import styled from '@emotion/styled';
import OrderQuantity from '../Order/OrderQuantity';

const ProductQuantityWrapper = styled.div`
  position: relative;
`;

const ProductQuantity = ({ product }) => {
  return (
    <ProductQuantityWrapper>
      <OrderQuantity product={product} /> {product.quantitySuffix}
    </ProductQuantityWrapper>
  );
};
export default ProductQuantity;
