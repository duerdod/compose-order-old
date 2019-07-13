import React from 'react';

const ProductPage = props => {
  const { id } = props.match.params;
  console.log(id);
  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  );
};

export default ProductPage;
