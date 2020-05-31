import React, { useContext } from 'react';
import { CssBaseline } from '@material-ui/core';

import Pages from 'routes/index';
import { AuthContext } from 'stories/Auth';

/**
 * Base component application
 */
const App = () => {
  const { isLogged, user } = useContext(AuthContext);
  console.log('isLogged: ', isLogged);
  console.log('user: ', user);


  return (
    <>
      <CssBaseline />
      <Pages />
    </>
  );
};

export default App;
