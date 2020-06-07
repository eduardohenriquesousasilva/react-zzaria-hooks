import styled from 'styled-components';

import { Paper, Typography, Divider as MaterialDivider } from '@material-ui/core';

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
