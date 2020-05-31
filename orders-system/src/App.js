import PropType from 'prop-types';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CssBaseline, LinearProgress } from '@material-ui/core';

import Pages from 'routes/index';
import { AuthContext } from 'stories/Auth';

/**
 * Base component application
 */
const App = ({ location }) => {
  const { checkedLogged, isLogged } = useContext(AuthContext);
  // TODO Remove this variable when component
  // logout was implemented
  const { logout } = useContext(AuthContext);
  window.logout = logout;

  // Return loading component while verify
  // if user is logged
  if (!checkedLogged) {
    return <LinearProgress />;
  }

  // Redirect user to man page when access login
  // page but he was logged
  if (isLogged && location.pathname === '/login') {
    return <Redirect to="/" />;
  }

  // Redirect user to login page when he is not
  // logged and access authenticated pages
  if (!isLogged && location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <CssBaseline />
      <Pages />
    </>
  );
};

App.propTypes = {
  location: PropType.shape({
    hash: PropType.string,
    pathname: PropType.string,
    search: PropType.string,
  }).isRequired,
};

export default App;
