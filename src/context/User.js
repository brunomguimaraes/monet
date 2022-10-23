import React, { createContext } from 'react';
import api from '../api/athenaApiClient';
import localForage from '../services/localForage'

const Context = createContext({});
const { Provider } = Context;

const initialUserContextState = {
  metadata: {},
  user: {}
}

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(() => false);
  const [state, setState] = React.useState(() => initialUserContextState);

  const _saveAuthToken = (token) => {
    localForage.set('token', token)
  }

  const _login = async ({ email, password }) => {
    setLoading(true);
    await api.auth.login(email, password).then((res) => {
      _saveAuthToken(res)
    }).catch((err) => console.log('=> Error:', err))
  }

  const context = React.useMemo(
    () => ({
      loading,
      metadata: state.metadata,
      user: state.user,
      ready: !loading,
      login: _login,
    }),
    [loading, state],
  );


  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};

export default Context;
