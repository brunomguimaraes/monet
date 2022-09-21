import * as Styled from "./index.styles";

const Login = () => {
  return (
    <Styled.Form>
      <Styled.Header>Log In</Styled.Header>

      <Styled.Label>Email</Styled.Label>
      <Styled.Input type="text" placeholder="Enter your email" />
      <Styled.Label>Password</Styled.Label>
      <Styled.Input type="password" placeholder="Enter you password" />

      <Styled.Button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Log In
      </Styled.Button>
    </Styled.Form>
  );
};

export default Login;
