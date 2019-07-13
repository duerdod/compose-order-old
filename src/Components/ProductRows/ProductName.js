import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FiChevronRight } from 'react-icons/fi';

const MoreInfo = styled(FiChevronRight)`
  transition: all 0.2s ease;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 1px solid transparent;
`;

const ProductName = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;
  > a {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: ${({ theme }) => theme.sansSerif};
    transition: all 0.2s ease;
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.black};
    a {
      color: ${({ theme }) => theme.white};
      font-weight: 600;
    }
    svg {
      transform: scale(1.3);
    }
    polyline {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Name = ({ product }) => {
  return (
    <ProductName>
      <Link
        to={{
          pathname: `/product/${product.id}`
        }}
      >
        {product.name}
        <MoreInfo aria-label="Show product info" />
      </Link>
    </ProductName>
  );
};

export default Name;
