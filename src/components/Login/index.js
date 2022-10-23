import React, { useState, useContext } from 'react';

import UserContext from '../../context/User';

import * as Styled from "./index.styles";

const initialFormState = {
  email: '',
  password: ''
}

const Login = () => {
  const ctx = useContext(UserContext);

  const [formState, setFormState] = useState(() => initialFormState);

  return (
    <Styled.Form>
      <Styled.Header>Log In</Styled.Header>

      <Styled.Label>Email</Styled.Label>
      <Styled.Input
        type="text"
        placeholder="Enter your email"
        onChange={(ev) => setFormState({ ...formState, email: ev.target.value })}
      />
      <Styled.Label>Password</Styled.Label>
      <Styled.Input
        type="password"
        placeholder="Enter you password"
        onChange={(ev) => setFormState({ ...formState, password: ev.target.value })}
      />

      <Styled.Button
        onClick={(e) => {
          e.preventDefault();
          ctx.login(formState)
        }}
      >
        Log In
      </Styled.Button>
    </Styled.Form>
  );
};

export default Login;
