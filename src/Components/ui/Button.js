import styled from '@emotion/styled';

export const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0 1px;
  padding: 3px 5px;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.sansSerif};
`;

export default Button;
