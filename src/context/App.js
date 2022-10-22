import React from 'react';

import ComposeChildren from '../components/helpers/ComposeChildren';

// Context Providers
import { UserProvider } from './User';

/*
 * Composes all app wide context providers that
 * will hold important app shared state.
 *
 * The order you pass the providers in the "components" array matter.
 *
 * The providers on the bottom can access values
 * from the ones on the top but not the opposite.
 *
 */
const AppContextProviders = ({ children }) => {
  return (
    <ComposeChildren
      components={[
        UserProvider,
      ]}
    >
      {children}
    </ComposeChildren>
  );
};

export default AppContextProviders;
