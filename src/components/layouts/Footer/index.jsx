import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Copyright from '../../modules/Copyright';

const Footer = () => (
  <footer className="footer">
    <Router>
      <Switch>
        <Route exact path="/" component={Copyright} />
      </Switch>
    </Router>
  </footer>
);

export default Footer;
