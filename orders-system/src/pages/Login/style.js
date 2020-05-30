import styled from 'styled-components';

import {
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';

// Importing logo as ReactComponent
// (this way the tag SVG will be load and put in HTML)
import { ReactComponent as ReactzzariaLogo } from 'assets/images/logo.svg';

export const PageContainer = styled.div`
  padding: 40px;
`;

export const PageGrid = styled(Grid).attrs({
  container: true,
  justify: 'center',
  spacing: 10,
})``;

export const LogoGrid = styled(Grid).attrs({
  item: true,
  xs: 12,
})``;

export const Logo = styled(ReactzzariaLogo)`
  width: 100%;
`;

export const AuthButtonsGrid = styled(Grid).attrs({
  container: true,
  justify: 'center',
  item: true,
  xs: 12,
})``;

export const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  /*
    Using && the styled component added two times the class
     name, this way is easier to override css rules
  */
 && {
    font-size: 20px;
    padding: 15px;
    text-transform: none;
    max-width: 400px;
  }
`;

export default PageContainer;
