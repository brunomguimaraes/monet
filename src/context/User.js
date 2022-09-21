import React, { createContext } from 'react';

const Context = createContext({});
const { Provider } = Context;

export const UserProvider = ({ children }) => {
  return (
    <Provider value={{ state }}>
      {children}
    </Provider>
  );
};

export default Context;
