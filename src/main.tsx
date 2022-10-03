import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from './router';
import theme from './theme';

import { ThemeProvider } from '@nexys/material-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>,
  document.getElementById('root')
);
