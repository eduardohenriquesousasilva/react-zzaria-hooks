import React, { createContext, useCallback } from 'react';
import Proptypes from 'prop-types';
import * as Firebase from 'services/Firebase';

export const AuthContext = createContext();

/**
 * Auth Component
 *
 * This component has the authentication method as
 * login and logout, it is responsible too to manager
 * logged user and share this state to other components
 * that are inside his scope
 */
const Auth = ({ children }) => {
  const [userInfo, setUserInfo] = Firebase.useFirebase(null);
  const { isLogged, user } = userInfo;

  /**
   * Login method applyng scope Login page
   */
  const login = useCallback(() => {
    Firebase.login();
  }, []);

  /**
   * Logout method applyng scope Login page
   */
  const logout = useCallback(() => {
    Firebase.logout()
      .then(() => {
        setUserInfo(Firebase.formatUserInfo());
      });
  }, [setUserInfo]);

  /**
   * Variables and methods that will provide
   * by Auth
   */
  const providers = {
    isLogged,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={providers}>
      {children}
    </AuthContext.Provider>
  );
};

Auth.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Auth;
