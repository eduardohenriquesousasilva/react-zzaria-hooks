import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ callback }) => (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    onClick={callback}
  >
    Learn React (get products)
  </a>
);

Link.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Link;
