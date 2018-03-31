import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageHeading from '../../modules/PageHeading';

import './style.scss';

const Header = () => (
  <header className="header">
    <Router>
      <Switch>
        <Route exact path="/" component={PageHeading} />
      </Switch>
    </Router>
  </header>
);

export default Header;
