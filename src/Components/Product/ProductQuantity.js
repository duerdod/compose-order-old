import React, { useContext } from 'react';
import styled from '@emotion/styled';
import OrderQuantity from '../Order/OrderQuantity';
import { OrderContext } from '../OrderTable';

const ProductQuantityWrapper = styled.div`
  position: relative;
`;

const ResetButton = styled.button`
  outline: 0;
  border: 0;
  margin: 0 1px;
  padding: 3px 5px;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 5px;
`;

const ProductQuantity = ({ product }) => {
  const { resetQuantity } = useContext(OrderContext);
  return (
    <ProductQuantityWrapper>
      <OrderQuantity product={product} /> {product.quantitySuffix}
      <ResetButton onClick={() => resetQuantity(product)}>&times;</ResetButton>
    </ProductQuantityWrapper>
  );
};
export default ProductQuantity;
