import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

export const Container = styled.main`
  padding-top: 72px;
`;

export const WrapperTitle = styled(Grid).attrs({
  container: true,
  justify: 'center',
})`
  padding: 20px;
`;

export const Title = styled(Typography).attrs({
  variant: 'h4',
})``;

export const WrapperContent = styled(Grid).attrs({
  container: true,
  justify: 'center',
})`
  padding: 20px;
`;
