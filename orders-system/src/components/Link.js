import React from 'react';

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

export default Link;
