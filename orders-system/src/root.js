import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'App';
import AuthProvider from 'contexts/Auth';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Globalstyle />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const Globalstyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
      flex-grow: 1;
    }
  }
`;

export default hot(module)(Root);
