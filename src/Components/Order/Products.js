import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Order from './Order';
import LoadingPage from '../LoadingPage';

import localProducts from '../../data/data';

const GET_ALL_PRODUCTS = gql`
  query GET_ALL_PRODUCTS {
    products {
      id
      groupId
      name
      price
      currency
      qty
      qtySuffix
    }
  }
`;

const Products = props => {
  return (
    <Query query={GET_ALL_PRODUCTS}>
      {({ data, loading, error }) => {
        if (error) return <LoadingPage>Error...</LoadingPage>;
        if (loading) return <LoadingPage>Loading...</LoadingPage>;
        const { products } = data;
        return <Order products={products}>{props.children}</Order>;
      }}
    </Query>
  );
};

// const Products = props => {};

export default Products;
