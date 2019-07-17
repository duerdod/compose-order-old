import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ModalOpener from './Modal/ModalOpener';
import { Button } from './ui';

const NavWapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > * {
    display: inline-block;
  }
`;

const Home = styled(Button)`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const Login = styled(Button)`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const Nav = () => {
  return (
    <NavWapper>
      <Link to="/">
        <Home>Order</Home>
      </Link>
      <Link to="/login">
        <Login>Login</Login>
      </Link>
      <ModalOpener />
    </NavWapper>
  );
};

export default Nav;
