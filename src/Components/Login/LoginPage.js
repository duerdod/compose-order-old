import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from '@emotion/styled';
import Content from '../Page/Content';
import { Button } from '../ui';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION {
    token
  }
`;

const PageTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-family: ${({ theme }) => theme.sansSerif};
  font-weight: 400;
  text-transform: lowercase;
`;

const InputWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  height: 2rem;
  padding: 0.5rem 0.5rem;
  display: block;
  width: 100%;
  margin: 0.2rem 0;
  font-family: ${({ theme }) => theme.sansSerif};
  background: ${({ theme }) => theme.white};
  border-radius: 2px;
`;

const LoginButton = styled(Button)`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.black};
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  &:hover {
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`;

const LoginPage = props => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(user);
    console.log(password);
    // props.history.push('/addproduct');
  };

  return (
    <Content>
      <PageTitle>Login to add korvs</PageTitle>
      <InputWrapper>
        <form
          action="post"
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="user"
          />
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
          <LoginButton>Login</LoginButton>
        </form>
      </InputWrapper>
    </Content>
  );
};

export default LoginPage;
