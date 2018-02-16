import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Default from '../modules/Default';
import NotFound from '../modules/NotFound';

import Main from '../layouts/Main';

import './style.scss';

const App = () => (
  <div className="app">
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Router>
  </div>
);

export default App;
