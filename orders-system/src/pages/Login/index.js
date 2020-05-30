import React from 'react';

import * as S from './style';

/**
 * Login Page
 *
 * On this page, I'm testing put all interface variants in
 * the style file, it includes the Material's UI attributes.
 * This way the component will be more clear with only
 * specific attributes
 */
const Login = () => (
  <S.PageContainer>
    <S.PageGrid>
      <S.LogoGrid>
        <S.Logo />
      </S.LogoGrid>
      <S.GitHubButtonGrid>
        <S.GitHubButton>
          Entrar com GitHub
        </S.GitHubButton>
      </S.GitHubButtonGrid>
    </S.PageGrid>
  </S.PageContainer>
);

export default Login;
