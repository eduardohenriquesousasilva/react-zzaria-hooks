import React, { createContext, useCallback, useState } from 'react';
import PropType from 'prop-types';

import firebase from 'services/Firebase';

export const AuthContext = createContext();

function Auth({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });

  /**
   * Função para o login do usuário
   */
  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  /**
   * Função para o logout do usuário
   */
  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userInfo,
      setUserInfo,
    }}
    >
      { children }
    </AuthContext.Provider>
  );
}

Auth.propTypes = {
  children: PropType.node.isRequired,
};

export default Auth;
