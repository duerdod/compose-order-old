import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from './Order/Order';
import HotDogs from './HotDogs';
import Breads from './Breads';
import GridHeader from './ProductRows/GridHeader';
import OrderValue from './Order/OrderValue';
import OrderButton from './Order/OrderButton';
import Modal from './Modal/Modal';

const OrderWrapper = styled.main``;

const ProductsTable = () => {
  const [isModalOpen, toggleModalOpen] = useState(false);

  const { products, resetAllQuantities } = useContext(OrderContext);
  return (
    <OrderWrapper>
      <Modal isModalOpen={isModalOpen} toggleModalOpen={toggleModalOpen} />
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
