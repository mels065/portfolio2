import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PageHeading from '../modules/PageHeading';
import DefaultContainer from '../modules/DefaultContainer';
import NotFound from '../modules/NotFound';
import Copyright from '../modules/Copyright';

import Header from '../layouts/Header';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';

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
      <Content>
        <Switch>
          <Route exact path="/" component={DefaultContainer} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </Router>
    <Router>
      <Footer>
        <Switch>
          <Route exact path="/" component={Copyright} />
        </Switch>
      </Footer>
    </Router>
  </div>
);

export default App;
