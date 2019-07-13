import React from 'react';
import styled from '@emotion/styled';
import Grid from '../Grid';

const DescriptionTitle = styled.h2`
  position: relative;
`;

const Step = styled.p`
  display: inline-block;
  position: absolute;
  bottom: -5px;
  font-size: 0.65rem;
  font-family: sans-serif;
  text-transform: uppercase;
`;

const PriceTitle = styled.h2``;

const QtyTitle = styled.h2``;

const GridHeader = ({ children, step }) => {
  const isMobile = window && window.innerWidth > 600;
  return (
    <Grid columns={3} isMobile={isMobile}>
      <DescriptionTitle>
        {children}
        {isMobile ? null : <Step>step {step}.</Step>}
      </DescriptionTitle>
      <QtyTitle>Quantity</QtyTitle>
      <PriceTitle>Price</PriceTitle>
    </Grid>
  );
};

export default GridHeader;
