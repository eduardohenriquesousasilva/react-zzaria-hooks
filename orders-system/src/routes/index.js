import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from 'routes/routes';

/**
 * Componente com as páginas disponíveis na aplicação
 */
const Pages = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
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
