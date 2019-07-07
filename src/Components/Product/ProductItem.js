import React from 'react';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantitySuffix from './ProductQuantity';
import Grid from '../Grid';

const ProductItem = ({ product }) => {
  return (
    <Grid columns={3}>
      <ProductName product={product} />
      <ProductQuantitySuffix product={product} />
      <ProductPrice product={product} />
    </Grid>
  );
};

export default ProductItem;
