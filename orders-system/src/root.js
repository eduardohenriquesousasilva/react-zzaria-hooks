import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'App';
import AuthProvider from 'contexts/Auth';
import { ThemeProvider } from 'styled-components';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({});

console.log('theme: ', theme);

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default hot(module)(Root);
