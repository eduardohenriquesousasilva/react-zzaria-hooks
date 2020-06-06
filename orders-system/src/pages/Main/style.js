import styled from 'styled-components';

import {
  Grid,
  Typography,
  Paper, Divider as MaterialDivider,
} from '@material-ui/core';

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

/**
 * Paper to describe details about pizza size
 */
export const PaperSizeDetails = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;
`;

/**
 * Text size pizza name
 */
export const SizeName = styled(Typography).attrs({
  variant: 'h5',
})``;

/**
 * Text about the size slaces
 */
export const SizeSlaces = styled(Typography)``;

/**
 * Divider details about pizza size
 */
export const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`;
