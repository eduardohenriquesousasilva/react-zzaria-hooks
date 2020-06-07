import PropType from 'prop-types';
import React, { useContext } from 'react';
import { hot } from 'react-hot-loader/root';
import { Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import Pages from 'routes/index';
import { AuthContext } from 'contexts/Auth';

/**
 * Base component application
 */
const App = ({ location }) => {
  const { checkedLogged, isLogged } = useContext(AuthContext);

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

export default (process.env.NODE_ENV === 'development')
  ? hot(App)
  : App;
