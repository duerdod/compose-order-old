import React from 'react';
import styled from '@emotion/styled';
import { OrderContext2 } from '../context/order-context';

import Grid from './ui/Grid';
import GridHeader from './ui/Gridheader';

import { Hotdogs, Breads, Toppings } from './Products/Steps/AllSteps';

export const AppContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Table = () => {
  const { order } = React.useContext(OrderContext2);
  return (
    <div style={{ background: '#383838' }}>
      <Grid>
        <GridHeader type="KORVS" />
        <Hotdogs products={order} />
        <GridHeader type="BREADS" />
        <Breads products={order} />
        <GridHeader type="TOPPINGS" />
        <Toppings products={order} />
      </Grid>
    </div>
  );
};

export default Table;
