import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 2rem;

  @media screen and (max-width: 40em) {
  }
`;

const Title = styled.h1``;

const Form = styled.form`
  fieldset {
    border: 0;
  }
  label {
    display: block;
    .labeltext {
      display: block;
    }
  }
`;

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Container>
      <Title>Add product</Title>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <fieldset disabled={false}>
          <label htmlFor="productName">
            <span className="labeltext">Product name</span>
            <input type="text" name="productName" onChange={handleChange} />
          </label>

          <label htmlFor="productBrand">
            <span className="labeltext">Brand</span>
            <input type="text" name="productBrand" onChange={handleChange} />
          </label>

          <label htmlFor="productType">
            <span className="labeltext">Product type</span>
            <select name="productType" id="productType" onChange={handleChange}>
              <option value="1">Bread</option>
              <option value="2">HotDog</option>
            </select>
          </label>

          <label htmlFor="description">
            <span className="labeltext">Description</span>
            <textarea type="text" name="description" onChange={handleChange} />
          </label>

          <label htmlFor="price">
            <span className="labeltext">Price</span>
            <input type="number" name="price" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">add</button>
      </Form>
    </Container>
  );
};

export default AddProduct;
