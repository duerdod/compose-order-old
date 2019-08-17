import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Table from '../Table';

const Products = props => {
  return (
    <Query query={GET_ALL_PRODUCTS}>
      {({ data, loading, error }) => {
        if (error) return 'ERROR';
        if (loading) return 'LOADING';
        const { products } = data;
        return <Table products={products} />;
      }}
    </Query>
  );
};

export default Products;
