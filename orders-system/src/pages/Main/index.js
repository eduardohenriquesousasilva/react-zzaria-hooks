import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import { withStyles } from '@material-ui/core';
import { HOME, CHOOSE_PIZZA_FLAVORS } from 'routes/index';


const ChoosePizzaSize = React.lazy(() => import('pages/ChoosePizzaSize'));
const ChoosePizzaFlavors = React.lazy(() => import('pages/ChoosePizzaFlavors'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback="Loading...">
      <Switch>
        <Route
          path={HOME}
          exact
          component={ChoosePizzaSize}
        />
        <Route
          path={CHOOSE_PIZZA_FLAVORS}
          component={ChoosePizzaFlavors}
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
