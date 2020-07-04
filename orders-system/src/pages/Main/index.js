import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'routes/index';
import Header from 'components/Header';
import { withStyles } from '@material-ui/core';

const ChoosePizzaSize = React.lazy(() => import('pages/ChoosePizzaSize'));
const ChoosePizzaFlavors = React.lazy(() => import('pages/ChoosePizzaFlavors'));
const ChoosePizzaQuantity = React.lazy(() => import('pages/ChoosePizzaQuantity'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback="Loading...">
      <Switch>
        <Route
          path={routes.HOME}
          exact
          component={ChoosePizzaSize}
        />
        <Route
          path={routes.CHOOSE_PIZZA_FLAVORS}
          component={ChoosePizzaFlavors}
        />
        <Route
          path={routes.CHOOSE_PIZZA_QUANTITY}
          component={ChoosePizzaQuantity}
        />
      </Switch>
    </Suspense>
  </>
);

const style = (theme) => ({
  main: theme.mixins.toolbar,
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main;
