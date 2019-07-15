import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingPage from '../LoadingPage';
import ProductPage from './ProductPage';

const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID) {
    product(where: { id: $id }) {
      id
      name
      subname
      description
      price
    }
  }
`;

const Product = props => (
  <Query query={GET_PRODUCT} variables={{ id: props.match.params }}>
    {({ data, loading, error }) => {
      if (error) return <LoadingPage>Error...</LoadingPage>;
      if (loading) return <LoadingPage>Error...</LoadingPage>;
      return <ProductPage product={data.product}>{props.chilren}</ProductPage>;
    }}
  </Query>
);

export default Product;
