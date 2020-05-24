import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';

import Pages from 'routes/index';

/**
 * Base da aplicação
 */
const App = () => (
  <>
    <CssBaseline />
    <Container>
      <Pages />
    </Container>
  </>
);

export default App;
