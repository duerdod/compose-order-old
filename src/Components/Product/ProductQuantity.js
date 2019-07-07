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
