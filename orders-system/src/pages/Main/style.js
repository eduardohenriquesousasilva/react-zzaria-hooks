import styled from 'styled-components';

import { Grid, Typography } from '@material-ui/core';

/**
 * Pizzas content container
 */
export const ContainerPizzas = styled(Grid).attrs({
  container: true,
  direction: 'column',
  alignItems: 'center',
})``;

/**
 * Title content page
 */
export const TitlePizzas = styled(Typography).attrs({
  variant: 'h5',
  gutterBottom: true,
  align: 'center',
})``;

/**
 * Container to list pizza sizes available
 */
export const ContainerPizzaSizes = styled(Grid).attrs({
  container: true,
  justify: 'center',
  spacing: 2,
})``;

/**
 * Grid item to describe pizza size
 */
export const GridPizzaSize = styled(Grid).attrs({
  item: true,
  xs: true,
})``;
