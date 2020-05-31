import React, { useCallback } from 'react';
import * as Firebase from 'services/Firebase';

import * as S from './style';

/**
 * Login Page
 *
 * On this page, I'm testing put all interface variants in
 * the style file, it includes the Material's UI attributes.
 * This way the component will be more clear with only
 * specific attributes
 */
const Login = () => {
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

  return (
    <S.PageContainer>
      <S.PageGrid>
        <S.LogoGrid>
          <S.Logo />
        </S.LogoGrid>
        <S.AuthButtonsGrid>
          { isLogged && (
            <>
              <img src={user.picture} width="200px" alt={user.email} />
              <ul>
                <li><strong>Uid:</strong> { user.uid} </li>
                <li><strong>Name:</strong> { user.name} </li>
                <li><strong>Email:</strong> { user.email} </li>
                <li><strong>Phone:</strong> { user.phone} </li>
                <li><strong>Provider:</strong> { user.provider} </li>
              </ul>
              <S.Button onClick={logout}>
                Sair
              </S.Button>
            </>
          )}
          { !isLogged && (
            <S.Button onClick={login}>
              Entrar com GitHub
            </S.Button>
          )}
        </S.AuthButtonsGrid>
      </S.PageGrid>
    </S.PageContainer>
  );
};

export default Login;
