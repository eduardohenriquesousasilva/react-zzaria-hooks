import React, { useState, useRef, useContext } from 'react';
import {
  AppBar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { AuthContext } from 'stories/Auth';

import * as S from './style';

/**
 * Component Header
 */
const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const anchorButtonUser = useRef(null);

  /**
   * User data from context
   */
  const { user, logout } = useContext(AuthContext);

  /**
   * Handle the show/hide menu
   */
  const handleOpenMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  /**
   * Handle dispatched on close menu
   */
  const handleClose = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <AppBar>
      <S.HeaderToolbar>
        <S.LogContainer>
          <S.Logo />
        </S.LogContainer>

        <Typography>Olá {user.name.split(' ')[0]} =)</Typography>
        <S.UserButton ref={anchorButtonUser} onClick={handleOpenMenu}>
          <S.UserIcon />
        </S.UserButton>

        <Menu
          open={showUserMenu}
          onClose={handleClose}
          anchorEl={anchorButtonUser.current}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </S.HeaderToolbar>
    </AppBar>
  );
};

export default Header;
