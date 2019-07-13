import React, { useContext } from 'react';
import styled from '@emotion/styled';
import OrderQuantity from '../Order/OrderQuantity';
import { OrderContext } from '../OrderTable';
import { Button } from '../ui';

const ProductQuantityWrapper = styled.div`
  position: relative;
`;

const ResetButton = styled(Button)`
  position: absolute;
  right: 8px;
  font-size: 0.8rem;
  width: 22px;
  height: 22px;
  border: 1px solid transparent;
  border-radius: 50%;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: 50%;
  }
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
