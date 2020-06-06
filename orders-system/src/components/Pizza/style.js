import styled from 'styled-components';

import { Typography } from '@material-ui/core';

/**
 * Drawing Pizza
 */
export const Pizza = styled.div`
  border: 1px solid #ccc;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    width: 160px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 160px;
  }
`;

/**
 * Label pizza size
 */
export const Label = styled(Typography).attrs({
  variant: 'h5',
})`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`;
