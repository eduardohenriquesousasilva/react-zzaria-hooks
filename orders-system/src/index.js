import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Root from './root';

import ErrorBoundary from './error';

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <Root hasError={hasError} />
    )}
  </ErrorBoundary>,
  document.getElementById('root'),
);

serviceWorker.unregister();
