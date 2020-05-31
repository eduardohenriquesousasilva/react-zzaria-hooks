import React, { useContext } from 'react';
import { AuthContext } from 'stories/Auth';
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
  const { login } = useContext(AuthContext);

  return (
    <S.PageContainer>
      <S.PageGrid>
        <S.LogoGrid>
          <S.Logo />
        </S.LogoGrid>
        <S.AuthButtonsGrid>
          <S.Button onClick={login}>
            Entrar com GitHub
          </S.Button>
        </S.AuthButtonsGrid>
      </S.PageGrid>
    </S.PageContainer>
  );
};

export default Login;
