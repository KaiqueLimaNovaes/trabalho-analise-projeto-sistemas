import React, { createContext } from 'react';

import IsAuthenticated from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, permission, handleLogin
  } = IsAuthenticated();

  return (
    <Context.Provider value={{ authenticated, permission, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
