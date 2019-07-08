import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from '../OrderTable';
import { Button } from '../ui';

const InputWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
  position: relative;
`;

const QuantityButton = styled(Button)`
  margin: 0 1px;
  padding: 5px 7px;
  font-size: 1rem;
  border: 2px solid #383838;
  transition: all 0.2s ease;
  &:hover {
    background: #383838;
    color: #fffbf5;
  }
`;

const Input = styled.input`
  appearance: textfield;
  outline: 0;
  margin: 0 0 0 0.5rem;
  padding: 5px 5px;
  border: 2px solid #383838;
  background: transparent;
  font-size: 1rem;
  width: 45px;
  text-align: center;
  font-family: sans-serif;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const OrderQuantity = ({ product }) => {
  const { handleQuantityChange, handleNativeChange } = useContext(OrderContext);

  return (
    <InputWrapper>
      <label htmlFor={product.name}>
        <QuantityButton
          onClick={e => handleQuantityChange(product, 'increment')}
        >
          &#9650;
        </QuantityButton>
        <QuantityButton
          disabled={product.qty <= 0}
          onClick={e => handleQuantityChange(product, 'decrement')}
        >
          &#9660;
        </QuantityButton>
        <Input
          type="number"
          min={0}
          value={parseInt(product.qty) || 0}
          name={product.name}
          onChange={e => handleNativeChange(product, e.target.value)}
        />
      </label>
    </InputWrapper>
  );
};

export default OrderQuantity;
