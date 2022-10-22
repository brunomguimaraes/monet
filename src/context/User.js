import React, { createContext } from 'react';

const Context = createContext({});
const { Provider } = Context;

const initialUserContextState = {
  metadata: {},
  user: {}
}

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(() => false);
  const [state, setState] = React.useState(() => initialUserContextState);

  const _login = () => {
    setLoading(true);
  }

  const context = React.useMemo(
    () => ({
      loading,
      metadata: state.metadata,
      user: state.user,
      ready: !loading,
      login: _login,
    }),
    [loading, metadata, user],
  );


  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default Context;
