import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FiChevronRight } from 'react-icons/fi';

const ProductName = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreInfo = styled(FiChevronRight)`
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: 'i';
    display: inline-block;
  }
`;

const Name = ({ product }) => {
  return (
    <ProductName>
      {product.name}
      <Link
        to={{
          pathname: `/product/${product.id}`
        }}
      >
        <MoreInfo aria-label="Show product info" />
      </Link>
    </ProductName>
  );
};

export default Name;
