import React, {
  lazy,
  useEffect,
  useState,
  Suspense,
} from 'react';
import PropType from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import useAuth from 'hooks/Auth';
import firebase from 'services/Firebase';
import { HOME, LOGIN } from 'routes/index';
import { LinearProgress } from '@material-ui/core';


const Login = lazy(() => import('pages/Login'));
const MainPage = lazy(() => import('pages/Main'));

function App({ location }) {
  const { userInfo, setUserInfo } = useAuth();
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      if (response == null) {
        return setDidCheckUserIn(true);
      }

      const user = response.providerData[0];

      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0],
        },
      });
      return setDidCheckUserIn(true);
    });
  }, [setUserInfo]);

  if (!didCheckUserIn) {
    return <LinearProgress />;
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />;
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
}

App.propTypes = {
  location: PropType.shape({
    pathname: PropType.string.isRequired,
  }).isRequired,
};

export default App;
