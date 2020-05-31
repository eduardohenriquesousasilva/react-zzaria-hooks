import styled from 'styled-components';
import { Toolbar, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { ReactComponent as ReactzzariaLogo } from 'assets/images/logo.svg';

export const HeaderToolbar = styled(Toolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

export const UserButton = styled(IconButton).attrs({
  color: 'inherit',
})``;

export const UserIcon = styled(AccountCircle)`
  font-size: 2em;
`;

export const LogContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(ReactzzariaLogo)`
  width: 40%;
  height: auto;

  & path {
    fill: #fff
  }

  & line {
    stroke: #fff
  }
`;
