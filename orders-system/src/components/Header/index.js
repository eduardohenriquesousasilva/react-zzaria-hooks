import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography,
} from '@material-ui/core';
import useAuth from 'hooks/Auth';
import { HOME } from 'routes/index';
import { AccountCircle } from '@material-ui/icons';
import { ReactComponent as MainLogo } from 'assets/images/logo.svg';

const Header = () => {
  const { userInfo, logout } = useAuth();
  const [anchorElement, setAnchorElement] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <LinkLogo to={HOME}>
            <Logo />
          </LinkLogo>
        </LogoContainer>

        <Typography color="inherit">
          Olá {userInfo.user.firstName} =)
        </Typography>

        <IconButton color="inherit" onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={Boolean(anchorElement)}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  width: 100%;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
`;

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`;

const LinkLogo = styled(Link)`
  display: inline-block;
`;

export default Header;
