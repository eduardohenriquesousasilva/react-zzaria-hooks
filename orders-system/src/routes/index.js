import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import Routes from 'routes/routes';

/**
 * Route page component with all routes available
 * in the application
 */
const Pages = () => (
  <BrowserRouter>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        { Routes.map(({
          path,
          component,
          label,
          exact,
        }) => (
          <Route
            key={`route-${label.toLowerCase()}`}
            path={path}
            component={lazy(() => import(`pages/${component}`))}
            exact={exact}
          />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Pages;
