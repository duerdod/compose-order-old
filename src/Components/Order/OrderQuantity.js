import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from '../Order';

const InputWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

const QuantityButton = styled.button`
  outline: 0;
  border: 0;
  margin: 0;
  padding: 3px 5px;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
  border: 2px solid #383838;
`;

const Input = styled.input`
  appearance: textfield;
  outline: 0;
  margin: 0 0 0 0.5rem;
  padding: 5px;
  border: 2px solid #383838;
  background: transparent;
  font-size: 1rem;
  width: 45px;
  text-align: center;
  font-family: sans-serif;
  & {
  }
`;

const OrderQuantity = ({ product }) => {
  const { handleQuantityChange } = useContext(OrderContext);

  const handleChange = (addedProduct, type) => {
    const { qty, name, id } = addedProduct;
    handleQuantityChange(qty, name, id, type);
  };
  return (
    <InputWrapper>
      <label htmlFor={product.name} name={product.name}>
        <QuantityButton onClick={e => handleChange(product, 'increment')}>
          &#9650;
        </QuantityButton>
        <QuantityButton onClick={e => handleChange(product, 'decrement')}>
          &#9660;
        </QuantityButton>
        <Input
          type="number"
          min={0}
          value={product.qty}
          name={product.name}
          onChange={() => false}
        />
      </label>
    </InputWrapper>
  );
};

export default OrderQuantity;
