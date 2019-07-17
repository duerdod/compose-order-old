import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingPage from '../LoadingPage';
import ProductPage from './ProductPage';

const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      id
      name
      subname
      description
      price
      images
    }
  }
`;

const Product = props => {
  const { id } = props;
  return (
    <Query query={GET_PRODUCT} variables={{ id }}>
      {({ data, loading, error }) => {
        if (error) return <LoadingPage>Error...</LoadingPage>;
        if (loading) return <LoadingPage>Loading...</LoadingPage>;
        const { product } = data;
        return props.render(product);
      }}
    </Query>
  );
};
export default Product;
