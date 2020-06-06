import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Content from 'templates/pages/Content';

/**
 * Base Pages
 * This component has the base stucture to composite
 * pages in the project
 */
const Default = ({ children }) => (
  <>
    <Header />
    { children }
  </>
);

Default.propTypes = {
  children: PropTypes.instanceOf(Content).isRequired,
};

export default Default;
