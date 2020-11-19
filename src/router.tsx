import React from 'react';

import {
  Switch,
  Route,
  withRouter,
  Router,
  RouteComponentProps
} from 'react-router-dom';
import * as History from 'history';

import { SnackbarProvider } from '@nexys/material-components';

import App from './app';

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || ''
});

const MyRouter = (props: RouteComponentProps) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Switch>
        <Route path="/" component={App} props={props} />
      </Switch>
    </SnackbarProvider>
  );
};

const R = withRouter(MyRouter);

export default () => (
  <Router history={history}>
    <R />
  </Router>
);
