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
  padding: 5px;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
`;

const Input = styled.input`
  /* appearance: textfield; */
  outline: 0;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid #383838;
  background: transparent;
  font-size: 1rem;
  width: 45px;
  text-align: center;
  font-family: sans-serif;
  & {
  }
`;

const OrderQuantity = ({ name }) => {
  const { handleQuantityChange } = useContext(OrderContext);

  const handleChange = e => {
    const { name, value } = e.target;
    handleQuantityChange(name, value);
  };

  const handleIncrement = e => {
    console.log(e.target);
  };

  return (
    <InputWrapper>
      <label htmlFor={name} name={name}>
        <QuantityButton onClick={e => handleChange(e)}>&#9650;</QuantityButton>
        <QuantityButton onClick={e => handleChange(e)}>&#9660;</QuantityButton>
        <Input
          type="number"
          min={0}
          defaultValue={0}
          name={name}
          onChange={e => handleChange(e)}
        />
      </label>
    </InputWrapper>
  );
};

export default OrderQuantity;
