import React from 'react';
import PropType from 'prop-types';

import { Grid } from '@material-ui/core';

const HeaderContent = ({ children }) => (
  <Grid container direction="column" alignItems="center">
    {children}
  </Grid>
);

HeaderContent.propTypes = {
  children: PropType.node.isRequired,
};

export default HeaderContent;
