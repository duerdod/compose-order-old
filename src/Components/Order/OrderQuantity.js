import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { OrderContext } from './Order';
import { Button } from '../ui';
import { IoIosPlay } from 'react-icons/io';

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
  box-sizing: border-box;
  line-height: 0.4;

  ${p =>
    p.up &&
    `
  svg {
      transform: rotate(90deg);
    }
  `}
  ${p =>
    p.down &&
    `
  svg {
      transform: rotate(-90deg);
    }
  `}
  &:hover {
    background: #383838;
    color: #fffbf5;

    svg {
      fill: ${({ theme }) => theme.white};
    }
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
  box-sizing: border-box;
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
      <label htmlFor={product.name} style={{ display: 'flex' }}>
        <QuantityButton
          down
          onClick={e => handleQuantityChange(product, 'increment')}
        >
          <IoIosPlay />
        </QuantityButton>
        <QuantityButton
          up
          disabled={product.qty <= 0}
          onClick={e => handleQuantityChange(product, 'decrement')}
        >
          <IoIosPlay />
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
