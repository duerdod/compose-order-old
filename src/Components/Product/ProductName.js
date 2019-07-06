import React from 'react';
import styled from '@emotion/styled';

const ProductName = styled.div``;

const Name = ({ product }) => {
  return <ProductName>{product.name}</ProductName>;
};

export default Name;
