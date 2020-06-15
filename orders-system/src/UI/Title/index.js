import React from 'react';
import PropType from 'prop-types';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center',
})``;

export const H3 = ({ children }) => <Title variant="h3"> { children } </Title>;
export const H4 = ({ children }) => <Title variant="h4"> { children } </Title>;

H3.propTypes = {
  children: PropType.element.isRequired,
};

H4.propTypes = {
  children: PropType.element.isRequired,
};

export default Title;
