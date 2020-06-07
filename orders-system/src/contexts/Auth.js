import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
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
  const [userInfo, setUserInfo] = useState(Firebase.formatUserInfo());
  const { checkedLogged, isLogged, user } = userInfo;

  /**
   * Retrive logged user
   */
  useEffect(() => {
    Firebase.retrieveUser(setUserInfo);
  }, []);

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
    login,
    logout,
    user,
    isLogged,
    checkedLogged,
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
