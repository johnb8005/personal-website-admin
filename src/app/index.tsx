import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

import Layout from './layout';
import Dashboard from './dashboard';

import * as Links from 'common/link';

function App(props: RouteComponentProps) {
  return (
    <Layout>
      <Switch>
        <Route path={Links.App.dashboard} component={Dashboard} props={props} />

        <Route
          path={'/'}
          component={() => <Redirect to={Links.App.dashboard} />}
        />
      </Switch>
    </Layout>
  );
}

export default App;
