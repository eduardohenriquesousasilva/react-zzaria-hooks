import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import { withStyles } from '@material-ui/core';
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes/index';


const ChoosePizzaSize = React.lazy(() => import('pages/ChoosePizzaSize'));
const ChoosePizzaFlavors = React.lazy(() => import('pages/ChoosePizzaFlavors'));

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback="Loading...">
        <Switch>
          <Route
            path={HOME}
            exact
            component={ChoosePizzaSize}
          />
          <Route
            path={CHOOSE_PIZZA_FLAVOURS}
            component={ChoosePizzaFlavors}
          />
        </Switch>
      </Suspense>
    </Content>
  </>
);

const Content = styled.main`
  padding: 20px;
`;

const style = (theme) => ({
  main: theme.mixins.toolbar,
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main;
