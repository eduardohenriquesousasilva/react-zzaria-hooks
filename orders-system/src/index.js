import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Auth from './stories/Auth';
import * as serviceWorker from './serviceWorker';

// The application is rendered here, the application
// needs to retrieve authenticated user, so here the
// component app is involved in the Auth that contains
// the context about the logged user

// This way the logged user will be accessible all
// component inside app Auth component
ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Auth>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
