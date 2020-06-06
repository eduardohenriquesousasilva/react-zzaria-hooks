import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

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
  children: PropTypes.element.isRequired,
};

export default Default;
