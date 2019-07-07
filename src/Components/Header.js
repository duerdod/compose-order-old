import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  grid-gap: 3px;
  margin-top: 1.5rem;
  > h2 {
    padding: 0.8rem 0.5rem;
    text-align: left;
    font-size: 1.5rem;
    box-shadow: 0 0 0 3px #383838;
  }
`;

const DescriptionTitle = styled.h2`

&:before {
  content: 'step ${p => p.step}.';
  display: block;
  font-size: .75rem;
  font-family: sans-serif;
  }
`;

const PriceTitle = styled.h2``;

const QtyTitle = styled.h2``;

const Header = ({ children, step }) => {
  return (
    <HeaderWrapper>
      <DescriptionTitle step={step}>{children}</DescriptionTitle>
      <QtyTitle>Quantity</QtyTitle>
      <PriceTitle>Price</PriceTitle>
    </HeaderWrapper>
  );
};

export default Header;
