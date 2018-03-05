import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PageHeading from '../modules/PageHeading';
import Default from '../modules/Default';
import NotFound from '../modules/NotFound';

import Header from '../layouts/Header';
import Main from '../layouts/Main';

import './style.scss';

const App = () => (
  <div className="app">
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={PageHeading} />
        </Switch>
      </Header>
    </Router>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Router>
  </div>
);

export default App;
