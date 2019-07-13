import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from './Order/Order';
import HotDogs from './HotDogs';
import Breads from './Breads';
import GridHeader from './ProductRows/GridHeader';
import OrderValue from './Order/OrderValue';
import OrderButton from './Order/OrderButton';
import localProducts from '../data/data';

const OrderWrapper = styled.div``;

const ProductsTable = () => {
  const { products, resetAllQuantities } = useContext(OrderContext);
  return (
    <OrderWrapper>
      <GridHeader step={1}>Korvs</GridHeader>
      <HotDogs products={products} />
      <GridHeader step={2}>Breads</GridHeader>
      <Breads products={products} />
      <OrderValue products={products} />
      <OrderButton
        resetAllQuantities={resetAllQuantities}
        products={products}
      />
    </OrderWrapper>
  );
};

export default ProductsTable;
