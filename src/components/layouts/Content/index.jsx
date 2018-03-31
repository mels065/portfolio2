import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultContainer from '../../modules/DefaultContainer';
import NotFound from '../../modules/NotFound';

import './style.scss';

const Content = () => (
  <main className="content">
    <Router>
      <Switch>
        <Route exact path="/" component={DefaultContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </main>
);

export default Content;
